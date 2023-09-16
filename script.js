// Associo event listener al pulsante di verifica per la parola palindroma
document.getElementById("verificaPalindromaBtn").addEventListener("click", verificaPalindromaBtn);
// Da ELIMINARE
console.log(document.getElementById("verificaPalindromaBtn"));

// Associo event listener al pulsante di verifica per Pari o Dispari
document.getElementById("verificaPariDispariBtn").addEventListener("click", verificaPariDispariBtn);

// Da ELIMINARE
console.log(document.getElementById("verificaPariDispariBtn"));

// Creo una funzione per verificare se una parola è palindroma
function verificaPalindroma() {
    const parola = document.getElementById("parolaInput").value.toLowerCase().replace(/\s/g, '');
    const parolaInvertita = parola.split('').reverse().join('');
    const risultatoPalindroma = document.getElementById("risultatoPalindroma");

    if (parola === parolaInvertita) {
        risultatoPalindroma.innerHTML = `La parola "${parola}" è palindroma.`;
    } else {
        risultatoPalindroma.innerHTML = `La parola "${parola}" non è palindroma.`;
    }
}