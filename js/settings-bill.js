// get a reference to the sms or call radio buttons
var billItemTypeRadios = document.querySelectorAll('.billItemTypeWithSettings');

//get a reference to the add button
var settingsAddBtnElem = document.querySelector('.settingsAddBtn');

//get a reference to the 'Update settings' button
var updateSettingsElem = document.querySelector('.updateSettings');

// create a vetiables that will keep track of all three totals.
var callTotalSettingsElem = document.querySelector('.callTotalSettings');
var smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
var totalSettingsElem = document.querySelector('.totalSettings');

var totalSettingsText = document.querySelector('.totalSettingsText');

const billWithSettingsOne = billWithSettings();

function settingsAddBtnClicked() {
   var callElemVal = Number(document.querySelector('.callCostSetting').value);
   var smsElemVal = Number(document.querySelector('.smsCostSetting').value); 

   billWithSettingsOne.setCallCost(callElemVal)
   billWithSettingsOne.setSmsCost(smsElemVal)

   for(var i = 0; i < billItemTypeRadios.length; i++) {
      var elem = billItemTypeRadios[i];

      if(elem.checked) {
         if(elem.value == 'call') {
            billWithSettingsOne.makeCall()
            callTotalSettingsElem.innerHTML = billWithSettingsOne.getCallTotal()
         } else if(elem.value == 'sms') {
            billWithSettingsOne.sendSms()
            smsTotalSettingsElem.innerHTML = billWithSettingsOne.getSmsTotal();
         }
         totalSettingsElem.innerHTML = billWithSettingsOne.getTotal();
      }
   }
   changeTotalColor();
}

function changeTotalColor() {
   var total = Number(billWithSettingsOne.getTotal());

   if( total >= billWithSettingsOne.getCritical() ) {
      totalSettingsText.classList.remove('warning');
      totalSettingsText.classList.add('danger');
      settingsAddBtnElem.disabled = true;
   } else if( total >= billWithSettingsOne.getWarning() && total < billWithSettingsOne.getCritical() ) {
      totalSettingsText.classList.remove('danger');
      totalSettingsText.classList.add('warning');
   } else {
      totalSettingsText.classList.remove('danger');
      totalSettingsText.classList.remove('warning');
   }
}

settingsAddBtnElem.disabled = true;

function updateSettingsBtnClicked() {
   settingsAddBtnElem.disabled = false;
   var warningVal = Number(document.querySelector('.warningLevelSetting').value);
   var criticalVal = Number(document.querySelector('.criticalLevelSetting').value);

   var callElemVal = Number(document.querySelector('.callCostSetting').value);
   var smsElemVal = Number(document.querySelector('.smsCostSetting').value); 

   billWithSettingsOne.setCallCost(callElemVal)
   billWithSettingsOne.setSmsCost(smsElemVal)

   billWithSettingsOne.setCriticalLevel(criticalVal)
   billWithSettingsOne.setWarningLevel(warningVal)
}

settingsAddBtnElem.addEventListener('click', settingsAddBtnClicked);

updateSettingsElem.addEventListener('click', updateSettingsBtnClicked);
