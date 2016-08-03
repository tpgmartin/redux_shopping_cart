var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.json$/,
                loadersL [ 'json' ],
                exclude: /node_modules/,
                include: ___dirname
            }
        ]
    }
}