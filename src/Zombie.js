//Zombiejs

// Импортируем родительский класс Character
const Character = require('./Character');

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
    // Другие уникальные для Zombie характеристики, если есть
  }

  // Дополнительные методы, уникальные для Zombie, если есть
}

module.exports = Zombie;