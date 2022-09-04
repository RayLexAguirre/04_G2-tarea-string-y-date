export default class Sentence {

    constructor(value){
        this.value = value;
    }

    countWords(){
        let words = this.value;
        let vector = words.split(" ");

        return vector.length;
    }

    countVowels(){
        
        let texto = this.value;
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"];
        let volCouter = 0;

        for(let i = 0; i < texto.length; ++i) {
            if(vowels.indexOf(texto[i]) >= 0) {
                ++volCouter;
            }
        }
        
        return volCouter;
    }

    capitalize(){
        let frase = this.value; 
        let palabras = frase.split(" ");

        return palabras.map(p => p[0].toUpperCase() + p.slice(1).toLowerCase()).join(" ");
    }
 
    capitalizeFirst(){
        let capitalized = this.value[0].toUpperCase();
 
        for(let i = 1; i < this.value.length; i++) {
            capitalized = capitalized + this.value[i].toLowerCase();
        }

        return capitalized;
    }
}