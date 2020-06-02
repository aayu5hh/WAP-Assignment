let bikeModule = (function() {
  "use strict";
  let createBicyclePrototype = function() {
    return {
      speed: 0,
      applyBrake: function(value) {
        this.speed -= value;
      },
      speedup: function(value) {
        this.speed += value;
      }
    };
  };

  let createMountainBikePrototype = function(proto) {
    let obj = Object.create(proto);
    obj.gear = 1;
    obj.setGear = function(gear) {
      this.gear = gear;
    };
    return obj;
  };

  let start = function() {
    let bicyclePrototype = createBicyclePrototype();
    let mountainBikePrototype = createMountainBikePrototype(bicyclePrototype);

    let bicycle = Object.create(bicyclePrototype);
    console.log("Speeding up bicycle by 40..");
    bicycle.speedup(40);
    console.log("Applying brakes of 10..");
    bicycle.applyBrake(10);
    console.log(`So now the speed is ${bicycle.speed}!`);

    let mountainBike = Object.create(mountainBikePrototype);
    console.log(`The default speed of Mountain Bike is ${mountainBike.speed} & the gear is ${mountainBike.gear}`);
    mountainBike.speedup(20);
    mountainBike.applyBrake(3);
    mountainBike.setGear(3);
    console.log(`After setup, current speed of mountain bike is ${mountainBike.speed} & the gear is set to ${mountainBike.gear}`);
  }

  start();

})();
