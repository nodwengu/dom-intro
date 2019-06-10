
function radioBillTotal() {
   var callsTotal = 0;
   var smsTotal = 0;
   var total = 0;
   
   // update the correct total
   function getCallTotal(theValue) {
      if (theValue == "call"){
         callsTotal += 2.75
      } 
      return callsTotal.toFixed(2);
   }

   // update the correct total
   function getSmsTotal(theValue) {
      if (theValue == "sms"){
         smsTotal += 0.75;
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

//var radioBillTotal = radioBillTotal('call', true);
// var radioBillTotal2 = radioBillTotal('sms', true);

// var test  = radioBillTotal.getCallTotal();
// radioBillTotal.getCallTotal();
// radioBillTotal.getCallTotal();
// alert(test);

// var test2  = radioBillTotal2.getSmsTotal();
// radioBillTotal2.getSmsTotal();
// alert(test2);

// var total = radioBillTotal2.getTotal();
// alert(total);
// textBillTotalOne.getCallTotal();
