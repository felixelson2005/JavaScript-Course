let calculation = localStorage.getItem('calculation') || '';
displaySTorage();

function displaySTorage(){
  const calcValue=localStorage.getItem('calculation');
  if(calcValue!==null){
    document.querySelector('.js_updateCalc')
          .innerHTML=calcValue;
  }
}


function displayValue(value){
document.querySelector('.js_updateCalc')
          .innerHTML=value;
}

function updateCalculation(value) {
  calculation += value;
  saveCalculation();
  displayValue(calculation);
}

// Optional: you can also create a function in order
// to reuse this code.
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}