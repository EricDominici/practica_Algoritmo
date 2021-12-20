/* Se hace un triángulo con latas de leche condensadas, de la siguiente manera: 1 lata  en el tope, 3 en el 
siguiente, 5 en el siguiente etc. Realice una función para cada uno de  los puntos siguientes: 
(a) ¿Cuántos niveles se tiene con n latas? 
(b) ¿Cuántas latas sobran haciendo el triángulo si se tienen n latas (con 13 latas se tienen 3  niveles y 
sobran 4)? */

let arr =[1,3,5,7,9,11,13];
let num = arr.length,  car ="[]", max = Math.max(...arr), graf = 0, maxlen= 14;
   console.log(max);
  let print = (n) => {
     let i=1;
     while(i <= n){
   console.log("[]");
      ++i;
     }
  console.log("<br>")
   }

 for(let cont=0; cont<num; ++cont){

    graf = (arr[cont]*maxlen)/max;
    graf = Math.floor(graf);
    print(graf);
    
}