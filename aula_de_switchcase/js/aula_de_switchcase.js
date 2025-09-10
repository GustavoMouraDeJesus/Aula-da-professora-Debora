let semaforo = (prompt("Entre com a cor do semaforo; ")).toLowerCase()

switch(semaforo){
    case "vermelho":
        alert("Pare!!!")
        break;
        
    case "amarelo":
        alert("Atenção!!!")
        break;

    case "verde":
        alert("Prossiga!!!")
        break;

    default : alert("Cor inválida.")
}