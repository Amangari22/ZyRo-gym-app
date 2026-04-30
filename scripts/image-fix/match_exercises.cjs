const fs = require('fs');

async function main() {
    try {
        // Load the exercise database
        console.log('Reading exercises_db.json...');
        const dbText = fs.readFileSync('exercises_db.json', 'utf8');
        let db;
        try {
            db = JSON.parse(dbText);
        } catch (e) {
            console.error('Failed to parse exercises_db.json. It might be truncated.');
            console.error('Error:', e.message);
            // Try to salvage if it's just missing the closing bracket
            if (e.message.includes('Unexpected end of JSON input')) {
                console.log('Attempting to fix truncated JSON...');
                const fixedText = dbText.trim().replace(/,$/, '') + ']'; // This is a rough guess
                try {
                    db = JSON.parse(fixedText);
                    console.log('Fixed JSON successfully.');
                } catch (e2) {
                    console.error('Could not fix JSON:', e2.message);
                    process.exit(1);
                }
            } else {
                process.exit(1);
            }
        }

        const dbExercises = new Map();

        // Map DB names and IDs for lookup
        db.forEach(ex => {
            if (ex.name) dbExercises.set(ex.name.toLowerCase(), ex);
            if (ex.id) dbExercises.set(ex.id.toLowerCase(), ex);
        });

        // Load plans.js
        console.log('Reading plans.js...');
        const plansContent = fs.readFileSync('src/data/plans.js', 'utf8');

        // Extract exercise names using regex
        const nameRegex = /name:\s*'([^']+)'/g;
        const planExercises = new Set();
        let match;
        while ((match = nameRegex.exec(plansContent)) !== null) {
            planExercises.add(match[1]);
        }

        console.log(`Found ${planExercises.size} unique exercises in plans.js`);

        // Try to match
        let matches = 0;
        let missing = [];
        const mapping = {};

        // Helper to normalize strings
        const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
        const tokens = (s) => new Set(normalize(s).split(/\s+/));

        // Jaccard similarity
        const jaccard = (a, b) => {
            const t1 = tokens(a);
            const t2 = tokens(b);
            const intersection = new Set([...t1].filter(x => t2.has(x)));
            const union = new Set([...t1, ...t2]);
            return intersection.size / union.size;
        };

        // DB List for iteration
        const dbList = Array.from(dbExercises.values());

        const manualOverrides = {
            "Squats": "Barbell Full Squat",
            "Leg Press": "Leg Press",
            "Leg Extensions": "Leg Extensions",
            "Hamstring Curls": "Lying Leg Curls",
            "Calf Raises": "Standing Calf Raises",
            "Lateral Raises": "Side Lateral Raise",
            "Front Raises": "Front Dumbbell Raise",
            "Arnold Press": "Arnold Dumbbell Press",
            "Overhead Press": "Standing Military Press",
            "Skull Crushers": "Lying Triceps Press",
            "Tricep Pushdowns": "Triceps Pushdown",
            "Face Pulls": "Face Pull",
            "Cable Flyes": "Cable Crossover",
            "Weighted Dips": "Weighted Bench Dip",
            "Incline Dumbbell Press": "Incline Dumbbell Press",
            "Dumbbell Curls": "Dumbbell Curl",
            "Hammer Curls": "Hammer Curls",
            "Pull-Ups": "Pullups",
            "Chin-Ups": "Chin-Up",
            "Hanging Leg Raises": "Hanging Leg Raise",
            "Russian Twists": "Russian Twist",
            "Plank": "Plank",
            "Burpees": "Burpees",
            "Mountain Climbers": "Mountain Climbers",
            "Jump Squats": "Squat Jump",
            "Box Jumps": "Box Jump",
            "Battle Ropes": "Battling Ropes",
            "Glute Bridges": "Glute Bridge",
            "Walking Lunges": "Dumbbell Lunges",
            "Goblet Squats": "Goblet Squat",
            // Specific fixes for missing items
            "Upright Rows": "Upright Barbell Row",
            "T-Bar Rows": "T-Bar Row",
            "Seated Rows": "Seated Cable Rows",
            "Tricep Pushdowns (Rope)": "Triceps Pushdown - Rope Attachment",
            "Heavy Lateral Raises": "Side Lateral Raise",
            "Wide Grip Lat Pulldowns": "Wide-Grip Lat Pulldown",
            "Pec Deck Flyes": "Machine Fly",
            "V-Ups": "Jackknife Sit-Up", // Closest
            "Step-Ups": "Step-up with Knee Raise",
            "Straight Arm Pulldowns": "Cable Straight Arm Pulldown" // assumption
        };

        planExercises.forEach(name => {
            // Skip probable diet items (if they have keys like 'kcal' or 'protein' in plans.js we can't see here, but names give hints)
            if (name.includes('Chicken') || name.includes('Oatmeal') || name.includes('Yogurt') || name.includes('Steak') || name.includes('Salmon') || name.includes('Beef') || name.includes('Egg')) {
                return;
            }

            const nName = normalize(name);
            let bestMatch = null;
            let bestScore = 0;

            // 0. Manual Overrides
            if (manualOverrides[name]) {
                const overrideName = manualOverrides[name].toLowerCase();
                if (dbExercises.has(overrideName)) {
                    bestMatch = dbExercises.get(overrideName);
                    bestScore = 2.0; // Force accept
                } else {
                    // Try to find the override name via fuzzy if exact fails (e.g. slight span diff)
                    for (const dbEx of dbList) {
                        if (dbEx.name.toLowerCase() === overrideName) {
                            bestMatch = dbEx;
                            bestScore = 2.0;
                            break;
                        }
                    }
                }
            }

            // 1. Exact Match (already tried but good to keep)
            if (!bestMatch && dbExercises.has(name.toLowerCase())) {
                bestMatch = dbExercises.get(name.toLowerCase());
                bestScore = 1.0;
            } else {
                // 2. Fuzzy Search
                if (!bestMatch) {
                    for (const dbEx of dbList) {
                        const score = jaccard(name, dbEx.name);
                        if (score > bestScore) {
                            bestScore = score;
                            bestMatch = dbEx;
                        }
                    }
                }
            }

            // Threshold for acceptance
            if (bestScore > 0.3 && bestMatch) {
                matches++;
                if (bestMatch.images && bestMatch.images.length > 0) {
                    mapping[name] = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${bestMatch.images[0]}`;
                } else {
                    mapping[name] = null; // No image, but matched exercise
                }
                // console.log(`Matched "${name}" -> "${bestMatch.name}" (Score: ${bestScore.toFixed(2)})`);
            } else {
                missing.push(name);
                // console.log(`No match for "${name}" (Best: "${bestMatch ? bestMatch.name : 'none'}" Score: ${bestScore.toFixed(2)})`);
            }
        });

        console.log(`Matched: ${matches} / ${planExercises.size}`);
        console.log('Missing:', missing);

        // Generate a JSON map for use
        fs.writeFileSync('exercise_map.json', JSON.stringify(mapping, null, 2));
        console.log('Mapping saved to exercise_map.json');

    } catch (error) {
        console.error('Fatal error:', error);
    }
}

main();
