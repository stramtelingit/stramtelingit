window.candies = 0;
window.chocolates = 0;

let cps = 20;
window.chocolate_cps = 0;

let progressed = false;
let past_1000 = false;

window.currentBoost = "none";

window.cb_version = "V13 alpha"

window.farm_active = false;
window.mill_active = false;
window.forge_active = false;

window.figure_stage = 0;

window.clickSound = new Audio("click.wav");

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
        window.unlock_upgrades(figure);
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
    if (candies >= upg.cost + 1) {
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

var figure = [
    new specializedUpgrade("look", 1, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
    new specializedUpgrade("look closer", 2, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
    new specializedUpgrade("what is that", 4, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
    new specializedUpgrade("walk closer", 8, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
    new specializedUpgrade("walk closer", 16, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
    new specializedUpgrade("wave", 32, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
    new specializedUpgrade("wave", 64, false, (upg) => window.unlock_figure(upg, window.figure_stage)),
];