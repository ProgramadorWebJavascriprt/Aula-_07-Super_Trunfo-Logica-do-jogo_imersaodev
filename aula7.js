// Quarta-feira,29/09/2021{à tarde} das 14:00:00 até as 15:11:00 h +|-
// Obs.: Rafa explica como será o jogo...
var carta1 = {
    nome: "Ikki de Fênix",
    atributos: {
      ataque: 8,
      defesa: 9,
      forca: 9
    }
  };
  var carta2 = {
    nome: "Harpy Valentine ",
    atributos: {
      ataque: 7,
      defesa: 8,
      forca: 7
    }
  };
  var carta3 = {
    nome: "Shaka de Virgem",
    atributos: {
      ataque: 8,
      defesa: 9,
      forca: 9
    }
  };
  // console.log(carta1.atributos.ataque);
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  }// Quinta-feira,30/09/2021{amanhã} das 08:00:00 até as 09:55:00 h+|-
function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes"); /*coloquei  {documment}*/
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    // console.log(atributo);
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      " '>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}
function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  // console.log(atributoSelecionado);
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu , a carta da Máquina é maior..";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(valorCartaMaquina);
  // console.log(cartaJogador.atributos[atributoSelecionado]);
}
  
