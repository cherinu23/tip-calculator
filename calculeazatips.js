var billAm = document.getElementById("suma");
var servOpt = document.getElementById("inputGroupSelect01");
var billSh = document.getElementById("numarp");

//calculate and validate
function calculateTip() {

    if (billAm.value === "" || servOpt.value == "0" || billSh.value == "") {
        alert("Inputs must be filled");
        return;
    }
    if (servOpt === "" || servOpt <= 1) {
        servOpt = 1;
    }
    var total = (billAm.value * servOpt.value) / billSh.value;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

};


document.getElementById("calculate").onclick = function () {
    calculateTip();
};

