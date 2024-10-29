const frase = "A vida é feita de pequenos momentos.";
const somaTamanho = frase.split(' ').reduce((acc, palavra) => acc + palavra.length, 0);

console.log(`A soma dos tamanhos das palavras na frase oferecida é: ${somaTamanho}`);
