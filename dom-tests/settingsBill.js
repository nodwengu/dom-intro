
function billWithSettings() {
   var callCost = 0;
   var smsCost = 0;
   var callsTotal = 0;
   var smsTotal = 0;
   var total = 0;

   var warningLevel = 0;
   var criticalLevel = 0;

   function setCallCost(callVal) {
      callCost = callVal;
   }

   function setSmsCost(smsVal) {
      smsCost = smsVal
   }

   function setCriticalLevel(criticalVal) {
      criticalLevel = criticalVal;
   }

   function setWarningLevel(warningVal) {
      warningLevel = warningVal;
   }

   function makeCall() {
      callsTotal += callCost;
      total += callCost
   }

   function sendSms() {
      smsTotal += smsCost;
      total += smsCost
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

   function getCritical() {
      return criticalLevel;
   }

   function getWarning() {
      return warningLevel;
   }

   return {
      setCallCost,
      setSmsCost,
      setCriticalLevel,
      setWarningLevel,
      makeCall,
      sendSms,
      getCallTotal,
      getSmsTotal,
      getTotal,
      getCritical,
      getWarning
   }

}

// var billWithSettings1 = billWithSettings();

// billWithSettings1.setSmsCost(5);

// billWithSettings1.setWarningLevel(10)
// billWithSettings1.setCriticalLevel(20)
// billWithSettings1.sendSms();

//billWithSettings1.setCriticalLevel(20)
//alert(billWithSettings1.getSmsTotal())
   