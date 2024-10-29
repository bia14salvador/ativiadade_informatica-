function invertendoNumero(numero) {
  const numeroInvertido = numero.toString().split('').reverse().join('');
  return parseInt(numeroInvertido, 10); 
}

const numero = 12356;
const resultado = inverterNumero(numero);
console.log(resultado); 
