import Tokenizer from './tokenizer';
import Parser from './parser';
import Evaluator from './evaluator';

const tokenizer = new Tokenizer();
const parser = new Parser();
const evaluator = new Evaluator();

const code = `
  let x = 2 + 3 * ( 4 + 5 ) ;
  print x ;
  let y = ( 1 + 2 ) * 4 ;
  print y ;
`;

const tokens = tokenizer.tokenize(code);
const program = parser.parseProgram(tokens);
evaluator.evaluateProgram(program);
