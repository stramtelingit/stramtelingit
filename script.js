var candies = 0;

var cps = 0.3;

setInterval(addCps, 1000);

// The callback function
function addCps() {
    candies += cps;
    var candieText = document.getElementById("candieText");
    candieText.textContent = "you have " + candies + " candies";
}