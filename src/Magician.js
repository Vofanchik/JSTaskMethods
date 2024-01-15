// Magician.js

// Импортируем родительский класс Character
const Character = require('./Character');

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
    // Другие уникальные для Magician характеристики, если есть
  }

  // Дополнительные методы, уникальные для Magician, если есть
}

module.exports = Magician;

   