#!/usr/bin/env node

const yargs = require('yargs');
const { generatePassword } = require('./src/passwordGenerator.js');

const argv = yargs
    .option('length', {
        alias: 'l',
        description: 'Length of password',
        type: 'number',
        default: 12,
    })
    .option('numbers', {
        alias: 'n',
        description: 'Include numbers in password',
        type: 'boolean',
        default: true,
    })
    .option('uppercase', {
        alias: 'u',
        description: 'Include uppercase in password',
        type: 'boolean',
        default: true,
    })
    .option('special', {
        alias: 's',
        description: 'Include special characters in password',
        type: 'boolean',
        default: true,
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
console.log(`Password is copied to clipboard`);
require('child_process').spawn('pbcopy').stdin.end(password);
process.exit();
