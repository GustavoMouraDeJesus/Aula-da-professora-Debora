let letra = (prompt("Entre com uma letra; ")).toLowerCase()

switch(letra){
    case "a": case "e": case "i": case "o": case "u":
        alert("Certo, isso é uma vocal!")
        break;
        default : alert("A letra digitada não se trata de uma vocal.")
}