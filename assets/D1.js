/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
Ci sono 5 principali tipi di datatype:
1)String :  definisce dati di carattere testuale
2)Number :  definisce dati numerici, cioe` il valore numerico assegnato al datatype
3)Boolean: datatype logico che accetta solo 2 valori: true(vero) o False(falso)
4)Undefined : datatype ancora indefinito in attesa di un'assegnazione
5)Null : datatype volontariamente definito come nullo, cioe` senza nessun valore
 */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "lorenzo";
console.log("myName = ", myName);

/* ESERCIZIO 3 
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let nu1 = 12 + 20;
console.log("nu1 = ", nu1);
/*con una sola variable*/

let num1, num2, num3;
num1 = 12;
num2 = 20;
num3 = num1 + num2;
console.log("num3 = ", num3);
/* con variabili per ogni valore*/

console.log("12+20 = ", 12 + 20);
/* direttamente dalla console*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log("x = ", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Baldassari";
console.log("myName = ", myName);
const fixedNumber1 = 4;
console.log("fixedNumber1 = ", fixedNumber1);
/*fixedNumber1 = 10;
console.log(fixedNumber1); */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("4-x = ", 4 - x);
console.log("x-4 = ", x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john",
  name2 = "John";
console.log("name1 e`", name1, " name2 e`", name2);
console.log("name1 e` uguale a name2?", name1 === name2);
console.log(
  "name1 e` uguale a name2 utilizzando lowercase?",
  name1.toLowerCase() === name2.toLowerCase()
);
