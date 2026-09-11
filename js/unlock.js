window.unlock_upgrades = function(general_upgrades) {
    var generalUpgrades = general_upgrades;
    for (let i = 0; i < generalUpgrades.length; i++) {
        if (candies >= (generalUpgrades[i].cost / 2)) {
            if (generalUpgrades[i].unlocked == false){
                var upg = document.createElement("button");
                const currentUpgrade = generalUpgrades[i];
                upg.textContent = "Buy " + generalUpgrades[i].name + " for " + (generalUpgrades[i].cost + 1) + " candies";
                upg.onclick = function() {
                    buyUpg(currentUpgrade);
                };
                upg.id = generalUpgrades[i].name;
                generalUpgrades[i].unlocked = true;
                var upsec = document.getElementById("upsec");
                upsec.appendChild(upg);
            }
        }
    }
}


window.unlock_upgrades_kevin = function(general_upgrades) {
    var generalUpgrades = general_upgrades;
    for (let i = 0; i < generalUpgrades.length; i++) {
        if (candies >= (generalUpgrades[i].cost / 2)) {
            if (generalUpgrades[i].unlocked == false){
                var upg = document.createElement("button");
                const currentUpgrade = generalUpgrades[i];
                upg.textContent = "Buy " + generalUpgrades[i].name + " for " + (generalUpgrades[i].cost + 1) + " candies";
                upg.onclick = function() {
                    buyUpg(currentUpgrade);
                };
                upg.id = generalUpgrades[i].name;
                generalUpgrades[i].unlocked = true;
                var upsec = document.getElementById("kevin");
                upsec.appendChild(upg);
            }
        }
    }
}

window.unlock_upgrades_kevin_chocolates = function(general_upgrades) {
    var generalUpgrades = general_upgrades;
    for (let i = 0; i < generalUpgrades.length; i++) {
        if (chocolates >= (generalUpgrades[i].cost / 2)) {
            if (generalUpgrades[i].unlocked == false){
                var upg = document.createElement("button");
                const currentUpgrade = generalUpgrades[i];
                upg.textContent = "Buy " + generalUpgrades[i].name + " for " + (generalUpgrades[i].cost + 1) + " chocolates";
                upg.onclick = function() {
                    buyUpg(currentUpgrade);
                };
                upg.id = generalUpgrades[i].name;
                generalUpgrades[i].unlocked = true;
                var upsec = document.getElementById("kevin");
                upsec.appendChild(upg);
            }
        }
    }
}
