import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {
  stateControl,
  getsVaccinated,
  groceryShopping,
  getsCovid,
  buysBidet,
  findsTP,
  getsStimulus,
  storyLine,
} from "./js/pandemicWind.js";

function changeWind() {
  if (move === 1) {
    return storyLine[0][1];
  } else if (move === 2) {
    return storyLine[0][1];
  } else if (move === 2) {
    return storyLine[0][1];
  }
}







$(document).ready(function () {
  $("#health1").click(function () {
    const newState = stateControl(getsVaccinated);
    $("#day-value").text(`Day: ${newState.day}`);
    $("#physical-health-value").text(
      `Physical Health: ${newState.physicalHealth}`
    );
  });
  $("#health2").click(function () {
    const newState = stateControl(getsCovid);
    $("#physical-health-value").text(
      `Physical Health: ${newState.physicalHealth}`
    );
    $("#mental-health-value").text(`Mental Health: ${newState.mentalHealth}`);
    $("#rations-value").text(`Rations: ${newState.rations}`);
    $("#rolls-value").text(`Rolls: ${newState.rolls}`);
  });
  $("#rations3").click(function () {
    const newState = stateControl(groceryShopping);
    $("#day-value").text(`Day: ${newState.day}`);
    $("#rations-value").text(`Rations: ${newState.rations}`);
  });
  $("#rolls4").click(function () {
    const newState = stateControl(findsTP);
    $("#rolls-value").text(`Rolls: ${newState.rolls}`);
  });
  $("#rolls5").click(function () {
    const newState = stateControl(buysBidet);
    $("#day-value").text(`Day: ${newState.day}`);
    $("#rolls-value").text(`Rolls: ${newState.rolls}`);
  });
  $("#savings6").click(function () {
    const newState = stateControl(getsStimulus);
    $("#savings-value").text(`Savings: ${newState.savings}`);
  });

  $("#show-state").show(function () {
    const currentState = stateControl();
    $("#physical-health-value").text(
      `Physical Health: ${currentState.physicalHealth}`
    );
    $("#mental-health-value").text(
      `Mental Health: ${currentState.mentalHealth}`
    );
    $("#rations-value").text(`Rations: ${currentState.rations}`);
    $("#rolls-value").text(`Rolls: ${currentState.rolls}`);
    $("#savings-value").text(`Savings: ${currentState.savings}`);
    $("#day-value").text(`Day: ${currentState.day}`);
  });
});
