//não faz mais sentido usar isto, uma vez que é mais facil 
//acessar os botões  - e + pelo pai
// const somar = document.getElementById('somar');
// const subtrair = document.getElementById('subtrair');
// const braco = document.getElementById('braco');

// const controle = document.querySelectorAll(".controle-ajuste");
const controle = document.querySelectorAll("[data-controler]");


controle.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        manipulaDados(event.target.dataset.controle, event.target.parentNode);
        // manipulaDados(event.target.textContent, event.target.parentNode);
                        //botão do simbolo da operação
                                                    //container destes botões
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

function clear (){
    var clear = "teste"; 

    console.log(clear);
}

