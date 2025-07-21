"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType["Number"] = "Number";
    TokenType["Let"] = "Let";
    TokenType["Print"] = "Print";
    TokenType["Ident"] = "Ident";
    TokenType["Equal"] = "Equal";
    TokenType["Plus"] = "Plus";
    TokenType["Minus"] = "Minus";
    TokenType["Mul"] = "Mul";
    TokenType["Div"] = "Div";
    TokenType["LParen"] = "LParen";
    TokenType["RParen"] = "RParen";
    TokenType["Semicolon"] = "Semicolon";
    TokenType["Whitespace"] = "Whitespace";
})(TokenType || (exports.TokenType = TokenType = {}));
class Tokenizer {
    constructor() {
        this.TokenPatterns = [
            [TokenType.Number, /^\d+/],
            [TokenType.Let, /^let\b/],
            [TokenType.Print, /^print\b/],
            [TokenType.Ident, /^[a-zA-Z_][a-zA-Z0-9_]*/],
            [TokenType.Equal, /^=/],
            [TokenType.Plus, /^\+/],
            [TokenType.Minus, /^-/],
            [TokenType.Mul, /^\*/],
            [TokenType.Div, /^\//],
            [TokenType.LParen, /^\(/],
            [TokenType.RParen, /^\)/],
            [TokenType.Semicolon, /^;/],
            [TokenType.Whitespace, /^[ \t\r\n]+/],
        ];
        this.toToken = (value) => {
            var _a;
            const type = (_a = this.TokenPatterns.find((pattern) => pattern[1].exec(value))) === null || _a === void 0 ? void 0 : _a[0];
            return type && { type, value };
        };
        this.tokenize = (input) => {
            const values = input.split(/\s+/).filter((string) => string);
            return values
                .map((value) => this.toToken(value))
                .filter((token) => token != undefined);
        };
    }
}
exports.default = Tokenizer;
