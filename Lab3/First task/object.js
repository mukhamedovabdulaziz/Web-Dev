function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
// ----------------------------------------
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);

// ----------------------------------------
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

// ----------------------------------------
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name);

// ----------------------------------------
let calculator = {
  read() {
    this.a = +prompt("Enter a", 0);
    this.b = +prompt("Enter b", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// ----------------------------------------
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// ----------------------------------------
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B());

// ----------------------------------------

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Calculator() {
  this.read = function () {
    this.a = +prompt("Enter a", 0);
    this.b = +prompt("Enter b", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
//---------------------------------------
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}
