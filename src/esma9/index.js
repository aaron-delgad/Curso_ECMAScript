//Operador de reposo, el cual puede extraer las propiedades de un onjeto que aun
// no se ha construido.
const obj = {
    name: 'Aaron',
    age: 25,
    country: 'Perú',
};

let {country, ...all} = obj;
console.log(all);

//Con las Propiedades de propagación, vamos a poder unir uno o mas elementos de objetos a un nuevo
//objeto.
const obj1 = {
    name: 'Aaron',
    age: 25,
};

const obj2 = {
    ...obj1,
    country: 'Perú',
};

console.log(obj2);

//Promise.faimeli, podemos saber cuando ha terminado el llamdo y podemos 
//ejecutar alguna función o lógica de código.
const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'),3000) 
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizado'))

//Expresiones regulares. con esta mejora nos permite sacar una fraccion de una expresion regular
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);