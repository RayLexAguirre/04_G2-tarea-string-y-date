import Sentence from '../src/sentence';

test('sentence.countVowels()', () => {
  let obj = new Sentence('Hola, mundo, Programación Orientada a Objetos');

  expect(obj.countVowels()).toBe(18);
});
