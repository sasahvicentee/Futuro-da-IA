const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você vê o impacto dos assistentes virtuais no diagnóstico médico de doenças?",
        alternativas: [
            {
                texto: "Os assistentes virtuais podem aumentar a precisão e a rapidez dos diagnósticos.",
                afirmacao: "A IA ajudou a reduzir erros de diagnóstico e acelerou o processo de identificação de doenças."
            },
            {
                texto: "Ainda prefiro confiar no diagnóstico realizado por médicos humanos sem a intervenção de IA.",
                afirmacao: "Apesar dos avanços tecnológicos, a confiança no diagnóstico humano se manteve predominante."
            }
        ]
    },
    {
        enunciado: "Quais são os benefícios das recomendações de tratamento fornecidas por assistentes virtuais?",
        alternativas: [
            {
                texto: "Eles podem oferecer opções de tratamento baseadas em vastos dados e pesquisas atualizadas.",
                afirmacao: "As recomendações de tratamento da IA ajudaram a encontrar terapias eficazes rapidamente."
            },
            {
                texto: "Os médicos devem fazer suas próprias pesquisas para encontrar o melhor tratamento para seus pacientes.",
                afirmacao: "A autonomia dos médicos em escolher tratamentos se mostrou crucial para decisões personalizadas."
            }
        ]
    },
    {
        enunciado: "A análise de exames por assistentes virtuais é confiável?",
        alternativas: [
            {
                texto: "Sim, porque eles podem analisar grandes quantidades de dados rapidamente e com precisão.",
                afirmacao: "A IA forneceu análises de exames precisas que ajudaram no diagnóstico inicial."
            },
            {
                texto: "Não, pois ainda prefiro a análise detalhada realizada por especialistas humanos.",
                afirmacao: "A análise humana foi crucial para captar detalhes que a IA poderia ter perdido."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2047...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
