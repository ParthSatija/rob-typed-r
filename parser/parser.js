const antlr4 = require('antlr4')
const InputStream = antlr4.InputStream;
const CommonTokenStream = antlr4.CommonTokenStream;
 
const RLexer = require('./RLexer').RLexer;
const RParser = require('./RParser').RParser;
const RFilter = require('./RFilter').RFilter;
 
const inputStream = new InputStream('s <- 2.1');
const lexer = new RLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);

const filter = new RFilter(tokenStream);
console.log(filter);
filter.stream();
tokenStream.reset();

const parser = new RParser(tokenStream);
 
// Parse the input, where `compilationUnit` is whatever entry point you defined

const tree = parser.prog();
console.log(tree.toStringTree());
//console.log(tree);