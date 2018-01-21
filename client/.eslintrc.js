// https://eslint.org/docs/user-guide/configuring

module.exports = {
    "parserOptions": {
        "ecmaVersion": 6
     },
     plugins: [
       'vue'
     ],
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
