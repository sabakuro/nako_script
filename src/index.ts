import Tokenizer, {TokenType} from './tokenizer';
import Parser from './parser';

const tokenizer = new Tokenizer();
const parser = new Parser();

const code = `
  let x = 2 + 3 * ( 4 + 5 ) ;
  print x ;
  let y = ( 1 + 2 ) * 4 ;
  print y ;
`;

const tokens = tokenizer.tokenize(code);
const program = parser.parseProgram(tokens);
console.log(JSON.stringify(program));
