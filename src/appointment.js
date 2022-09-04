export default class Appointment {

    constructor(name, date){
        this.name = name;
        this.date = date;
    }

    getDays(){
        let fecha1 = new Date(2020, 11, 13);
        let fecha2 = new Date(2020, 11, 23);

        let dateDif = fecha2 - fecha1;

        let dateRef = new Date(dateDif);
        
        return dateRef / 86400000
    }

    getAge(){
        let today = new Date();
        let dateDif = today - this.date;
        let dateRef = new Date(dateDif);
        let age = dateRef.getFullYear() - 1970;

        return age;
    }

    getDayOfBirth(){
        switch (this.date.getDay()) {
            case 0: return "Domingo";
            case 1: return "Lunes";
            case 2: return "Martes";
            case 3: return "Miercoles";
            case 4: return "Jueves";
            case 5: return "Viernes";
            case 6: return "Sábado";
            default: return "Error";
        }
    }

    getMonthOfBirth(){
        switch (this.date.getMonth()) {
            case 0: return "Enero";
            case 1: return "Febrero";
            case 2: return "Marzo";
            case 3: return "Abril";
            case 4: return "Mayo";
            case 5: return "Junio";
            case 6: return "Julio";
            case 7: return "Agosto";
            case 8: return "Septiembre";
            case 9: return "Octubre";
            case 10: return "Noviembre";
            case 11: return "Diciembre";
            default: return "Error";
        }
    }
    
    remainder(){
        let fechaCom = this.getDayOfBirth() + " " + this.date.getDate() + " de " + this.getMonthOfBirth() + " del " + this.date.getFullYear() + ".";
        let destino = this.name;
        let fecha = "Sr(a)." + " " + destino + " " + "su próxima cita es el " + fechaCom;
        return fecha;
    }

}