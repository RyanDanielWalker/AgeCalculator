export default class AgeCalculator {
  constructor(planetName, userAge, lifeExpectancy) {
    this.planetName = planetName;
    this.userAge = userAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryCalc() {
    this.userAge = Math.round(this.userAge / .24);
    this.lifeExpectancy = Math.round(this.lifeExpectancy / .24);
  }

  venusCalc() {
    this.userAge = Math.round(this.userAge / .62);
    this.lifeExpectancy = Math.round(this.lifeExpectancy / .62);
  }

  marsCalc() {
    this.userAge = Math.round(this.userAge / 1.88);
  }









}