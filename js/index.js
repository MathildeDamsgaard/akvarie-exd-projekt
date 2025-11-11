"use strict";
// Opbygger vores datastruktur med et Array som indeholder JS objekter
const fishInfo = [
    {
        className: "fish1",
        fishName: "Crab",
        lifeSpan: "3-12 year",
    },
    {
        className: "fish2",
        fishName: "Nemo",
        lifeSpan: "6-10 year",
    },
    {
        className: "fish3",
        fishName: "Pufferfish",
        lifeSpan: "10 year",
    },
    {
        className: "fish4",
        fishName: "Shark",
        lifeSpan: "70-80 year",
    },
    {
        className: "fish5",
        fishName: "Stinggray",
        lifeSpan: "15-25 year",
    },    
    {
        className: "fish6",
        fishName: "Turtle",
        lifeSpan: "20-50 year",
    }
];



// Info kort om fiskene
const tooltip = document.getElementById("tooltip");

function showTooltip(html) {
    if (tooltip) {
        tooltip.innerHTML;
        tooltip.classList.add("is-visible");
        setTimeout( function () {
            tooltip.classList.remove("is-visible");
        },8000);
    }
}


fishInfo.forEach((fish) => {
    document.querySelectorAll("." + fish.className).forEach((elem) => {
        elemaddEventListener("click", () => {
            const fishDetails = `
            <strong>${fish.fishName}</strong><br>
            Year: ${fish.lifeSpan}
            `;
            showTooltip(fishDetails);
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