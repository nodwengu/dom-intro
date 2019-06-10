
//get a reference to the add button
var addToBillBtnElem = document.querySelector('.addToBillBtn');

//create a variable that will keep track of the total bill
var callsTotalElem = document.querySelector('.callTotalOne');
var smsTotalElem = document.querySelector('.smsTotalOne');
var totalCostElem = document.querySelector('.totalOne');
var totalTextElem = document.querySelector('.red');

var TextBillTotal1 = TextBillTotal();

addToBillBtnElem.addEventListener('click', function() {
   // get a reference to the textbox where the bill type is to be entered
   var billTypeText = document.querySelector('.billTypeText');
   var billTypeVal = billTypeText.value;

   // get the value entered in the billType textfield
   billTypeVal = billTypeVal.trim();
   billTypeVal = billTypeVal.toLowerCase();

   TextBillTotal1.checkInput(billTypeVal);

   var smsCosts =  TextBillTotal1.getSmsTotal(billTypeVal);
   var callCosts =  TextBillTotal1.getCallTotal(billTypeVal);
   var totalCosts =  TextBillTotal1.getTotal();

   //update the totals that is displayed on the screen.
   callsTotalElem.innerHTML = callCosts;
   smsTotalElem.innerHTML = smsCosts;
   totalCostElem.innerHTML = totalCosts;

   //color the total based on the criteria
   if (totalCosts >= 50){
      totalTextElem.classList.add("danger");
   } else if (totalCosts >= 30){
      totalTextElem.classList.add("warning");
   }
});
