// get a reference to the sms or call radio buttons
var billItemTypeWithSettingsElem = document.querySelectorAll('.billItemTypeWithSettings');

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

function changeTotalColor() {
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

var billWithSettings1 = billWithSettings();

function settingsAddBtnClicked() {
   var callVal = Number(document.querySelector('.callCostSetting').value);
   var smsVal = Number(document.querySelector('.smsCostSetting').value); 

   var criticalLevel = Number(criticalLevelSettingElem.value);
   var warningLevel = Number(warningLevelSettingElem.value);

   for(var i = 0; i < billItemTypeWithSettingsElem.length; i++) {
      var elem = billItemTypeWithSettingsElem[i];

      if(elem.checked) {
         billWithSettings1.setCallTotal(elem.value, callVal);
         billWithSettings1.setSmsTotal(elem.value, smsVal);

         callTotalSettingsElem.innerHTML = billWithSettings1.getCallTotal();
         smsTotalSettingsElem.innerHTML = billWithSettings1.getSmsTotal();
         totalSettingsElem.innerHTML = billWithSettings1.getTotal();
      }
   }

   if(billWithSettings1.getTotal() >= criticalLevel) {
      settingsAddBtnElem.disabled = true;
      //changeTotalColor()

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

   document.querySelector('.warningLevelSetting').addEventListener('change', function(){
      settingsAddBtnElem.disabled = false;
   })

   document.querySelector('.criticalLevelSetting').addEventListener('change', function(){
      settingsAddBtnElem.disabled = false;
   })
   //changeTotalColor()

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

// function settingsAddBtnClicked() {
//    // get refences to all the settings fields
//    var callCostSettingElem = document.querySelector('.callCostSetting');
//    var smsCostSettingElem = document.querySelector('.smsCostSetting');
//    var warningLevelSettingElem = document.querySelector('.warningLevelSetting');
//    var criticalLevelSettingElem = document.querySelector('.criticalLevelSetting');

//    var callVal = Number(callCostSettingElem.value);
//    var smsCostVal = Number(smsCostSettingElem.value);
//    var warningVal = Number(warningLevelSettingElem.value);
//    var criticaVal = Number(criticalLevelSettingElem.value);

//    billWithSettings1.updateSettings(callVal, smsCostVal, warningVal, criticaVal);
// }



settingsAddBtnElem.addEventListener('click', settingsAddBtnClicked);




settingsAddBtnElem.addEventListener('click', settingsAddBtnClicked);
