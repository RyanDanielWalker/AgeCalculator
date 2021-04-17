import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from '../src/js/ageCalculator.js';

$("#planetForm").submit((event) => {
  event.preventDefault();
  let userAge = $("#userAge").val();
  let planetName = $("#planetChoice").val();
  let lifeExpectancy = $("#lifeExpectancy").val();
  if (userAge && planetName && lifeExpectancy) {
    let newUser = new AgeCalculator(planetName, userAge, lifeExpectancy);
    if (newUser.planetName === "Mercury") {
      newUser.mercuryCalc();
      newUser.yearsLeftCalc();
    } else if (newUser.planetName === "Venus") {
      newUser.venusCalc();
      newUser.yearsLeftCalc();
    } else if (newUser.planetName === "Mars") {
      newUser.marsCalc();
      newUser.yearsLeftCalc();
    } else if (newUser.planetName === "Jupiter") {
      newUser.jupiterCalc();
      newUser.yearsLeftCalc();
    }
    let result = newUser.result();
    $("#output").text(result);
    $("#clearButton").show();
  } else {
    alert("Please complete all entry fields!");
  }
});
$("#clearButton").click(function () {
  location.reload();
});





