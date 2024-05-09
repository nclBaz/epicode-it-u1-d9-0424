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

// ---------------- Esempio di funzione con parametro e con valore di ritorno ------------------
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

// ---------------- Esempio di funzione con 2 parametri e con valore di ritorno ------------------

function superSum(num1, num2) {
  const result = num1 + num2
  return result
  // return num1 + num2 // <-- Potrei direttamente fare anche così per accorciare il codice
}

console.log(superSum(2, 2))
console.log(superSum(3, 4))
console.log(superSum(1000, 2000))
console.log(superSum(2)) // Se passo solo un parametro mi ritornerà NaN (Not a Number)

const finalResult = superSum(1000, 1000) + superSum(2000, 2000)
console.log("FINAL RESULT: ", finalResult) // <-- 6000

// ---------------- Esempio di funzione con parametro di default ------------------
function saluti(persona = "Mario") {
  console.log("Ciao " + persona)
}

saluti("Giorgio")
saluti()

// -------------------------- HOISTING (Sollevamento) -----------------------------
// In JS un comportamento un po' 'anomalo' e quello dell'hoisting, cioè il fatto che la dichiarazione di una funzione può avvenire anche sotto al suo utilizzo. Ciò avviene anche sulle variabili dichiarate con VAR, e questa è una delle ragioni per le quali è sconsigliato l'utilizzo di var in favore invece di let e const. Per le funzioni l'hoisting non è un problema come lo è per le variabile.

// salutiConHoisting("Giorgio")
// salutiConHoisting()

// function salutiConHoisting(persona = "Mario") {
//   console.log("Ciao " + persona)
// }

// Una maniera per prevenire l'hoisting anche nel caso delle funzioni è dichiarare le funzioni con const nomeFunzione = function(){}. Essendo questa ora una const NON segue le regole dell'hoisting.
// Alcuni developer preferiscono questa sintassi proprio per essere sicuri di non utilizzare una funzione prima della sua dichiarazione, adottando quindi un approccio più naturale e lineare

// salutiSenzaHoisting("Giorgio") <-- NON POSSO FARLO se la funzione è CONST/LET
const salutiSenzaHoisting = function (persona = "Mario") {
  console.log("Ciao " + persona)
}

salutiSenzaHoisting("Giorgio")

// --------------------------------------- SCOPE (Ambito o visibilità) -----------------

const x = "X"
function qualsiasi() {
  const y = "Y" // y è una variabile INTERNA alla funzione, pertanto sarà visibile solo dal momento in cui è stata definita, fino alla fine della funzione
  // const x = "ICS" // Se ridichiarassi una variabile INTERNA con stesso nome di una ESTERNA, quella interna avrebbe priorità
  console.log(x) // X è una variabile ESTERNA, quindi sarà visibile dentro e fuori dalla funzione
  console.log(y)
}

console.log(x) // è visibile
//console.log(y) // NON è visibile
qualsiasi()

// ------------------------------------------- ARROW FUNCTIONS ------------------------------
// Sono funzioni che consentono di adottare una sintassi alternativa a quella classica e più sintentica
// Ad esempio consentono di non utilizzare le parentesi graffe quando l'istruzione nel body del funzione è una sola, in tal caso la freccia => sostituisce il return
// Se avessi bisogno di più istruzioni nel body basta aprire come sempre le graffe

const salutiArrow = (persona = "Mario") => {
  const variabile = "CIAO"
  // la freccia è fatta da '=' e '>'
  console.log(variabile + persona)
}

const quadratoNumero = function (numero) {
  return numero * numero
}

const quadratoNumeroArrow = numero => numero * numero
const sumArrow = (num1, num2) => num1 + num2

quadratoNumeroArrow(10) // -> 100
const senzaParametri = () => console.log("CIAO")
