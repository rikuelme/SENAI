var opcaoEscolhida = "";
var pontosJogador = 0;
var pontosPc = 0;
var nomeJogador = '';
while(nomeJogador == ''){
    nomeJogador = prompt("Digite o seu nome").trim();
}

function escolher(imagem) {
    document.getElementById("pedra").style.filter = 'grayscale(100%)';
    document.getElementById("papel").style.filter = 'grayscale(100%)';
    document.getElementById("tesoura").style.filter = 'grayscale(100%)';
    // console.log(imagem);
    imagem.style.filter = "none";
    opcaoEscolhida = imagem.id;
}

function jogar() {
    if (opcaoEscolhida === "") {
        return "";
    }

    // console.log("O jogo vai inicar e a opção escolhida foi " + opcaoEscolhida);
    var numero = Math.floor(Math.random() * 3) + 1;
    console.log(numero);
    var novaImagem = "";
    switch (numero) {
        case 1:
            novaImagem = "pc-papel";
            break;
        case 2:
            novaImagem = "pc-pedra";
            break;
        case 3:
            novaImagem = "pc-tesoura";
            break;
        default:
            novaImagem = "pc";
    }

    var pc = document.getElementById("pc");
    pc.src = "img/" + novaImagem + ".jpg";
    pc.style.filter = "none";
    var placar = document.getElementById("placar");
    var resultado = ""
    if (opcaoEscolhida == novaImagem.replace("pc-", "")) {
        resultado = "Empate";
    } else if (
        (opcaoEscolhida == "papel" && novaImagem == "pc-pedra") ||
        (opcaoEscolhida == "pedra" && novaImagem == "pc-tesoura") ||
        (opcaoEscolhida == "tesoura" && novaImagem == "pc-papel")
    ) {
        resultado = "Vitoria";
        pontosJogador++;
    } else {   //derrota  se for diferente de tudo isso
        resultado = "Derrota";
        pontosPc++;
    }

    placar.innerHTML = pontosJogador + " " + resultado + " " + pontosPc;

    if(pontosPc == 3 || pontosJogador == 3){
        (pontosPc == 3)?vencedor = "PC": vencedor = nomeJogador;
        alert("Fim de Jogo o vencedor foi o "+vencedor);
    }
}