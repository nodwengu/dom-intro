
var TextBillTotal = function() {
   var callsTotal = 0;
   var smsTotal = 0;
   var total = 0;
   
   function getCallTotal(costType) {
       // update the correct total
      if (costType == "call"){
         callsTotal += 2.75
      } 

      return callsTotal.toFixed(2);;
      // alert(callsTotal);
   }

   function getSmsTotal(costType) {
      // update the correct total
     if (costType == "sms"){
        smsTotal += 0.75;
     } 

     return smsTotal.toFixed(2);;
  }

  function getTotal() {
    total = callsTotal + smsTotal;

     return total.toFixed(2);
}

function checkInput(costType) {
   if (costType == ""){
      return "Input value required";
   } else if (costType !== 'call' && costType !== 'sms'){
      return "Invalid input";
   }
}

function testFun() {
   alert("test working");
}

   return {
      getCallTotal,
      getSmsTotal,
      getTotal,
      checkInput
   }
}
