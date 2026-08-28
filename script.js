window.candies = 0;
window.chocolates = 0;

let cps = 10;
window.chocolate_cps = 0;

window.farm_active = false;
window.mill_active = false;
window.forge_active = false;

const audio = new Audio("click.wav");

setInterval(addCps, 1000);

// The callback function
function addCps() {
    candies += cps;
    var candieText = document.getElementById("candieText");
    candieText.textContent = "you have " + Math.round(candies) + " candies";

    if (window.farm_active) {
        chocolates += window.chocolate_cps;
        var chocolateText = document.getElementById("chocolate_count");
        chocolateText.textContent = "you have " + Math.round(chocolates) + " chocolates";
    }

    window.unlock_upgrades(generalUpgrades);
    window.unlock_upgrades(specializedUpgrades);

}

function playClickSound() {
    audio.currentTime = 0;
    audio.play().catch(err => console.error(err));
}



document.addEventListener("click", function unlockAudio() {
    audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
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
        document.getElementById("candieText").textContent =
            "you have " + Math.round(candies) + " candies";
        if (this.onBuy) {
            this.onBuy(this);
        }
    }
}

var generalUpgrades = [
    new upgrade("imaginary workers", 9, 0.5, false),
    new upgrade("cookies", 29, 1, false),
    new upgrade("hypercaffeinated soda", 49, 2, false)
];

var specializedUpgrades = [
    new specializedUpgrade("request a feature", 99, false, window.unlock_chocolate),
    new specializedUpgrade("doomRE6", 4, false, (upg) => window.doom2(upg, "ihasd")),
    new specializedUpgrade("request a feature", 599, false, window.unlock_mill),
];

var asdUpgrades = [
    new upgrade("imaginary workers", 10, 0.5, false),
    new upgrade("cookies", 30, 1, false),
    new upgrade("hypercaffeinated soda", 50, 2, false)
];