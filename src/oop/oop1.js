// base class
class Vehicle{
    constructor(){

    }
}

class FlightVehicle extends Vehicle{
    constructor(){
        super();
    }
}

class Starship extends FlightVehicle{
    constructor(){
        super();
    }
}

class GroundVehicle extends Vehicle{
    constructor(){
        super();
    }
}

class Car extends GroundVehicle{
    constructor(){
        super()
    }
}

class Motorcycle extends GroundVehicle{
    constructor(){
        super()
    }
}

class Airplane extends FlightVehicle{
    constructor(){
        super()
    }
}



