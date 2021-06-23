// export default './js/pandemicWind.js';

// const storyLine = [

//   // day 1-5
// [],

// [],

// [],

// [],

// []
// ]

// move 33
// state[move][0] = 1 + position

// Helpers
const storeState = () => {
  let currentState = {
    move: 0,
    day: 0,
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

// Modifiers (Update Prop Value + Days - rations)
const updateValAndProgressStory = (prop) => {
  const randomNum = (state) => {
    if (state.rations < 14) {
      if (state.rations <= 0) {
        return 1;
      }
      return generateRandom(state.rations);
    }
    return generateRandom(14);
  };

  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] + (val || 0),
      move: state.move + 1,
      day: state.day + randomNum(state),
      rations: state.rations - randomNum(state),
    });
  };
};

//Modifiers (positive)
const updateVal = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] + (val || 0),
    });
  };
};

// ----------- Actions ----------- //

// Mental Health
export const fileForUnemployment = updateValAndProgressStory("mentalHealth")(1);
// Physical Health
export const getsVaccinated = updateValAndProgressStory("physicalHealth")(10);
export const workout = updateValAndProgressStory("physicalHealth")(2);
// Ration
export const groceryShopping = updateValAndProgressStory("rations")(14);
export const bakeSourdough = updateValAndProgressStory("rations")(-1);
// Rolls
export const buysBidet = updateValAndProgressStory("rolls")(100);
// Savings
export const renovateKitchen = updateValAndProgressStory("savings")(-800);
export const investInStockMarket = updateValAndProgressStory("savings")(-500);

// ----------- Effects ----------- //

// Collateral Effects
export const getsCovid = () => {
  const chance = generateRandom(100);
  if (chance > 60) {
    let newState = stateControl(updateVal("physicalHealth")(-20));
    newState = stateControl(updateVal("mentalHealth")(-10));
    newState = stateControl(updateVal("rations")(-10));
    newState = stateControl(updateVal("rolls")(-5));
    return newState;
  } else {
    let newState = stateControl(updateVal("mentalHealth")(-10));
    return newState;
  }
};

// Mental Health
export const loseJob = updateVal("mentalHealth")(-5);
export const faceTimeMom = updateVal("mentalHealth")(3);
export const unplannedZoomHappyHour = updateVal("mentalHealth")(3);
// Physical Health
export const getsPoisonOak = updateVal("physicalHealth")(-1);
export const hurtsLegWhileDrunk = updateVal("physicalHealth")(-5);
export const giftedGymEquip = updateVal("physicalHealth")(-5);
// Rolls
export const findsTP = updateVal("rolls")(3);
export const diarrhea = updateVal("rolls")(-1);
// Savings
export const getsUnemployment = updateVal("savings")(300);
export const getsStimulus = updateVal("savings")(1400);
