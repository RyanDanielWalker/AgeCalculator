import AgeCalculator from '../src/js/ageCalculator.js'

describe('AgeCalculator', () => {
  test('should create an object with three properties: planetName: Earth, userAge: 32, lifeExpectancy: 77', () => {
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
  test('should calculate user age on Mars based on inputted age', () => {
    let newUser = new AgeCalculator("Mars", 32)
    newUser.marsCalc()
    expect(newUser.userAge).toEqual(17)
  });
  test('should calculate user life expectancy based on year length of Mars', () => {
    let newUser = new AgeCalculator("Mars", 32, 77)
    newUser.marsCalc()
    expect(newUser.lifeExpectancy).toEqual(41)
  });
  test('should calculate user age on Jupiter based on inputted age', () => {
    let newUser = new AgeCalculator("Jupiter", 32)
    newUser.jupiterCalc()
    expect(newUser.userAge).toEqual(3)
  });
  test('should calculate user life expectancy based on year length of Jupiter', () => {
    let newUser = new AgeCalculator("Mars", 32, 77)
    newUser.jupiterCalc()
    expect(newUser.lifeExpectancy).toEqual(6)
  });
  test('should calculate how many years a user has left to live based on age and life expectancy', () => {
    let newUser = new AgeCalculator()
    newUser.userAge = 32
    newUser.lifeExpectancy = 77
    expect(newUser.yearsLeftCalc()).toEqual(45)
  });
  test('should calculate how many years past life expectancy user has lived if they have lived past expectancy', () => {
    let newUser = new AgeCalculator()
    newUser.userAge = 85
    newUser.lifeExpectancy = 77
    expect(newUser.yearsLeftCalc()).toEqual(8);
  });
  test('should add string "You have ${this.yearsLeft} to live." as value for yearsLeft', () => {
    let newUser = new AgeCalculator()
    newUser.userAge = 32
    newUser.lifeExpectancy = 77
    newUser.yearsLeftCalc()
    expect(newUser.yearsLeft).toEqual("You have 45 years left to live.")
  })
})






