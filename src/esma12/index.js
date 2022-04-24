//El mátodo replace solo reemplaza la primera palabra que coincida.
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

//El método replaceAll nos permite reemplazar todas las palabras que coincidan.
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//Metodos privados los que vamos a poder usar dentro de las clases,
//ya no es necesario poner la palabra private solo se debe agregar el signo numeral.
class Message {
    #show(val){
        console.log(val);
    };
}
const message = new Message();
console.log(message.show);

//PromiseAny: Es un objeto global de promise cuyo argumento va hacer la forma de un array de 
//promesas que vamos nosotros a pasarle gestionando y capturando la respuesta de la primera promesa
//que sea resuelta de forma satisfactoria.
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

//weakRef: un objeto weakRef le permite mantener una referencia debil a otro objeto
//sin evitar que este objeto sea pasado o recogido por el recolector de basura de javaScript.
class anyClass {
    constructor(element){
        this.ref = new weakRef(element)
    }
}

//Elementos de expresiones y operadores 
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1);

let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue ??= isFalse);

