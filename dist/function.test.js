"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
test('soma dois números corretamente', () => {
    expect((0, function_1.add)(3, 5)).toBe(8);
});
test('concatena duas strings corretamente', () => {
    expect((0, function_1.concatenateStrings)('Hello', ' TypeScript')).toBe('Hello TypeScript');
});
test('verifica se um número é par corretamente', () => {
    expect((0, function_1.isEven)(10)).toBe(true);
    expect((0, function_1.isEven)(7)).toBe(false);
});
