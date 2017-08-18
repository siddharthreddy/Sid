var path = require("path");

module.exports = {
    entry: {
        'polyfills': __dirname + '/src/polyfill.ts',
        'app': __dirname + '/src/main.ts'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        // Add '.ts' and '.js' as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /node_modules/,
                options: {
                    failOnHint: true,
                    configuration: require('./tslint.json')
                }
            },
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                options: {
                    configFileName: './tsconfig.json'
                }
            }
        ]
    }
}