import { add, concatenateStrings, isEven } from "./function";

test('soma dois números corretamente', () => {
  expect(add(3, 5)).toBe(8);
});

test('concatena duas strings corretamente', () => {
  expect(concatenateStrings('Hello', ' TypeScript')).toBe('Hello TypeScript');
});

test('verifica se um número é par corretamente', () => {
  expect(isEven(10)).toBe(true);
  expect(isEven(7)).toBe(false);
});