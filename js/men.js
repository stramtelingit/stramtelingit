

window.buy_men = function (upg) {
    console.log("Special upgrade used:", upg.name);
    const chocolateMen = document.getElementById("men");
    if (chocolateMen) {
        window.chocolate_men += 1;
        chocolateMen.textContent = window.chocolate_men;
    }
}

window.buy_miner = function (upg) {
    console.log("Special upgrade used:", upg.name);
    const chocolateMen = document.getElementById("miners");
    if (chocolateMen) {
        window.chocolate_miner += 1;
        chocolateMen.textContent = window.chocolate_miner;
    }
}

window.buy_lumberjack = function (upg) {
    console.log("Special upgrade used:", upg.name);
    const chocolateMen = document.getElementById("lumberjack");
    if (chocolateMen) {
        window.chocolate_lumberjack += 1;
        chocolateMen.textContent = window.chocolate_lumberjack;
    }
}