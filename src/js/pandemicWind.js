export {player, GetsCovid};

const player = function(name) {
  let state = {
    name
  };
  return;
  // return { ...GetsCovid(name, "health"),...GetsVaccinated(state) };
};

// default Values
const _health = 50;
const _rations = 5;
const _rolls = 12;
const _time = 100;

//Health Modifier (positive)
const GainHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (player[prop] || _health) + (val || 0)
    });
  };
};
//Health Modifier (negative)
const LoseHealth = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (player[prop] || _health) - (val || 0)
    });
  };
};

// math.random between zero and one.  If random is greater than .98 then player has adverse effect.  Kills player
//Health Modifier (positive)
// const BuysMask = (player, prop, val) => {
//   return {
//     ...player,
//     [prop]: (player[prop] || _health) + (val || 0)
//   }
// }

//Ration Modifier (positive)
const UpdateRations = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (player[prop] || _rations) + (val || 0)
    });
  };
};

//Rolls Modifier (positive)
const UpdateRolls = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop]: (player[prop] || _rolls) + (val || 0)
    });
  };
};
const steve = player("Steve");

// Health Actions
const GetsVaccinated = GainHealth("health")(10);
const GetsCovid = [
  LoseHealth("health")(20) + 
  UpdateRolls("rolls")(-5)
];

// const GetsCovid = {LoseHealth("health")(20) + UpdateRolls("rolls")(-5)};

// Ration Actions
const GroceryShopping = UpdateRations("rations")(14);
// Rolls Actions
const FindsTP = UpdateRolls("rolls")(3);
const BuysBidet = UpdateRolls("rolls")(100);
// GroceryShopping(steve);
// BuysBidet(steve);
// FindsTP(steve);
// GetsVaccinated(steve);
// GetsCovid[0][1](steve);



// health, rations, rolls, 

// // Effects
// const GetsCovid = (player, prop) => {
//   return {
//     ...player, 
//     [prop]: (player[prop] || 0) - 5
//     rolls: (player.rolls || 0) - 5
//   };
// };
    
    
// method that calls other methods with math.random. 
//health and time. 
// start at 100 -- 1. per action. 
// health at 50. +- depending on  action.
    
// > let player = { health: 0, mentalHealth: 0, Energy: 0 }
// > getsCovid(player, "health")
// {health: 45, mentalHealth: 0, Energy: 0}
    

// const FindsTP = (player, prop, val) => {
//   return{
//     ...player, 
//     [prop]: (player[prop] || _rolls) + (val || 0)
//   }
// }