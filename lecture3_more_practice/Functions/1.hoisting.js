var x = six();

//CASE 1: function declaration
function six() {
  return 6;
}

var y = seven();

//CASE 2: function expression
var seven = function() {
  return 7;
};

console.log(x + " - " + y);



function f() {
    x = 5;
    y = 3;
  }
  f();
  console.log(x); //5
  console.log(y); //3


  function f() {
    a = 5;
    b = 3;
    let a, b; //variable declaration
  }
  f();
  console.log(a); //ReferenceError: a is not defined
  console.log(b);



  function Game(id) {
    this.id = id;
  }
  
  /* new member functions are defined once in the prototype */
  Game.prototype.getID = function () {
    return this.id;
  };
  Game.prototype.setID = function (id) {
    this.id = id;
  };
  
  /* constructor */
  function TwoPlayerGame(id, p1, p2) {
    /*
     * call(...) calls a function with a given `this` 
     * value and arguments.
     */
    Game.call(this, id);
    console.log('what is this? '+this.);
    this.p1 = p1;
    this.p2 = p2;
  }
  
  /* redirect prototype */
  TwoPlayerGame.prototype = Object.create(Game.prototype);
  TwoPlayerGame.prototype.constructor = TwoPlayerGame;
  
  /* use it */
  var TPGame = new TwoPlayerGame(1, "Alice", "Bob");
  console.log(TPGame.getID()); //prints out "1"
  console.log(TPGame.p1); //prints out "Alice"
  
  
  