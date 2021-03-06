/* 11. La oficina Nacional de Planificación le solicita un programa que 
haga una tabla de  estimación 
de la población del país para los próximos 10 años. 

El programa debe solicitar la  población actual,
 las tasas de natalidad y de mortalidad esperadas.

  Las tasas se expresan  como porcentajes de la
  población. Por ejemplo, si la tasa de natalidad es de un 1.5 %  entonces el número de personas 
  nacidas el año n se espera que sea el 1.5 % de la población  del año n-1. */

let pob_inicial = 1 * 
prompt ("Introduce poblacion actual.");

let tasa_nat = 1 * 
prompt ("Introduce tasa de natalidad .") / 100;

let tasa_mort = 1 * 
prompt ("Introduce tasa de mortalidad.") / 100;

let nat, mort;

for ( i = 1; i <= 10; i++) {
    nat = tasa_nat * pob_inicial;
    mort = tasa_mort * pob_inicial;
    pob_inicial += (nat - mort);    
    document.getElementById ("tabla").rows [i].cells [1].innerText = Math.round(nat);
    document.getElementById ("tabla").rows [i].cells [2].innerText = Math.round(mort);
    document.getElementById ("tabla").rows [i].cells [3].innerText = Math.round(pob_inicial);
 }