export enum TokenType {
    Number = 'Number',
    Let = 'Let',
    Print = 'Print',
    Ident = 'Ident',
    Equal = 'Equal',
    Plus = 'Plus',
    Minus = 'Minus',
    Mul = 'Mul',
    Div = 'Div',
    LParen = 'LParen',
    RParen = 'RParen',
    Semicolon = 'Semicolon',
    Whitespace = 'Whitespace',
}

export interface Token {
    type: TokenType;
    value: string;
}

export default class Tokenizer {
    TokenPatterns: [TokenType, RegExp][] = [
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

    toToken = (value: string): Token | undefined => {
        const type = this.TokenPatterns.find((pattern) =>
            pattern[1].exec(value)
        )?.[0];

        return type && { type, value };
    };

    tokenize = (input: string): Token[] => {
        const values = input.split(/\s+/).filter((string) => string);

        return values
            .map((value) => this.toToken(value))
            .filter((token) => token != undefined);
    };
}
