import Sentence from "./sentence.js";
import Appointment from "./appointment.js";

let sentence1 = new Sentence("HoLa Primo coMo te ESRA");
let appointment1 = new Appointment("Juan Perez Diaz", new Date(1999, 2, 20))
console.log("hola");

console.log(sentence1.countWords());
console.log(sentence1.countVowels());
console.log(sentence1.capitalize());

console.log(appointment1.getDays());
console.log(appointment1.remainder());

