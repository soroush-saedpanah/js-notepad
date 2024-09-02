const path = require('path');
const { DuplicatesPlugin } = require("inspectpack/plugin");

module.exports = {
    entry: {
        main: "./public/src/ts/scripts.ts",
    },
    output: {
        path: path.resolve(__dirname, 'public/dist/js'),
        filename: "scripts.min.js",
        publicPath: "public/dist/js",
        library: {
            name: 'scripts',
            type: 'umd',
            export: 'default'
        }
    },
    module: {
        rules: [
            { 
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    mode: "production",
    // devtool: "source-map",
    plugins: [
        new DuplicatesPlugin({
            emitErrors: false,
            emitHandler: undefined,
            ignoredPackages: undefined,
            verbose: false
        })
    ]
};