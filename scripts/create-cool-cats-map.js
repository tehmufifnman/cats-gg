const args = require('args');
const fs = require('fs');
const https = require('https');
const path = require('path');
const URL = require('url');

args
    .option('file', 'File to save cool cats map in', '/src/data/generated/cool-cats.json')
    .option('dist', 'Directory to copy cats to', '/images/cool-cats')
    .option('location', 'Directory to map cats from', '/cool-cats')
    .option('verbose', 'Enable verbose logging', '');

const options = args.parse(process.argv);

if (options.verbose) {
    console.log('Options:', options);
}

const dist = path.join(process.env.PWD, 'public', options.dist);
const location = path.join(process.env.PWD, options.location);

if (!fs.existsSync(dist)) {
    console.log(`${dist} does not exist, creating directory...`);
    fs.mkdirSync(dist);
    
}

const copyFiles = () => new Promise((resolve, reject) =>
    fs.readdir(location, (error, files) => {
        if (error) {
            process.exit(1);
        }

        Promise.all(
            files.map(file =>
                new Promise((resolve, reject) => {
                    const src = path.join(location, file);
                    const dest = path.join(dist, file);

                    if (options.verbose) {
                        console.log(`Copying ${src} to ${dest}...`);
                    }

                    fs.copyFile(
                        src,
                        dest,
                        error => {
                            if (error) {
                                reject(error);
                            } else {
                                if (options.verbose) {
                                    console.log(`Finished copying ${src} to ${dest}.`);
                                }

                                resolve(file);
                            }
                        }
                    );
                })
            )
        ).then(resolve, reject);
    }));

const filename = path.join(process.env.PWD, options.file);

copyFiles()
    .then(files => {
        console.log(`Finished copying ${files.length} files.`);
        fs.writeFile(filename, JSON.stringify(files), error => {
            if (error) {
                console.log('Error writing cool cat map');
                process.exit(1);
            } else {
                console.log(`Wrote cool cat map to ${filename}`);
                process.exit();
            }
        })
    });
