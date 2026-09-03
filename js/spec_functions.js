window.mill_toggle = function() {
    window.mill_active = !window.mill_active;
    const chocolateProd = document.getElementById("chocolate_prod");
    const cpsText = document.getElementById("cps");
    if (window.mill_active) {
        cpsText.textContent = "candies per second: " + (cps * 2);
    }
    else if (!window.mill_active) {
        cpsText.textContent = "candies per second: " + cps;
    }
    window.clickSound.play().catch(err => console.error(err));
    if (!window.mill_active) {
        chocolateProd.textContent = "chocolates per second: " + chocolate_cps;
    }
    else if (window.mill_active) {
        chocolateProd.textContent = "chocolates per second: " + chocolate_cps * 0.2;
    }
}

window.boost_select = function(boost_name) {
    console.log("Boost selected:", boost_name);
    if (boost_name == "none"){
        window.currentBoost = "none";
    }
    else if (boost_name == "cherry"){
        window.currentBoost = "cherry";
    }
}