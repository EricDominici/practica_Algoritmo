/* Los números de Pitágoras pueden ser descritos de la siguiente manera: a² + b² = c², donde a,  b y c son 
enteros, b y c son consecutivos, a y b son catetos y c es la hipotenusa. Escriba un  programa para encontrar
5 ternas de números de Pitágoras. Por ejemplo: (a) 3² + 4² = 5², 5² +12² = 13² */

for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
        for (let t = 0; t < 5; t++) {
            if (x * x + y * y == t * t) {
                console.log(x + "² + " + y + "² = " + t + "²");
            }
        }
    }
}
