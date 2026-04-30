export const calculatePlan = (userData) => {
    try {
        const age = parseFloat(userData.age) || 25;
        const height = parseFloat(userData.height) || 175;
        const weight = parseFloat(userData.weight) || 70;
        const gender = userData.gender || 'male';
        const activity = userData.activity || 'moderate';
        const goal = userData.goal || 'maintain';
        const experience = userData.experience || 'beginner';

        // 1. Calculate BMR (Mifflin-St Jeor Equation)
        let bmr = 10 * weight + 6.25 * height - 5 * age;
        bmr += gender === 'male' ? 5 : -161;

        // 2. TDEE Multipliers
        const activityMultipliers = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725
        };
        let tdee = bmr * (activityMultipliers[activity] || 1.2);

        // 3. Goal Adjustment
        let adjustment = 0;
        if (goal === 'loss') adjustment = -500;
        else if (goal === 'gain') adjustment = 400;
        else if (goal === 'build') adjustment = 250;
        else if (goal === 'lean') adjustment = -200;

        const dailyCalories = Math.round(tdee + adjustment);

        // 4. Protein Target (1.6 - 2.2 g/kg)
        const proteinMultiplier = goal === 'gain' || goal === 'build' ? 2.0 : 1.8;
        const proteinTarget = Math.round(weight * proteinMultiplier);
        const waterTarget = ((weight * 40) / 1000).toFixed(1); // 40ml per kg

        // 5. Generate Weekly Split
        const reps = goal === 'loss' ? '12-15' : goal === 'gain' ? '8-12' : '10-12';
        const weeklySplit = [
            { day: 'Monday', focus: 'Chest & Triceps' },
            { day: 'Tuesday', focus: 'Back & Biceps' },
            { day: 'Wednesday', focus: 'Legs' },
            { day: 'Thursday', focus: 'Shoulders' },
            { day: 'Friday', focus: 'Arms' },
            { day: 'Saturday', focus: 'Core + Cardio' },
            { day: 'Sunday', focus: 'Rest' }
        ].map(day => ({
            ...day,
            exercises: day.focus === 'Rest' ? [] : generateExercises(day.focus, reps)
        }));

        // 6. Indian Diet Plan
        const dietPlan = generateIndianDiet(dailyCalories, proteinTarget, userData.diet || 'balanced');

        return {
            calories: dailyCalories,
            protein: proteinTarget,
            water: waterTarget,
            bmi: (weight / ((height / 100) * (height / 100))).toFixed(1),
            weeklySplit,
            dietPlan,
            timeline: [
                { period: 'Week 1–2', focus: 'Adaptation & Form' },
                { period: 'Week 3–4', focus: 'Strength Increase' },
                { period: 'Week 5–8', focus: 'Visible Changes' }
            ]
        };
    } catch (error) {
        console.error("Calculation Error:", error);
        return { calories: 2000, protein: 120, water: '2.5', bmi: '22.0' };
    }
};

const exerciseImages = {
    // Chest
    'Barbell Bench Press': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg',
    'Incline DB Press': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg',
    'Push-Ups': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg',
    'Cable Chest Flyes': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/0.jpg',
    'Diamond Push-Ups': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups_Close_and_Wide_Hand_Positions/0.jpg',

    // Back
    'Lat Pulldowns': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/0.jpg',
    'Seated Cable Rows': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Cable_Rows/0.jpg',
    'One Arm DB Rows': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg',
    'Face Pulls': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg',
    'Pull-Ups': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',
    'Deadlift': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Axle_Deadlift/0.jpg',

    // Shoulders
    'Overhead DB Press': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Dumbbell_Press/0.jpg',
    'Lateral Raises': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg',
    'Front DB Raises': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg',
    'Upright Rows': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Barbell_Row/0.jpg',
    'Dumbbell Shrugs': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/0.jpg',

    // Legs
    'Barbell Squats': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg',
    'Leg Press': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg',
    'Leg Extensions': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg',
    'Hamstring Curls': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg',
    'Calf Raises': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg',

    // Arms
    'Barbell Bicep Curls': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg',
    'Hammer Curls': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg',
    'Skull Crushers': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Triceps_Press/0.jpg',
    'Tricep Pushdowns': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown/0.jpg',
    'Close Grip Bench': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg',
    'EZ Bar Curls': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ_Bar_Curl/0.jpg',
    'Tricep DB Kickbacks': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Dumbbell_Kickback/0.jpg',
    'Preacher Curls': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Preacher_Curls/0.jpg',
    'Dips': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Chest_Version/0.jpg',

    // Core
    'Plank': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg',
    'Leg Raises': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg',
    'Russian Twists': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg',
    'Mountain Climbers': 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg'
};

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000';

const generateExercises = (focus, reps) => {
    const templates = {
        'Chest & Triceps': [
            { name: 'Barbell Bench Press', sets: '4', reps, rest: '90s', instr: 'Lower bar to mid-chest, drive up.' },
            { name: 'Incline DB Press', sets: '3', reps, rest: '60s', instr: 'Press at 30 degree incline for upper chest.' },
            { name: 'Push-Ups', sets: '3', reps: 'Failure', rest: '45s', instr: 'Keep body straight, elbows tucked.' },
            { name: 'Cable Chest Flyes', sets: '3', reps: '15', rest: '45s', instr: 'Squeeze pecs at the center.' },
            { name: 'Skull Crushers', sets: '3', reps, rest: '60s', instr: 'Lower bar to forehead, extend arms.' },
            { name: 'Tricep Pushdowns', sets: '3', reps: '12-15', rest: '45s', instr: 'Pin elbows to sides, push cable down.' }
        ],
        'Back & Biceps': [
            { name: 'Lat Pulldowns', sets: '4', reps, rest: '60s', instr: 'Pull bar to upper chest, squeeze lats.' },
            { name: 'Seated Cable Rows', sets: '3', reps, rest: '60s', instr: 'Pull handle to waist, sit tall.' },
            { name: 'One Arm DB Rows', sets: '3', reps: '12', rest: '45s', instr: 'Keep back flat, pull to hip.' },
            { name: 'Face Pulls', sets: '3', reps: '15', rest: '45s', instr: 'Pull rope towards eyes, external rotation.' },
            { name: 'Barbell Bicep Curls', sets: '3', reps, rest: '60s', instr: 'Keep elbows still, curl weight up.' },
            { name: 'Hammer Curls', sets: '3', reps: '12', rest: '45s', instr: 'Neutral grip, target side bicep.' }
        ],
        'Legs': [
            { name: 'Barbell Squats', sets: '4', reps, rest: '120s', instr: 'Squat until parallel, drive through heels.' },
            { name: 'Leg Press', sets: '3', reps: '15', rest: '90s', instr: 'Keep feet shoulder width, don\'t lock knees.' },
            { name: 'Leg Extensions', sets: '3', reps: '15', rest: '45s', instr: 'Isolate quads, hold at top.' },
            { name: 'Hamstring Curls', sets: '3', reps: '15', rest: '45s', instr: 'Curl weight to glutes, control descent.' },
            { name: 'Calf Raises', sets: '4', reps: '20', rest: '45s', instr: 'Full range of motion, pause at top.' }
        ],
        'Shoulders': [
            { name: 'Overhead DB Press', sets: '4', reps, rest: '90s', instr: 'Press weights overhead, stay stable.' },
            { name: 'Lateral Raises', sets: '4', reps: '15', rest: '45s', instr: 'Raise arms to sides, pinkies up.' },
            { name: 'Front DB Raises', sets: '3', reps: '12', rest: '45s', instr: 'Raise weights in front to eye level.' },
            { name: 'Upright Rows', sets: '3', reps: '12', rest: '60s', instr: 'Pull weight to mid-chest, elbows high.' },
            { name: 'Dumbbell Shrugs', sets: '3', reps: '15', rest: '45s', instr: 'Lift shoulders toward ears, hold.' }
        ],
        'Arms': [
            { name: 'Close Grip Bench', sets: '3', reps, rest: '90s', instr: 'Hands shoulder width, tricep focus.' },
            { name: 'EZ Bar Curls', sets: '3', reps, rest: '60s', instr: 'Full range, squeeze at top.' },
            { name: 'Tricep DB Kickbacks', sets: '3', reps: '12', rest: '45s', instr: 'Keep upper arm parallel to floor.' },
            { name: 'Preacher Curls', sets: '3', reps: '12', rest: '60s', instr: 'No momentum, isolate biceps.' },
            { name: 'Dips', sets: '3', reps: 'Failure', rest: '60s', instr: 'Vertical torso for tricep hit.' }
        ],
        'Core + Cardio': [
            { name: 'Plank', sets: '3', reps: '60s', rest: '45s', instr: 'Hold straight line, engage core.' },
            { name: 'Leg Raises', sets: '3', reps: '15', rest: '45s', instr: 'Lower legs slowly, don\'t arch back.' },
            { name: 'Russian Twists', sets: '3', reps: '30', rest: '30s', instr: 'Rotate torso, tap sides.' },
            { name: 'Mountain Climbers', sets: '3', reps: '45s', rest: '30s', instr: 'Rapid knee drives in plank.' },
            { name: 'HIIT Sowing Machine', sets: '5', reps: '30s', rest: '30s', instr: 'High intensity burst.' }
        ]
    };
    return (templates[focus] || []).map(ex => ({
        ...ex,
        image: exerciseImages[ex.name] || FALLBACK_IMAGE
    }));
};

const generateIndianDiet = (calories, protein, preference) => {
    const isVeg = preference === 'veg';
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const mealTemplates = [
        {
            Breakfast: isVeg ? '2 Stuffed Paneer Parathas + 100g Curd' : '3 Whole Eggs + 2 Slices Whole Wheat Bread',
            Lunch: isVeg ? 'Paneer Bhurji (150g) + 2 Roti + Dal + Green Salad' : 'Grilled Chicken (150g) + 1 Bowl Rice + Dal + Salad',
            Snack: isVeg ? 'Roasted Chana (50g) + 1 Glass Buttermilk' : 'Boiled Egg Whites (4) + 1 Apple',
            Dinner: isVeg ? 'Soya Chunks Curry + Small Bowl Rice + Mixed Veg' : 'Baked Fish (150g) + 2 Roti + Cucumber'
        },
        {
            Breakfast: isVeg ? 'Oats with Milk & Dry Fruits' : 'Omelette (4 Whites, 1 Whole) + Toast',
            Lunch: isVeg ? 'Mixed Veg Khichdi + Curd + Salad' : 'Brown Rice + Chicken Curry (150g) + Salad',
            Snack: isVeg ? '1 Apple + Handful of Almonds' : 'Protein Shake + 1 Banana',
            Dinner: isVeg ? 'Palak Paneer (100g) + 2 Roti' : 'Grilled Fish (150g) + Sauteed Veggies'
        },
        {
            Breakfast: isVeg ? 'Moong Dal Chilla (2) + Mint Chutney' : 'Scrambled Eggs (3) + 1 Glass Milk',
            Lunch: isVeg ? 'Rajma (1 bowl) + Rice + Curd' : 'Chicken Stir Fry + Rice + Mixed Greens',
            Snack: isVeg ? 'Banana with Peanut Butter' : 'Boiled Chana (50g) + Tea/Coffee',
            Dinner: isVeg ? 'Dal Tadka + 1 Roti + Vegetable Sabzi' : 'Chicken Salad + 1 Slice Toast'
        }
    ];

    return days.map((day, i) => {
        const template = mealTemplates[i % mealTemplates.length];
        return {
            day,
            meals: [
                { type: 'Breakfast', menu: template.Breakfast, cals: Math.round(calories * 0.25), prot: Math.round(protein * 0.2) },
                { type: 'Lunch', menu: template.Lunch, cals: Math.round(calories * 0.35), prot: Math.round(protein * 0.35) },
                { type: 'Snack', menu: template.Snack, cals: Math.round(calories * 0.15), prot: Math.round(protein * 0.15) },
                { type: 'Dinner', menu: template.Dinner, cals: Math.round(calories * 0.25), prot: Math.round(protein * 0.3) }
            ]
        };
    });
};
