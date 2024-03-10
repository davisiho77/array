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