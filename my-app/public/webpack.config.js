const path = require('path');

module.exports = {
    entry: './login.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};