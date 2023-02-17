//não faz mais sentido usar isto, uma vez que é mais facil 
//acessar os botões  - e + pelo pai
// const somar = document.getElementById('somar');
// const subtrair = document.getElementById('subtrair');
// const braco = document.getElementById('braco');

// const controle = document.querySelectorAll(".controle-ajuste");
const controle = document.querySelectorAll("[data-controler]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const robotron = document.querySelector('[data-robotron]');

let count = 0;
const allRobos = [
    "../imagens-do-robotron/Robotron 2000 - Amarelo.png", 
    "../imagens-do-robotron/Robotron 2000 - Azul.png",
    "../imagens-do-robotron/Robotron 2000 - Preto.png",
    "../imagens-do-robotron/Robotron 2000 - Rosa.png",
    "../imagens-do-robotron/Robotron 2000 - Vermelho.png",
    "../imagens-do-robotron/Robotron 2000 - Branco.png"

];
const roboImg = document.querySelector('[data-robo-img]');
robotron.addEventListener("click", () => {
    roboImg.src = allRobos[count];
    count++;
    
    if(count >= allRobos.length){
        count = 0;
    }
    console.log('clicou com arrow ');
});


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        manipulaDados(event.target.dataset.controle, event.target.parentNode);
        // manipulaDados(event.target.textContent, event.target.parentNode);
                        //botão do simbolo da operação   ,
                                                    //container destes botões

        atualizaEstatistica(event.target.dataset.peca);
                                        //o .dataset vai pegar o nome do data-attribute
                                        //no caso, não precisa colocar data-peca, pois
                                        //ele entende que o data já se refere ao attribute,
                                        //por isso se coloca apenas o nome do attribute
                                        // * Explicação melhor no notion Sobre event.target.dataset no modulo 5 
    })
});

//Aumentando e diminuindo nivel do BRAÇOS
// somar.addEventListener("click", () => {manipulaDados("somar")});
// subtrair.addEventListener("click", () => {manipulaDados("subtrair")});

function manipulaDados(SimboloDaOperacao, controle){
    //buscar no controle (elemento pai)
    // const peca = controle.querySelector('.controle-contador');
    const peca = controle.querySelector('[data-contador]');
    
    if(SimboloDaOperacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}
                            //o nome deste paramentro não é o .peca desta linha
                            //atualizaEstatistica(event.target.dataset.peca);
function atualizaEstatistica(peca){
    console.log(pecas[peca]); //isso retornar o json no console
    console.log("Qual peça foi clicada:  " + peca); //isso retornar o valor do data-peca

    //atualizar cada um das estatistica
    estatistica.forEach( (elemento) => {

        //NUMEROS
        console.log("O conteúdo do elemento clicado é o numero de cada estatistica: " + elemento.textContent);
        
        //DA ONDE PERTENCE OS NUMEROS
        //porém tem que ser especifico daquela estatistica
        //elemento.textContent retornar o numero, e o da onde este numero pertencen é com: 
        console.log("O numero anterior pertence a: " + elemento.dataset.estatistica);

        //Atualizar valores do textConte
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];

    })
}

