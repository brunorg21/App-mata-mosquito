
var altura
var largura
var vidas = 1
var tempo = 20
var qtd_moscas_mortas = 0

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000
} else if(nivel === 'pika'){
    //750
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function randomPosition() {

    //remover mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'game_over.html'
        }else{
            document.getElementById('v' + vidas).src = "/imagens/coracao_vazio.png"

            vidas++
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    if(posicaoX < 0){
        posicaoX = 0
    }else {
        posicaoX = posicaoX
    }

    if(posicaoY < 0){
        posicaoY = 0
    }else{
        posicaoY = posicaoY
    }

    //console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')
    //acessando atributos do elemento
    mosquito.src = '/imagens/mosca.png'
    mosquito.className = sizeRandom() + ' ' + randomSide()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY  + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()

        qtd_moscas_mortas++
        document.getElementById('score_mosca').innerHTML = qtd_moscas_mortas

    }

    //colocando elemento no body
    document.body.appendChild(mosquito)
    
}

function sizeRandom() {

    var classe = Math.floor(Math.random() * 3)

    if(classe == 0){
        return 'mosquito1'
    }else if(classe == 1){
        return 'mosquito2'
    }else {
        return 'mosquito3'
    }
}

function randomSide() {
    var classe = Math.floor(Math.random() * 2)

    if(classe == 1){
        return 'ladoA'
    }else{
        return 'ladoB'
    }
}


