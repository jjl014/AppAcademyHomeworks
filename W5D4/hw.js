let madLib = function(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`;
};

let isSubstring = function(searchString, subString) {
  // searchString.indexOf(subString) !== 1;
  return searchString.includes(subString);
};

let fizzBuzz = function(array) {
  let result = [];
  array.forEach(num => {
    if ((num % 5 === 0 || num % 3 === 0) && num % 15 !== 0) {
      result.push(num);
    }
  });
  return result;
};

let isPrime = function(number) {
  if (number <= 1) { return false; }
  for( let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

let sumOfNPrimes = function(n) {
  let result = 0;
  let count = 0;
  let i = 0;
  while (count < n) {
    if (isPrime(i)) {
      result += i;
      count += 1;
    }
    i += 1;
  }
  return result;
};

function titleize(names, callback) {
  let titleized = names.map( name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}

titleize(["Jack", "Jill", "Reaper"], names => {
  names.forEach(name => console.log(name));
});

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function() {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  let trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

herd.forEach(Elephant.paradeHelper);

function dinerBreakfast() {
  let order = "I'd like scrambed eggs and bacon please.";
  console.log(order);

  return (food) => {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
}
