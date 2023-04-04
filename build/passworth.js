(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { generatePassword } = require('./src/passwordGenerator');
window.generatePassword = generatePassword;

},{"./src/passwordGenerator":2}],2:[function(require,module,exports){
function generatePassword(
    length = 12,
    numbers = true,
    uppercase = true,
    special = true
) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = uppercaseChars.toLocaleLowerCase();
    const digits = '0123456789';
    const specialChars = '~!@#$%^&*()_+`-={}|[]\\:";\'<>?,./';

    function getRandomCharacter(charSet) {
        return charSet[Math.floor(Math.random() * charSet.length)];
    }

    let randomPasswordArray = [getRandomCharacter(lowercaseChars)];
    let allChars = lowercaseChars;

    if (typeof length === 'object') {
        let params = length;
        length = params.length !== undefined ? params.length : 12;
        numbers = params.numbers !== undefined ? params.numbers : true;
        uppercase = params.uppercase !== undefined ? params.uppercase : true;
        special = params.special !== undefined ? params.special : true;
    }
    if (numbers) {
        randomPasswordArray.push(getRandomCharacter(digits));
        allChars += digits;
    }

    if (uppercase) {
        randomPasswordArray.push(getRandomCharacter(uppercaseChars));
        allChars += uppercaseChars;
    }

    if (special) {
        randomPasswordArray.push(getRandomCharacter(specialChars));
        allChars += specialChars;
    }

    let remainingLength = length - randomPasswordArray.length;

    for (let i = 0; i < remainingLength; i++) {
        randomPasswordArray.push(getRandomCharacter(allChars));
    }

    let randomPassword = randomPasswordArray
        .sort(() => Math.random() - 0.5)
        .join('');
    return randomPassword;
}
exports.generatePassword = generatePassword;

},{}]},{},[1]);
