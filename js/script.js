// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// 2 array 1 casuale, 1 scelto dall'utente
let rndNumbers = randomNumbers ()
let userNumbers = []
//stampo su schermo i numeri casuali
document.getElementById("number").innerHTML = `${rndNumbers}`;

// timer leggermente inferiore per far saparire i numeri prima del prompt
setTimeout(function() {
document.getElementById("number").innerHTML = ``;
}, 2900)

//timer 30 secondi e faccio scrivere i numeri dell'utente e controllo se sono giusti
setTimeout(function() {
    userNumbers = insertNumbers();
    console.log(userNumbers);
    let n = checkNumber();
    if(checkNumber()){

    }
}, 3000);



//creo 5 numeri casuali e li pusho nell'array casuale
function randomNumbers () {
    let array = []
    while(array.length < 5){
        let n = Math.floor(Math.random()*100)+1
        if(!array.includes(n)){
            array.push(n)
        }
    }
    return array
}
// creo funzione che fa inserire i 5 numeri dell'utente
function insertNumbers(){
    let array = [];
    for(let i = 0; i < 5; i++){
    array.push(parseInt(prompt("inserisci i numeri che ricordi")))
    }
    return array
}
// ho bisogno di una funzione che controlli i numeri inseriti dall'utente e controllare quali sono giusti e quali no
function checkNumber(){
    let array = []
    for(let i = 0; i < rndNumbers.length; i++){
        for(let j = 0; j < userNumbers.length; j++){
            if(userNumbers[j] === rndNumbers[i]){
                array.push(userNumbers)
                console.log(array);
            }
        }
}
}