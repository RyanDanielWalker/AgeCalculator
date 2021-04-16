import AgeCalculator from '../src/js/ageCalculator.js'

describe('AgeCalculator', () => {
  test('should create an object with two properties: planetName: Earth, userAge: 32', () => {
    const newCalculator = new AgeCalculator("earth", 32)
    expect(newCalculator.planetName).toEqual("earth");
    expect(newCalculator.userAge).toEqual(32)
  });
})