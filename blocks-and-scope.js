// blocks
const city = 'New York City'
const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());


// scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())

function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves)
}

logVisibleLightWaves2();
// error   console.log(lightWaves)

const logVisibleLightWaves2 = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
  
};

logVisibleLightWaves2();