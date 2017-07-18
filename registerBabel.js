const registerBabel = require('babel-core/register')({ignore: /node_modules\/(?!ProjectB)/});

module.exports = registerBabel;