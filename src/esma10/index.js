//Es el valor de profundidad sobre la cual quieres trabajar el método flat. profundidad se refiere 
//a nivel 0,1,2 de acuerdo al número de corchetes.
let array = [1,2,3,[4,5,6,[7,8,9]]];

console.log(array.flat(0));

//FlatMap: me va a permitir mapear cada elemento de un array, despues pasarle una función y
//realizar una operación.
let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value => [value, value * 2]));

//trimStart: Me va a permitir eliminar los espacios en blanco de un string que estén aselante.
let hello = '           hello World';

console.log(hello);
console.log(hello.trimStart());

//trimEnd: Me va a permitir eliminar los espacios en blanco de un string que estén al final.
let hello1 = 'hello World                 ';

console.log(hello1);
console.log(hello1.trimEnd());

//antes declarabamos el error así
try{

}catch(error) {
console.log(error);
}
//ahora ya no es necesario declarar el error primero sino de frente lo mostramos
try{

}catch {
console.log(error);
}

//Convertir de array a objeto.
let entries = [["name", "oscar"], ["age", 25]];
console.log(Object.fromEntries(entries));


// el objeto de tipo simbolo el cual nos va a permitir acceder a una descripcion.
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
