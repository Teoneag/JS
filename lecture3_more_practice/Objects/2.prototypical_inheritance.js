// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;


  };

Person.prototype.toString = function() {
    return "[object Person]";
}


const Ali = new Person('Tahir', 1989);
const Maria = new Person('Maria', 2017);
const jack = new Person('Jack', 1975);

Ali.toString = function() {
    return "this is Ali's object representation"
}
console.log(Ali.toString());


//added a new function.
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  Ali.calcAge();
  Maria.calcAge();
  console.log(Ali.__proto__);
  console.log(Person.prototype);
  console.log(Ali.__proto__ === Person.prototype);
  console.log(Person.prototype.isPrototypeOf(Ali));
  console.log(Person.prototype.isPrototypeOf(Maria));
  console.log(Person.prototype.isPrototypeOf(Person));


//we can also add properties
Person.prototype.species = 'Homo Sapiens'; //added a new property
console.log(Ali.species, Maria.species);  //both should return 'Homo Sapiens'
console.log(Ali.hasOwnProperty('firstName')); //true becuase it is its direct property
console.log(Ali.hasOwnProperty('species'));  //false becuase it is not a direct property


//Using the call() function

///////////////////////////////////////
// Inheritance Between "Classes": Object.create
const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  const steven = Object.create(PersonProto);
  const StudentProto = Object.create(PersonProto);


  StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
  };

  

  StudentProto.introduce = function () {

    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };

  
  const jay = Object.create(StudentProto);
  jay.init('Jay', 2010, 'Computer Science');
  jay.introduce();
  jay.calcAge();




//*! just for practice
//https://www.programiz.com/javascript/library/function/call
  //function definition 
function Animal(name, age) {
    this.name = name;
    this.age = age;
  }
  
  //function definition 
  function Horse(name, age) {
    Animal.call(this, name, age);
    this.sound = "Neigh";
  }
  
  //function definition 
  function Snake(name, age, sound) {
    Animal.call(this, name, age);
    this.sound = sound;
  }
  
  const snake1 = new Snake("Harry", 5, "hiss");
  console.log(snake1.name, snake1.age, snake1.sound);

  
  const horse1 = new Horse("Arnold", 8);
  console.log(horse1.name, horse1.age, horse1.sound);
