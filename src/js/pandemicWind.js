export {player, GetsCovid};

// const player = function(name) {
//   let state = {
//     name
//   };

//   return { ...GetsCovid(state),...GetsVaccinated(state) };
// };

// Actions
const GetsVaccinated = (player, prop, val) => {
  return {
    ...player, 
    health: (player.health || 0) + 20
  }
}
// math.random between zero and one.  If random is greater than .98 then player has adverse effect.  Kills player

const BuysMask = (player, prop, val) => {
  return {
    ...player,
    [prop]: (player[prop] || 0) + val
  }
}

const GroceryShopping = (player, prop, val) => {
  return {
    ...player,
    [prop]: (player[prop] || 0) + val
  }
}

const FindsTP = (player, prop, val) => {
  return{
    ...player, 
    [prop]: (player[prop] || 0) + val
  }
}

const BuysBidet = (player, prop, val) => {
  return{
    ...player, 
    [prop]: (player[prop] || 0) + val
  }
}

let player = {health: 100, rations: 50, rolls: 12}

FindsTP(player,"rolls", 12)

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