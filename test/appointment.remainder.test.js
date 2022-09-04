import Appointment from '../src/appointment';

test('appointment.remainder()', () => {
  let obj = new Appointment('juan perez garcía', new Date(2021, 1, 12));

  expect(obj.remainder().toLowerCase()).toEqual(
    'sr(a). juan perez garcía su próxima cita es el viernes 12 de febrero del 2021.'
  );
});
