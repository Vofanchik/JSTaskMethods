//Bowermanjs

// Импортируем родительский класс Character
const Character = require('./Character');
class Bowerman extends Character{
    constructor(name) {
      super(name, 'Bowerman');
      this.health = 100;
      this.level = 1;
      this.attack = 25;
      this.defence = 25;
    }
  
    // Дополнительные методы и свойства для класса Bowerman
  }
  
  module.exports = Bowerman;   