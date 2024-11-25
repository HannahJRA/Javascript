let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerage = 25;

if (registeredEarly && runnerage > 18) {
  raceNumber += 1000;
} 

if (registeredEarly && runnerage > 18) {
  console.log(`Your race will be at 9:30am with your race number: ${raceNumber}`);
} else if (!runnerage < 18 && !registeredEarly) {
  console.log(`Your race will be at 11:00am with your race number:${raceNumber}`);
} else if (runnerage < 18 && registeredEarly) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration. Your race number: ${raceNumber}.`)
}