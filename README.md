[![Node.js Package](https://github.com/nfinit3/pgen/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/nfinit3/pgen/actions/workflows/npm-publish.yml)
# pgen

This is a command-line interface (CLI) tool for generating passwords with customizable settings. This tool was built using Node.js and the yargs package for parsing command-line arguments.

## Getting Started

### Instalation

```bash
npm i pgen -g
```

### Usage

```bash
pgen [options]
```

Options:

* -l, --length [number]: The length of the password. Defaults to 12.
* -n, --numbers [boolean]: Include numbers in the password. Defaults to true.
* -u, --uppercase [boolean]: Include uppercase letters in the password. Defaults to true.
* -s, --special [boolean]: Include special characters in the password. Defaults to true.
* -h, --help: Show help.

Example:

```bash
pgen -l 16 -n false
```

This will generate a random password of 16 characters length and no numbers and copy the same to clipboard.

### License

This project is licensed under the MIT License - see the _LICENSE_ file for details.
