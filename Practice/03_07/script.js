/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car1 = {
  name:"Kia Cerato",
  color:"grey",
  wheelsNum: 4,
  volume: 30; 
}

const car2 = {
  name:"Toyata Camry",
  color: "white",
  wheelsNum: 4,
  volume: 25,
  engine: {
    engineType: "V4",
    horsepower: 444
  }
}

console.log(car2);


