const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    // devtool:'none',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
};