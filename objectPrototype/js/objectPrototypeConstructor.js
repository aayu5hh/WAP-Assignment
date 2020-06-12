(function() {
  function Bike() {
    this.speed = 0;
  }
  Bike.prototype.applyBrake = function(value) {this.speed -= value;};
  Bike.prototype.speedup = function(value) {this.speed += value;};

  function MountainBike() {
    Bike.bind(this);
    this.gear = 1;
  }
  MountainBike.prototype = Object.Create(Bike.prototype);
  MountainBike.prototype.constructor = MountainBike;
  MountainBike.prototype.setGear = function(gear) {this.gear = gear;};

  let start = function(){

    const bicycle = new Bike();
    console.log("Speeding up bicycle by 40..");
    bicycle.speedup(40);
    console.log("Applying brakes of 10..");
    bicycle.applyBrake(10);
    console.log(`So now the speed is ${bicycle.speed}!\n`);

    const mountainBike = new Bike();
    Bike.prototype.gear = 1;
    console.log(`The default speed of Mountain Bike is ${mountainBike.speed} & the gear is ${mountainBike.gear}`);
    mountainBike.speedup(20);
    mountainBike.applyBrake(3);
    mountainBike.setGear(3);
    console.log(`After setup, current speed of Mountain bike is ${mountainBike.speed} & the gear is set to ${mountainBike.gear}`);
  };

  start();
})();
