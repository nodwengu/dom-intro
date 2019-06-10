
function billWithSettings() {
   var callsTotal = 0;
   var smsTotal = 0;
   var total = 0;
   
   // update the correct total
   function getCallTotal(type, callVal) {
      if (type == "call"){
         callsTotal += callVal
      } 
      return callsTotal.toFixed(2);
   }

   // update the correct total
   function getSmsTotal(type, smsVal) {
      if (type == "sms"){
         smsTotal += smsVal
      } 
      return smsTotal.toFixed(2);
  }

  // update the correct total
   function getTotal() {
      total = callsTotal + smsTotal;

      return total.toFixed(2);
   }


   return {
      getCallTotal,
      getSmsTotal,
      getTotal
   }

}


// var billWithSettings1 = billWithSettings(2, 1);

// alert(billWithSettings1.getSmsTotal('sms'));
// alert(billWithSettings1.getCallTotal('call'));
// alert(billWithSettings1.getTotal());