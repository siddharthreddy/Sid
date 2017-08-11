var path = require("path");

module.exports = {
    entry: "app.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + '/dist'
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