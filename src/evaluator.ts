import {
    NodeTypes,
    Program,
    Statement,
    Expression
} from './abstract-binary-tree';

import { TokenType } from './tokenizer';

export default class Evaluator {
    env = new Map<string, number>();

    evaluateProgram = (program: Program): void => {
        program.body.forEach(statement => {
            this.evaluateStatement(statement);
        });
    }

    private evaluateStatement = (statement: Statement): void => {
        const evaluated = this.evaluateExpression(statement.value);

        switch(statement.type) {
            case NodeTypes.LetStatement:
                this.env.set(statement.name.name, evaluated);
                break;
            case NodeTypes.PrintStatement:
                console.log(evaluated);
                break;
        }
    }

    private evaluateExpression = (expression: Expression): number => {
        switch(expression.type) {
            case NodeTypes.NumberLiteral:
                return expression.value;
            case NodeTypes.Identifier:
                const ident = this.env.get(expression.name);

                if(!ident) {
                    throw new Error(`The identifier doesn't exist: ${expression.name}`)
                }

                return ident;
            case NodeTypes.BinaryExpression:
                const left = this.evaluateExpression(expression.left);
                const right  = this.evaluateExpression(expression.right);
                return this.applyOperator(expression.operator, left, right);
        }
    }

    private applyOperator = (operator: TokenType, left: number, right: number): number => {
        switch(operator) {
            case TokenType.Plus:
                return left + right;
            case TokenType.Minus:
                return left - right;
            case TokenType.Mul:
                return left * right;
            case TokenType.Div:
                return left / right;
        }
        
        throw new Error(`${operator} is not a valid operator`);
    }

}
