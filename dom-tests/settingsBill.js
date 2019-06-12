
function billWithSettings() {
   var callsTotal = 0;
   var smsTotal = 0;
   var total = 0;

   var warningLevel = 0;
   var criticalLevel = 0;

   function setCallTotal(callVal) {
     
      callsTotal += callVal
   }

   function setSmsTotal(smsVal) {
     
      smsTotal += smsVal
   }

   function setTotal() {
      total = callsTotal + smsTotal;
   }

   function getCallTotal() {
      return callsTotal.toFixed(2);
   }

   function getSmsTotal() {
      return smsTotal.toFixed(2);
  }

   function getTotal() {
      return total.toFixed(2);
   }

   function updateSettings(warning, critical) {
      warningLevel = warning;
      criticalLevel = critical;
   }

   function getCritical() {
      return (total >= criticalLevel);
   }

   function getWarning() {
      return (total >= warningLevel && total < criticalLevel);
   }

   return {
      getCallTotal,
      getSmsTotal,
      getTotal,
      updateSettings,
      setCallTotal,
      setSmsTotal,
      setTotal,
      getCritical,
      getWarning
   }

}


// var billWithSettings1 = billWithSettings(2, 1);

// alert(billWithSettings1.getSmsTotal('sms'));
// alert(billWithSettings1.getCallTotal('call'));
// alert(billWithSettings1.getTotal());