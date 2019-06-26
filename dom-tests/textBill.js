
var TextBillTotal = function() {
   var callsTotal = 0;
   var smsTotal = 0;
   var total = 0;

   function setCallTotal() {
      // update the correct total
      callsTotal += 2.75
   }

   function setSmsTotal() {
      // update the correct total
      smsTotal += 0.75;
   }

   function setTotal() {
      total = callsTotal + smsTotal;
   }
   
   function getCallTotal() {
      return callsTotal.toFixed(2);;
   }

   function getSmsTotal() {
      return smsTotal.toFixed(2);;
   }

   function getTotal() {
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
      checkInput,
      setCallTotal,
      setSmsTotal,
      setTotal


   }
}
