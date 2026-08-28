window.mill_toggle = function() {
    window.mill_active = !window.mill_active;
    const chocolateProd = document.getElementById("chocolate_prod");
    window.clickSound.play().catch(err => console.error(err));
    if (!window.mill_active) {
        chocolateProd.textContent = "chocolates per second: " + chocolate_cps;
    }
    else if (window.mill_active) {
        chocolateProd.textContent = "chocolates per second: " + chocolate_cps * 0.2;
    }
}