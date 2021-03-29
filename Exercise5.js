//Exercise 5 - For
console.log ('Resultados Ejercicio 5');

/* a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle 
for de JavaScript para mostrar una ¿¿ alerta ?? utilizando cada una de las palabras.

Supuse que se refería a mostrar en la consola, sino debería guardar cada resultado en una fila
de una matriz de 5 filas y una columna [5,1]. Y luego, fuera del "for" mostrar con "alert(matriz)" .*/

var frase = ['rr', 'become', 'a', 'qa', 'automation'];
for (var i=0; i<=frase.length - 1; i++){
    console.log (frase[i]);
}

/* b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar 
una alerta por cada palabra modificada. */

var frase = ['rr', 'become', 'a', 'qa', 'automation'];
var cadena = '';
for (var i=0; i<=frase.length - 1; i++){
    cadena = frase [i];
    letraMayuscula = cadena.substring (0,1);
    resto = cadena.substring (1,cadena.length);
    alert(letraMayuscula.toUpperCase() + resto);
}

/* c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del 
punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable 
sentence. Al final mostrar una única alerta con la cadena completa. */

var sentence = '';
for (var i=0; i<=frase.length - 1; i++){
    sentence = sentence + ' ' + frase[i];
}    
alert (sentence);

/* d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el 
número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 
10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola 
del navegador el array final (utilizar console.log). */

var vacio = [];
for (var i=0; i<=9; i++){
    vacio [i] = i;
}    
console.log (vacio);

console.log ('');
console.log ('END');