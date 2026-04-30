const https = require('https');

const keywords = [
    'bench-press',
    'incline-dumbbell-press',
    'squat',
    'deadlift',
    'pull-up',
    'dumbbell-row',
    'overhead-press',
    'lateral-raise',
    'tricep-pushdown',
    'bicep-curl',
    'leg-press',
    'leg-extension',
    'leg-curl',
    'calf-raise',
    'plank',
    'crunch'
];

async function fetchRedirect(keyword) {
    return new Promise((resolve, reject) => {
        const url = `https://source.unsplash.com/featured/?${keyword}`;
        https.get(url, (res) => {
            if (res.statusCode === 302 || res.statusCode === 301) {
                resolve({ keyword, url: res.headers.location });
            } else {
                resolve({ keyword, error: `Status ${res.statusCode}` });
            }
        }).on('error', (e) => {
            resolve({ keyword, error: e.message });
        });
    });
}

async function main() {
    console.log('Fetching image URLs...');
    for (const keyword of keywords) {
        const result = await fetchRedirect(keyword);
        console.log(JSON.stringify(result));
    }
}

main();
