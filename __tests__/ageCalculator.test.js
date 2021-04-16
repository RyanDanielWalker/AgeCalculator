import AgeCalculator from '../src/js/ageCalculator.js'

describe('AgeCalculator', () => {
  test('should create an object with two properties: planetName: Earth, userAge: 32', () => {
    const newCalculator = new AgeCalculator("earth", 32)
    expect(newCalculator.planetName).toEqual("earth");
    expect(newCalculator.userAge).toEqual(32)
  });

  test('should calculate users age on Mercury based on inputted age', () => {
    let newUser = new AgeCalculator("mercury", 32)
    expect(newUser.mercuryCalc()).toEqual(Math.round(32 * .24))
  })
})

