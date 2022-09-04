import Sentence from '../src/sentence';

test('sentence.countWords()', () => {
  let obj = new Sentence('Hola, mundo, Programación Orientada a Objetos');

  expect(obj.countWords()).toBe(6);
});
