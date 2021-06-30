// console.log("JS OK");

/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */


// Variabili - assegnazione e dichiarazione

var messagepw = "La tua password è:";
var yourpwPlaceholder = document.getElementById("yourpw");

var name = prompt("Come ti chiami?");
var surname = prompt("Quale è il tuo cognome?");
var favColor = prompt("Quale è il tuo colore preferito?");
console.log ("Nome: ", name);
console.log ("Cognome: ", surname);
console.log ("Colore preferito: ", favColor);
console.log ("Elemento HTML: ", yourpwPlaceholder);


// Scriviamo la password dell'utente 

yourpwPlaceholder.innerHTML = messagepw + " " + name + surname + favColor + 21;