import AgeCalculator from '../src/js/ageCalculator.js'

describe('AgeCalculator', () => {
  test('should create an object with two properties: planetName: Earth, userAge: 32, lifeExpectancy: 77', () => {
    const newCalculator = new AgeCalculator("earth", 32, 77)
    expect(newCalculator.planetName).toEqual("earth");
    expect(newCalculator.userAge).toEqual(32)
    expect(newCalculator.lifeExpectancy).toEqual(77)
  });

  test('should calculate user age on Mercury based on inputted age', () => {
    let newUser = new AgeCalculator("mercury", 32)
    expect(newUser.mercuryCalc()).toEqual(133)
  });
  // test('should calculate user life expectancy based on user age on mercury', {

  // })
})

