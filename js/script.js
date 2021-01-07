// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// se la lunghezza della parolaletta è diversa dalla lunghezza della parola letta al cotrario, ritorna falso quindi vero ! quindi non è Palindroma. altrimenti se la lunghezza della parola letta è uguale alla lunghezza della parila letta al contrario è vera quindi  è palindoma

var word = prompt('inserisci parola')

function isPalindrome(word) {
  for (i = 0; i < word.length; i++) {
    if ( word[i]  !==  word[word.length - 1 - i]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(word));
