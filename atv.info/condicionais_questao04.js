const alunos = [
  ["Aluno1", [10, 50, 100]],
  ["Aluno2", [55, 78, 90]],
  ["Aluno3", [60, 65, 68]],
  ["Aluno4", [85, 90, 92]]
];

alunos.forEach((aluno) => {
  const nome = aluno[0];
  const notas = aluno[1];

  const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
  
  const status = media >= 70 ? "Aprovado" : "Reprovado";
  
  console.log(`${nome}, média ${media.toFixed(2)}, ${status}`);
});
