function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog (name = 'Noodles') {
  this.name = name;
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I\'m chasing ${cat.name}! Woof!`);
};

const Markov = new Cat ();
const Noodles = new Dog ();
const Poodles = new Dog('Poodles');

Noodles.chase(Markov);

Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles]);
