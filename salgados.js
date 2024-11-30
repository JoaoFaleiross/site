let quantidade1 = document.getElementById('qtd1');
let preco1 = document.getElementById('preco1');
let total1 = document.getElementById('total1');

//Criando a função de calculo do 1° produto

function calcularTotal1(){
    let qtd = parseFloat(quantidade1.value) ||0;
    let preco = parseFloat(preco1.value) ||0;
    total1.textContent = (qtd*preco).toFixed(2);
}

quantidade1.addEventListener('input', calcularTotal1);
preco1.addEventListener('input', calcularTotal1);

