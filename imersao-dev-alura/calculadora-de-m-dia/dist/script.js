function situacao() {
  let nome = window.prompt('Qual o nome do aluno?');
  let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
let n2 = Number(window.prompt(`Qual foi a segunda nota de ${nome}?`));

 notaFinal = (n1 + n2) / 2;
  
  let res = document.querySelector('section#res');
  res.innerHTML = `Calculando a média final de ${nome}.
  <br>As notas obtidas foram ${n1} e ${n2}. 
  <br>A média final é de ${notaFinal}!`;
}