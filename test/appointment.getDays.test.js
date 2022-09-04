import Appointment from '../src/appointment';

test('appointment.getDays()', () => {
  let appointmentDate = new Date();
  appointmentDate.setDate(appointmentDate.getDate() + 10);

  let obj = new Appointment('juan perez garcía', appointmentDate);

  expect(obj.getDays()).toEqual(10);
});
