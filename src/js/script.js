const key = "69699de5f0bc8b991a9cd68405c41fab";

function colocarDadosNaTela(dados) {
    document.querySelector(".tempocidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(localcidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localcidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const localcidade = document.querySelector(".cidade").value;
    buscarCidade(localcidade);
}
