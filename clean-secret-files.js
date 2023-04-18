const fs = require('fs');

const secretFiles = [
    '.env',
    '.npmrc',
    '.vaultrc',
    'secrets.json'
];

function cleanSecretFiles() {

    if (!readyToPublish()) {
        secretFiles.forEach(path => fs.unlinkSync(__dirname + '/' + path));
    }

    return readyToPublish();
}

function readyToPublish() {

    return secretFiles.every(path => {
        let p = __dirname + '/' + path;
        let exists = fs.existsSync(p);

        if (exists) {
            console.log(`File needs to be deleted: ${p}`);
        }

        return !exists;
    });
}

function readyToTest() {

    return secretFiles.every(path => {
        let p = __dirname + '/' + path;
        let exists = fs.existsSync(p);

        if (!exists) {
            console.log(`File doesn't exist: ${p}`);
        }

        return exists;
    });
}

// console.log(readyToTest())

// console.log(readyToPublish())

console.log(cleanSecretFiles());