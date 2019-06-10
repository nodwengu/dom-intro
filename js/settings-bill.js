// get a reference to the sms or call radio buttons
var billItemTypeWithSettingsElem = document.querySelectorAll('.billItemTypeWithSettings');


// get refences to all the settings fields
var callCostSettingElem = document.querySelector('.callCostSetting');
var smsCostSettingElem = document.querySelector('.smsCostSetting');
var warningLevelSettingElem = document.querySelector('.warningLevelSetting');
var criticalLevelSettingElem = document.querySelector('.criticalLevelSetting');


//get a reference to the add button
var settingsAddBtnElem = document.querySelector('.settingsAddBtn');

//get a reference to the 'Update settings' button
var updateSettingsElem = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
var callTotalSettingsElem = document.querySelector('.callTotalSettings');
var smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
var totalSettingsElem = document.querySelector('.totalSettings');

var totalSettingsText = document.querySelector('.totalSettingsText');

var billWithSettings1 = billWithSettings();

function settingsAddBtnClicked() {
   var callVal = Number(document.querySelector('.callCostSetting').value);
   var smsVal = Number(document.querySelector('.smsCostSetting').value); 

   var criticalLevel = Number(criticalLevelSettingElem.value);
   var warningLevel = Number(warningLevelSettingElem.value);

   for(var i = 0; i < billItemTypeWithSettingsElem.length; i++) {
      var elem = billItemTypeWithSettingsElem[i];

      if(elem.checked) {
         callTotalSettingsElem.innerHTML = billWithSettings1.getCallTotal(elem.value, callVal);
         smsTotalSettingsElem.innerHTML = billWithSettings1.getSmsTotal(elem.value, smsVal);
         totalSettingsElem.innerHTML = billWithSettings1.getTotal();
      }
   }

   if(billWithSettings1.getTotal() >= criticalLevel) {
      settingsAddBtnElem.disabled = true;
   }
   
   if( billWithSettings1.getTotal() >= criticalLevel ) {
      totalSettingsText.classList.remove('warning');
      totalSettingsText.classList.add('danger');
   } else if( billWithSettings1.getTotal() >= warningLevel && billWithSettings1.getTotal() < criticalLevel) {
      totalSettingsText.classList.remove('danger');
      totalSettingsText.classList.add('warning');
   } else {
      totalSettingsText.classList.remove('danger');
      totalSettingsText.classList.remove('warning');
   }
}

settingsAddBtnElem.addEventListener('click', settingsAddBtnClicked);
