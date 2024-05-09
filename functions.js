// ************************************* FUNCTIONS *************************************

// Le funzioni sono blocchi di codice riutilizzabile quante volte si vuole. Si può racchiudere
// all'interno del BODY di una funzione tutte le istruzioni che vogliamo poi poter richiamare semplicemente utilizzando il NOME della funzione.
// Le funzioni possono prevedere degli INPUT (valori in ingresso) detti PARAMETRI, e degli OUTPUT (valori in uscita), sia input che output però non sono obbligatori

// ---------------- Esempio di funzione con zero parametri e nessun output ------------------

// DICHIARAZIONE DI FUNZIONE
function bau() {
  // La lista parametri tra le parentesi tonde è vuota perché ha zero parametri
  console.log("CIAO SONO UN CANE FASTIDIOSO!")
  console.log("BAU")
  // Essendo che non c'è il return questa funzione allora non prevede output

  // const result = console.log("BAUUUUU") // <-- Console.log è una funzione (metodo) che non ritorna niente, quindi result sarà undefined
  // return result
  // return "BAUBAUBAU" // <-- Se faccio così ora è una funzione che torna una stringa
}

// UTILIZZO DELLA FUNZIONE
bau() // Nelle tonde non passo niente perché non servono parametri
bau()

const result = bau() // Non ha molto senso salvare ciò che mi ritorna la funzione bau in una variabile perché non torna niente, quindi result sarà UNDEFINED!
console.log("Risultato di bau:", result)

// ---------------- Esempio di funzione con zero parametri e con valore di ritorno ------------------
function sumFiveAndSix() {
  const result = 5 + 6
  return result // Sto ritornando il valore 11
}

// sumFiveAndSix() // Qua sto eseguendo la funzione ma non sto prendendo in considerazione il suo valore di ritorno
const undici = sumFiveAndSix()
console.log("Il risultato della funzione é: ", undici)
console.log(sumFiveAndSix())
console.log(undici)

// ---------------- Esempio di funzione con parametri e senza valore di ritorno ------------------
function sayHello(personName) {
  // personName è una variabile che esisterà solo da questa graffa alla graffa di chiusura della funzione
  if (personName) {
    // E' buona pratica controllare che un input non sia undefined prima di utilizzarlo
    console.log("Il parametro passato è: ", personName)
    console.log("Ciao " + personName.toUpperCase() + "!")
  } else {
    console.log("DEVI INSERIRE UN NOME!")
  }
}

sayHello("Diego") // Quando invoco la funzione, in quel momento stabilisco che valore avrà il parametro 'personName', in questo caso sarà "Diego"
sayHello("Francesca") // In questo altro caso sarà "Francesca"
sayHello() // Se non passo niente nelle parentesi il valore del parametro sarà UNDEFINED

// ---------------- Esempio di funzione con parametri e con valore di ritorno ------------------
function returnHello(personName) {
  // personName è una variabile che esisterà solo da questa graffa alla graffa di chiusura della funzione
  // if (personName!== undefined) {
  if (personName) {
    // Posso omettere !== undefined perché undefined è un valore FALSY, ovvero uno di quei valori che viene considerato come falso quando messo in un if()
    // E' buona pratica controllare che un input non sia undefined prima di utilizzarlo
    console.log("Il parametro passato è: ", personName)
    return "Ciao " + personName.toUpperCase() + "!"
  } else {
    return "DEVI INSERIRE UN NOME!"
  }
}

const return1 = returnHello("Mario") // "Ciao MARIO!"
console.log("RETURN1: ", return1)
const return2 = returnHello("Teo") // "Ciao TEO!"
console.log("RETURN2: ", return2)
const return3 = returnHello() // "DEVI INSERIRE UN NOME!"
console.log("RETURN3: ", return3)
