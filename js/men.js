

window.buy_men = function (upg) {
    console.log("Special upgrade used:", upg.name);
    const chocolateMen = document.getElementById("men");
    if (chocolateMen) {
        window.chocolate_men = 1;
        chocolateMen.textContent = window.chocolate_men;
    }
}