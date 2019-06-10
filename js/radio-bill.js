// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelectorAll('.billItemTypeRadio');

//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');

//create a variable that will keep track of the total bill
var callTotalTwoElem = document.querySelector('.callTotalTwo');
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
var totalTwoElem = document.querySelector('.totalTwo');

var totalText = document.querySelector('.orange');

var radioBillTotal1 = radioBillTotal()

function radioBillAddBtnClicked() {
   //alert("Add button clicked!!")
   for(var i = 0; i < billItemTypeRadio.length; i++) {
      var element = billItemTypeRadio[i];

      if(element.checked) {
         //Update the totals
         callTotalTwoElem.innerHTML = radioBillTotal1.getCallTotal(element.value);
         smsTotalTwoElem.innerHTML = radioBillTotal1.getSmsTotal(element.value);
         totalTwoElem.innerHTML = radioBillTotal1.getTotal();
      }
   }
   if(radioBillTotal1.getTotal() >= 50) {
      totalText.classList.add('danger');
   } else if(radioBillTotal1.getTotal() >= 30) {
      totalText.classList.add('warning');
   }
   
}

radioBillAddBtn.addEventListener('click', radioBillAddBtnClicked);
