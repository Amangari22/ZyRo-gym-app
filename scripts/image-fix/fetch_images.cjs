const https = require('https');

const keywords = [
    'bench-press-gym',
    'incline-dumbbell-press',
    'squat-gym',
    'deadlift-gym',
    'pull-up-bar',
    'dumbbell-row',
    'overhead-press-barbell',
    'lateral-raise-dumbbell',
    'tricep-pushdown-cable',
    'bicep-curl-barbell',
    'leg-press-machine',
    'leg-extension-machine',
    'leg-curl-machine',
    'calf-raise-gym',
    'plank-exercise',
    'crunch-exercise'
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
        try {
            const result = await fetchRedirect(keyword);
            console.log(JSON.stringify(result));
        } catch (e) {
            console.log(JSON.stringify({ keyword, error: e.message }));
        }
    }
}

main();
