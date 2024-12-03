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
I data type sono i tipi di dato che posso assegnare a una variabile nel linguaggio Javascript. Esistono diversi tipi di datatypes in JavaScript, a seconda dell'informazione di cui disponiamo. I primi 3 tipi di dati che mi vengono in mente sono: stringa, numeri e boolean. Le stringhe sono sequenze di caratteri, o anche composte da un carattere solo. Per definire una stringa, bisogna utilizzare degli apici, che possono essere doppi o singoli (solitamente si utilizzano i doppi apici)facendo attenzione a terminare la stringa con lo stesso tipo di apice con il quale si è cominciata. Il tipo di dato a NUMERO, invece, come suggerisce la parola stessa è un numero che può essere sia di tipo intero o anche decimale ed è caratterizzato dalla scrittura semplice del numero, senza utilizzare ddei caratteri specifici, o nel caso delle stringhe, degli apici. Il terzo tipo di dato è BOOLEAN che non è altro che un valore che varia da 0 a 1, avendo soltanto due tipi di risposte/dati. Lo 0 si riferisce a FALSO mentre l'1 a VERO. 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* 
let myName = "Vincenzo"; per assegnare alla variabile myName la stringa Vincenzo
console.log(myName) per visualizzarla nella console del mio file HTML su google chrome
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
 Cominciamo assegnando i due valori a due variabili A e B
 let a = 12;
 let b = 20;
 Dopo di che, stampiamo sulla console l'operazione necessaria per ottenere la somma delle due variabili, cioè:
 console.log(a+b)
 Oltre a questo metodo, possiamo anche arrivare a sapere il risultato della somma di 12 e 20, assegnando alla SOLA variabile a il valore della somma di 12+20:
 let a = 12+20;
 E poi, ovviamente, andiamo a stampare il valore di a
 console.log(a);
 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* 
Cosa molto semplice, creiamo una variabile di nome X ed assegnamo il valore NUMERICO 12
let x = 12
Adesso andiamo a stampare il valore della variabile X
console.log(x)
 */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* 
Premettiamo l'esistenza di una funzione chiamata COSTANTE. Come ci suggerisce già il nome, la COSTANTE ha un valore che non può essere cambiato e quindi, una volta creato, rimarrà quello fino alla fine della nostra funzione. La costante si indica con l'attributo "const"
Adesso andremo ad assegnare il valore stringa alla variabile myName, con il mio nome. (in questo caso andremo prima a creare una variabile di nome myName e poi andremo a modificarla)
let myName = "Vincenzo"
Adesso la variabile myName avrà valore "Vincenzo", infatti dato che è una variabile, andremo ad assegnare un altro valore stringa a myName, cioè il mio cognome, in questo modo:
myName = "Moussa"
Adesso la variabile myName avrà valore stringa "Moussa". Al contrario, la COSTANTE non può essere cambiata, perchè come già detto prima, si avvale di un valore COSTANTE.
QUindi, alla fine, il codice avrà più o meno questo aspetto:
let myName = "Vincenzo"
console.log(myName)  comparirà nella console il nome Vincenzo
myName = "Moussa"    abbiamo cambiato il valore a myName
console.log(myName)   comparirà il valore cambiato, in Moussa
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
Andiamo a dichiarare il valore della variabile X che dev'essere uguale a 12 in questo modo:
let x = 12
E poi andiamo a svolgere una normale operazione aritmetica tra i due valori:
console.log(4-x)
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*
 Creiamo le due variabili:
 let name1 = "john"
 let name2 = "John"
 Adesso utilizzeremo un operatore logico, che ci permetterà di ottenere un risultato, che sia true o false, avvalendoci dei segni  > < e =. Se andassimo a scrivere l'= in questo modo, non otterremmo un risultato perchè non possiamo utilizzare i simboli utilizzati come "parole chiave", quindi andremo ad utilizzare il doppio uguale (utilizzato per verificare che il valore delle due variabili sia uguale, a prescindere dal tipo, e il triplo uguale che serve appunto per verificare che oltre al valore uguale ci sia anche lo stesso tipo di valore) In questo caso, andiamoa a stampare questo operatore:
 console.log(name1 == name2)  otterremo true, perchè il valore delle due variabili è DIVERSO, visto che name2 comincia con la lettera maiuscola.
 Allo stesso modo, possiamo utilizzare gli operatori negativi di disuguaglianza e di non identità che funzionano allo stesso modo. != e !==, dove quello con un solo uguale andrà a verificare la disuguaglianza del solo valore, mentre quello con i due = andrà a verificare la disuguaglianza sia del valore che del tipo.
 console.log(name1 != name2)   true
 Per verificare che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase, utilizziamo il seguente metodo:
 console.log(name1 == name2 .toLowerCase()) - in questo caso, il metodo che andremo ad utilizzare è .toLowerCase()
 */

