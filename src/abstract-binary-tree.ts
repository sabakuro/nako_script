export enum NodeTypes {
    NumberLiteral = 'NumberLiteral',
    Identifier = 'Identifier',
    BinaryExpression = 'BinaryExpression',
    LetStatement = 'LetStatement',
    PrintStatement = 'PrintStatement',
    Program = 'Program',
}

export interface NumberLiteral {
    type: NodeTypes.NumberLiteral;
    value: number;
}

export interface Identifier {
    type: NodeTypes.Identifier;
    name: string;
}

export interface BinaryExpression {
    type: NodeTypes.BinaryExpression;
    operator: string;
    left: Expression;
    right: Expression;
}

export type Expression = NumberLiteral | Identifier | BinaryExpression;

export interface LetStatement {
    type: NodeTypes.LetStatement;
    name: Identifier;
    value: Expression;
}

export interface PrintStatement {
    type: NodeTypes.PrintStatement;
    value: Expression;
}

export type Statement = LetStatement | PrintStatement;

export interface Program {
    type: NodeTypes.Program;
    body: Statement[];
}
