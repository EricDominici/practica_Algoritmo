/*12. Haga una función cdig(), cuyo prototipo es: 
let cdig = function(cantidad, dígito){ //código aquí} 
Se desea que dicha función retorne las veces que el dígito d este contenido en el número n.  Por ejemplo, cdgi(1241, 1) = 2 veces aparece el dígito 1 en la cantidad 1241. 
*/
let cantidad_de_digitos = 0;

let cantidad = prompt ("Escribe la cantidad numerica a tomar como referencia.");

let digito = prompt ("Introduce el numero que quieres encontrar.");

for (i = 0 ; i < cantidad.length ; i++) {
    if (cantidad [i] === digito) {
        cantidad_de_digitos += 1;
    }
}

alert ("El digito " + digito + " aparece " + cantidad_de_digitos + " veces en el numero " + cantidad + ".")