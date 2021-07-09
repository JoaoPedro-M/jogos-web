
let perguntas_respostas = {
    
}



function jogar(res) {

    let bt1 = document.getElementById("bt1");
    let bt2 = document.getElementById("bt2");
    let pergunta = document.getElementById("pergunta");
    let p = "Você gosta de batata?";
    let r1 = "sim!";
    let r2 = "não!";

    if (res) {
        bt1.innerHTML = `${r1}`;
        bt2.innerHTML = `${r2}`;
        pergunta.innerHTML = `${p}`;

    } else {
        bt1.innerHTML = `${r1}`;
        bt2.innerHTML = `${r2}`;
        pergunta.innerHTML = `${p}`;
    }


}