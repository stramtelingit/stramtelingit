

window.doom = function (upg) {
    console.log("Special upgrade used:", upg.name);
    // your custom logic here
};

window.doom2 = function (upg, text) {
    console.log("Special upgrade used:", upg.name);
    para = document.getElementById(text);
    para.textContent = "You have unlocked the doom upgrade!";
};

window.unlock_chocolate = function (upg) {
    console.log("Special upgrade used:", upg.name);
    window.farm_active = true;
    window.chocolate_cps = 1;
};