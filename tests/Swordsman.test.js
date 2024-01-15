// Swordsman.test.js

const Swordsman = require('../src/Swordsman');

describe('Swordsman class', () => {
  test('should create an Swordsman object with correct name and default properties', () => {
    const swordsman = new Swordsman('Dracula');
    //console.log(swordsman);
    expect(swordsman.name).toBe('Dracula');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('should correctly change health when damaged', () => {
    const swordsman = new Swordsman('Dracula');
    swordsman.damage(50);
    expect(swordsman.health).toBe(50);
  });
  test('should create a Swordsman  object with a valid name', () => {
    const swordsman = new Swordsman('ValidName'); // Имя должно быть от 2 до 10 символов
    // Добавьте ожидаемые проверки для свойств объекта Swordsman
  });
  test('should throw an error if provided with an invalid name', () => {
    expect(() => new Swordsman('V')).toThrowError('Name length should be between 2 and 10 characters');
  });
  //add more test cases to thoroughly test Undead's properties and methods
});









