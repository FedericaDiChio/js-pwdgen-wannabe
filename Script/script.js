console.log("JS OK");

/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */


// Variabili - assegnazione e dichiarazione

var messagepw = "La tua password è";
var yourpwplaceHolder = document.getElementById("yourpw");
console.log("yourpwplaceHolder.innerHTML");

var name = prompt("Come ti chiami?");
var surname = prompt("Quale è il tuo cognome?");
var favColor = prompt("Quale è il tuo colore preferito?")
console.log ("name");
console.log ("surname");
console.log ("favColor");


// Scriviamo la password dell'utente 

yourpwplaceHolder.innerHTML = messagepw + "" + name + surname + favColor + 21;