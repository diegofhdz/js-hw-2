//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoodDishes(person) {
    for (let food in person) {
      let dishes = person[food];
      console.log(`Favorite ${food}:`);
      if (Array.isArray(dishes)) {
        for (let dish of dishes) {
          console.log(dish);
        }
      } else {
        console.log(dishes);
      }
    }
  }

  displayFavoriteFoodDishes(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    this.incrementAge= function(years) {
        this.age += years;
    }
}
  
// Print info method using arrow function
// Person.prototype.printInfo = () => {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
// }
 
// Person.prototype.incrementAge = (years) => {
//     this.age += years;
// }

const person1 = new Person("John Doe", 30);
const person2 = new Person("Jane Doe", 35);

person1.printInfo(); // Name: John Doe, Age: 30
person2.printInfo(); // Name: Jane Doe, Age: 35

person1.incrementAge(3)

person1.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        console.log("Big word");
        resolve();
      } else {
        console.log("Small number");
        resolve();
      }
    });
  }

  checkStringLength("Hello");