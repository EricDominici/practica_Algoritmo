/*  Escriba un programa que lea dos números positivos 
(debes controlar que solo ingresen  positivos, si ingresan negativos debes dar un alert de error) 
y muestre por consola el  resultado de multiplicarlos por sumas repetidas.*/

let num_1 = prompt("Introduce un nuemero") * 1;
let num_2 = prompt("Introduce otro nuemero") * 1;

if (num_1 <= 0 || num_2 <= 0) {
   alert ("ERROR Los dos numeros deben ser positivos");
} else {
let i = 0;
let result=0 ;
    while (i < num_2){

        result += num_1;
        i++;
    }
    alert ("Este es el resultado " + result); 
}