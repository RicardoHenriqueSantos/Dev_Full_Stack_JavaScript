class SpaceshipWeapon{
    constructor(identifier){
        this.identifier = identifier
        this.shotsLeft = 5
    }
    shoot(){
        if(this.shotsLeft > 0){
            console.log("Bang!")
            this.shotsLeft -= 1
        } else{
            throw new Error("Arma sem munição.")
        }
    }

    reload(){
        this.shotsLeft = 5
    }
}

let gundher = new SpaceshipWeapon(10)

try{
    gundher.shoot()
    gundher.shoot()
    gundher.shoot()
    gundher.shoot()
    gundher.shoot()
    gundher.shoot()
} catch(error){
    console.log(error.message)
    gundher.reload()
} finally{
    console.log("A arma obteve êxito.")
}

console.log(gundher)