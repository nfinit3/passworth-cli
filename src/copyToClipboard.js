var exec = require('node-clip');
async function copyText(textToCopy = '') {
    if (textToCopy) {
        let clipboard = exec.get(true);
        return new Promise(async (resolve, reject) => {
            let result = await clipboard.writePrimary(
                textToCopy,
                (error, value) => {
                    if (error) return reject(error);
                    return resolve(value);
                }
            );
            return result;
        });
    }
}
exports.copyText = copyText;
