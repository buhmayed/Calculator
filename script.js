var fovImp = document.getElementById("fovImp");
let fitImp = document.getElementById("fitImp");
var calcSooBtn = document.getElementById("calcSoo");
let clearSooBtn = document.getElementById("clearSoo");

var sodImp = document.getElementById("sodImp");
let sooImp = document.getElementById("sooImp");
var calcSclBtn = document.getElementById("calcScl");
let clearSclBtn = document.getElementById("clearScl");

document.addEventListener("DOMContentLoaded", function () {
  var ocularImp = document.getElementById("ocularImp");
  var objectiveImp = document.getElementById("objectiveImp");
  var calcMagBtn = document.getElementById("calcMag");
  var clearMagBtn = document.getElementById("clearMag");
  var magResult = document.getElementById("magResult");

  function calculateMagnification() {
    var ocularPower = parseFloat(ocularImp.value);
    var objectivePower = parseFloat(objectiveImp.value);

    if (!isNaN(ocularPower) && !isNaN(objectivePower)) {
      var magnification = ocularPower * objectivePower;
      magResult.textContent = "Magnification = " + magnification.toFixed(2);
    } else {
      magResult.textContent =
        "Please enter valid numerical values for both ocular and objective powers.";
    }
  }

  function clearMagnification() {
    ocularImp.value = "";
    objectiveImp.value = "";
    magResult.textContent = "Magnification =";
  }

  calcMagBtn.addEventListener("click", calculateMagnification);
  clearMagBtn.addEventListener("click", clearMagnification);
});
