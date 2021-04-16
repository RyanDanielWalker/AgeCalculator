import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from '../src/js/ageCalculator.js';

$(document).ready(() => {
  $("#planetForm").submit((event) => {
    event.preventDefault();
    let planetName = $("#planetChoice").val();
    let userAge = $("#userAge").val()
    let lifeExpectancy = $("#lifeExpectancy").val()
    let newUser = new AgeCalculator(planetName, userAge, lifeExpectancy);
    if (newUser.planetName === "Mercury") {
      newUser.mercuryCalc();
    } else if (newUser.planetName === "Venus") {
      newUser.venusCalc();
    } else if (newUser.planetName === "Mars") {
      newUser.marsCalc();
    } else if (newUser.planetName === "Jupiter") {
      newUser.jupiterCalc();
    }
    newUser.yearsLeftCalc();
  })

});