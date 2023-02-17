const btns = document.querySelectorAll("[data-btn]");
const content = document.querySelector('[data-content]')

btns.forEach(btn => btn.addEventListener('click', () =>{
    const valueOfEachBtn = btn.dataset.btn; //pegar o valor de cada botão
    if(valueOfEachBtn === 'hide'){
        content.style.display = 'none';
    }else{
        content.style.display = 'block';
    }
}))