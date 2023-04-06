class Spaceship{
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    set velocity(newVelocity){
        if(newVelocity > 120){
            this.currentVelocity = 120
        } else{
            this.currentVelocity = newVelocity
        }
    }
}

let transMarkX = new Spaceship("Trans Mark X")
transMarkX.velocity = 130

console.log(transMarkX)

class ResourceProcessStation{
    constructor(name, dayProcessedLoad){
        this.name = name
        this.dayProcessedLoad = dayProcessedLoad
    }
    get monthlyProcessedLoad(){
        return this.dayProcessedLoad * 30 
    }
}

let resoucerProcessor = new ResourceProcessStation("Gaia", 25)

console.log(resoucerProcessor.monthlyProcessedLoad)

class ResourceProcessorStation{
    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }
    static calculateProcessInHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours
    }
}

let processor = new ResourceProcessorStation("Gaia", 2000)
let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)
console.log(totalProcessed)