/* Torres de hanoi. Diseña un algoritmo en JavaScript que resuelva el problema con 3 discos. Te dan un conjunto
de tres varillas y n discos, con cada disco de un tamaño diferente. Llamemos a las varillas A, B y C, y 
numeremos los discos desde 1, el disco más pequeño, hasta n, el disco más grande. Al principio, todos los 
n discos están en la varilla A, en orden de tamaño decreciente de la parte inferior a la parte superior, de 
modo que el disco n está en la parte inferior y el disco 1 está en la parte superior */

function han(n, org, aux, destino) {
    if (n == 1) {
        console.log(`Mover disco 1 de ${org} a ${destino}`);
    } else {
        han(n - 1, org, destino, aux);
        console.log(`Mover disco ${n} de ${org} a ${destino}`);
        han(n - 1, aux, org, destino);
    }
}

console.log(han(3, 'A', 'B', 'C'));