const { expect } = require('chai');
const { describe, it } = require('mocha');
const { generatePassword } = require('../src/passwordGenerator.js');

describe('generatePassword', () => {
    it('should generate a password of the specified length', () => {
        const password = generatePassword(8, true, true, true);
        expect(password).to.have.lengthOf(8);
    });

    it('should include uppercase letters if specified', () => {
        const password = generatePassword(12, false, true, false);
        expect(password).to.match(/[A-Z]/);
    });

    it('should include numbers if specified', () => {
        const password = generatePassword(16, true, false, false);
        expect(password).to.match(/\d/);
    });

    it('should include special characters if specified', () => {
        const password = generatePassword(20, false, false, true);
        expect(password).to.match(
            /[\~\!\@\#\$\%\^\&\*\(\)\_\+\`\-\=\{\}\|\[\]\\\:"\;\'\<\>\?,\.\/]/
        );
    });

    it('should generate a password with at least one of each type of character if all options are enabled', () => {
        const password = generatePassword(10, true, true, true);
        expect(password).to.match(/[A-Z]/);
        expect(password).to.match(/[a-z]/);
        expect(password).to.match(/\d/);
        expect(password).to.match(
            /[\~\!\@\#\$\%\^\&\*\(\)\_\+\`\-\=\{\}\|\[\]\\\:"\;\'\<\>\?,\.\/]/
        );
    });
});
