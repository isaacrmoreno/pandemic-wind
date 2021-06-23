// export default './js/pandemicWind.js';

// Helpers
export const storeState = () => {
  let currentState = {
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

export const stateControl = storeState();

function generateRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

// Core Functions

//Health Modifier (positive)
export const plusPhysicalHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] + (val || 0),
    });
  };
};
//Health Modifier (negative)
export const minusPhysicalHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] - (val || 0),
    });
  };
};

//Health Modifier (positive)
export const plusMentalHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] + (val || 0),
    });
  };
};
//Health Modifier (negative)
export const minusMentalHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] - (val || 0),
    });
  };
};

//Ration Modifier (positive)
export const plusRations = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] + (val || 0),
    });
  };
};
//Ration Modifier (negative)
export const minusRations = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] - (val || 0),
    });
  };
};
//Rolls Modifier (positive)
export const plusRolls = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] + (val || 0),
    });
  };
};
//Rolls Modifier (negative)
export const minusRolls = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] - (val || 0),
    });
  };
};
//Savings Modifier (positive)
export const plusSavings = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] + (val || 0),
    });
  };
};
//Savings Modifier (negative)
export const minusSavings = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: state[prop] - (val || 0),
    });
  };
};

// ----------- Actions ----------- //

// Mental Health
export const fileForUnemployment = plusMentalHealth("mentalHealth")(1);
// Physical Health
export const getsVaccinated = plusPhysicalHealth("physicalHealth")(10);
export const workout = plusPhysicalHealth("physicalHealth")(2);
// Ration
export const groceryShopping = plusRations("rations")(14);
export const bakeSourdough = minusRations("rations")(1);
// Rolls
export const buysBidet = plusRolls("rolls")(100);
// Savings
export const renovateKitchen = minusSavings("savings")(800);
export const investInStockMarket = minusSavings("savings")(500);

// ----------- Effects ----------- //

// Collateral Effects
export const getsCovid = () => {
  const chance = generateRandom();
  if (chance > 60) {
    let newState = stateControl(minusPhysicalHealth("physicalHealth")(20));
    newState = stateControl(minusMentalHealth("mentalHealth")(10));
    newState = stateControl(minusRations("rations")(10));
    newState = stateControl(minusRolls("rolls")(5));
    return newState;
  } else {
    let newState = stateControl(minusMentalHealth("mentalHealth")(10));
    return newState;
  }
};

// Mental Health
export const loseJob = minusMentalHealth("mentalHealth")(5);
export const faceTimeMom = plusMentalHealth("mentalHealth")(3);
export const unplannedZoomHappyHour = plusMentalHealth("mentalHealth")(3);
// Physical Health
export const getsPoisonOak = minusPhysicalHealth("physicalHealth")(1);
export const hurtsLegWhileDrunk = minusPhysicalHealth("physicalHealth")(5);
export const giftedGymEquip = plusPhysicalHealth("physicalHealth")(5);
// Rolls
export const findsTP = plusRolls("rolls")(3);
export const diarrhea = minusRolls("rolls")(1);
// Savings
export const getsUnemployment = plusSavings("savings")(300);
export const getsStimulus = plusSavings("savings")(1400);
