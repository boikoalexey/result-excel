module.exports = {
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'requireConfigFile': false
    },
    'env': {
        browser: true,
        node: true,
        es6: true
    },
    'extends': [ 'eslint:recommended', 'google' ],
    'rules': {
        'semi': [ 'warn', 'never' ],
        'quotes': [ 'warn', 'single' ],
        'space-in-parens': [ 'warn', 'never' ],
        'object-curly-spacing': [ 'warn', 'always' ],
        'space-infix-ops': 'warn',
        'indent': [ 'warn', 4, { 'SwitchCase': 1 } ],
        'no-multi-spaces': 'warn',
        'vars-on-top': 'warn',
        'array-bracket-spacing': [ 'warn', 'always' ],
        'block-spacing': [ 'warn', 'always' ],
        'brace-style': [ 'warn', '1tbs', { 'allowSingleLine': false } ],
        'camelcase': 'warn',
        'comma-spacing': [ 'warn', { 'before': false, 'after': true } ],
        'comma-dangle': [ 'warn', 'never' ],
        'computed-property-spacing': [ 'warn', 'never' ],
        'eol-last': 'error',
        'func-style': [ 'warn', 'expression', { 'allowArrowFunctions': true } ],
        'no-mixed-spaces-and-tabs': 'warn',
        'no-multiple-empty-lines': 'warn',
        'no-trailing-spaces': 'warn'
    }
}
