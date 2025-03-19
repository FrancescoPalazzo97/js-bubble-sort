let n = parseInt(prompt("Qaunti numeri vuoi inserire?")); // Chiedo all'utente quanti numeri vuole inserire
let numbers = []; // Creo un array vuoto

if (isNaN(n)) { // Controllo se l'utente ha inserito un numero
  alert("Non hai inserito un numero"); // Messaggio di errore}
} else {
    for (let i = 0; i < n; i++) { // Ciclo per n volte
        numbers.push(prompt("Inserisci un numero")); // Inserisco il numero nell'array
        if (isNaN(numbers[i])) { // Controllo se l'utente ha inserito un numero
        alert("Non hai inserito un numero"); // Messaggio di errore
        break; // Esco dal ciclo
        }
    }
}

console.log(numbers); // Stampo l'array
let numbersString = numbers.join(`, `); // Creo una stringa con i numeri inseriti
alert (`I numeri inseriti sono: ${numbersString} `); // Messaggio con i numeri inseriti