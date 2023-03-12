const textoUm = document.getElementById('texto-um')

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)

  });
}

typeWrite(textoUm)

const textoDois = document.getElementById('texto-dois')

document.getElementById('um__button').addEventListener('click', () => {
    document.getElementById('um').classList.add('animate__bounceOutLeft')
    setTimeout(() => {
        document.getElementById('um').classList.add('none')
        document.getElementById('dois').classList.remove('none')
        document.getElementById('dois').classList.add('animate__bounceInRight')
        typeWrite(textoDois)
    }, 300)
})

let porcentagem = 0;

document.getElementById('porcentagem').innerHTML = porcentagem

function aumentarPorcentagem(event) {
    if(event.target.value === '+') {
        porcentagem += 10
        if(porcentagem >= 100) {
            porcentagem = 100
        }
        document.getElementById('porcentagem').innerHTML = porcentagem
        document.getElementById('teamo').style.opacity = porcentagem + '%'
    } else if(event.target.value === '-') {
        porcentagem -= 10
        if(porcentagem <= 0) {
            porcentagem = 0
        }
        document.getElementById('porcentagem').innerHTML = porcentagem
        document.getElementById('teamo').style.opacity = porcentagem + '%'
    }
}

const textoTres = document.getElementById('texto-tres')

document.getElementById('dois__button').addEventListener('click', () => {
    if(porcentagem >= 100) {
        document.getElementById('dois').classList.add('animate__bounceOutLeft')
        setTimeout(() => {
            document.getElementById('dois').classList.add('none')
            document.getElementById('tres').classList.remove('none')
            document.getElementById('tres').classList.add('animate__bounceInRight')
            typeWrite(textoTres)
        }, 300)
    } else {
        alert('Amor Insuficiente 😪')
    }
})

const textoQuatro = document.getElementById('texto-quatro')
let resposta = '12/09'

function respostaCorreta(event) {
    if(event.target.innerHTML === resposta) {
        event.target.classList.add('right')
        document.getElementById('tres').classList.add('animate__bounceOutLeft')
        setTimeout(() => {
            document.getElementById('tres').classList.add('none')
            document.getElementById('quatro').classList.remove('none')
            document.getElementById('quatro').classList.add('animate__bounceInRight')
            typeWrite(textoQuatro)
        }, 300)
    } else {
        event.target.classList.add('wrong')
        alert('BLOCK 🚨🚨🚨🚨🚨')
    }
}

const textoCinco = document.getElementById('texto-cinco')

function next() {
    document.getElementById('quatro').classList.add('animate__bounceOutLeft')
    setTimeout(() => {
        document.getElementById('quatro').classList.add('none')
        document.getElementById('cinco').classList.remove('none')
        document.getElementById('cinco').classList.add('animate__bounceInRight')
        document.getElementById('cinco__button').classList.add('animate__fadeInUp')
        typeWrite(textoCinco)
    }, 300)
}

const textoSeis = document.getElementById('texto-seis')

document.getElementById('cinco__button').addEventListener('click', () => {
    document.getElementById('cinco').classList.add('animate__bounceOutLeft')
    setTimeout(() => {
        document.getElementById('cinco').classList.add('none')
        document.getElementById('seis').classList.remove('none')
        document.getElementById('seis').classList.add('animate__bounceInRight')
        document.getElementById('bottom__cinco').classList.add('animate__fadeInUp')
        typeWrite(textoSeis)
    }, 300)
})

const checkboxHeart = document.getElementById('checkbox__heart')
const svg = document.getElementById('svg')

checkboxHeart.addEventListener('click', () => {
    if(checkboxHeart.checked === true) {
        checkboxHeart.style.animation = 'check .45s linear forwards'
        checkboxHeart.style.fill = '#ec638e'
        checkboxHeart.style.stroke = '#ec4472'
        svg.style.fill = '#ec638e'
        svg.style.stroke = '#ec4472'
    } else {
        checkboxHeart.style.animation = 'uncheck .45s linear forwards'
        checkboxHeart.style.fill = '#fff'
        checkboxHeart.style.stroke = '#D1D6EE'
        svg.style.fill = '#fff'
        svg.style.stroke = '#D1D6EE'
    }
})