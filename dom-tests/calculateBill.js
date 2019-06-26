
function totalPhoneBill(input){
   var inputArr = input.split(",");
   var callsCounter = 0;
   var smsCounter = 0;

   for(var i = 0; i < inputArr.length; i++) {
      var element = inputArr[i].trim();
      element = element.toLowerCase();

      if(element == "sms") {
         smsCounter++;	
      } else if(element == "call") {
         callsCounter++;
      } else  {
         return (0.00).toFixed(2);
      }
   }
   return (callsCounter * 2.75 + smsCounter * 0.75).toFixed(2);
}
