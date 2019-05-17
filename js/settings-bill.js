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

var callTotalSettings = 0;
var smsTotalSettings = 0;
var totalSettings = 0; 

var totalSettingsText = document.querySelector('.totalSettingsText');

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

//Initial costs
var defaultCallCost = 2.75;
var defaultSmsCost = 0.75;
var criticalLevel = 30;
var warningLevel = 20;

function settingsAddBtnClicked() {
   for(var i = 0; i < billItemTypeWithSettingsElem.length; i++) {
      var elem = billItemTypeWithSettingsElem[i];

      if(elem.checked) {
         if(elem.value == 'call') {
            callTotalSettings += defaultCallCost;
            callTotalSettingsElem.innerHTML = callTotalSettings.toFixed(2);
         } if(elem.value == 'sms') {
            smsTotalSettings += defaultSmsCost;
            smsTotalSettingsElem.innerHTML = smsTotalSettings.toFixed(2);
         }
         totalSettings = callTotalSettings + smsTotalSettings;
         totalSettingsElem.innerHTML = totalSettings.toFixed(2);
      }
   }

   if( totalSettings >= criticalLevel ) {
      totalSettingsText.classList.remove('warning');
      totalSettingsText.classList.add('danger');
   } else if( totalSettings >= warningLevel && totalSettings < criticalLevel) {
      totalSettingsText.classList.remove('danger');
      totalSettingsText.classList.add('warning');
   } else {
      totalSettingsText.classList.remove('danger');
      totalSettingsText.classList.remove('warning');
   }
}

function updateSettingsBtnClicked() {
   defaultCallCost = Number(callCostSettingElem.value);
   defaultSmsCost = Number(smsCostSettingElem.value);
   criticalLevel = Number(criticalLevelSettingElem.value);
   warningLevel = Number(warningLevelSettingElem.value);
}

settingsAddBtnElem.addEventListener('click', settingsAddBtnClicked);

updateSettingsElem.addEventListener('click', updateSettingsBtnClicked);