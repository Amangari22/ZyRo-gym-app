const fs = require('fs');

// Load map
const mapping = JSON.parse(fs.readFileSync('exercise_map.json', 'utf8'));

// Load plans.js
let plansContent = fs.readFileSync('src/data/plans.js', 'utf8');

// Regex to find "name: '...'" and then the subsequent "image: '...'"
// We need to be careful. The format is:
// {
//     name: 'Barbell Bench Press',
//     ...
//     image: '...',
// }
// We can loop through the mapping keys.

let replacements = 0;

for (const [name, url] of Object.entries(mapping)) {
    if (!url) continue;

    // We look for the specific block for this exercise.
    // We can match "name: 'NAME'" followed by anything until "image: 'OLD_URL'"
    // But regex is tricky with newlines.

    // Alternative: Split by "name: '".
    // But simple replacement might be safer if we are strictly looking for:
    // name: 'Exact Name', ... image: '...'

    // Let's construct a regex for this specific block match.
    // Escaping regex special chars in name
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Look for name:'Name' ... image: '...'
    // We assume 'image' comes after 'name' inside the object.
    const regex = new RegExp(`(name:\\s*'${escapedName}',[\\s\\S]*?image:\\s*)'[^']*'`, 'g');

    if (regex.test(plansContent)) {
        plansContent = plansContent.replace(regex, `$1'${url}'`);
        replacements++;
    } else {
        console.log(`Could not find block for "${name}" in file.`);
    }
}

console.log(`Replaced ${replacements} images.`);

fs.writeFileSync('src/data/plans.js', plansContent, 'utf8');
console.log('Updated src/data/plans.js');
