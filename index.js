// Function to get the battery information
function updateBatteryStatus(){
    navigator.getBattery().then(function(battery) {
        let level = battery.level;

        // battery percentage
        let batteryPercentage = level * 100 + '%';
    
        // battery charging or not
        let isCharging = battery.charging;
    
        // Grab all the items
        let batteryInnerPart = document.getElementById('batteryInnerPart');
        let batteryCharging = document.getElementById('batteryCharging');
        let batteryPercentageBox = document.getElementById('batteryPercentage');
    
        // Set battery innerpart width according to battery percentage
        batteryInnerPart.style.width = batteryPercentage;

        // If battery percentage <= 10% make the background red
        if(batteryPercentage<='10%'){
            batteryInnerPart.style.background = 'red';
        }
    
        // If battery is charging then show charging icon
        if(isCharging == true){
            batteryCharging.style.display = 'block';
            batteryPercentageBox.innerText = batteryPercentage;
            batteryPercentageBox.style.top = '60%';
        }
        // Else remove the charging icon
        else{
            batteryCharging.style.display = 'none';
            batteryPercentageBox.innerText = batteryPercentage;
            batteryPercentageBox.style.top = '40%';
        }
      });
}

// Run the function when the page is loaded
updateBatteryStatus();

// Run the function in every 5 seconds to update the battery status
setInterval(() => {
    updateBatteryStatus();
}, 5000);