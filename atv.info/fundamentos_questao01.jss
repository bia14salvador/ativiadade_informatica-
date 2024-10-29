const hoje = new Date();
const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

const diaSemana = diasDaSemana[hoje.getDay()];
const horaAtual = hoje.toLocaleTimeString('pt-BR');

console.log(`Hoje é: ${diaSemana}.`);
console.log(`A hora atual é: ${horaAtual}.`);
