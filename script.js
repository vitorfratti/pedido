document.getElementById('um__button').addEventListener('click', () => {
    document.getElementById('um').classList.add('animate__bounceOutLeft')
    setTimeout(() => {
        document.getElementById('um').classList.add('none')
        document.getElementById('dois').classList.remove('none')
        document.getElementById('dois').classList.add('animate__bounceInRight')
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

document.getElementById('dois__button').addEventListener('click', () => {
    if(porcentagem >= 100) {
        document.getElementById('dois').classList.add('animate__bounceOutLeft')
        setTimeout(() => {
            document.getElementById('dois').classList.add('none')
            document.getElementById('tres').classList.remove('none')
            document.getElementById('tres').classList.add('animate__bounceInRight')
        }, 300)
    } else {
        alert('Amor Insuficiente 😪')
    }
})

let resposta = '12/09'

function respostaCorreta(event) {
    if(event.target.innerHTML === resposta) {
        event.target.classList.add('right')
        document.getElementById('tres').classList.add('animate__bounceOutLeft')
        setTimeout(() => {
            document.getElementById('tres').classList.add('none')
            document.getElementById('quatro').classList.remove('none')
            document.getElementById('quatro').classList.add('animate__bounceInRight')
        }, 300)
    } else {
        event.target.classList.add('wrong')
        alert('BLOCK 🚨🚨🚨🚨🚨')
    }
}

function next() {
    document.getElementById('quatro').classList.add('animate__bounceOutLeft')
    setTimeout(() => {
        document.getElementById('quatro').classList.add('none')
        document.getElementById('cinco').classList.remove('none')
        document.getElementById('cinco').classList.add('animate__bounceInRight')
    }, 300)
}

document.getElementById('cinco__button').addEventListener('click', () => {
    document.getElementById('cinco').classList.add('animate__bounceOutLeft')
    setTimeout(() => {
        document.getElementById('cinco').classList.add('none')
        document.getElementById('seis').classList.remove('none')
        document.getElementById('seis').classList.add('animate__bounceInRight')
    }, 300)
})