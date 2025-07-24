import Tokenizer from './tokenizer';
import Parser from './parser';
import Evaluator from './evaluator';

const tokenizer = new Tokenizer();
const parser = new Parser();
const evaluator = new Evaluator();

const code = `
  let term1 = ( 1 / ( 1 * 1 ) ) ;
  let term2 = ( 1 / ( 2 * 2 ) ) ;
  let term3 = ( 1 / ( 3 * 3 ) ) ;
  let term4 = ( 1 / ( 4 * 4 ) ) ;
  let term5 = ( 1 / ( 5 * 5 ) ) ;
  let term6 = ( 1 / ( 6 * 6 ) ) ;

  let sum = ( ( ( ( ( term1 + term2 ) + term3 ) + term4 ) + term5 ) + term6 ) ;

  print sum ;
`;

const tokens = tokenizer.tokenize(code);
const program = parser.parseProgram(tokens);
evaluator.evaluateProgram(program);
