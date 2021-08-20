function GerarUmaPiada(){
    const piadaAPI = "http://api.icndb.com/jokes/random";
    console.log("gerar piada");
    let piadaAtual = "";

    $.ajax({
        url: piadaAPI,
        async: false,
        error: function(erro){
            console.log("erro:");
            console.log(erro);
        },
        success: function(dados){
            piadaAtual = dados.value.joke;
        }
    });


 document.querySelector("#piada-texto").innerText = piadaAtual;
}

const botaoGerarPiada = document.querySelector("#btCriarPiada");
botaoGerarPiada.onclick = function(){
    GerarUmaPiada();

} 

const piadaAPI = new SpeechSynthesisUtterance()

utterance.text = word 
utterance.lang = 'ja-JP' 
utterance.voice = voice 
utterance.rate = 0.8 