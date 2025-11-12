"use strict";
// Opbygger vores datastruktur med et Array som indeholder JS objekter
const fishInfo = [
    {
        className: "fish1",
        fishName: "Crab",
        lifeSpan: "3-12 year",
        funFact: "Krabber går sidelæns! Når de vokser, smider de deres gamle skjold og får et nyt."
    },
    {
        className: "fish2",
        fishName: "Nemo",
        lifeSpan: "6-10 year",
        funFact: "Hvis moren forsvinder, bliver faren til en mor! Klovnefisk kan nemlig skifte køn."
    },
    {
        className: "fish3",
        fishName: "Pufferfish",
        lifeSpan: "10 year",
        funFact: "Pufferfisken kan puste sig op til tre gange sin egen størrelse - men den er også et af havets mest gitige dyr!"
    },
    {
        className: "fish4",
        fishName: "Shark",
        lifeSpan: "70-80 year",
        funFact: "Hvidhajen kan svømme op til 40 km/t - men angriber sjældent mennesker med vilje, den forveksler os bare med sæler!"
    },
    {
        className: "fish5",
        fishName: "Stinggray",
        lifeSpan: "15-25 year",
        funFact: "Rokker er flade som pandekager og gemmer sig under sandet - nogle kan blive op til 7 meter lange!"
    },    
    {
        className: "fish6",
        fishName: "Turtle",
        lifeSpan: "20-50 year",
        funFact: "Havskildpadder kan svømme tusindvis af kilometer - men tager det helt roligt med en topfart på 30 km/t!"
    }
];



// Info kort om fiskene
document.addEventListener("DOMContentLoaded", () =>{
    // Finder tooltip id
    const tooltip = document.getElementById("tooltip");
    // Funktion der finder tooltip med oplysninger til fiskene
    function showTooltip(html) {
        if (tooltip) {
            tooltip.innerHTML = html;
            tooltip.classList.add("is-visible");
            setTimeout(function() {
                tooltip.classList.remove("is-visible");
            },8000);
        }
    }
    fishInfo.forEach((fish) => {
        document.querySelectorAll("." + fish.className).forEach((elem) => {
            elem.addEventListener("click", () => {
                const fishDetails = `
                <strong>${fish.fishName}</strong><br>
                Year: ${fish.lifeSpan}
                Fact: ${fish.funFact}
                `;
                showTooltip(fishDetails);

            });
        });
    });
});




// DOM Elementer
const getCrab = document.getElementById("crab");
const getNemoFish = document.getElementById("nemofish");
const getPufferFish = document.getElementById("pufferfish");
const getShark = document.getElementById("shark");
const getStingRay = document.getElementById("stringray");
const getTurtle = document.getElementById("turtle");

if (getCrab) {
    getCrab.addEventListener("click", () => {

    });
}

if (getNemoFish) {
    getNemoFish.addEventListener("click", () => {

    });
}

if (getPufferFish) {
    getPufferFish.addEventListener("click", () => {

    });
}

if (getShark) {
    getShark.addEventListener("click", () => {

    });
}

if (getStingRay) {
    getStingRay.addEventListener("click", () => {

    });
}

if (getTurtle) {
    getTurtle.addEventListener("click", () => {

    });
}