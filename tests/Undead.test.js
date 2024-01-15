//Undead.test.js

const Undead = require('../src/Undead');

describe('Undead class', () => {
  test('should create an Undead object with correct name and default properties', () => {
    const undead = new Undead('Dracula');
    //console.log(undead); 
    expect(undead.name).toBe('Dracula');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('should correctly change health when damaged', () => {
    const undead = new Undead('Dracula');
    undead.damage(50);
    expect(undead.health).toBe(50);
  });
  test('should create a Undead object with a valid name', () => {
    const undead = new Undead('ValidName'); // Имя должно быть от 2 до 10 символов
    // Добавьте ожидаемые проверки для свойств объекта Undead

  });
  test('should throw an error if provided with an invalid name', () => {
    expect(() => new Undead('V')).toThrowError('Name length should be between 2 and 10 characters');
  });
  // Add more test cases to thoroughly test Undead's properties and methods
});