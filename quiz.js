perguntas = {
    0: {
        enunciado: "Qual é a capital do Brasil?",
        alternativas: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
        resposta: 2
    },
    1: {
        enunciado: "Em que ano nasceu Senor Abravanel, mais conhecido como Silvio Santos?",
        alternativas: ["1930", "1935", "1940", "1945"],
        resposta: 0
    },
    2: {
        enunciado: "Qual é a cor do CEFET-MG?",
        alternativas: ["Azul", "Vermelho", "Verde", "Amarelo"],
        resposta: 0
    }
}

let questao_corrente = 0;
let alternativa_selecionada = null;

function carregarQuestao() {
    let questao = perguntas[questao_corrente];
    enunciado = document.querySelector("#enunciado");
    enunciado.innerText = questao.enunciado;
    alternativa_0 = document.querySelector("#alternativa-0");
    alternativa_1 = document.querySelector("#alternativa-1");
    alternativa_2 = document.querySelector("#alternativa-2");
    alternativa_3 = document.querySelector("#alternativa-3");
    alternativa_0.innerText = questao.alternativas[0];
    alternativa_1.innerText = questao.alternativas[1];
    alternativa_2.innerText = questao.alternativas[2];
    alternativa_3.innerText = questao.alternativas[3];
}

function selecionarAlternativa(alternativa) {
    alternativa_selecionada = alternativa;
}

function verificarResposta() {
    alternativa_correta = perguntas[questao_corrente].resposta;
    if (alternativa_selecionada == alternativa_correta) {
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta!");
    }
    questao_corrente++;
    alternativa_selecionada = null;
    carregarQuestao();
}

a_0 = document.querySelector("#a-0");
a_1 = document.querySelector("#a-1");
a_2 = document.querySelector("#a-2");
a_3 = document.querySelector("#a-3");
a_0.onclick = function() {
    selecionarAlternativa(0);
};
a_1.onclick = function() {
    selecionarAlternativa(1);
};
a_2.onclick = function() {
    selecionarAlternativa(2);
};
a_3.onclick = function() {
    selecionarAlternativa(3);
};

btn_responder = document.querySelector("#btn-responder");
btn_responder.onclick = verificarResposta;

carregarQuestao();
