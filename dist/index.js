"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokenizer_1 = __importDefault(require("./tokenizer"));
const parser_1 = __importDefault(require("./parser"));
const tokenizer = new tokenizer_1.default();
const parser = new parser_1.default();
const code = `
  let x = 2 + 3 * ( 4 + 5 ) ;
  print x ;
  let y = ( 1 + 2 ) * 4 ;
  print y ;
`;
const tokens = tokenizer.tokenize(code);
const program = parser.parseProgram(tokens);
console.log(JSON.stringify(program));
