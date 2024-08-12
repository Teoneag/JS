"use strict";
x = {p1:10, p2:20}; 

var gameState = {
  _score: 10,
  _enemies: 99,
  _lives: 3,

  set score(value) {
    this._score += value;
  },
  get score() {
    return this._score;
  },

  get enemies() {
    return this._enemies;
  },
  get killEnemies() {
    this._enemies--;
  },

  set killEnemies(num) {
    this._enemies -= num;
  },
};

gameState.score = 10;
console.log(gameState.score); //10

gameState.score = 100;
gameState.score = 50;
console.log(gameState.score); //170


console.log(gameState.enemies); //99
gameState.killEnemies = 3;
console.log(gameState.enemies); //96

