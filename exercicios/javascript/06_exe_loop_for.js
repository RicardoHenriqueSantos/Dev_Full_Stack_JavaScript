let spaceshipName = prompt("Insira o nome da nave: ")
let caractereSelect = prompt(spaceshipName+"\nCaractere que deseja substituir: ")
let caractereSwap = prompt("Caractere que deseja : ")
let spaceshipNewName = ""

for (let c = 0; c < spaceshipName.length; c++){
    if(spaceshipName[c] == caractereSelect){
        spaceshipNewName += caractereSwap 
    } else{
        spaceshipNewName += spaceshipName[c]
    }
}

alert(spaceshipNewName)