const args = require('args');
const fs = require('fs');
const https = require('https');
const path = require('path');
const URL = require('url');

args
    .option('location', 'Directory to save cats in', '/cool-cats')
    .option('file', 'File with links to cools cats', '')
    .option('delimeter', 'Character separator for use with the file option', '\n')
    .option('verbose', 'Enable verbose logging', '')
    .option('cookie', 'Cookie for downloading cool cats', '');

const options = args.parse(process.argv);

if (options.verbose) {
    console.log('Options:', options);
}

const location = path.join(process.env.PWD, options.location);

if (!fs.existsSync(location)) {
    console.log(`${location} does not exist, creating directory...`);
    fs.mkdirSync(location);
}

let cats = [];

if (options.file) {
    cats = [
        ...cats,
        ...fs.readFileSync(options.file, 'utf-8').split(options.delimeter),
    ].map(cat => cat.trim());
}

if (options.verbose) {
    console.log('Cool cats to download:\n', cats);
}

const download = ({ url, filename }) => new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    const _url = URL.parse(url);
    https.get({
        hostname: _url.hostname,
        path: _url.pathname,
        protocol: _url.protocol,
        headers: {
            Cookie: options.cookie,
        },
    }, response =>
        response.on('data', data => {
            file.write(data);
        }).on('end', () => {
            file.end();
            resolve(file);
        })
    ).on('error', error => reject(error));
});

console.log(`Downloading ${cats.length} cool cats...`);

Promise.all(cats.map(cat => {
    const url = cat;
    const filename = path.join(location, cat.split('/').pop());

    console.log(`Downloading ${url} to ${filename}...`);

    return download({
        url,
        filename,
    })
        .then(() => {
            console.log(`Finished downloading cool cat: ${filename}`);
        });
}))
.then(() => {
    console.log(`Finished downloading ${cats.length} cool cats.`);

    process.exit();
});
