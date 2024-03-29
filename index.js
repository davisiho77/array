// array vacio 
let arrayVacio = [];
//Crear un array con elementos
let arrayConElementos = [1, 2, 3, 4, 5];
//Crear un array con elementos de diferentes tipos de datos
let arrayDiferentesTipos = [1, 'dos', true, { nombre: 'Juan' }];
//Crear un array utilizando el constructor Array
let arrayConstructor = new Array(3);
//Crear un array con una secuencia numérica usando el método
let secuenciaNumerica = Array.from({ length: 5 }, (_, index) => index + 1);
//Crear un array mediante la repetición de un valor utilizando el método
let arrayRepetido = Array(5).fill('a');
//Crear un array a partir de una cadena de texto usando el método
let cadena = 'Hola, cómo estás';
let arrayDesdeCadena = cadena.split(' ');
//Crear un array combinando dos arrays existentes utilizando el operador
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayCombinado = [...array1, ...array2];
//Crear un array con valores únicos utilizando el método y el operador
let arrayConValoresRepetidos = [1, 2, 2, 3, 3, 4, 5];
let arrayUnico = [...new Set(arrayConValoresRepetidos)];
//Crear un array con una función que genere valores dinámicamente
function generarArrayDinamico(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(Math.random());
    }
    return array;
  }
  
  let arrayDinamico = generarArrayDinamico(5);
  //Obtener la longitud de un array
  const array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5
//Agregar elementos al final del array usando
const ElementosSuando = [1, 2, 3];
const newElement = 4;
array.push(newElement);
console.log(newElement); // Output: 4
//Eliminar el último elemento del array usando
const EliminarUsando = [1, 2, 3, 4];
const removedElement = array.pop();
console.log(removedElement); // Output: 4
console.log(array); // Output: [1, 2, 3]
//Agregar elementos al principio del array usando
const elementoPrincipio = [2, 3, 4];
array.unshift(1);
console.log(array); // Output: [1, 2, 3, 4]
//Eliminar el primer elemento del array usando
const EliminarPrimerUsando = [1, 2, 3, 4, 5];
array.shift();
console.log(array); // Output: [2, 3, 4, 5]
//Obtener una porción del array usando
const ObtenerPorcion = [1, 2, 3, 4, 5];
const slicedArray = array.slice(2, 4);
console.log(slicedArray); // Output: [3, 4]
//Convertir un array en un string usando 
const ConvertirString = ['apple', 'banana', 'orange'];
const string = array.join(', '); // Puedes elegir cualquier separador, aquí se utiliza una coma seguida de un espacio
console.log(string); // Output: "apple, banana, orange"
//Obtener una subsección del array desde un índice negativo usando
const SubsecciónNegativo = [1, 2, 3, 4, 5];
const subArray = array.slice(-3);
console.log(subArray); // Output: [3, 4, 5]
//Eliminar una porción del array sin modificar el original usando 
const EliminarModificar = [1, 2, 3, 4, 5];
const newArray = array.slice(0, 2).concat(array.slice(3));
console.log(newArray); // Output: [1, 2, 4, 5]
/*Agregar múltiples elementos al principio del array usando  con
spread operator */
let MúltiplesEltiples = [3, 4];
const newElements = [1, 2];

array.unshift(...newElements);

console.log(array); // Output: [1, 2, 3, 4]