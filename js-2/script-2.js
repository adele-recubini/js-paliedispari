// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// creo due funzioni . una che genera il numero random e l altra che mi dice se la somma dei numeri miei e del pc sono pari o dispari

// è importante ricordare che se si dichiara una variabile all interno di una funzione poi non si puo riutilizzare quella variabile infatti darà come risultato un undefined --- vedi variabile scelta pc dichiarata dopo la funzione

// chiedo all utente pari o Dispari e chiedo di scegliere un numero da 1 a 5

var pariOdispari = prompt('pari o dispari')


var sceltaUtente = parseInt(prompt('scegli un numero da  1 da uno a 5 '))
console.log(sceltaUtente);

//FUNZIONE 1 -- genero numeri random da uno a cinque per il pc
var min = 1;
var max = 5;

 function randomNum(min,max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
 }
 var sceltaPc = randomNum(min,max)

console.log(sceltaPc);

 // creo una variabile che sara' la mia somma
 var somma = parseInt(sceltaUtente + sceltaPc)
 // FUNZIONE 2 --- stabilisco se la somma è pari o dispari
 function isPari(somma) {
   // faccio un parseInt cosi mi restituisce un intero
    somma = parseInt(somma);
   if (somma % 2 === 0) {
     return true;
   }else {
     return false;
   }

 }

 // dichiaro chi ha vinto : se la scelta dell utente è 'pari' e la somma gestita dalla funzione è pari allora hai vinto altrimenti hai perso

 if (pariOdispari === 'pari' && isPari(somma)) {

   console.log('la somma è ' + somma + " " + 'hai vinto');
 }else {
   console.log('la somma è ' + somma + " " +  'hai perso');
 }
