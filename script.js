window.candies = 0;
window.chocolates = 0;

window.chocolate_men = 0;

let cps = 100;
window.chocolate_cps = 0;

let progressed = false;
let past_1000 = false;

window.currentBoost = "none";

window.cb_version = "13 alpha 6";

window.farm_active = false;
window.mill_active = false;
window.forge_active = false;

window.mine_found = false;
window.forest_found = false;

window.figure_stage = 0;

window.clickSound = new Audio("click.wav");
window.hi = new Audio("WAPP-Hi.wav");

setInterval(addCps, 1000);

// The callback function
function addCps() {
    let total_cps2 = cps;

    if (window.mill_active) {
        total_cps2 *= 2;
    }

    candies += total_cps2;
    if (candies >= 1000 && !past_1000) {
        alert("you have accumulated enough candies to attract new people to your domain");
        past_1000 = true;
    }
    var candieText = document.getElementById("candieText");
    candieText.textContent = "you have " + Math.round(candies) + " candies";

    if (window.farm_active) {
        var totalCps = chocolate_cps;
        if (window.currentBoost == "cherry") {
            totalCps *= 4;
            if (Math.random() < 0.1) {
                window.chocolates *= 0.8;
            }
        }
        else if (window.currentBoost == "bananas") {
            totalCps *= 2.2;
        }
        if (window.mill_active){
            totalCps *= 0.2;
        }
        chocolates += totalCps;
        var chocolateText = document.getElementById("chocolate_count");
        var chocolateProd = document.getElementById("chocolate_prod");
        chocolateProd.textContent = "chocolates per second: " + totalCps;
        chocolateText.textContent = "you have " + Math.round(chocolates) + " chocolates";
    }

    window.unlock_upgrades(generalUpgrades);
    window.unlock_upgrades(specializedUpgrades);
    if (past_1000) {
        if (window.figure_stage == 0) {
            window.unlock_upgrades(figure1);
        }
        if (window.figure_stage == 1) {
            window.unlock_upgrades(figure2);
        }
        if (window.figure_stage == 2) {
            window.unlock_upgrades(figure3);
        }
        if (window.figure_stage == 3) {
            window.unlock_upgrades(figure4);
        }
        if (window.figure_stage == 4) {
            window.unlock_upgrades(figure5);
        }
        if (window.figure_stage == 5) {
            window.unlock_upgrades(figure6);
        }
        if (window.figure_stage == 6) {
            window.unlock_upgrades(figure7);
        }
        if (window.figure_stage == 7) {
            window.unlock_upgrades_kevin(kevinUpgrades);
            window.unlock_upgrades_kevin_chocolates(kevinUpgradesChocolate);
        }

    }

}

function playClickSound() {
    window.clickSound.currentTime = 0;
    window.clickSound.play().catch(err => console.error(err));
}



document.addEventListener("click", function unlockAudio() {
    window.clickSound.play().then(() => {
        window.clickSound.pause();
        window.clickSound.currentTime = 0;
        document.removeEventListener("click", unlockAudio);
    }).catch(err => console.error(err));
}, { once: true });



function buyUpg(upg) {
    playClickSound();
    if (candies >= upg.cost) {
        try {
             upg.buy();
        } catch (error) {
              alert("An error occurred while buying the upgrade: " + error.message);
              return;
        }
        const button = document.getElementById(upg.name);

        


        if (button) button.remove();

        console.log("bought!");
    } else {
        alert("Not enough candies to buy " + upg.name);
    }
}

function buyUpgChoc(upg) {
    playClickSound();
    if (chocolates >= upg.cost) {
        try {
             upg.buy();
        } catch (error) {
              alert("An error occurred while buying the upgrade: " + error.message);
              return;
        }
        const button = document.getElementById(upg.name);

        


        if (button) button.remove();

        console.log("bought!");
    } else {
        alert("Not enough chocolates to buy " + upg.name);
    }
}


class upgrade {
    constructor(name, cost, cps, unlocked) {
        this.name = name;
        this.cost = cost;
        this.cps = cps;
        this.unlocked = unlocked;
    }

    buy() {
        candies -= this.cost;
        cps += this.cps;
        progressed = true;
        document.getElementById("candieText").textContent =
            "you have " + Math.round(candies) + " candies";
    }
}

class specializedUpgrade {
    constructor(name, cost, unlocked, onBuy = null) {
        this.name = name;
        this.cost = cost;
        this.unlocked = unlocked;
        this.onBuy = onBuy;
    }

    buy() {
        candies -= this.cost;
        progressed = true;
        document.getElementById("candieText").textContent =
            "you have " + Math.round(candies) + " candies";
        if (this.onBuy) {
            this.onBuy(this);
        }
    }
}

class specializedUpgradeChocolate {
    constructor(name, cost, unlocked, onBuy = null) {
        this.name = name;
        this.cost = cost;
        this.unlocked = unlocked;
        this.onBuy = onBuy;
    }

    buy() {
        chocolates -= this.cost;
        progressed = true;
        document.getElementById("chocolate_count").textContent =
            "chocolates: " + Math.round(chocolates);
        if (this.onBuy) {
            this.onBuy(this);
        }
    }
}




// asjhnfaslkfaslksjflaksjfa
//asfohlfhasfhasiopfhasojhasoifas
//okasnisnfasfinasoifasnfa
//aoshfoasfhnaishnfaisofnasofin

document.addEventListener("DOMContentLoaded", function() {
    // Find the element by its ID, class, or tag
    document.title = "candybank V" + window.cb_version;
    let vtext = document.getElementById("ihasd");
    if (vtext) {
        vtext.textContent = "V" + window.cb_version;
    }
});

window.addEventListener('beforeunload', function (e) {
    if (!progressed) {
        return;
    }
    // Cancels the event to trigger the confirmation dialog
    e.preventDefault();
    
    // Required by older versions of Chrome and some other modern browsers
    e.returnValue = ''; 
});






var generalUpgrades = [
    new upgrade("imaginary workers", 9, 1, false),
    new upgrade("cookies", 29, 2, false),
    new upgrade("hypercaffeinated soda", 49, 4, false)
];

var specializedUpgrades = [
    new specializedUpgrade("a feature", 99, false, window.unlock_chocolate),
    new specializedUpgrade("a feature", 599, false, window.unlock_mill)
];

var kevinUpgrades = [
    new specializedUpgrade("banana flavoured candy", 849, false, (upg) => window.buy_fertilizer(upg, "bananas")),
    new specializedUpgrade("cherry flavoured candy", 1399, false, (upg) => window.buy_fertilizer(upg, "cherry")),
    
]

var kevinUpgradesChocolate = [
    new specializedUpgradeChocolate("chocolate men", 29, false, (upg) => window.unlock_chocolate_men(upg)),
    new specializedUpgradeChocolate("the mines", 99, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
]

var choc_men = [
    new specializedUpgradeChocolate("chocolate men", 29, false, (upg) => window.unlock_chocolate_men(upg)),
    new specializedUpgradeChocolate("the mines", 99, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
]

var figure1 = [
    new specializedUpgrade("look", 1, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure2 = [
    new specializedUpgrade("look closer", 2, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure3 = [
    new specializedUpgrade("what is that", 4, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure4 = [
    new specializedUpgrade("walk closer", 8, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure5 = [
    new specializedUpgrade("walk closer", 16, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure6 = [
    new specializedUpgrade("wave", 32, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];
var figure7 = [
    new specializedUpgrade("wave", 64, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];