const fs = require('fs');

try {
    const db = JSON.parse(fs.readFileSync('exercises_db.json', 'utf8'));

    const searchTerms = ['Lateral Raise', 'Front Raise', 'Leg Curl', 'Squat', 'Deadlift', 'Pushdown', 'Skull Crusher'];

    searchTerms.forEach(term => {
        console.log(`\n--- Matches for "${term}" ---`);
        const matches = db.filter(ex => ex.name.toLowerCase().includes(term.toLowerCase()));
        // Sort by length to find shortest (likely simplest) name
        matches.sort((a, b) => a.name.length - b.name.length);
        matches.slice(0, 5).forEach(m => console.log(`"${m.name}"`));
    });
} catch (e) {
    console.error(e);
}
