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
  }
  