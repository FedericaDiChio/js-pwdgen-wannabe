// console.log("JS OK");

/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */


// Variabili - assegnazione e dichiarazione

var message = "La tua password è:";
var yourpwPlaceholder = document.getElementById("yourpw");

var userName = prompt("Come ti chiami?");
var userSurname = prompt("Quale è il tuo cognome?");
var userColor = prompt("Quale è il tuo colore preferito?");
var numberPw = "21";
console.log ("Nome: ", userName);
console.log ("Cognome: ", userSurname);
console.log ("Colore preferito: ", userColor);
console.log ("Elemento HTML: ", yourpwPlaceholder);


// Scriviamo la password dell'utente 

yourpwPlaceholder.innerHTML = message + " " + userName + userSurname + userColor + numberPw;