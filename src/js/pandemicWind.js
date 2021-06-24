// export default './js/pandemicWind.js';

const storyLine = [
  "Actor Tom Hanks announces he and his wife, Rita Wilson, tested positive for corona virus in Australia.",
  "Major League Baseball suspends spring training indefinitely because of COVID-19 concerns",
  "The Los Angeles Unified School District announces that it will close all its schools." ,
  "The Dow Jones industrial average falls by 2,997.10, the largest single-move point drop ever, amid the corona virus outbreak.",
  "The worldwide corona Virus death toll passes 10,000.",
  "One million Californians file for unemployment and The Senate and the White House agree to a $2-trillion stimulus package to boost the economy, the largest stimulus package in U.S. history.",
  "The U.S. Now Leads the World in Confirmed Corona Virus Cases.",
  "New York passes 75,000 corona Virus cases. The U.S. has more than 163,000 reported cases, as COVID-19 death toll reaches 3,000. Seventy percent of the U.S. population is under lock down.",
  "The number of corona virus cases worldwide passes 1 million. More than 6.6 million workers file for unemployment in the United States.",
  "The CDC recommends that everyone consider wearing cloth or fabric face masks in public.",
  
  "Boris Johnson is hospitalized with COVID-19.",
  "The United States becomes the first country to report 2,000 corona virus deaths in a single move.",
  "The IRS begins sending stimulus checks to Americans.",
  "Texas becomes the first state to begin easing pandemic restrictions.",
  "The U.S. death toll from COVID-19 surpasses 50,000.",
  "The U.S. faces invasion of 'murder hornets,' which threaten domestic bees.",
  "Gregory and Travis McMichael are charged with murder in the shoot death of Ahmaud Arbery in Georgia.",
  "Unemployment rate rises to record high 14.7 percent.",
  "Worldwide corona virus deaths surpass 300,000.",
  "Minneapolis police officer is filmed while pressing his knee on the neck of George Floyd for about eight minutes, killing him, as three other officers stand by. Video of Floyd’s death goes viral; the four officers are fired the next move.",
  
  "A state of emergency is declared in Minneapolis-St. Paul as protests over the death of George Floyd and racial injustice spread nationwide.",
  "SpaceX Lifts NASA Astronauts to Orbit, Launching New Era of Spaceflight.",
  "Over 4,400 Arrests, 62,000 National Guard Troops Deployed: George Floyd Protests By The Numbers.",
  "Confederate statues are coming down following George Floyd's death. Here's what we know.",
  "John Lewis, Towering Figure of Civil Rights Era, Dies at 80.",
  "President Trump announces a 'surge' of federal officers into Democratic-run cities, following a crackdown on protests in Portland, Ore.",
  "Nearly three billion animals killed or displaced by Australia's fires.",
  "More than 400,000 people, most without face masks and who don’t follow social distancing guidelines, participate in activities related to the Sturgis Motorcycle Rally in South Dakota.",
  "Thunderstorms trigger hundreds of wildfires in California, prompting evacuations as a record-breaking heat wave taxes the state’s power grid.",
  "Oregon wildfires start amid severe drought and severe winds; by the end of October, more than 1 million acres will burn, more than 4,000 homes will be destroyed, and at least 10 people will be killed.",

  "Western wildfires: An 'unprecedented,' climate change-fueled event, experts say.",
  "WHO Estimates Corona virus Has Infected 10% of Global Population.",
  "Google Abuses Its Monopoly Power Over Search, Justice Department Says In Lawsuit.",
  "The NBA bubble was a one-of-a-kind COVID-19 success story.",
  "Record-Setting Fires in Colorado and California.",
  "U.S. Officially Leaving Paris Climate Agreement.",
  "US troops in Afghanistan: Allies and Republicans alarmed at withdrawal plan.",
  "Joe Biden breaks Obama's record for most votes ever cast for a U.S. presidential candidate.",
  "U.S. and States Say Facebook Illegally Crushed Competition.",
  "Dec. 14: The electoral college confirms Joe Biden’s victory over President Trump.",
  "More than 317,000 people in the U.S. have died from COVID-19; the international death toll is 1.69 million."
];

const Actions = {
  "Get Vaccinated (+20 health)": [getsVaccinated(),groceryShopping()], 
  "Go Grocery Shopping (+14 rations)": groceryShopping(), 
};


// Helpers
const storeState = () => {
  let currentState = {
    move: 0,
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

// Modifiers (Update Prop Value + moves - rations)
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
      move: state.move + randomNum(state),
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
