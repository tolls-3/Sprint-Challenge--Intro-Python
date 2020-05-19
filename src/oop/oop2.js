// # To the GroundVehicle class, add method drive() that returns "vroooom".
// #
// # Also change it so the num_wheels defaults to 4 if not specified when the
// # object is constructed.

class GroundVehicle {
  constructor(num_wheels = 4) {
    this.num_wheels = num_wheels;
  }

  drive() {
    return "vroooom";
  }
}

// # Subclass Motorcycle from GroundVehicle.
// #
// # Make it so when you instantiate a Motorcycle, it automatically sets the number
// # of wheels to 2 by passing that to the constructor of its superclass.
// #
// # Override the drive() method in Motorcycle so that it returns "BRAAAP!!"

class Motorcycle extends GroundVehicle {
  constructor(num_wheels = 2) {
    super(num_wheels);
    this.num_wheels = num_wheels;
  }
  drive() {
    return "BRAAAP!!";
  }
}

vehicles = [
  new GroundVehicle(),
  new GroundVehicle(),
  new Motorcycle(),
  new GroundVehicle(),
  new Motorcycle(),
];

for (let vehicle of vehicles) {
  console.log(vehicle.drive());
}
