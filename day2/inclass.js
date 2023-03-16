//inclass example
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };

  console.log(person2.teams[1].soccer[0])




//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// sorry for hard coding the shakes in, I wasn't sure what to do there

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

function fav_food(food_list){
  for(let food in food_list){
    if(typeof(food_list[food]) === typeof('')){
      console.log(food)
      console.log(food_list[food]) 
    } else {
      console.log(food)
      console.log(food_list[food].join(', ')) 
    }
  }
};
fav_food(person3)
fav_food(person3['shakes'][0])



//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }

  // Use an arrow to create the printInfo method
  printInfo = () => console.log(this.name, this.age)
  addYear = () => this.age++
  // Create another arrow function for the addAge method that takes a single parameter
  // Adding to the age 
  addAge = (num) => this.age+=num
}
const fella1 = new Person('luke',25)
const fella2 = new Person('duke',26)
fella1.printInfo()
fella2.printInfo()
fella1.addYear()
fella2.addAge(3)
fella1.printInfo()
fella2.printInfo()

// =============Exercise #3 ============//
/*
  Create a Promised based function that will check a string to determine if it's length is greater than 10.
  If the length is greater than ten console log "Big word". 
  If the length of the string is less than 10 console log "Small Number"
*/
const aString = '01234567890'
async function pokeData(){
  try{
    const big = await stringCheck(aString.length)
  }
  catch{
    console.error('error')
  }
}

function stringCheck(s){
  if(s>10){
    console.log('Big Words')
  } else {
    console.log('Small Number')
  }
}

pokeData()
