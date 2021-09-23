module.exports = {
    style: {
        postcss: {
            mode: "extends" /* (default value) */ || "file",
            plugins: [
                require('tailwindcss')("./tailwind.config.js"),
                require('autoprefixer')
            ], // Additional plugins given in an array are appended to existing config.

        }
    },
    babel: {
        plugins: [
            [ "@babel/plugin-proposal-decorators", { "legacy": true } ],
            ["@babel/plugin-proposal-do-expressions"],
            ["@babel/plugin-proposal-class-properties", { "loose": true }]
        ],
    }
}
