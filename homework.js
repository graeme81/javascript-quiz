// Section 1

// What types are these?

/* 1.1 */ 1;                 Number
/* 1.2 */ "cat";             String  
/* 1.3 */ true;              Boolean
/* 1.4 */ [];                Object
/* 1.5 */ {};                Object
/* 1.6 */ 1.1;               Number
/* 1.7 */ var myVariable;    undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1;              true
/* 2.2 */ "cat";          true
/* 2.3 */ true;           true
/* 2.4 */ NaN;            false
/* 2.5 */ [];             true
/* 2.6 */ {};             true
/* 2.7 */ undefined;      false
/* 2.8 */ "";             false
/* 2.9 */ 0;              false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var count = 1;
// 3.2 Assign a variable that is a string
var name = "Graeme";
// 3.3 Assign a variable that is a boolean
var itIs = true;
// 3.4 Assign a variable that is an object
var car = {
  make:"Toyota",
  model:"Celica",
  cost:2499
};


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
if ("We just met"){
  console.log("hello");
}else{
console.log("bye");
}


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var animal1 = animals[0];
// 5.2. Assign the last element to a variable
var animal2 = animals[animals.length-1];
// 5.3. Assign the length of an array to a variable
var length - animals.length;
// 5.4. Add an item to the end of the array
animals.push("tiger");
// 5.5. Add an item to the start of the array
animals.unshift("gorilla");
// 5.6. Assign the index of hedgehog to a variable
var num = animals.indexOf("hedgehog");


// Section 6

// 6.1 Create an array of 5 vegetables
var vegetables = [ "carrot", "potato", "onion", "turnip", "leek"]
// 6.2 Loop over the array and write to the console using a "while"
var i = 0;
while(i < vegetables.length){
  console.log(vegetables[i]);
  i++
}
// 6.3 Loop again using a "for" with a counter
for (var i = 0;i <vegetables.length; i++){
  console.log(vegetables[i]);
}

// 6.4 Loop again using a "for of"
for(var veg of vegetables){
  console.log(veg);
}


// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
var total = 0
for (acc of accounts){
  total = total + acc.amount;
}
// 7.2 Find the amount of money in the account with the largest balance
var amounts = [];
for (acc of accounts){
  amounts.push(acc.amount);
}
var most = Math.max.apply(Math,amounts);
// 7.3 Find the name of the account with the smallest balance
var smallest = 0;
var name;

for (acc of accounts){
  if (smallest === 0 || acc.amount < smallest){
    smallest = acc.amount;
    name = acc.name;
  }
}
// 7.4 Calculate the average bank account value
var total=0;

for (acc of accounts){
  total = total+acc.amount;
}
var average = total/accounts.length;
// 7.5 Find the value of marcs bank account
for(acc of accounts){
  if(acc.name === "marc"){
    var balance = acc.amount;
    break;
  }
}
// 7.6 Find the holder of the largest bank account
var largest = 0;
var name;

for (acc of accounts){
  if (largest === 0 || acc.amount > largest){
    largest = acc.amount;
    name = acc.name;
  }
}
// 7.7 Calculate the total cash in business accounts
var total = 0;
for (acc of accounts){
  if (acc.type === 'business'){
    total = total +acc.amount;
  }
}
// 7.8 Find the largest personal account owner
var largest = 0;
for(acc of accounts){
  if (acc.type === 'personal' && acc.amount > largest){
    largest = acc.amount;
    var name = acc.name;
  }
}

// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson ={
  name:"Joe",
  height:7.2,
  favouriteFood:"meat",
  eat:function(){
    return this.name+ " is eating "+ this.favouriteFood;
  }
}

console.log(myPerson.eat);