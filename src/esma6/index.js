//Así se trabaja antes
function newFunction(name, age, country){
    var name = name || 'Aaron';
    var age = age || 25;
    var country = country || 'Perú';
    console.log(name, age, country);
}

//ahora con ECMAScript 6

function newFunction2(name = 'Aaron', age = 25, country = 'Perú'){
    console.log(name, age, country);
}

//para correrlo en consola

newFunction2();
newFunction2('Fiorella', 24, 'Alemania');

//Concatenación o template literals
//antes
let hello = 'Hello';
let world = 'world';
let epicPhrase = hello+ ' '+world;
console.log(epicPhrase);
//Ahora con ecmascript
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilinea de String
//antes se usaba así
let lorem = "Otra frace épica que necesitamos "+
"Otra franse que no necesitamos";
//en ECMAScript6+
let lorem2 = `Otra vez épica que necesitamos
otra frace epica que tenemos`;

console.log(lorem);
console.log(lorem2);

//Desestructuración de elementos
//antes
let person = {
    'name': 'Aaron',
    'age': 25,
    'country': 'Perú'
}
//con ECMAScript6+
console.log(person.name, person.age, person.country);
//
let {name, age, country} = person;
console.log(name, age, country);

//Operador de Propagación.
//Vamos  tener ciertos elementos en arreglos y se desea unirlos en un solo element 
let team1 = ['Aaron', 'Fiorella', 'Bianca'];
let team2 = ['Rosa', 'Magna', 'Medali'];

let education = ['David', ...team1, ...team2];
console.log(education);

//Parámetros en objetos.
let name1 = 'Aaron';
let age1 = 25;
//antes
obj = {name1: name1, age1: age1};
//en ECMAScript 6+
obj2 = {name1, age1};
console.log(obj2);

//Arrow Functions
let names = [
    {name2: 'Aaron', age2: 25},
    {name2: 'Fiorella', age2: 24}
];
//antes
let listaOfName = names.map(
    function(item){
        console.log(item.name2, item.age2);
    }
);
//con ECMAScript 6+
//forma 1
let listaOfName2 = names.map(resp => console.log(resp.name2, resp.age2));
//forma 2
const listaOfName3 = (name1, age1) => {
    return(name1, age1);
};
console.log(listaOfName3('12','13'));
//forma 3
const listaOfName4 = name2 => {
    console.log(name2);
};
//forma 4
const square = num => num * num;

//Promesas
const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('hey!');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(responde => console.log(responde))
.then(() => console.log('hola'))
.catch(error => console.log(error));

//Clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//Modulos
//
import hello from './module'
//Despues que lo importamos recien podemos utilizarlo.
hello();

//Generator
//Generator es una funcion especial que retorna una serie de valores segun el algoritmo definido
function* helloworld(){
    if(true) {
        yield 'hello';
    }
    if(true) {
        yield 'world';
    }
};

const generatorHello = helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

