// 1 FUNCIONES FLECHA

// 1.1
// Convierte la siguiente función en una función flecha:
function saludar() {
  return "Hola";
};
// funcion flecha
const saludar1 = () => {
   return "Hola"
} ;
// funcion flecha
const saludar2 = () => "hola";
  

// 1.2
// Convierte la siguiente función en una función flecha en línea:
function division(a,b) {
  return a / b;
  };
// funcion flecha en linea
const division1 = (a,b) => a + b; 


// 1.3
// Convierte la siguiente función en una función flecha:
function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
  };
// funcion flecha
const miNombre1 = (nombre) => `Mi nombre es ${nombre}`;

                                
// 1.4
// Convierte las siguientes funciones en funciones flecha:
// test2
function test2() {
  console.log("Función test 2 ejecutada.");
  };
// test2 funcion flecha
const test22 = () => {
  console.log("funcion test 2 ejecutada.");
};
// test1
 function test1(callback) {
  callback();
  }
// test1 funcion flecha
const test11 = (callback) => {
  callback ();
};


// 2 FOREACH
// Utiliza la siguiente array para resolver los próximos ejercicios:
let personas = [
  {
  nombre: "Jamiro",
  edad: 45,
  },
  {
  nombre: "Juan",
  edad: 35,
  },
  {
  nombre: "Paco",
  edad: 34,
  },
  {
  nombre: "Pepe",
  edad: 14,
  },
  {
  nombre: "Pilar",
  edad: 24,
  },
  {
  nombre: "Laura",
  edad: 24,
  },
  {
  nombre: "Jenny",
  edad: 10,
  },
  ];
// 2.1
// Crea un array con la gente mayor de 25 años y muéstralo por consola
const personasMayoresDe25 = []

personas.forEach(persona => {
 if(persona.edad > 25) {
  personasMayoresDe25.push(persona);
 }
});
console.log(personasMayoresDe25);

// 2.2
// Crea un array con la gente que empieza por J.
const personasPorJ = []

personas.forEach(persona => {
 if(persona.nombre[0] == "J" ) {
  personasPorJ.push(persona);
 }
});
console.log(personasPorJ)


// 3 MAP
// 3.1
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola
const personasMayoresDe025 = personas
  .filter(persona => persona.edad > 25)
  .map(persona => persona);

console.log(personasMayoresDe025);

// 3.2
// Crea un array con la gente que empieza por J
const personasConJ = personas
  .filter(persona => persona.nombre.charAt(0) === "J")
  .map(persona => persona);
console.log(personasConJ)

// 3.3
// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];

const numerosElevados = numbers.map(numero => numero **numero)
console.log(numerosElevados)

// 4 FILTER
// 4.1
// Crea un segundo array que devuelva los impares
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impar = numbers1.filter(numero => {
  if (numero % 2 != 0) {
    return numero
  }
})
console.log(impar)
// 4.2
// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
  { name: 'Tempeh', isVeggie: true },
  { name: 'Cheesbacon burguer', isVeggie: false },
  { name: 'Tofu burguer', isVeggie: true },
  { name: 'Entrecot', isVeggie: false }
  ];

const platoVegano = foodList
.filter(comida => comida.isVeggie)
.map(comida =>`Que rico ${comida.name} me voy a comer`)
console.log(platoVegano)

// 5 REDUCE
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];

const multipli = numeros.reduce((a,b)=> a * b)
console.log(multipli)