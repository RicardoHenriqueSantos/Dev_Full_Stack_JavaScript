class App{

    constructor(){
        this.spaceship = null
    }

    start(){
        this.insertSpaceship()
        let option 
        do{
            option = this.spaceshipMenu()
            this.spaceshipRedirect(option)
        }while(option !="3")
        this.spaceshipPrint()
    }

    insertSpaceship(){
        let spaceshipName = prompt("Insira o nome da nave: ")
        let spaceshipCrewQuantity = prompt("Insira a quantidade de tripulantes: ")
        let spaceshipType = this.spaceshipTypeSelect()
        if (spaceshipType == "1"){
            let spaceshipQuantityWeapons = prompt("Insira a quantidade de armas: ")
            this.spaceship = new BattleSpaceship(spaceshipName, spaceshipCrewQuantity, spaceshipQuantityWeapons)
        } else{
            let spaceshipQuantitySits = prompt("Insira a quantidade de assentos: ")
            this.spaceship = new TransportSpaceship(spaceshipName, spaceshipCrewQuantity, spaceshipQuantitySits)
        }
    }

    spaceshipTypeSelect(){
        let option
        while(!["1", "2"].includes(option)){
            option = prompt("Selecione o tipo da nave\n1 - Battle\n2 - Transport\n")
        }
        return option
    }

    spaceshipMenu(){
        const promptMessage = prompt("Menu\n1 - Acelerar\n2 - Trocar Nave\n3 - Imprimir e Sair")
        let option = prompt(promptMessage)
        while(!["1", "2", "3"].includes(option)){
            option = prompt("Selecione o tipo da nave\n1 - Battle\n2 - Transport\n")
        }
        return option
    }

    spaceshipRedirect(option){
        switch(option){
            case "1":
                this.spaceshipAccelerate()
                break
            case "2":
                this.spaceshipTypeSelect()
                break
        }
    }

    spaceshipAccelerate(){
        let accelaration = Number(prompt("Insira o quanto deseja acelerar: "))
        speedUp(accelaration)        
    }

    spaceshipPrint(){
        let finalMessage = "Spaceship\nNome: " +this.spaceship.name+ "\nQuant. Tripulantes: "+this.spaceship.crewQuantity+"\nVelocidade: "+this.spaceship.currentVelocity+"\n"
        alert(finalMessage)
    }

}