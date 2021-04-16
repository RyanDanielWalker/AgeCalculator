import AgeCalculator from '../src/js/ageCalculator.js'

describe('AgeCalculator', () => {
  test('should create an object with two properties: planetName: Earth, userAge: 32, lifeExpectancy: 77', () => {
    const newCalculator = new AgeCalculator("earth", 32, 77)
    expect(newCalculator.planetName).toEqual("earth");
    expect(newCalculator.userAge).toEqual(32)
    expect(newCalculator.lifeExpectancy).toEqual(77)
  });

  test('should calculate user age on Mercury based on inputted age', () => {
    let newUser = new AgeCalculator("Mercury", 32)
    newUser.mercuryCalc()
    expect(newUser.userAge).toEqual(133)
  });
  test('should calculate user life expectancy based on year length of Mercury', () => {
    let newUser = new AgeCalculator("Mercury", 32, 77)
    newUser.mercuryCalc()
    expect(newUser.lifeExpectancy).toEqual(321)
  });
  test('should calculate user age on Venus based on inputted age', () => {
    let newUser = new AgeCalculator("Venus", 32)
    newUser.venusCalc()
    expect(newUser.userAge).toEqual(52)
  });
  test('should calculate user life expectancy based on year length of Venus', () => {
    let newUser = new AgeCalculator("Venus", 32, 77)
    newUser.venusCalc()
    expect(newUser.lifeExpectancy).toEqual(124)
  });

})

