let candies = 0;

let cps = 0.3;

const audio = new Audio("click.wav");

setInterval(addCps, 1000);

// The callback function
function addCps() {
    candies += cps;
    var candieText = document.getElementById("candieText");
    candieText.textContent = "you have " + Math.round(candies) + " candies";
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

    for (let i = 0; i < specializedUpgrades.length; i++) {
        if (candies >= (specializedUpgrades[i].cost / 2)) {
            if (specializedUpgrades[i].unlocked == false){
                var upg = document.createElement("button");
                const currentUpgrade = specializedUpgrades[i];
                upg.textContent = "Buy " + specializedUpgrades[i].name + " for " + (specializedUpgrades[i].cost + 1) + " candies";
                upg.onclick = function() {
                    buyUpg(currentUpgrade);
                };
                upg.id = specializedUpgrades[i].name;
                specializedUpgrades[i].unlocked = true;
                var upsec = document.getElementById("upsec");
                upsec.appendChild(upg);
            }
        }
    }
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
             // Code that causes an error (e.g., calling a function that does not exist)
             upg.buy();
        } catch (error) {
              // Display the error in the console
              alert("An error occurred while buying the upgrade: " + error.message);
        }
        upg.buy();
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
    new specializedUpgrade("doom", 4, false, window.doom),
    new specializedUpgrade("doomREA", 4, false, (upg) => window.doom2(upg, "ihasd"))
];

var asdUpgrades = [
    new upgrade("imaginary workers", 10, 0.5, false),
    new upgrade("cookies", 30, 1, false),
    new upgrade("hypercaffeinated soda", 50, 2, false)
];