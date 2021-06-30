// console.log("JS OK");


/* 
ESERCIZIO:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */


/* STEP:
1. Creare le variabili con nome, cognome, colore preferito; Creare variabili messaggio per utente e numero da assegnare alla password;
2. Recupero elemento HTML -> assegnare variabile al document.getElement;
3. Creare i prompt per nome, cognome e colore preferito;
4. Console.log per ogni variabile;
5. Inserire le variabili concatenate per fornire la password all'utente; 

*/


// Variabili - assegnazione e dichiarazione

var message = "La tua password è:";
var numberPw = "21";
var yourpwPlaceholder = document.getElementById("yourpw");

var userName = prompt("Come ti chiami?");
var userSurname = prompt("Quale è il tuo cognome?");
var userColor = prompt("Quale è il tuo colore preferito?");
console.log ("Nome: ", userName);
console.log ("Cognome: ", userSurname);
console.log ("Colore preferito: ", userColor);
console.log ("Elemento HTML: ", yourpwPlaceholder);


// Scriviamo la password dell'utente 

yourpwPlaceholder.innerHTML = message + " " + userName + userSurname + userColor + numberPw;