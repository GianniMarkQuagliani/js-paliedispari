// Associo event listener al pulsante di verifica per la parola palindroma
document.getElementById("verificaPalindromaBtn").addEventListener("click", verificaPalindroma);

// Associo event listener al pulsante di verifica per Pari o Dispari
document.getElementById("verificaPariDispariBtn").addEventListener("click", verificaPariDispariBtn);

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

// Funzione per verificare pari o dispari e dichiarare il vincitore
function verificaPariDispariBtn() {

    // Ottengo la scelta dell'utente
    const sceltaUtente = document.getElementById("sceltaUtente").value;
    
    // Ottengo l'elemento HTML in cui verrà mostrato il risultato
    const numeroUtente = parseInt(document.getElementById("numeroUtente").value, 10);

    // Creo un numero casuale da 1 a 5
    const numeroComputer = generaNumeroCasuale();

    // Calcolo la somma dei due numeri
    const somma = numeroUtente + numeroComputer;

    //Ottengo l'elemento HTML in cui verrà mostrato il risultato
    const risultatoPariDispari = document.getElementById("risultatoPariDispari");

    // Verifico se la somma è pari o dispari
    const sommaPari = isPari(somma);

    // Mostra il risultato
    if ((sceltaUtente === "pari" && sommaPari) || (sceltaUtente === "dispari" && !sommaPari)) {
        risultatoPariDispari.innerHTML = `Hai vinto! La somma (${somma}) è ${sceltaUtente}.`;
    } else {
        risultatoPariDispari.innerHTML = `Hai perso! La somma (${somma}) non è ${sceltaUtente}.`;
    }
}