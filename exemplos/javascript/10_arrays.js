// FORMAS DE CRIAR UM ARRAY
let spaceshipList = ["Andromeda", "Apollo X", "Galneryus", "Supernova", "Elemental"]
let spaceshipYear = new Array (2023, 1989, 2015)
let spaceshipNew = new Array (5)

// IMPRIMINDO OS ARRAYS
console.log(spaceshipList[2])
console.log(spaceshipYear[1])
console.log(spaceshipNew)

// ADICIONAR UM NOVO ITEM NA LISTA
spaceshipList.push("Houruz")
console.log(spaceshipList)

// DELETAR O ÚLTIMO ITEM NA LISTA E EXIBIR O ELEMENTO REMOVIDO
let removeYear = spaceshipYear.pop()
console.log(spaceshipYear)
console.log(removeYear)

// DELETAR O PRIMEIRO ITEM NA LISTA E EXIBIR O ELEMENTO REMOVIDO
let removeSpaceship = spaceshipList.shift()
console.log(spaceshipList)
console.log(removeSpaceship)

// RETORNAR UM ELEMENTO REMOVIDO E ADICIONAR NA PRIMEIRA POSIÇÃO
let addSpaceship = spaceshipList.unshift("Fenix")
console.log(spaceshipList)
console.log(addSpaceship)

// ANALISAR A QUANTIDADE DE ITENS NA LISTA
let tamSpaceship = (spaceshipList.length)
console.log(spaceshipList)
console.log(tamSpaceship)

// RETORNA O INDEX DO ELEMENTO PROCURADO E SE NÃO ENCONTRAR RETORNA -1
let posSpaceship = spaceshipList.indexOf("Apollo X")
console.log(spaceshipList)
console.log(posSpaceship)

// ARRAY BIDIMENSIONAL
let newSpaceship = [["Thor", 2023], ["Xpace", 2021], ["Tesla Hyper", 2025, [true, false]]]
console.log(newSpaceship[2][1])
console.log(newSpaceship[2][2][0])

// SPLICE - MANIPULANDO ELEMENTOS EM QUALQUER POSIÇÃO DO ARRAY
// OBS: NÃO PASSANDO UM NOVO DADO, REMOVE OS DADOS DO INDEX INFORMADO
let pilotsName = ["Neil A.", "Maverick R.", "Maximux T."]
let removePilot = pilotsName.splice(1, 1, "Howard W.", "Kraven O.") 
console.log(pilotsName)
console.log(removePilot)

// SLICE - EXTRAI UMA PARTE DO ARRAY SEM ALTERAR O ARRAY ORIGINAL
let pilotsTecnical = ["Força", "Mentalidade", "Raciocínio Lógico", "Historical"]
let extractedPilots = pilotsTecnical.slice(1, 3)
console.log(pilotsTecnical)
console.log(extractedPilots)

// ITERAÇÃO COM ARRAYS
let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

hitchedSpaceships.forEach(function(nave, index){
    console.log("Nave " +nave+ "\nIndex: "+index)
})

let upcasedSpaceships = hitchedSpaceships.map(function(nave){
    let upperCase = nave.toUpperCase()
    return upperCase
})
console.log(upcasedSpaceships)

let with7Chars = hitchedSpaceships.filter(nave => {return nave.length >=7})
console.log(with7Chars)

let with7CharsFind = hitchedSpaceships.find(nave => {return nave.length >=7})
console.log(with7CharsFind)