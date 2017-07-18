module.exports = {
    entry: __dirname + '/public/src/main.js',
    output: {
        path: __dirname+'/public',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: { presets: ['react', 'es2015']}
        }]
    }
};