function Bike() {

}
Bike.prototype.speed = 0;
Bike.prototype.applyBrake = function(value) {this.speed -= value;};
Bike.prototype.speedup = function(value) {this.speed += value;};

const bicycle = new Bike();
console.log("Speeding up bicycle by 40..");
bicycle.speedup(40);
console.log("Applying brakes of 10..");
bicycle.applyBrake(10);
console.log(`So now the speed is ${bicycle.speed}!`);

const mountainBike = new Bike();
Bike.prototype.gear = 1;
Bike.prototype.setGear = function(gear) {this.gear = gear;};

console.log(`The default speed of Mountain Bike is ${mountainBike.speed} & the gear is ${mountainBike.gear}`);
mountainBike.speedup(20);
mountainBike.applyBrake(3);
mountainBike.setGear(3);
console.log(`After setup, current speed of mountain bike is ${mountainBike.speed} & the gear is set to ${mountainBike.gear}`);
