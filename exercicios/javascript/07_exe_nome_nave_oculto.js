let spaceshipName = prompt("Insira o nome da espaçonave: ")
let spaceshipNewNome = ""

for(let c = spaceshipName.length - 1; c >= 0; c--){
    if(spaceshipName[c] == "e"){
        break
    }
    spaceshipNewNome += spaceshipName[c]
}
alert(spaceshipName)
alert(spaceshipNewNome)
alert("Nome Original: " +spaceshipName+ "\nNovo Nome: "+spaceshipNewNome)