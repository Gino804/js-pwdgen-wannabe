console.log('JS OK');

// OPERAZIONI PRELIMINARI

// Recupero l'elemento dal DOM

const passwordPlaceholder = document.getElementById('generated-password');
console.log(passwordPlaceholder);

// Chiedo il nome all'utente e lo salvo in una variabile

const userName = prompt('Inserisci il tuo nome','Ezio');
console.log(userName);

// Chiedo il cognome all'utente e lo salvo in una variabile

const userLastname = prompt('Inserisci il tuo cognome','Greggio');
console.log(userLastname);

// Chiedo il colore preferito all'utente e lo salvo in una variabile

const userColor = prompt('Inserisci il tuo colore preferito','rosa');
console.log(userColor);

// Calcolo la password completa

const completePassword = userName + userLastname + userColor + 21; // Creare una variabile apposita per un semplice numero che non ha altra funzione all'infuori di questa mi sembrava superfluo, quindi l'ho inserito direttamente nell'operazione

console.log(completePassword);

// Inserisco la password generata nell'elemento del DOM

passwordPlaceholder.innerText = completePassword;