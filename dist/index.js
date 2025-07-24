"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokenizer_1 = __importDefault(require("./tokenizer"));
const parser_1 = __importDefault(require("./parser"));
const evaluator_1 = __importDefault(require("./evaluator"));
const tokenizer = new tokenizer_1.default();
const parser = new parser_1.default();
const evaluator = new evaluator_1.default();
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
