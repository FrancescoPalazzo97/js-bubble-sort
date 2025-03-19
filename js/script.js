let n = parseInt(prompt("Qaunti numeri vuoi inserire?")); // Chiedo all'utente quanti numeri vuole inserire
let numbers = []; // Creo un array vuoto
let nCicleJ = 0; // Creo una variabile per contare i cicli
let nCicleI = 0; // Creo una variabile per contare i cicli

if (isNaN(n)) { // Controllo se l'utente ha inserito un numero
  alert("Non hai inserito un numero"); // Messaggio di errore}
} else {
    for (let i = 0; i < n; i++) { // Ciclo per n volte
        numbers.push(parseInt(prompt("Inserisci un numero"))); // Inserisco il numero nell'array
        if (isNaN(numbers[i])) { // Controllo se l'utente ha inserito un numero
        alert("Non hai inserito un numero"); // Messaggio di errore
        break; // Esco dal ciclo
        }
    }
}

console.log(numbers); // Stampo l'array
let numbersString = numbers.join(`, `); // Creo una stringa con i numeri inseriti
alert (`I numeri inseriti sono: ${numbersString} `); // Messaggio con i numeri inseriti

for (let i = 0; i < n; i++) { // Ciclo per la lunghezza dell'array
    for (let j = i + 1; j < n; j++) { // Ciclo per la lunghezza dell'array
        if (numbers[i] > numbers[j]) { // Controllo se il numero i è maggiore del numero j
            let temp = numbers[j]; // Creo una variabile temporanea e le assegno il valore dell'araay con indice j
            numbers[j] = numbers[i]; // Assegno il valore di i a j
            numbers[i] = temp; // Assegno il valore di temp a i
        } // chiudo if
        nCicleJ += 1; // Incremento il contatore dei cicli
    } // chiudo for j
    nCicleI += 1; // Incremento il contatore dei cicli
} // chiudo for i

console.log(numbers); // Ristampo l'array
numbersString2 = numbers.join(`, `); // Creo una stringa con i numeri inseriti
alert (`I numeri inseriti sono: ${numbersString2} `); // Messaggio con i numeri inseriti

console.log(`Il ciclo i è stato eseguito ${nCicleI} volte`); // Stampo il numero di cicli
console.log(`Il ciclo j è stato eseguito ${nCicleJ} volte`); // Stampo il numero di cicli