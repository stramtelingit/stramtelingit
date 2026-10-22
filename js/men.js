

window.buy_men = function (upg) {
    try {
        console.log("Special upgrade used:", upg && upg.name);
        const chocolateMen = document.getElementById("men");
        if (chocolateMen) {
            window.chocolate_men += 1;
            chocolateMen.textContent = window.chocolate_men + " men";
        }
    } catch (error) {
        window.captureError(error, "buy_men");
    }
}

window.buy_miner = function (upg) {
    try {
        console.log("Special upgrade used:", upg && upg.name);
        const chocolateMiners = document.getElementById("miners");
        if (chocolateMiners) {
            window.chocolate_miners += 1;
            chocolateMiners.textContent = window.chocolate_miners + " miners";
        }
    } catch (error) {
        window.captureError(error, "buy_miner");
    }
}

window.buy_lumberjack = function (upg) {
    try {
        console.log("Special upgrade used:", upg && upg.name);
        const chocolateLumberjack = document.getElementById("lumberjack");
        if (chocolateLumberjack) {
            window.chocolate_lumberjack += 1;
            chocolateLumberjack.textContent = window.chocolate_lumberjack + " lumberjacks";
        }
    } catch (error) {
        window.captureError(error, "buy_lumberjack");
    }
}