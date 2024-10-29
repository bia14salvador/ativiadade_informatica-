function buscarMaiorEMenor(numeros) {
  let maior = numeros[0];
  let menor = numeros[0];

  for (let numero of numeros) {
    if (numero > maior) {
      maior = numero; // Atualiza o maior
    }
    if (numero < menor) {
      menor = numero; // Atualiza o menor
    }
  }

  return { maior, menor }; 
}
