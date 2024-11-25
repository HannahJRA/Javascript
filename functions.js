getReminder();

function getReminder() {
  console.log('Water the plants.')
}

greetInSpanish();

function greetInSpanish() {
  console.log('Buenas tardes.')
}


function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');


monitorCount();

  function monitorCount(rows, columns) {
    return rows * columns;
  };

  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);



  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  costOfMonitors();
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  };
  
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost)


  // October 26th
  const plantNeedsWater = function(day) /* also put => as function */{
    if (day === 'Wednesday'){
      return true
    } else {
      return false
    }
  };
  
  console.log(plantNeedsWater('Tuesday'));

  // you can also make it one line code
  const plantNeedsWater2 = day => day === 'Wednesday' ? true : false;