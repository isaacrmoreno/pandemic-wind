import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, getsVaccinated, groceryShopping, getsCovid, buysBidet, findsTP } from './js/pandemicWind.js';



$(document).ready(function () {

  $('#health1').click(function () {
    const newState = stateControl(getsVaccinated);
    $('#health-value').text(`Health: ${newState.health}`);
  });
  $('#health2').click(function () {
    const newState = stateControl(getsCovid);
    $('#health-value').text(`Health: ${newState.health}`);
    $('#rations-value').text(`Rations: ${newState.rations}`);
    $('#rolls-value').text(`Rolls: ${newState.rolls}`);
  });
  $('#rations3').click(function () {
    const newState = stateControl(groceryShopping);
    $('#rations-value').text(`Rations: ${newState.rations}`);
  });
  $('#rolls4').click(function () {
    const newState = stateControl(findsTP);
    $('#rolls-value').text(`Rolls: ${newState.rolls}`);
  });
  $('#rolls5').click(function () {
    const newState = stateControl(buysBidet);
    $('#rolls-value').text(`Rolls: ${newState.rolls}`);
  });

  $('#show-state').click(function () {
    const currentState = stateControl();
    $('#health-value').text(`Health: ${currentState.health}`);
    $('#rations-value').text(`Rations: ${currentState.rations}`);
    $('#rolls-value').text(`Rolls: ${currentState.rolls}`);
  });
});