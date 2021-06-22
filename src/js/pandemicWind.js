
// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();

// default Values
const _health = 50;
const _rations = 5;
const _rolls = 12;
// const _time = 100;

//Health Modifier (positive)
const gainHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || _health) + (val || 0)
    });
  };
};
//Health Modifier (negative)
const loseHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || _health) - (val || 0)
    });
  };
};

// math.random between zero and one.  If random is greater than .98 then state has adverse effect.  Kills state
//Health Modifier (positive)
// const BuysMask = (state, prop, val) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || _health) + (val || 0)
//   }
// }

//Ration Modifier (positive)
const updateRations = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || _rations) + (val || 0)
    });
  };
};

//Rolls Modifier (positive)
const updateRolls = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || _rolls) + (val || 0)
    });
  };
};

// Health Actions
const getsVaccinated = gainHealth("health")(10);
const getsCovid = loseHealth("health")(10);
// Ration Actions
const groceryShopping = updateRations("rations")(14);
// Rolls Actions
const findsTP = updateRolls("rolls")(3);
const buysBidet = updateRolls("rolls")(100);
// groceryShopping(state);
// buysBidet(state);
// findsTP(state);
// getsVaccinated(state);

// const getsCovid = (state) => {
//   loseHealth("health")(20)(state);
//   updateRations("rations")(10)(state);
//   updateRolls("rolls")(5)(state);
// };

// GroceryShopping(steve);
// const steve = player("steve");

stateControl(getsCovid);

// findsTP(steve);
// getsCovid(steve);
// // Effects
// const GetsCovid = (state, prop) => {
//   return {
//     ...state, 
//     [prop]: (state[prop] || 0) - 5
//     rolls: (state.rolls || 0) - 5
//   };
// };
    
// > let state = { health: 0, mentalHealth: 0, Energy: 0 }
// > getsCovid(state, "health")
// {health: 45, mentalHealth: 0, Energy: 0}
    

// const FindsTP = (state, prop, val) => {
//   return{
//     ...state, 
//     [prop]: (state[prop] || _rolls) + (val || 0)
//   }
// }







