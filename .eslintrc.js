module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,  // Added node environment
        "jest": true   // Added jest environment
    },
    "extends": [
        "eslint:recommended",
        "plugin:jest/recommended"  // Consider adding this line after installing eslint-plugin-jest
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "jest"  // Consider adding this line after installing eslint-plugin-jest
    ],
    "rules": {
        // You can add or override rules here
    }
}
