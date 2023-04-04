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
