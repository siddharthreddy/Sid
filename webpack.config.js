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
        loaders: [
            // all files with a '.ts' extension will be handled by 'ts-loader'
            { test: /\.ts$/, loader: "awesome-typescript-loader", options: {
                configFileName: './tsconfig.json'
            } }
        ]
    }
}