import Sentence from '../src/sentence';

test('sentence.capitalize()', () => {
  let obj = new Sentence('hOla mUndo! proGrAmAción orIeNtada a obJetos');

  expect(obj.capitalize()).toEqual(
    'Hola Mundo! Programación Orientada A Objetos'
  );
});
