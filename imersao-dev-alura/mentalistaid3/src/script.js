//numero secreto sorteado
var numeroSecreto = parseInt(Math.random() * 11);

//elemento
function Chutar() {
  var tentativas = document.getElementById("tentativas");
  var elementResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementResultado.innerHTML = "Parabéns, você acertou!!";
  } else if (chute > 10 || chute < 0) {
    elementResultado.innerHTML = "Que pena, você errou.";
  } else {
    elementResultado.innerHTML = "Errou, o número secreto era " + numeroSecreto;
  }
}
