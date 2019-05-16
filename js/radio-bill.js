// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelectorAll('.billItemTypeRadio');

//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');

//create a variable that will keep track of the total bill
var callTotalTwoElem = document.querySelector('.callTotalTwo');
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
var totalTwoElem = document.querySelector('.totalTwo');

var totalText = document.querySelector('.orange');


//add an event listener for when the add button is pressed

// in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var callsRadioTotal = 0;
var smsRadioTotal = 0;

function radioBillTotal(){
    
   for(var i = 0; i < billItemTypeRadio.length; i++) {
      var element = billItemTypeRadio[i];

      if(element.checked) {
         if(element.value == 'call') {
            callsRadioTotal += 2.75;
         } else if(element.value == 'sms') {
            smsRadioTotal += 0.75;
         }
      }
      callTotalTwoElem.innerHTML = callsRadioTotal.toFixed(2);
      smsTotalTwoElem.innerHTML = smsRadioTotal.toFixed(2);

      var totalCost = callsRadioTotal + smsRadioTotal;
      totalTwoElem.innerHTML = totalCost.toFixed(2);
      
      if(totalCost >= 50) {
         totalText.classList.add('danger');
      } else if(totalCost >= 30) {
         totalText.classList.add('warning');
      }
   }
}

radioBillAddBtn.addEventListener('click', radioBillTotal);