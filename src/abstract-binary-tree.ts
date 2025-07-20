export enum NodeTypes {
    NumberLiteral,
    Identifier,
    BinaryExpression,
    LetStatement,
    PrintStatement,
    Program
}

export interface NumberLiteral {
    type: NodeTypes.NumberLiteral,
    name: number
}

export interface Identifier {
    type: NodeTypes.Identifier,
    name: string
}

export interface BinaryExpression {
    type: NodeTypes.BinaryExpression,
    operator: string;
    left: Expression;
    right: Expression;
}

export type Expression =
    | NumberLiteral
    | Identifier
    | BinaryExpression;

export interface LetStatement {
    type: NodeTypes.LetStatement;
    name: string;
    value: Expression;
}

export interface PrintStatement {
    type: NodeTypes.PrintStatement;
    value: Expression;
}

export type Statement =
    | LetStatement
    | PrintStatement;

export interface Program {
    type: NodeTypes.Program;
    value: Statement[];
}
