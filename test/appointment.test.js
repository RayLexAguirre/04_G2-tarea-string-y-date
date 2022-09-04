import Appointment from '../src/appointment';

test('appointment.constructor()', () => {
  let appointmentDate = new Date();
  appointmentDate.setDate(appointmentDate.getDate() + 10);

  let obj = new Appointment('juan perez garcía', appointmentDate);

  expect(obj.name).toEqual('juan perez garcía');
  expect(obj.date).toEqual(appointmentDate);
});
