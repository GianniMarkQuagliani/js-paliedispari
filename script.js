// Associo event listener al pulsante di verifica per la parola palindroma
document.getElementById("verificaPalindromaBtn").addEventListener("click", verificaPalindroma);
// Da ELIMINARE
console.log(document.getElementById("verificaPalindromaBtn"));

// Associo event listener al pulsante di verifica per Pari o Dispari
document.getElementById("verificaPariDispariBtn").addEventListener("click", verificaPariDispariBtn);

// Da ELIMINARE
console.log(document.getElementById("verificaPariDispariBtn"));

// Creo una funzione per verificare se una parola è palindroma
function verificaPalindroma() {
    const parola = document.getElementById("parolaInput").value.toLowerCase().replace(/\s/g, '');
    
    // Inverto la parola
    const parolaInvertita = parola.split('').reverse().join('');
    
    // Ottengo l'elemento HTML in cui verrà mostrato il risultato
    const risultatoPalindroma = document.getElementById("risultatoPalindroma");

    // Verifico se la parola originale e mostro il risultato
    if (parola === parolaInvertita) {
        risultatoPalindroma.innerHTML = `La parola "${parola}" è palindroma.`;
    } else {
        risultatoPalindroma.innerHTML = `La parola "${parola}" non è palindroma.`;
    }
}

// Creo una funzione per generare un numero casuale da 1 a 5
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

// Creo una funzione per verificare se un numero è pari o dispari
function isPari(numero) {
    return numero % 2 === 0;
}