const fs = require('fs');
const db = JSON.parse(fs.readFileSync('scripts/image-fix/exercises_db.json', 'utf8'));

const targets = ['Incline Dumbbell Press', 'Pushups', 'Push-Ups'];

targets.forEach(t => {
    console.log(`\n--- Searching for "${t}" ---`);
    const found = db.filter(ex => ex.name.toLowerCase().includes(t.toLowerCase()));
    found.forEach(f => {
        console.log(`Name: ${f.name}`);
        console.log(`ID: ${f.id}`);
        console.log(`Images: ${JSON.stringify(f.images)}`);
    });
});
