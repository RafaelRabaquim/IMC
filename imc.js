const calcular  = document.getElementById("calcular");
calcular.addEventListener("click", imc);

function imc(){
    let dados=[
        document.getElementById("nome").value,
        document.getElementById("altura").value,
        document.getElementById("peso").value
    ]

    const resultado = document.getElementById("resultado");

    if (dados[0] == "" && 
        dados[1] == "" &&
        dados[2] == ""){
        resultado.textContent = "Insira todos os valores";
    }else{
        let classificacao = ''
        const imcValor = (dados[2] / (dados[1] * dados[1])).toFixed(1);

        if (imcValor < 18.5){
            classificacao ="abaixo do peso.";
        }else if (imcValor < 25){
            classificacao ="com peso ideal."
        }else if (imcValor <30){
            classificacao ="levemente acima do peso"
        }else if (imcValor < 35){
            classificacao= "com obesidade grau I."
        }else if (imcValor < 40){
            classificacao ="com obesidade grau II"
        }else {
            classificacao= "com obesidade grau III. Cuidado!!"
        }

        resultado.textContent = `${dados[0]}, seu IMC é ${imcValor}, você está ${classificacao}`
    }

};


/*const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);*/

