const robotron = document.getElementById('img-robotron');
const subtrair = document.getElementById('subtrair');
const somar = document.getElementById('somar');
const braco = document.getElementById('braco');

const constrole = document.querySelectorAll('.controle-ajuste');

constrole.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        manipulaDados(event.target.textContent);
    })
});

//relembrando funtions
robotron.addEventListener("click", function(){
    console.log('clicou');
});

robotron.addEventListener("click", () => {
    console.log('clicou com arrow ');
});

robotron.addEventListener("click", (event) => {
    console.log(event);
});

//Aumentando e diminuindo nivel do BRAÇOS
// somar.addEventListener("click", () => {manipulaDados("somar")});
// subtrair.addEventListener("click", () => {manipulaDados("subtrair")});

function manipulaDados(operacao){
    if(operacao === "subtrair"){
        braco.value = parseInt(braco.value) - 1;
    }else{
         braco.value = parseInt(braco.value) + 1;
    }
}

