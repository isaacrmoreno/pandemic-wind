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
} from "./js/pandemicWind.js";

$(document).ready(function () {
  $("#health1").click(function () {
    const newState = stateControl(getsVaccinated);
    $("#physical-health-value").text(`Health: ${newState.physicalHealth}`);
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
    $("#rations-value").text(`Rations: ${newState.rations}`);
  });
  $("#rolls4").click(function () {
    const newState = stateControl(findsTP);
    $("#rolls-value").text(`Rolls: ${newState.rolls}`);
  });
  $("#rolls5").click(function () {
    const newState = stateControl(buysBidet);
    $("#rolls-value").text(`Rolls: ${newState.rolls}`);
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
    $("#savings-value").text(`Savings: ${currentState.rolls}`);
  });
});
