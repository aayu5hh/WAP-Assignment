class createBicycle {
  constructor() {
    this.speed = 0;
  }
  applyBrake(value) {
    this.speed -= value;
  }
  speedup(value) {
    this.speed += value;
  }
}

class createMountainBike extends createBicycle {
  constructor() {
    super();
    this.gear = 1;
  }
  setGear(gear) {
    this.gear = gear;
  }
}

let bikeModule = (function() {
  let bicycle = new createBicycle();
  console.log("Speeding up bicycle by 40..");
  bicycle.speedup(40);
  console.log("Applying brakes of 10..");
  bicycle.applyBrake(10);
  console.log(`So now the speed is ${bicycle.speed}!`);

  let mountainBike = new createMountainBike();
  console.log(`The default speed of Mountain Bike is ${mountainBike.speed} & the gear is ${mountainBike.gear}`);
  mountainBike.speedup(20);
  mountainBike.applyBrake(3);
  mountainBike.setGear(3);
  console.log(`After setup, current speed of mountain bike is ${mountainBike.speed} & the gear is set to ${mountainBike.gear}`);
})();
