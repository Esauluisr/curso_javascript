// !varibles
/* let numero1 = 10;
let numero2 = 20;
 */
// !funciones
/* function sumar() {
  let resultado = numero1 + numero2;
  return resultado;
}

console.log("La suma es: ", sumar());

function restar() {
  let resultado = numero1 - numero2;
  return resultado;
}

console.log("La resta es: ", restar());

function multiplicar() {
  let resultado = numero1 * numero2;
  return resultado;
} */

// !funciones anonimas
/* let resultado1 = function () {
  return numero1 / numero2;
}; */

/* console.log("La division es: ", resultado1());*/
// !funciones flecha
/* let resultado2 = () => {
  return numero1 / numero2;
}; */

/* console.log("La division es: ", resultado2());
 */
// !arreglos
/* let arreglo = [1, 2, 3, 4, 5];

console.log("El arreglo es: ", arreglo);
console.log("El arreglo es: ", arreglo[4]);
 */
// !objetos
/* let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Ciudad de Mexico",
  estadocivil: "Soltero",
};

console.log("La persona es: ", persona);
 */
// !condicionales
/* if (numero1 > numero2) {
  console.log("El numero 1 es mayor que el numero 2");
} else {
  console.log("El numero 1 es menor que el numero 2");
}
 */
// !ciclos
/* for (let i = 0; i < 10; i++) {
  console.log(i);
} */

/* while (numero1 <= 10) {
  console.log(numero1);
  numero1++;
} */

// !bucles
/* for (let i = 0; i <= 5; i++) {
  if (i % 1 == 0) {
    console.log(i);
  }
}

//
for (let colores = 0; colores <= 5; colores++) {
  switch (colores) {
    case 0:
      console.log("rojo");
      break;
    case 1:
      console.log("azul");
      break;
    case 2:
      console.log("verde");
      break;
    case 3:
  }
} */
/* 
const suma = (a, b) => {
  if(a !== 10  && b !== 5)
  {
    throw new Error("No se puede sumar");
  }
  return a + b;
};   */

/* try {
  let numero1 = suma(0, 2);
  console.log("El resultado es: ", numero1);
} catch (error) {
  console.error("Error capturado:", error.message);
} */

// !Destructuracion

let nombre = "Luis";
let edad = 20;

console.log(`Número es: ${nombre} y la edad es: ${edad}`);
console.log(`El nombre es: ${nombre} y la edad es: ${edad}`);



