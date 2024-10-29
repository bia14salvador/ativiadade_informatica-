function verificarPalavraNaFrase(frase, palavra) {
  return frase.includes(palavra);
}
const frase = "Alfabetização de crianças no Brasil";
const palavra = "crianças";
const resultado = verificarPalavraNaFrase(frase, palavra);
console.log(resultado);
