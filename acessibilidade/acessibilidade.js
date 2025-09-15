var element = document.getElementById("header")

function modo_escuro(){
    document.getElementById("fundo").style.backgroundColor = "black"
    document.getElementById("fundo").style.color = "gray"
    document.getElementById("myImage").src = "../imagem/fundo.jpg"
    element.innerHTML = "Testando modo escuro"
}

function modo_daltonico(){
    document.getElementById("fundo").style.backgroundColor = "violet"
    document.getElementById("fundo").style.color = "lime"
    document.getElementById("myImage").src = "../imagem/daltonismo.jpg"
    element.innerHTML = "Testando modo daltonico"
}

function modo_normal(){
    document.getElementById("fundo").style.backgroundColor = "white"
    document.getElementById("fundo").style.color = "black"
    document.getElementById("fundo").style.fontSize = "18px"
    document.getElementById("myImage").src = "../imagem/fundo.jpg"
    element.innerHTML = "Testando modo normal"
}

function modo_baixa_visao(){
    document.getElementById("fundo").style.backgroundColor = "white"
    document.getElementById("fundo").style.color = "black"
    document.getElementById("fundo").style.fontSize = "30px"
    document.getElementById("myImage").src = "../imagem/fundo.jpg"
    element.innerHTML = "Testando modo normal"
}