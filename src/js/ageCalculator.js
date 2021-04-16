export default class AgeCalculator {
  constructor(planetName, userAge, lifeExpectancy) {
    this.planetName = planetName;
    this.userAge = userAge;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsLeft = 0;
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
    this.lifeExpectancy = Math.round(this.lifeExpectancy / 1.88);
  }

  jupiterCalc() {
    this.userAge = Math.round(this.userAge / 11.86);
    this.lifeExpectancy = Math.round(this.lifeExpectancy / 11.86);
  }

  yearsLeftCalc() {
    if (this.userAge < this.lifeExpectancy) {
      this.yearsLeft = `You have ${this.lifeExpectancy - this.userAge} years left to live.`;
      return (this.lifeExpectancy - this.userAge)
    } else {
      this.yearsLeft = this.userAge - this.lifeExpectancy;
      return (this.userAge - this.lifeExpectancy)
    }


  }














}