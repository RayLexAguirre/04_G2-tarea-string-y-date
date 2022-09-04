![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>Gävle, Sweden.
<span>Photo by <a href="https://unsplash.com/@gerandeklerk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Geran de Klerk</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

# Tarea: String y Date
El objetivo de esta tarea es poner en práctica algunos de los métodos más utilizados de las clases String y Date de javascript
## Requerimientos funcionales

1. (57 puntos) Programar la clase `Sentence`.  Deberá incluir los siguientes:
     - Atributos
       - `String value` sentencia o enunciado compuesto de una más palabras. Por ejemplo "Hola, buenos días!
     - Métodos
       - (15 puntos) `constructor()` recibe como parámetro el valor inicial para `value`
       - (14 puntos) `countWords()` cuenta el número de palabras que tiene la sentencia y regresa ese número. Puede utilizar el espacio en blanco como indicador de una nueva palabra.
       - (14 puntos) `countVowels()` cuenta el número de vocales que contiene la sentencia y regresa ese número.
       - (14 puntos) `capitalize()` convierte a mayúsculas la primer letra de cada palabra, las demás letras deberán estar en minúsculas.

2. (43 puntos) Programar la clase `Appointment`. Deberá incluir los siguientes:
   - Atributos
     - `String name` nombre del paciente.
     - `Date date` fecha de la cita.
   - Métodos
   - (15 puntos) `constructor()` recibe como parámetros los valores iniciales para `name` y `date` 
   - (14 puntos) `getDays()` regresa cuántos días faltan para la cita.
   - (14 puntos) `remainder()` regresa un mensaje recordatorio como el siguiente Sr(a). `name` su próxima cita es el Jueves 4 de Diciembre del 2021.
  
## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
