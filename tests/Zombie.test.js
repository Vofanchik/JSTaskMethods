// Zombie.test.js

const Zombie = require('../src/Zombie');
describe('Undead class', () => {

  test('should create a Zombie object with correct name and default properties', () => {
    const zombie = new Zombie('WalkingDead');
    expect(zombie.name).toBe('WalkingDead');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
  
  test('should correctly increase level', () => {
    const zombie = new Zombie('WalkingDead');
    zombie.levelUp();
    expect(zombie.level).toBe(2);
  });
  test('should create a Zombie object with a valid name', () => {
    const zombie = new Zombie('ValidName'); // Имя должно быть от 2 до 10 символов
    // Добавьте ожидаемые проверки для свойств объекта zombie
  });
  test('should throw an error if provided with an invalid name', () => {
    expect(() => new Zombie('V')).toThrowError('Name length should be between 2 and 10 characters');
  });
  // Add more test cases to thoroughly test Zombie's properties and methods
});









