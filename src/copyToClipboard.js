const exec = require('node-clip');
async function copyText(textToCopy = '') {
    if (textToCopy) {
        let clipboard = exec.get(true);
        return new Promise(async (resolve, reject) => {
            return await clipboard.writePrimary(textToCopy, (error, value) => {
                if (error) return reject(error);
                return resolve(value);
            });
        });
    }
}
exports.copyText = copyText;
