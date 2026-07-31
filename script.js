var candies = 0;

var cps = 0.3;

setInterval(addCps, 1000);

// The callback function
function addCps() {
    candies += cps;
    var candieText = document.getElementById("candieText");
    candieText.textContent = "you have " + Math.round(candies) + " candies";
    for (var i = 0; i < upgrades.length; i++) {
        if (candies >= upgrades[i].cost / 2) {
            var upg = document.createElement("button");
            upg.textContent = "Buy " + upgrades[i].name + " for " + upgrades[i].cost + " candies";
            upg.onclick = function() {
                upgrades[i].buy();
            };
            var upsec = document.getElementById("upsec");
            upsec.appendChild(upg);
        }
    }
}

class upgrade {
    constructor(name, cost, cps) {
        this.name = name;
        this.cost = cost;
        this.cps = cps;
    }

    buy() {
        if (candies >= this.cost) {
            candies -= this.cost;
            cps += this.cps;
            var candieText = document.getElementById("candieText");
            candieText.textContent = "you have " + candies + " candies";
        } else {
            alert("Not enough candies to buy " + this.name);
        }
    }
}

var upgrades = [
    new upgrade("chained slaves", 10, 0.5),
    new upgrade("oatmeal breakfast", 50, 1),
    new upgrade("white monster", 100, 2)
];