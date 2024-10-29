const ladoA = 6; 
const ladoB = 8; 
const ladoC = 10;
const s = (ladoA + ladoB + ladoC) / 2; 
const area = Math.sqrt(s * (s - ladoA) * (s - ladoB) * (s - ladoC)); 
console.log(`A área do triângulo é: ${area.toFixed(2)}`);
