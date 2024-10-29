const numeros = [2, 3, 5, 7]; 
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + Math.pow(valorAtual, 3), 0); 

console.log(`A soma dos números é: ${soma}`);
