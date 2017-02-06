EPISODE 1
----------
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();
+++++++++++++++++
My name is Keith
+++++++++++++++++

EPISODE 2
----------
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
++++
3   the score variable is overshadowed
++++

Episode 3
----------
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
++++++++++++++++
0: Ducks    the animals variable is overwritten
1: Dogs
2: Lions
++++++++++++++++

EPISODE 4
----------
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
++++++++++++++++++++++++++++++++++
Suspects include: Jay, Val, Harvey, Rick
Suspect three is: Keith

//suspect 3 is overshadowed in the allSuspects function but not overwritten in the global
++++++++++++++++++++++++++++++++++

EPISODE 5
----------
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
+++++++
Poirot //detective name is reset to poirot befor printing out
+++++++

EPISODE 6
----------
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

+++++++++++++++++++++++
the murderer is valerie
//outer Function is called first in turn calling inner function which changes the changes the murderer globally to valerie.
+++++++++++++++++++++++