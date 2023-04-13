let spaceshipName = prompt("Insira o nome da nave:")
let optionSpaceWrap = prompt("Deseja entrar em uma dobra espacial?\n\n1 - Sim\n2 - Não\n")
let countSpaceWrap = 0

switch (optionSpaceWrap) {
    case "1":
        while (optionSpaceWrap == 1) {
            countSpaceWrap += 1
            optionSpaceWrap = prompt("Deseja realizar a próxima dobra espacial?\n\n1 - Sim\n2 - Não\n")
        }
    case "2":
        break
    default:
        alert("Opção Inválida!")
}

if (countSpaceWrap > 1) {
    alert(spaceshipName + " realizou " + countSpaceWrap + " dobras espaciais.")
} else if (countSpaceWrap == 1) {
    alert(spaceshipName + " realizou " + countSpaceWrap + " dobra espacial.")
} else {
    alert(spaceshipName + " realizou nenhuma dobra espacial")
}