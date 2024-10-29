function verificarPalavra(frase, palavra) {
    return frase.includes(palavra);
}

const frase = "Hoje o tempo está muito quente";
const palavra = "tempo";

const estaPresente = verificarPalavra(frase, palavra);

if (estaPresente) {
    console.log(`A palavra "${palavra}" está presente na frase.`);
} else {
    console.log(`A palavra "${palavra}" não está presente na frase.`);
}
