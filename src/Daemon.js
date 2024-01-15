//Daemonjs

// Импортируем родительский класс Character
const Character = require('./Character');

class Daemon extends Character{
    constructor(name) {
      super(name, 'Daemon');
      this.health = 100;
      this.level = 1;
      this.attack = 10;
      this.defence = 40;
    }
  
   
  }
  
  module.exports = Daemon;