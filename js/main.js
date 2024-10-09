let fim = document.getElementById('finalizado');//Msg fim, após o voto
let candidatoL = 0, candidatoA = 0, candidatoS = 0, candidatoB=0, candidatoM=0;//números dos candidatos
let numero = '';//Variável "numero começa vazia"

//Função para imprimir os números na tela
function digitar(digit){
    let numeroDigitado = window.document.querySelector('#digito');//variável recebendo o valor do dígito
    numeroDigitado.innerHTML += digit + "";//Incrementando cada digito na tela separadamente
    numero+=digit;//variável de comparação que é somada ao digito informado
    fim.innerHTML = "";//mansagem de fim desapareçe quando começar a digitar um número
    imagemCand(numero);//Chamando a função responsável por comparar o número ao candidato e sua respectiva foto
    let song = new Audio('audio/som_tecla.mp3');//Som nas teclas
    song.play();
}

//Função de inserção de imagem e nome de acordo com o número
function imagemCand(numero){
    if(numero === '123'){
        document.getElementById('image').src = 'images/lumena.jpeg';
        document.getElementById('name').innerHTML = 'Lumena';
        candidatoL++;
    }
    if(numero === '136'){
        document.getElementById('image').src = 'images/Aline.jpeg'; 
        document.getElementById('name').innerHTML = 'Aline';
        candidatoA++;
    }
    if(numero === '147'){
        document.getElementById('image').src = 'images/Sabrina.jpeg';
        document.getElementById('name').innerHTML = 'Sabrina';
        candidatoS++;
    }
    if(numero === '125'){
        document.getElementById('image').src = 'images/Mariah.jpeg';
        document.getElementById('name').innerHTML = 'Mariah';
        candidatoM++;
    }
}

//Função de voto em branco
function branco(){
    document.getElementById('name').innerHTML = '<strong>Voto em Branco</strong><br><p>Confirme para validar</p>';
    candidatoB++;
    document.getElementById('finalizado').innerHTML = '';
}

//Função para corrigir o número digitado
function corrigir(){
    document.getElementById('name').innerHTML='Nome';
    document.getElementById('image').src = 'images/user.png';
    document.getElementById('digito').innerHTML = "";
    numero = '';
    let song = new Audio('audio/som_tecla.mp3');//Som nas teclas
    song.play();
}

//Função de voto
function interact(){
    fim.innerHTML = 'FIM'; //Ao clicar em Votar, a mensagem FIM aparece na tela
    numero.innerHTML = ""; //Campo número zerado
    corrigir(numero);//Função "corrigir" é chamada para que o histórico de votos reinicie e seja possível votar no mesmo candidato mais de uma vez;
    let songConfirmar = new Audio('audio/confirmar.mp3');
    songConfirmar.play();
}

//Função para apurar os votos
function apurar(){
    localStorage.setItem('candidatoL', candidatoL++);
    localStorage.setItem('candidatoA', candidatoA++);
    localStorage.setItem('candidatoS', candidatoS++);
    localStorage.setItem('candidatoM', candidatoM++);
    localStorage.setItem('candidatoB', candidatoB++);
    window.location.href = '../pages/apuração.html';
    
}

document.getElementById('resL').innerHTML = localStorage.getItem('candidatoL') || 0;
document.getElementById('resA').innerHTML = localStorage.getItem('candidatoA') || 0;
document.getElementById('resS').innerHTML = localStorage.getItem('candidatoS') || 0;
document.getElementById('resM').innerHTML = localStorage.getItem('candidatoM') || 0;
document.getElementById('resB').innerHTML = localStorage.getItem('candidatoB') || 0;

//Função para limpar a apuração
function clearAP(){
    localStorage.clear();
    document.getElementById('resL').innerHTML = 0;
    document.getElementById('resA').innerHTML = 0;
    document.getElementById('resS').innerHTML = 0;
    document.getElementById('resM').innerHTML = 0;
    document.getElementById('resB').innerHTML = 0;
}









