module.exports = options

const options = {
    arrowParens: 'avoid',
    singleQuote: true,
    braketSpacing: true,
    endOfLine: 'lf',
    semi: false,
    tabWidth: 4,
    trailingComma: 'none'
}

// using CommonJS for now
// if there's problems with syntax, the file is probably treated as 
// an ES module. Thus use this to export code instead:
//export default options;

