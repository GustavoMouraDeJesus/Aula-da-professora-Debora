let combo = (prompt("Temos 5 combos, digite o número de um dos 5 combos...; "))

switch(combo){
    case "1":
        document.write("Este combo vem um hambúrguer simples e um refrigerante pequeno.")
        break;

    case "2":
        document.write("Este combo vem um hambúrguer dublo, uma batata pequena e um refrigerante pequeno.")
        break;

    case "3":
        document.write("Este combo vem um hambúrguer dublo e um refrigerante grande.")
        break;

    case "4":
        document.write("Este combo vem um hambúrguer dublo e uma batata média e um refrigerante grande.")
        break;

    case "5":
        document.write("Este combo vem um hambúrguer dublo e uma batata grande e um refrigerante grande.")
        break;
        
    default : document.write("O número é inválido, escolha um combo entre 1 e 5.")
}