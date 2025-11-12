"use strict";
// Opbygger vores datastruktur med et Array som indeholder JS objekter
const fishInfo = [
    {
        className: "fish1",
        fishName: "Crab",
        Info: "Hej! Jeg er en krabbe. Jeg bor på stranden og i vandet, og jeg elsker at gå sidelæns. Jeg har et hårdt skjold, som beskytter mig, og når jeg vokser, skifter jeg det gamle skjold ud med et nyt. Mine store kløer bruger jeg til at fange mad, kæmpe med andre krabber og grave små huller i sandet. Jeg spiser næsten alt, både planter, små dyr og nogle gange døde fisk. Selv om jeg ser lille ud, kan nogle af mine venner blive over en meter store og leve i over 30 år!"
    },
    {
        className: "fish2",
        fishName: "Nemo",
        Info: "Hej! Jeg er en klovnefisk. Jeg er en lille, farverig fisk, der bor i det varme hav! Jeg har orange og hvide striber, næsten som en lille tiger i vandet! Jeg bor i et blødt hjem kaldet en søanemone. Den har tentakler, der kan stikke, men ikke mig! Jeg har et særligt slimlag, der beskytter mig, så jeg kan gemme mig der, helt trygt. Jeg elsker at svømme rundt og lege med mine venner. Vi bor tit mange sammen i den samme søanemone, som en lille familie! Og ved du hvad? Hvis den største klovnefisk-mor forsvinder, så bliver en af fædrene til en mor! Det er lidt fjollet, men sådan gør vi klovnefisk bare!"
    },
    {
        className: "fish3",
        fishName: "Pufferfish",
        Info: "Hej, jeg er en pufferfisk, og jeg bliver bogstaveligt talt oppustet, når jeg bliver stresset! Jeg kan blive op til tre gange min normale størrelse uden at tage på i vægt! Jeg ligner en ballon, men du må ikke puste mig – jeg gør det selv. Jeg er super giftig. Seriøst. Ét lille måltid af mig, og du får en evig madforgiftning. Jeg ser sød ud, men jeg er faktisk et af havets mest dødelige dyr. Surprise!"
    },
    {
        className: "fish4",
        fishName: "Shark",
        Info: "Hej, hvidhaj her! Jeg er en meget stor fisk, der lever i havet. Jeg er kendt for mine skarpe tænder, og jeg bliver kaldt hvidhajen, fordi jeg har en lys mave og grå ryg. Du finder mig i varme eller lidt kølige have over hele verden. Jeg er den hurtigste i havet – jeg kan svømme helt op til 40 km i timen for at fange mit bytte. Selvom jeg har skarpe tænder, så er jeg ikke særlig farlig – jeg tager bare nogle gange fejl af et menneske og en sæl."
    },
    {
        className: "fish5",
        fishName: "Stingray",
        Info: "Hej! Jeg er en rokke. Jeg er næsten lige så flad som en pandekage, og jeg elsker at gemme mig under sandet. Jeg spiser muslinger, snegle og krabber. Mine øjne sidder ovenpå mit hoved, og min mund sidder nedenunder. Jeg har også en lang hale, som kan være giftig, og jeg bruger den til at forsvare mig selv. Jeg kan blive op til 7 meter lang!"
    },
    {
        className: "fish6",
        fishName: "Turtle",
        Info: "Hej! Skildpadde her. Jeg er et roligt og venligt dyr, som ikke har specielt travlt, og jeg lever for det meste i de varme have. Jeg svømmer mange kilometer i mit liv. Jeg er ikke hurtig, men hvis jeg har travlt, kan jeg svømme helt op til 30 km i timen!"
    }
];


// Info kort til fiskene



// Info kort om fiskene
document.addEventListener("DOMContentLoaded", () =>{
    // Finder tooltip id

    const tooltip = document.getElementById("tooltip");

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
                <strong> ${fish.fishName}</strong><br>
                Info: ${fish.Info}
                `;
                showTooltip(fishDetails);
            });
        })
    })
})



// Henter DOM Elementer 
const getCrab = document.getElementById("crab");
const getNemoFish = document.getElementById("nemo");
const getPufferFish = document.getElementById("pufferfish");
const getShark = document.getElementById("shark");
const getStingRay = document.getElementById("stingray");
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


if (getStingray) {
    getStingray.addEventListener("click", () => {
          
    });
}


if (getTurtle) {
    getTurtle.addEventListener("click", () => {
        
    });
}


// Opretter et lyd-objekt og tildeler source til den specifikke lydfil i mappen "sound"
const soundCrab = new Audio();
soundCrab.src = "../sound/krabbe.mp3";

const soundNemo = new Audio();
soundNemo.src = "../sound/nemo.mp3";

const soundPuffer = new Audio();
soundPuffer.src = "../sound/pufferfisk.mp3";

const soundShark = new Audio();
soundShark.src = "../sound/hvidhaj.mp3";

const soundStingray = new Audio();
soundStingray.src = "../sound/rokke.mp3";

const soundTurtle = new Audio();
soundTurtle.src = "../sound/skilpadde.mp3";

if (getCrab) {
  getCrab.addEventListener("click", () => {
    soundCrab.play();
  });
}

if (getNemoFish) {
  getNemoFish.addEventListener("click", () => {
    soundNemo.play();
  });
}

if (getPufferFish) {
  getPufferFish.addEventListener("click", () => {
    soundPuffer.play();
  });
}

if (getShark) {
  getShark.addEventListener("click", () => {
    soundShark.play();
  });
}

if (getStingRay) {
  getStingRay.addEventListener("click", () => {
    soundStingray.play();
  });
}

if (getTurtle) {
  getTurtle.addEventListener("click", () => {
    soundTurtle.play();
  });
}  

