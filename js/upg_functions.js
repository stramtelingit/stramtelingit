

window.doom = function (upg) {
    console.log("Special upgrade used:", upg.name);
    // your custom logic here
};

window.doom2 = function (upg, text) {
    console.log("Special upgrade used:", upg.name);
};

window.unlock_chocolate = function (upg) {
    console.log("Special upgrade used:", upg.name);
    window.farm_active = true;
    window.chocolate_cps = 1;
    const farm = document.getElementById("farm");
    if (farm) { 
        farm.style.display = "flex";
    }
};

window.unlock_mill = function (upg) {
    console.log("Special upgrade used:", upg.name);
    window.mill_active = true;
    window.chocolate_cps = 1;
    const farm = document.getElementById("farm_nomill");
    const mill = document.getElementById("farm_mill");
    if (farm) { 
        farm.style.display = "none";
    }
    if (mill) { 
        mill.style.display = "flex";
    }
};