export default './js/pandemicWind.js';

// This function stores our state.
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

// default Values
export const _health = 50;
export const _rations = 5;
export const _rolls = 12;
// const _time = 100;

//Health Modifier (positive)
export const gainHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || _health) + (val || 0)
    });
  };
};
//Health Modifier (negative)
export const loseHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || _health) - (val || 0)
    });
  };
};

//Ration Modifier (positive)
export const updateRations = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || _rations) + (val || 0)
    });
  };
};

//Rolls Modifier (positive)
export const updateRolls = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || _rolls) + (val || 0)
    });
  };
};

// Health Actions
export const getsVaccinated = gainHealth("health")(10);
export const getsCovid = () => {
  let newState = stateControl(loseHealth("health")(20));
  newState = stateControl(updateRations("rations")(10));
  newState = stateControl(updateRolls("rolls")(5));
  return newState;
};
// Ration Actions
export const groceryShopping = updateRations("rations")(14);
// Rolls Actions
export const findsTP = updateRolls("rolls")(3);
export const buysBidet = updateRolls("rolls")(100);

