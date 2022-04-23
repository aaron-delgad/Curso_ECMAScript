//permite convertir un objeto a una matriz y devolver la clave y los valores de esa matriz.
const data = {
    frontend: 'Aaron',
    backend: 'Max',
    desing: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object.values. permite convertir un objeto en un array.
const data1 = {
    frontend: 'Aaron',
    backend: 'Max',
    desing: 'Ana'
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);

//Permite agregar contenido a un string adelante o al final del string, pero primero hay 
//que indicarle el numero total de letras que va a tener el string incluyendo el string original
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ------'));
console.log('food'.padEnd(12, ' -----'));

const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new('Test Error'))
    })
};

const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

HelloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherFunction();
