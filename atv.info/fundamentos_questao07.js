const frase = "Harry Potter e a Ordem da Fênix";
const palavrasModificadas = frase.split(' ').map(palavra => {
    return palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase();}).join(' ');

console.log(palavrasModificadas);
