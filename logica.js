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
/* 
let nombre = "Luis";
let edad = 20;

console.log(`Número es: ${nombre} y la edad es: ${edad}`);
console.log(`El nombre es: ${nombre} y la edad es: ${edad}`);
 */

// !funcionesdelDom
/* const cambiarTexto = () => {
  let titulo = document.getElementById("titulo");
  if (titulo.innerText == "La lista de los leguajes de progrmacion") {
    console.log(titulo.innerText);
    titulo.innerText = "Javascript";
    console.log(titulo.innerText);
  } else {
    titulo.innerText = "La lista de los leguajes de progrmacion";
  }
}; */

/* const sumar = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = parseFloat(num1) + parseFloat(num2);
  document.getElementById("resultado").value = resultado;
};

const restar = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = num1 - num2;
  document.getElementById("resultado").value = resultado;
};

const multiplicar = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;         
  let resultado = num1 * num2;
  document.getElementById("resultado").value = resultado;
};  

const dividir = () => {
  let num1 = document.getElementById("num1").value;           
  let num2 = document.getElementById("num2").value;
  let resultado = num1 / num2;
  document.getElementById("resultado").value = resultado; 
};       */

/* const calcular = (operacion) => {
  if (operacion == "sumar") {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").value = resultado;
  } else if (operacion == "restar") {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").value = resultado;
  } else if (operacion == "multiplicar") {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").value = resultado;
  } else if (operacion == "dividir") {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").value = resultado;
  } else {
    console.log("Operacion no valida");
  }
}; */

// !clases
// ?constructor padre
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
const persona1 = new Persona("Luis", 20);
persona1.saludar();

// ?constructor hijo
class Materia extends Persona {
  constructor(nombre, edad, materia, nivel) {
    // ? llamando al constructor de la clase padre
    super(nombre, edad);
    this.materia = materia;
    this.nivel = nivel;
  }
  saludar() {
    console.log(
      `hola mi no es ${this.nombre} y tengo ${this.edad} y estudio la materia de ${this.materia} 
      y mi dificultad de la materia es ${this.nivel}`
    );
  }
}
// ?instanciando de clase padre que forma parte de la clase hijo
const Mimateria = new Persona("Manuel", 20);
Mimateria.saludar();

// ?instanciando de clase hijo que hereda de la clase padre
const materia1 = new Materia("Luis", 20, "Programacion", "Intenmedia");
materia1.saludar();



