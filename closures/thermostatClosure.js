function thermostat (name, minTemp) {
  var name = name;
  var minTemp = minTemp;

  function selectTemp (temp){
    (temp>+minTemp) ? console.log("Your "+name+' is set at', temp) : console.log("Min Temp for your " +name+ " is ", minTemp)
  }
  return selectTemp;
}

var nest = thermostat("Nest", 69);
var honeywell = thermostat("Honeywell", 67);

nest(65);
honeywell(65);
