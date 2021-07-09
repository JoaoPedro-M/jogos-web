
let perguntas_respostas = [
    "Você gosta de batata?", ["Sim!", "Não!"],
    "Você já surfou esse mês?", ["Sim!", "Não!"],
    "Você já andou a cavalo?", ["Claro!", "Nunca"],
    "Já sonhou que estava voando?", ["Claro!", "Não"],
    "Viajou para fora do país?", ["Sim!", "Não!"],
    "Deseja conhecer o mundo?", ["Sim", "Não"],
    "Gostou das Perguntas?", ["Claro!", "Horríveis"]
]

var cont = 0;
var proxima_pergunta = 0;

function jogar(res) {

    let bt1 = document.getElementById("bt1");
    let bt2 = document.getElementById("bt2");
    let pergunta = document.getElementById("pergunta");
    let contador = document.getElementById("contador");

    if (proxima_pergunta == 14) {
        let fim = document.getElementById("fim");
        pergunta.innerHTML = "Fim! <br> Espero que tenha gostado... <br> ";
        bt1.innerHTML = "tchau";
        bt2.innerHTML = "tchau";
        contador.innerHTML = `Pontos: ${cont}`;
        fim.innerHTML = '(Se fez mais que 6 pontos<br> já ganhou meu coração...)';
    } else {
        bt1.innerHTML = `${perguntas_respostas[proxima_pergunta+1][0]}`;
        bt2.innerHTML = `${perguntas_respostas[proxima_pergunta+1][1]}`;
        pergunta.innerHTML = `${perguntas_respostas[proxima_pergunta]}`;
        proxima_pergunta += 2;
        if (res) {
            cont += 1;
        } else {
            cont += 0;
        }
        contador.innerHTML = `Pontos: ${cont}`;
    }

    

    

    
}

