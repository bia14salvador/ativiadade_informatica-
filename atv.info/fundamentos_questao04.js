function verificandoNumeros(num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2 === 30);
}
const numero1 = 25; 
const numero2 = 5; 

const resultado = verificandoNumeros(numero1, numero2);
console.log(`Resultado: ${resultado}`); 
