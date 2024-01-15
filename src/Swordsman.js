// Swordsman.js

// Импортируем родительский класс Character
const Character = require('./Character');

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
    // Другие уникальные для Swordsman характеристики, если есть
  }

 // Дополнительные методы, уникальные для Magician, если есть

}

module.exports = Swordsman;

