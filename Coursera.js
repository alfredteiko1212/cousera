// var age = 18;

//CONDITIONAL STATEMENT
// if(age > 65 || age == 65){
//     console.log("you get your income from your pension");
// }else if(age < 65 && age > 18 || age == 18){
//     console.log("Each month you ge a salary");
// }else if(age < 18){
//     console.log("You get an allowance");
// }else{
//     console.log("The value of the age variable is not numerical");
// }



//WHILE LOOP
// let i = 1;
// while( i <= 10){
//     if( i === 1 ){
//         console.log("Gold medal")
//     }else if( i === 2 ){
//         console.log("Silver medal")
//     }else if( i === 3 ){
//         console.log("Bronze medal")
//     }else{
//         console.log(i)
//     }
//     i++
// }


//FOR LOOP
// for( i=1; i <= 20; i++){
//     if(i % 3 === 0){
//         console.log("Fizz")
//     }else if(i % 5 === 0){
//         console.log("Buzz")
//     }else if( i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }else{
//         console.log(i)
//     }
// }

//ASSESSMENT
// Write a while loop that counts down from 10 to 1.
// Print "Blast off!" when it reaches 0.

// let i = 10;

// while(i >= 1){
//     console.log(i);
//     i--;
// }
// console.log("Blast off!")



// Write a for loop from 1 to 10.
// Use an if statement to print:

//     "Even" if the number is even,

//     "Odd" if it's odd.

// for(i = 1; i <= 10; i++){
//     if( i % 2 === 0){
//         console.log(i + " is an Even number")
//     }else if( i % 2 === 1){
//         console.log(i + " is an Odd number")
//     }else{
//         console.log(i);
//     }
// }



// Write a switch statement that prints a message based on a grade variable:

// let grade = 'B';

//     'A' → "Excellent"

//     'B' → "Good job"

//     'C' → "Fair effort"

//     'D' → "Needs improvement"

//     Default → "Invalid grade"


// let grade = "B";

// switch (grade){
// case "A":
//     console.log("Excellent");
//     break;
// case "B":
//     console.log("Good job");
//     break;
// case "C":
//     console.log("Fair effort");
//     break;
// case "D":
//     console.log("Needs improvement");
//     break;
// default:
//     console.log("Invalid grade");

// }



// Write a for loop from 1 to 100.
// Add up and print the sum of all numbers divisible by 7.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0) {
//         sum += i;
//     }
// }

// console.log("Sum of multiples of 7 from 1 to 100 is:", sum);

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

// function listArryItems(arry){
//     for(i = 0; i < arry.length; i++){
//         console.log(i+1 + ". " + arry[i]);
//     }
// }

// listArryItems(colors);

// function letterFinder(word, match) {
//     for(var i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             //check if the current characater, word[i], is equal to the match
//             console.log('Found the', match, 'at', i)
//         } else {
//             console.log('---No match found at', i)
//         }
//     }
// }

// letterFinder("test", "t")

// var sum =0;

// function countTrue(arry){
//     for(i = 0; i <= arry.length; i++){
//         if(arry[i] === true){
//            sum = sum +arry[i]
//         }
//     }
//     console.log('There are', sum ,'sum')
// }


// countTrue([true, false,true, false,true, false,true, false,true, false,])




// function sumPositive(arr){
//     var sum =0;
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             sum += arr[i];
//         }
//     }
//       console.log(sum);
// }

// sumPositive([-2, 4, -11, 55, 66, -91, -22, 57, 44])

// const users = [
//     {name: 'Anna', age: 17},
//     {name: "John", age: 22},
// ]

// function fitlerAdults(users){
//     return users.filter(user => user.age >= 18)
// }

// console.log(fitlerAdults(users))


// var decimal = Math.random() * 10;
// var rounded = Math.ceil(decimal)

// console.log(rounded)



// var greet = 'Hello';
// var name = " Alfred";

// console.log(greet.concat(name))
// console.log(greet.charAt(0));
// console.log(greet.indexOf('H'));
// console.log(greet.toLowerCase());


    // charAt() 

    // concat() 

    // indexOf() 

    // lastIndexOf() 

    // split() 

    // toUpperCase() 

    // toLowerCase()  

    // var test = typeof('sam');

    // console.log(test)


//     You’re building a movie age restriction app.
// Write an if...else statement that prints:

//     "Adult movie" if age is 18 or more

//     "Teen movie" if age is between 13 and 17

//     "Kids movie" if age is under 13

// var age = 10;

// if(age >= 18){
//     console.log("Adult movie");
// }else if(age >= 13 && age <= 17){
//     console.log("Teen movie");
// }else if(age < 13){
//     console.log("Kids movie");
// }else{
//     console.log("No movie");
// }


// Create a while loop that counts down from 5 and prints “Lift off in X…” 
// and then “🚀 Lift off!” when it reaches 0.

// var i = 5
// while(i >= 0){
//     if(i === 0){
//         console.log("🚀 Lift off!")
//     }else{
//         console.log(i)
//     }
//     i--
// }

// You’re organizing medals for a race.
// Use an if...else block inside a for loop from 1 to 3:

//     1 → “Gold”

//     2 → “Silver”

//     3 → “Bronze”

// var medal = 1;

// switch (medal){
//   case 1:
//     console.log("Gold");
//     break;
//   case 2:
//     console.log("Silver");
//     break;
//   case 3:
//     console.log("Bronze");
//     break;
//   default:
//     console.log("No medal");
// }


//ASSESSMENT
// Declare an empty array fruits.
// Use .push() to add “apple”, “banana”, and “grape”.
// Then use .pop() once, and print the array.

// var fruits = [];

// fruits.push("apple","banana", 'grape');
// fruits.pop()

// console.log(fruits);

// Create a function isEven(num) that checks if a number is even. 
// If true, return "Even", else return "Odd".

// function isEven(num){
//     if(num % 2 === 0){
//         console.log ("Even")
//     }else{
//         console.log  ("Odd")
//     }
// }

// isEven(345687);

// Create a function listTasks(tasks) that takes an array of task names and prints them numbered:

// 1. Do laundry
// 2. Clean room
// 3. Study JS


// function listTasks(tasks){
//     for(i = 0; i < tasks.length; i++){
//         console.log( (i+ 1) + ". " + tasks[i])
//     }
// }

// listTasks(["Do laundry", "Clean room", "Study JS","Study JS"])


// You want to count how many true values exist in a settings array.
// Write a function countEnabled(settings) that accepts [true, false, true, false, false] 
// and returns the number of true values.

// function countEnabled(settings){
//     var sum = 0;
//     for(i = 0; i < settings.length; i++){
//         if(settings[i] === true){
//             sum += settings[i];
//         }
//     }
//             console.log(sum)        
// }

// countEnabled([true, false, true, false, false]);



//OBJECT
// Create an object favBook with properties:

//     title: "Atomic Habits"

//     author: "James Clear"

//     pages: 300
//     Print the object.

// var favBook ={};
// favBook.title = 'Atomic Habits';
// favBook.author= "James Clear";
// favBook.pages= '300';

// console.log(favBook)


//ERROR HANDLING
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(5, 0));
// } catch (error) {
//   console.error(error.message); // Division by zero is not allowed.
// }


// function addNums(a, b){
//     try{
//         if(typeof(a) != 'number'){
//             throw new ReferenceError ('the first argument is not a number');
//         }else if(typeof(b) != 'number'){
//             throw new ReferenceError('the second argument is not a number')
//         }else{
//              console.log(a +b);
//         }
//     }
//     catch (err){
//         console.log('Error!', err)
//     }
// }

// addNums(5, "5")
// console.log("code sill runs")


// function letterFinder(word, match) {
//     let condition1 = typeof(word) == 'string' && word.length >= 2
//     let condition2 = typeof(match) == 'string' && match.length === 1 
//     if ( condition1 == true && condition2 == true){
//     for(var i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             //if the current character at position i in the word is equal to the match
//             console.log('Found the', match, 'at', i)
//         } else {
//             console.log('---No match found at', i)
//         }
//     }
//     }
//     else {
//         console,log("Please pass correct arguments to the function.")
//     }
    
// }

// letterFinder("cat", "c")

// function programming
// function getDistance(mp, h){
//     return mp * h
// }

// var mp =44;
// var h = 5;
// var distance = getDistance(mp, h);

// console.log(distance)

// OBJECT ORIENTED PROGRAMMING [OOP]
// var virtualPet = {
//     sleepy: true,
//     nap: function() {
//         this.sleepy = false
//     }
// }

// virtualPet.nap()
// console.log(virtualPet.sleepy);

// First-class functions
// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())


// Higher-order functions
// function addTwoNums(getNumber1, getNumber2) {
//     console.log(getNumber1() + getNumber2());
// }


//ASSESSMENT
// First programming assignment
// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     // Declare a variable for the message
//     var message = "%c" + txt;
    
//     // Declare a variable for the style
//     var style = `color: ${color};`;
    
//     // Append background and font size style to the style variable
//     style += `background: ${background};`;
//     style += `font-size: ${fontSize};`;
    
//     // Log the message with the applied style
//     console.log(message, style);
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     // Declare a fontStyle variable with default styles
//     var fontStyle = "color: tomato; font-size: 50px";
    
//     // Check if the reason is "birthday"
//     if (reason === 'birthday') {
//         console.log(`%cHappy birthday`, fontStyle);
//     } 
//     // If reason is "champions", log a congrats message
//     else if (reason === 'champions') {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } 
//     // For any other reason, log a default message
//     else {
//         console.log(`%cCelebrate!`, fontStyle);
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('champions');

// // Task 4: Combine both into a new function
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//     // Call consoleStyler with the first four arguments
//     consoleStyler(color, background, fontSize, txt);

//     // Call celebrateStyler with the reason argument
//     celebrateStyler(reason);
// }

// // Call styleAndCelebrate with appropriate arguments
// styleAndCelebrate("teal", "white", "25px", "You made it!", "birthday");




    // function meal(animal) {
    //     animal.food = animal.food + 10;
    // }

    // var dog = {
    //     food: 10
    // };
    // meal(dog);
    // meal(dog);

    // console.log(dog.food);

    // var purchase1 = {
    //     shoes: 100,
    //     stateTax: 1.2,
    //     totalPrice: function() {
    //         var calculation = this.shoes * this.stateTax;
    //         console.log('Total price: ', calculation)
    //     }
    // }
    // purchase1.totalPrice()




    //CLASS
//     class Bird {
//     useWings() {
//         console.log("Flying!");
//     }
// }
// class Eagle extends Bird {
//     useWings() {
//         super.useWings();
//         console.log("Barely flapping!");
//     }
// }
// class Penguin extends Bird {
//     useWings() {
//         console.log("Diving!");
//     }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"



// function Icecream(flavor){
//     this.flavor = flavor;
//     this.meltIt = function(){
//        console.log(`The ${this.flavor} has melted`);
//     }
// }

// appleIcecream = new Icecream('apple');
// kiwiIcecream = new Icecream('kiwi');

// kiwiIcecream;
// appleIcecream

// class Vehicle {
//     constructor(brand, year){
//         this.brand = brand;
//         this.year = year;
//     }

//     start(){
//         console.log(`${this.brand} engine stared.`)
//     }
// }

// class Car extends Vehicle{
//      constructor(brand, year, model){
//         super(brand, year);
//         this.model = model;
//      }

//      displayInfo(){
//         console.log(`${this.brand} ${this.model}, made in ${this.year}`);
//      }
// }

// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.start();
// myCar.displayInfo();



//DEFENSIVE PROGRAMMING
// Default Parameters
// class WithDefaultParams {
//     constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = num3;
//         this.string1 = string1;
//         this.bool1 = bool1;
//     }
//     calculate() {
//         if(this.bool1) {
//             console.log(this.string1, this.num1 + this.num2 + this.num3);
//             return;
//         }
//         return "The value of bool1 is incorrect"
//     }
// }
// var better = new WithDefaultParams();
// better.calculate(); // Result: 6


// console.log("abcd".match(/d/))



//ASSESSMENT
// class Train {
//     constructor(color, lightsOn){
//         this.color = color;
//         this.lightsOn = lightsOn
//     }
//     toggleLights(){
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus(){
//         console.log('The light is', this.lightsOn)
//     }
//     getSelf(){
//         console.log(this);
//     }
//     getPrototype(){
//         var proto =Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }

// class HighSpeedTrain extends Train{
//     constructor(passenger, highSpeedOn, color, lightsOn){
//         super(color,lightsOn);
//         this.passenger = passenger;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed(){
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed Status', this.highSpeedOn)
//     }
//     toggleLights(){
//         super.toggleLights();
//         super.lightsStatus();
//         console.log('Lights are 100% operational.')
//     }
// }

// var highSpeed1 = new HighSpeedTrain (300, false, 'green', false);
// highSpeed1.toggleHighSpeed()
// highSpeed1.toggleLights()

// class Animal {
//     constructor(color ='yellow', energy = 100){
//         this.color = color;
//         this.energy = energy
//     }
//     isActive(){
//         if(this.energy > 0){
//             this.energy -= 20;
//             console.log('Energy is decreasing, currently at:', this.energy)
//         }else if(this.energy == 0){
//             this.sleep();
//         }
//     }
//     sleep(){
//         this.energy += 20;
//         console.log('Energy is increasing, currently at:', this.energy)
//     }
//     getColor(){
//         console.log(this.color)
//     }
// }

// class Cat extends Animal {
//     constructor (sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy){
//         super(color, energy);
//         this.sound = sound;
//         this.canJumpHigh = canJumpHigh;
//         this.canClimbTrees = canClimbTrees;
//     }
//     makeSound(){
//         console.log(this.sound)
//     }
// }

// class Bird extends Animal{
//     constructor (sound = 'chirp', canFly = true, color, energy){
//         super(color, energy);
//         this.sound = sound;
//         this.canFly = canFly;
//     }
//     makeSound(){
//         console.log(this.sound)
//     }
// }

// class Tiger extends Animal {
//     constructor (tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy){
//         super(sound,canJumpHigh,canClimbTrees, color,energy)
//         this.tigerSound = tigerSound;
//     }
//     makeSound(option){
//         if (option){
//             super.makeSound()
//         }
//         console.log(this.tigerSound);
//     }
// }

// class Parrot extends Bird {
//     constructor(canTalk =  false, sound,canFly, color,energy) {
//         super(sound,canFly, color,energy);
//         this.canTalk = canTalk;
//     }
//     // makeSound method takes a parameter `option`
//     makeSound(option) {
//         if (option) {
//             super.makeSound(); // Calls the parent class's makeSound if option is true
//         }
//         if (this.canTalk) {
//             console.log("I'm a talking parrot!"); // If canTalk is true, it talks
//         }
//     }
// }


// var polly = new Parrot(true); 
// var fiji = new Parrot(false);

// polly.makeSound(); 
// fiji.makeSound();
// fiji.makeSound(); // undefined
// fiji.makeSound(true); // chirp

// polly.makeSound(); // I'm a talking parrot!
// polly.makeSound(true); // chirp, I'm a talking parrot!

// polly.color; // yellow
// polly.energy; // 100

// polly.isActive(); // Energy is decreasing, currently at: 80

// var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
// penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

// penguin.sound; // 'shriek'
// penguin.canFly; // false
// penguin.color; // 'black and white'
// penguin.energy; // 200
// penguin.isActive(); // Energy is decreasing, currently at: 180

// var leo = new HouseCat();

// // leo, no purring please:
// leo.makeSound(false); // meow
// // leo, both purr and meow now:
// leo.makeSound(true); // purr, meow

// var cuddles = new Tiger();
// cuddles.makeSound(false); // Roar!
// cuddles.makeSound(true); // purr, Roar!



// // Task 1: Code a Person Class
// class Person {
//             // WRITE YOUR CODE HERE - Add a constructor with default parameters
//     constructor(name = "Tom", age = 20, energy = 100) {
//         this.name = name;
//         this.age = age;
//         this.energy = energy;
//     }
//     // WRITE YOUR CODE HERE - Add the sleep() method
//     sleep() {
//         this.energy += 10;
//     }
//     // WRITE YOUR CODE HERE - Add the doSomethingFun() method
//     doSomethingFun() {
//         this.energy -= 10;
//     }
// }

// // Task 2: Code a Worker Class
// // WRITE YOUR CODE HERE - Define the Worker class that extends Person
// class Worker extends Person {
//         // WRITE YOUR CODE HERE - Add a constructor with additional parameters
//     constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
//         super(name, age, energy);
//         this.xp = xp;
//         this.hourlyWage = hourlyWage;
//     }

//     goToWork() {
//         this.xp += 10;
//     }
// }

// // Task 3: Code an Intern Object
// function intern() {
//         // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
//     let internObj = new Worker("Bob", 21, 110, 0, 10);
//     internObj.goToWork();
//     return internObj;
// }

// // Task 4: Code a Manager Object
// function manager() {
//     // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
//     let managerObj = new Worker("Alice", 30, 120, 100, 30);
//         // WRITE YOUR CODE HERE - Call the doSomethingFun() method
//     managerObj.doSomethingFun();
//         // WRITE YOUR CODE HERE - Return the manager object
//     return managerObj;
// }


// const colors = ['red','orange','yellow'];
// for(var color of colors){
//     console.log(color)
// }

// function testBracketsDynamicAccess() {
//   var dynamicKey;
//   if(Math.random() > 0.5) {
//     dynamicKey = "speed";
//    }else{
//      dynamicKey = "color";
//    }

//     var drone = {
//       speed: 15,
//       color: "orange"
//     }

//     console.log(drone[dynamicKey]);
// }
// testBracketsDynamicAccess();

// const car = {
//     engine: true,
//     steering: true,
//     speed: 'slow'
// }

// const sportCar = Object.create(car);
// sportCar.speed = 'fast';
// // console.log("The sportCar object: ", sportCar)

// for(prop in sportCar){
//     console.log(prop)
// }

// for(prop of Object.keys(sportCar)){
//     console.log(prop, ": ", sportCar[prop])
// }


// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
// function logDairy() {
//   for ( item of dairy) {
//     console.log(item);
//   }
// }
// logDairy()
// // Task 2
// // WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
// const animal = {  
//     canJump: true  
// };  

// const bird = Object.create(animal);  
// bird.canFly = true;  
// bird.hasFeathers = true;
// function birdCan() {
//     for (prop of Object.keys(bird)) {
//         console.log(`${prop}: ${bird[prop]}`)
//     }
// }
// birdCan()
// // Task 3
// // WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
// function animalCan() {
//     for (prop in bird) {
//         console.log(`${prop}: ${bird[prop]}`)
//     }
// }
// animalCan()



//DESTRUCTURING
// const gymData = {
//   trainers: [
//     { name: "Alice", role: "Strength Coach" },
//     { name: "Bob", role: "Cardio Trainer" }
//   ],
//   equipment: [
//     { type: "Treadmill", count: 4 },
//     { type: "Bike", count: 6 }
//   ],
//   openHours: "6am - 10pm"
// };

// const {
// trainers: [{name: trainerName, role: trainerRole}],
// equipment: [{type: equip1Type}, { type: equip2Type}]
// } = gymData

// console.log(`${trainerName} is will using the ${equip2Type}`)


// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach( function(veggie, index) {
//     console.log(`${index}. ${veggie}`);
// });



//FILTER FUNCTION
// const nums = [0, 10, 20, 30, 40, 50];

// const result = nums.filter(function(num) {
//     return num > 20;
// });

// console.log(result);

// const result = [0, 10, 20, 30, 40, 50].map(function(num) {
//     return num / 10;
// });

// console.log(result); // [0, 1, 2, 3, 4, 5]

// const result = [];
// const drone = {
//     speed: 100,
//     color: 'yellow'
// }
// const droneKeys = Object.keys(drone);
// droneKeys.forEach( function(key){
//     result.push(key, drone[key])
// })
// console.log(result)


// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");

// console.log(bestBoxers.get(1) );




//SPREAD AND REST OPERATOR
// let veggies = ['onion', 'parsley'];

// veggies=[...veggies, 'carrot', 'beetroot'];

// console.log(veggies)


// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//     h1.innerText = input.value
// })


// var h1 = document.querySelector('h1');

// var arr = [ 'Example Domain','First Click','Second Click','Third Click'];

// function handleClicks() {
//     switch(h1.innerText) {
//         case arr[0]:
//             h1.innerText = arr[1]
//             break
//         case arr[1]:
//             h1.innerText = arr[2]
//             break
//         case arr[2]:
//             h1.innerText = arr[3]
//             break
//         default:
//             h1.innerText = arr[0]
//     }
// }

// h1.addEventListener('click', handleClicks);



//ASSESSMENT
// Correct dish dataset (Step 1)
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "Vegetarian Pizza", price: 6.45 }
];

// Steps 2–8: Define getPrices()
function getPrices(taxBoolean) {
  for (let i = 0; i < dishData.length; i++) {
    const dish = dishData[i];
    let finalPrice;

    if (taxBoolean === true) {
      finalPrice = dish.price * 1.2;
    } else if (taxBoolean === false) {
      finalPrice = dish.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }

    // ✅ FIXED formatting: No space after the "$"
    console.log("Dish: " + dish.name + " Price: $" + finalPrice.toFixed(2));
  }
}

// Steps 9–13: Define getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  if (typeof guests === "number" && guests > 0 && guests < 30) {
    let discount = 0;

    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }

    // ✅ Keep discount formatting simple
    console.log("Discount is: $" + discount);
  } else {
    // ✅ Match exact string
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Step 14: Sample test cases (optional)
getDiscount(true, 2);
getDiscount(true, 6);
getDiscount(false, 3);
getDiscount(false, 8);
getDiscount(true, 50); // invalid
getDiscount("yes", 2); // invalid
