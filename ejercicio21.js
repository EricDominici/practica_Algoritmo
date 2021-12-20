/* Dada una matroz de números ordenados y una suma objetivo, busque un par en la matriz cuya suma sea igual al 
objetivo dado. Escriba una función para devolver los índices de los dos números (es decir, el par) de manera 
que se sumen al objetivo dado.
Input: [1, 2, 3, 4, 6], sum=6
Output: [1, 3]
Los números en los índices 1 y 3 suman  6: 2+4=6 */

let sum = 6, mat = [1, 2, 3, 4, 6];
function par(mat, sum) {
    let i = 0;
    let j = mat.length - 1;
    while (i < j) {
        if (mat[i] + mat[j] == sum) {
            return [i, j];
        } else if (mat[i] + mat[j] < sum) {
            i++;
        } else {
            j--;
        }
    }
}
console.log(par(mat, sum));