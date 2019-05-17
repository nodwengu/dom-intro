//get a reference to the calculate button
var calculateBtnElement = document.querySelector('.calculateBtn');

//get a reference to the billTotal element
var billTotalElement = document.querySelector('.billTotal');
var totalElement = document.querySelector('.total');

//get a reference to the billString
var billStringElement = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function totalPhoneBill(callsAndSms){
   var callsAndSmsArr = callsAndSms.split(",");
   var callsCounter = 0;
   var smsCounter = 0;

   for(var i = 0; i < callsAndSmsArr.length; i++) {
      var element = callsAndSmsArr[i].trim();
      element = element.toLowerCase();

      if(element == "sms") {
         smsCounter++;	
      } else if(element == "call") {
         callsCounter++;
      } else if(element == "") {
         return (0.00).toFixed(2);
      }else {
         alert("Invalid input data");
      }
   }
   return (callsCounter * 2.75 + smsCounter * 0.75).toFixed(2);
}

function calculateBtnClicked(){
   var string = billStringElement.value;
   var totalBill = totalPhoneBill(string);
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
