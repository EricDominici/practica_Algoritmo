/* 11. La oficina Nacional de Planificación le solicita un programa que 
haga una tabla de  estimación 
de la población del país para los próximos 10 años. 

El programa debe solicitar la  población actual,
 las tasas de natalidad y de mortalidad esperadas.

  Las tasas se expresan  como porcentajes de la
  población. Por ejemplo, si la tasa de natalidad es de un 1.5 %  entonces el número de personas 
  nacidas el año n se espera que sea el 1.5 % de la población  del año n-1. */

const poblacionInicial = prompt("introduce poblacion inicial"); 
const tasaNatalidad = prompt("intoduce tasa de natalidad");
const tasaMortalidad = prompt("introduce tasa de mortalidad");

 console.log(poblacionInicial + "poblacion inicial")
 console.log (tasaNatalidad + "tasa de natalida ")
console.log(tasaMortalidad + "tasa de mortalidad")

for ( i = 1; i <= 10; i++) {
  natalidad = tasa_natalidad * poblacion_actual;
  mortalidad = tasa_mortalidad * poblacion_actual;
  poblacion_actual += (natalidad - mortalidad);    
  document.getElementById ("tabla").rows [i].cells [1].innerText = Math.round(natalidad);
  document.getElementById ("tabla").rows [i].cells [2].innerText = Math.round(mortalidad);
  document.getElementById ("tabla").rows [i].cells [3].innerText = Math.round(poblacion_actual);
}


