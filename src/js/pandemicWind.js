// export default './js/pandemicWind.js';

// Helpers
const storeState = () => {
  let currentState = {
    days: 1,
    physicalHealth: 50,
    mentalHealth: 50,
    rations: 5,
    rolls: 12,
    savings: 2000,
  };
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// function turn

export const stateControl = storeState();

function generateRandom(range) {
  return Math.floor(Math.random() * range) + 1;
}

// Core Functions

// Modifiers (Positive + Day)
const plusValAddDay = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] + (val || 0),
      days: state[storeState.days]++,
    });
  };
  // call turn end helper -> loop thru today's actions, and display news
};
//Modifiers (Negative + Day)
const minusValAddDay = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] - (val || 0),
      days: state[storeState.days]++,
    });
  };
};

//Modifiers (positive)
const plusVal = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] + (val || 0),
    });
  };
  // call turn end helper -> loop thru today's actions, and display news
};
//Modifiers (negative)
const minusVal = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] - (val || 0),
    });
  };
};

// ----------- Actions ----------- //

// Mental Health
export const fileForUnemployment = plusValAddDay("mentalHealth")(1);
// Physical Health
export const getsVaccinated = plusValAddDay("physicalHealth")(10);
export const workout = plusValAddDay("physicalHealth")(2);
// Ration
export const groceryShopping = plusValAddDay("rations")(14);
export const bakeSourdough = minusValAddDay("rations")(1);
// Rolls
export const buysBidet = plusValAddDay("rolls")(100);
// Savings
export const renovateKitchen = minusValAddDay("savings")(800);
export const investInStockMarket = minusValAddDay("savings")(500);

// ----------- Effects ----------- //

// Collateral Effects
export const getsCovid = () => {
  const chance = generateRandom(100);
  if (chance > 60) {
    let newState = stateControl(minusVal("physicalHealth")(20));
    newState = stateControl(minusVal("mentalHealth")(10));
    newState = stateControl(minusVal("rations")(10));
    newState = stateControl(minusVal("rolls")(5));
    return newState;
  } else {
    let newState = stateControl(minusVal("mentalHealth")(10));
    return newState;
  }
};

// Mental Health
export const loseJob = minusVal("mentalHealth")(5);
export const faceTimeMom = plusVal("mentalHealth")(3);
export const unplannedZoomHappyHour = plusVal("mentalHealth")(3);
// Physical Health
export const getsPoisonOak = minusVal("physicalHealth")(1);
export const hurtsLegWhileDrunk = minusVal("physicalHealth")(5);
export const giftedGymEquip = minusVal("physicalHealth")(5);
// Rolls
export const findsTP = plusVal("rolls")(3);
export const diarrhea = minusVal("rolls")(1);
// Savings
export const getsUnemployment = plusVal("savings")(300);
export const getsStimulus = plusVal("savings")(1400);
