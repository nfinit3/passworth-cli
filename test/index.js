const assert = require('chai').assert;
const { generatePassword } = require('../src/passwordGenerator');

describe('generatePassword', () => {
    it('should generate a password of length 12 by default', () => {
        const password = generatePassword();
        assert.equal(password.length, 12);
    });

    it('should generate a password of the specified length', () => {
        const password = generatePassword({ length: 16 });
        assert.equal(password.length, 16);
    });

    it('should include numbers in the password if the numbers parameter is true', () => {
        const password = generatePassword({ numbers: true });
        assert.match(password, /\d/);
    });

    it('should include uppercase letters in the password if the uppercase parameter is true', () => {
        const password = generatePassword({ uppercase: true });
        assert.match(password, /[A-Z]/);
    });

    it('should include special characters in the password if the special parameter is true', () => {
        const password = generatePassword({ special: true });
        assert.match(password, /[\W_]/);
    });

    it('should include at least one lowercase character in the password', () => {
        const password = generatePassword();
        assert.match(password, /[a-z]/);
    });

    it('should generate a different password each time it is called', () => {
        const password1 = generatePassword();
        const password2 = generatePassword();
        assert.notEqual(password1, password2);
    });

    it('should ignore non-boolean properties in the parameter object', () => {
        const password = generatePassword({ length: 16, foo: 'bar' });
        assert.equal(password.length, 16);
    });

    it('should use default values for missing properties in the parameter object', () => {
        const password = generatePassword({ length: 16 });
        assert.match(password, /[a-z]/);
        assert.match(password, /\d/);
        assert.match(password, /[A-Z]/);
        assert.match(password, /[\W_]/);
    });

    it('should use the specified values for properties in the parameter object', () => {
        const password = generatePassword({
            length: 16,
            numbers: false,
            uppercase: false
        });
        assert.match(password, /[a-z]/);
        assert.notMatch(password, /\d/);
        assert.notMatch(password, /[A-Z]/);
        assert.match(password, /[\W_]/);
    });
});
