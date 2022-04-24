const button1 = document.getElementById("btn");

button1.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
});


//aBigNumber: Es el número mas grande que puede tener javascript.
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise.allSettled: nos va a devolver una promesa que se resuelve despues de que 
//todas las promesas dadas se hallan cumplido o rechazado en una serie de objetos 
//que se describe el resultado de cada promesa.
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

//globalThis: 
console.log(window);
console.log(globalThis);

//Operador Nulo.
const food = 'aaron' ?? 'default string';
console.log(food);

//OptionalChange: Vamos a poder trabajar diferentes niveles de estos recursos, 
//agregando un signo de pregunta.
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}

