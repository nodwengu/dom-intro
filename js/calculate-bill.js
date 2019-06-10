
//get a reference to the calculate button
var calculateBtnElement = document.querySelector('.calculateBtn');

//get a reference to the billTotal element
var billTotalElement = document.querySelector('.billTotal');
var totalElement = document.querySelector('.total');

//get a reference to the billString
var billStringElement = document.querySelector(".billString");

function calculateBtnClicked(){

   var billStringVal = billStringElement.value; 
  
   var totalBill = totalPhoneBill(billStringVal);
   
   billTotalElement.innerHTML = totalBill;

   if(totalBill >= 30) {
      totalElement.classList.remove('warning');
      totalElement.classList.add('danger');
   } else if(totalBill >= 20 && totalBill < 30){
      totalElement.classList.remove('danger');
      totalElement.classList.add('warning');
   } else {
      totalElement.classList.remove('warning');
   }
}

//link the function to a click event on the calculate button
calculateBtnElement.addEventListener('click', calculateBtnClicked);
