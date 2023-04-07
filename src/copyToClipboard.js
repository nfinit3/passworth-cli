var exec = require('node-clip');
async function copyText(textToCopy = '') {
    if (textToCopy) {
        let clipboard = exec.get(true);
        return await clipboard.writePrimary(textToCopy, (error, value) => {
            return value;
        });
    }
}
exports.copyText = copyText;
