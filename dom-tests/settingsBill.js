
function billWithSettings() {
   var callsTotal = 0;
   var smsTotal = 0;

   var warningLevel = 0;
   var criticalLevel = 0;

   function setCallTotal(type, callVal) {
      if (type == "call"){
         callsTotal += callVal
      } 
   }

   function setSmsTotal(type, smsVal) {
      if (type == "sms"){
         smsTotal += smsVal
      } 
   }

   function getCallTotal() {
      return callsTotal.toFixed(2);
   }

   function getSmsTotal() {
      return smsTotal.toFixed(2);
  }

   function getTotal() {
      return (callsTotal + smsTotal).toFixed(2);
   }

   function updateSettings(callVal, smsVal, warning, critical) {
      callsTotal = callVal;
      smsTotal = smsVal;
      warningLevel = warning;
      criticalLevel = critical;
      alert(critical);
   }

   // function setWarningACriticalLevels() {
   //    if( total >= criticalLevel ) {
   //       totalSettingsText.classList.remove('warning');
   //       totalSettingsText.classList.add('danger');
   //    } else if( billWithSettings1.getTotal() >= warningLevel && billWithSettings1.getTotal() < criticalLevel) {
   //       totalSettingsText.classList.remove('danger');
   //       totalSettingsText.classList.add('warning');
   //    } else {
   //       totalSettingsText.classList.remove('danger');
   //       totalSettingsText.classList.remove('warning');
   // }


   return {
      getCallTotal,
      getSmsTotal,
      getTotal,
      updateSettings,
      setCallTotal,
      setSmsTotal

      // setWarningACriticalLevels
   }

}


// var billWithSettings1 = billWithSettings(2, 1);

// alert(billWithSettings1.getSmsTotal('sms'));
// alert(billWithSettings1.getCallTotal('call'));
// alert(billWithSettings1.getTotal());