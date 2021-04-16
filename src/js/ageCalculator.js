export default class AgeCalculator {
  constructor(planetName, userAge, lifeExpectancy) {
    this.planetName = planetName;
    this.userAge = userAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryCalc() {
    this.userAge = Math.round(this.userAge / .24)
    this.lifeExpectancy = Math.round(this.lifeExpectancy / .24)
    return (this.userAge, this.lifeExpectancy)
  }

  venusCalc() {

  }







}