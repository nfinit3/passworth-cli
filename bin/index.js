#!/usr/bin/env node

const yargs = require('yargs');
const { generatePassword } = require('../src/passwordGenerator.js');
const { copyText } = require('../src/copyToClipboard.js');

const argv = yargs
    .option('length', {
        alias: 'l',
        description: 'Length of password',
        type: 'number',
        default: 12
    })
    .option('numbers', {
        alias: 'n',
        description: 'Include numbers in password',
        type: 'boolean',
        default: true
    })
    .option('uppercase', {
        alias: 'u',
        description: 'Include uppercase in password',
        type: 'boolean',
        default: true
    })
    .option('special', {
        alias: 's',
        description: 'Include special characters in password',
        type: 'boolean',
        default: true
    })
    .help()
    .alias('help', 'h').argv;

const password = generatePassword(
    argv.length,
    argv.numbers,
    argv.uppercase,
    argv.special
);
console.log(password);
copyText(password).then((res, error) => {
    if (res) {
        console.log(`Password is copied to clipboard`);
    } else {
        console.log('Not Having any clipboard tool in running system');
    }
});
delay(50).then(() => {
    process.exit(); // Then exit the main process
});
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
