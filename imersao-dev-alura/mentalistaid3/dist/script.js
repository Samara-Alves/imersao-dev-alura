//numero secreto sorteado

var numeroSecreto = parseInt(Math.random() * 11);


//elemento
function Chutar() {
   var tentativas = document.getElementById("tentativas");
  var elementResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, você acertou!!"
  } elementoResultado.innerHTML = "Que pena, você errou."
  } else {
   elementoResultado.innerHTML = "Errou, o número secreto era " + numeroSecreto;
  }
}