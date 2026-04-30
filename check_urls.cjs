const https = require('https');

const urls = [
    // Original broken
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg',
    // Control (Working)
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Guillotine_Bench_Press/0.jpg',
    // Try dist path
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises/Incline_Dumbbell_Press/0.jpg',
    // Try without folder? (Unlikely)
    // Try exact casing if different?
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Ups/0.jpg',
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Start_Position/0.jpg' // guessing
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`[${res.statusCode}] ${url}`);
    }).on('error', (e) => {
        console.error(`[ERR] ${url}: ${e.message}`);
    });
});
