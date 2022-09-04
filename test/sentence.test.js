import Sentence from '../src/sentence';

test('sentence.constructor()', () => {
  let obj = new Sentence('Hola, mundo, Programación Orientada a Objetos');

  expect(obj.value).toBe('Hola, mundo, Programación Orientada a Objetos');
});
