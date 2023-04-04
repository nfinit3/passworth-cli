
[![passworth cli](https://github.com/nfinit3/passworth-cli/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/nfinit3/passworth-cli/actions/workflows/npm-publish.yml)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")

# passworth-cli

This is a command-line interface (CLI) tool for generating passwords with customizable settings. This tool was built using Node.js and the yargs package for parsing command-line arguments.

## Getting Started

### Instalation

```bash
npm i passworth-cli -g
```

### Usage

```bash
passworth [options]
```

Options:

* -l, --length [number]: The length of the password. Defaults to 12.
* -n, --numbers [boolean]: Include numbers in the password. Defaults to true.
* -u, --uppercase [boolean]: Include uppercase letters in the password. Defaults to true.
* -s, --special [boolean]: Include special characters in the password. Defaults to true.
* -h, --help: Show help.

Example:

```bash
passworth -l 16 -n false
```

This will generate a random password of 16 characters length and no numbers and copy the same to clipboard.

## Use in your NodeJS Project

> passworth-cli also provides you a module to use in your NodeJS projects for generating random passwords on the fly.

### Installation

```bash
npm i passworth-cli --save
```

### Usage

```javascript
import { passworth } from 'passworth-cli';
passworth(); // => 'AY[5c[=K0MaD'
```

### License

This project is licensed under the MIT License - see the _LICENSE_ file for details.
