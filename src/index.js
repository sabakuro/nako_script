"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokenizer_1 = __importDefault(require("./tokenizer"));
const tokenizer = new tokenizer_1.default();
console.log(tokenizer.tokenize("x = 1 + 5;"));
