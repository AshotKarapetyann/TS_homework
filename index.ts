class Car {
    model: string; 
    price: number; 
    engine: string;
    color: string;
    doors: number;
    constructor(model: string, price: number, engine: string, color: string, doors: number){
        this.model = model;
        this.price = price;
        this.engine = engine;
        this.color = color;
        this.doors =  doors;
    }

    getPrice(){
        return this.price;
    }

    getColor(){
        return this.color;
    }

    getEngine(){
        return this.engine;
    }
}

class Tesla extends Car{
    constructor(){
        super()
        this.model = "Tesla";
        this.price = 50000;
        this.doors = 4
        this.color = ""
        this.engine = ""
    } 
}

class Mercedes extends Car{
    constructor(){
        super()
        this.model = "Mercedes";
        this.price = 65000;
        this.doors = 4
        this.color = ""
        this.engine = ""
    } 
}


class GreenColor {
    car: any;
    constructor(car){
        this.car = car
    }

    getPrice(){
        return this.car.getPrice()  + 500;
    }

    getColor(){
        return  "color green" ;
    }
}

class RedColor {
    car: any;
    constructor(car){
        this.car = car
    }

    getPrice(){
        return this.car.getPrice()  + 500;
    }

    getColor(){
        return  "color red"
         
    }
}

class HybridEngine{
    car: any;
    constructor(car){
        this.car = car
    }

    getPrice(){
        return this.car.getPrice()  + 5000;
    }

    getEngine(){
        return "hybrid engine"; 
    }

    getColor(){
        return this.car.getColor() ;
    }
}

class OilEngine{
    car: any;
    constructor(car){
        this.car = car
    }

    getPrice(){
        return this.car.getPrice()  - 500;
    }

    getEngine(){
        return  "oil engine"; 
    }

    getColor(){
        return this.car.getColor() ;
    }
}

let tesla = new Tesla()

tesla = new RedColor(tesla)
tesla = new HybridEngine(tesla)

console.log(`Tesla with ${tesla.getColor()} decorated and price ${tesla.getPrice()}$ and your car has ${tesla.getEngine()}`);

// let mercedes = new Mercedes()

// mercedes = new GreenColor(mercedes)
// mercedes = new OilEngine(mercedes)


// console.log(`Mercedes with ${mercedes.getColor()} decorated and price ${mercedes.getPrice()}$ and your car has ${mercedes.getEngine()}`);