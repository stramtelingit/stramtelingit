

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
    const mill_act_sec = document.getElementById("mill_act_sec");
    const mill_activate = document.getElementById("mill_activate");
    if (mill_activate) {
        mill_activate.checked = true;
    }
    if (mill_act_sec) { 
        mill_act_sec.style.display = "block";
    }
    if (farm) { 
        farm.style.display = "none";
    }
    if (mill) { 
        mill.style.display = "flex";
    }
};

window.unlock_figure = function (upg, figure_stage) {
    console.log("Special upgrade used:", upg.name);
    const nextStage = figure_stage + 1;
    const currentFigure = document.getElementById(String(figure_stage));
    const nextFigure = document.getElementById(String(nextStage));
    if (nextStage > 6){
        window.hi.play().catch(err => console.error(err));
    }

    if (currentFigure && nextFigure) {
        currentFigure.style.display = "none";
        nextFigure.style.display = "flex";
        window.figure_stage = nextStage;
    }

    
}