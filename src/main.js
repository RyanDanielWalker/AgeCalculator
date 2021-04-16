import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from '../src/js/ageCalculator.js';

// $(document).ready(() => {
$("#planetForm").submit((event) => {
  event.preventDefault();
  let planetName = $("#planetChoice").val();
  console.log(planetName)
  let userAge = $("#userAge").val();
  let lifeExpectancy = $("#lifeExpectancy").val();
  let newUser = new AgeCalculator(planetName, userAge, lifeExpectancy);
  console.log(newUser);
  if (newUser.planetName === "Mercury") {
    newUser.mercuryCalc();
    newUser.yearsLeftCalc();
    $("#output").text(newUser.lifeExpectancy);
  } else if (newUser.planetName === "Venus") {
    newUser.venusCalc();
    newUser.yearsLeftCalc();
    $("#output").text(newUser.lifeExpectancy);
  } else if (newUser.planetName === "Mars") {
    newUser.marsCalc();
    newUser.yearsLeftCalc();
    $("#output").text(newUser.lifeExpectancy);
  } else if (newUser.planetName === "Jupiter") {
    newUser.jupiterCalc();
    newUser.yearsLeftCalc();
    $("#output").text(newUser.lifeExpectancy);
  }
});
// });







