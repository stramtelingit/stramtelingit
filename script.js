var candies = 0;

var cps = 0.3;

setTimeout(addCps, 1000);

// The callback function
function addCps() {
    var candieText = getElementById("candieText");
    candieText = "you have " + (candies + cps) + " candies";
}