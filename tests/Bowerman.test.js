// Bowerman.test.js

const Bowerman = require('../src/Bowerman');

describe('Bowerman class', () => {
  test('should create a Bowerman object with correct name and default properties', () => {
    const bowerman = new Bowerman('John');
   // console.log(bowerman);
    expect(bowerman.name).toBe('John');
    expect(bowerman.type).toBe('Bowerman');
    expect(bowerman.health).toBe(100);
    expect(bowerman.level).toBe(1);
    expect(bowerman.attack).toBe(25);
    expect(bowerman.defence).toBe(25);
    // Проверка атаки и защиты зависит от типа, оставьте это для конкретных классов
  });

  test('should throw an error if provided with incorrect values', () => {
    expect(() => new Bowerman('Jo', 'Warrior')).toThrowError('Name length should be between 2 and 10 characters');
  });

  test('should create a bowerman object with a valid name', () => {
    const bowerman = new Bowerman
('ValidName'); // Имя должно быть от 2 до 10 символов
    
  });
  test('should throw an error if provided with an invalid name', () => {
    expect(() => new Bowerman('V')).toThrowError('Name length should be between 2 and 10 characters');
  });
  // Добавьте больше тестов для проверки общих свойств и методов Bowerman
});





