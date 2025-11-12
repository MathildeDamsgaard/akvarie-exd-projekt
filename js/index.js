"use strict";

// Opbygger vores datastruktur med et Array som indeholder JS objekter
const fishInfo = [
  {
    className: "fish1",

    fishName: "KRABBE",
    Info: "Hej! Jeg er en krabbe. Jeg bor på stranden og i vandet, og jeg går sidelæns. Jeg har et hårdt skjold, som beskytter mig, og når jeg vokser, skifter jeg det gamle skjold ud med et nyt. Jeg spiser næsten alt - både planter, små dyr og nogle gange døde fisk. Selv om jeg ser lille ud, kan nogle af mine venner blive over en meter store.",
  },
  {
    className: "fish2",
    fishName: "KLOVNEFISK",
    Info: "Hej! Jeg er en klovnefisk. Jeg er en lille, farverig fisk med orange og hvide striber - næsten som en lille tiger i vandet. Måske har du set mig i filmen Find Nemo? Jeg bor i en søanemone, som har små stikkende arme, men de kan ikke stikke mig, fordi jeg har et særligt slimlag. Jeg elsker at svømme og lege med mine venner!",
  },
  {
    className: "fish3",
    fishName: "PUFFERFISK",
    Info: "Hej! Jeg er en pufferfisk og jeg bliver bogstaveligt talt oppustet, når jeg bliver stresset! Jeg kan blive op til tre gange min normale størrelse, så jeg ligner en ballon - men uden at tage på i vægt! Jeg er super giftig. Ét lille måltid af mig, og du får en evig madforgiftning. Selvom jeg ser sød ud, er jeg faktisk et af havets mest dødelige dyr. Surprise!",
  },
  {
    className: "fish4",
    fishName: "HVIDHAJ",
    Info: "Hej! Jeg er en hvidhaj. Jeg er en stor fisk, der bor i havet. Jeg har skarpe tænder, og man kalder mig hvidhaj, fordi min mave er lys. Du kan finde mig i varme have over hele verden. Jeg kan svømme meget hurtigt! Selvom jeg ser farlig ud, er jeg mest forvirret. Nogle gange tror jeg, at mennesker er sæler.",
  },
  {
    className: "fish5",
    fishName: "ROKKE",
    Info: "Hej! Jeg er en rokke. Jeg er næsten lige så flad som en pandekage, og jeg elsker at gemme mig under sandet. Jeg spiser muslinger og krabber. Mine øjne sidder ovenpå mit hovede, og min mund sidder nedenunder. Jeg har også en lang hale, som kan være giftig, og jeg bruger den til at forsvare mig selv. Jeg kan blive op til 7 meter lang!",
  },
  {
    className: "fish6",
    fishName: "SKILPADDE",
    Info: "Hej! Jeg er en skilpadde. Jeg er et roligt og venligt dyr, som for det meste lever i de varme have. Jeg har ikke specielt travlt i livet - jeg er nemlig ikke hurtig. Men hvis jeg endelig skal skynde mig, kan jeg svømme helt op til 30 km i timen! Jeg svømmer en hel del og bevæger mig mange kilometer med mine finner.",
  },
];

// Info kort om fiskene
document.addEventListener("DOMContentLoaded", () => {
  // Finder tooltip id

  const tooltip = document.getElementById("tooltip");

  function showTooltip(html) {
    if (tooltip) {
      tooltip.innerHTML = html;
      tooltip.classList.add("is-visible");

      setTimeout(function () {
        tooltip.classList.remove("is-visible");
      }, 8000);
    }
  }
  fishInfo.forEach((fish) => {
    document.querySelectorAll("." + fish.className).forEach((elem) => {
      elem.addEventListener("click", () => {
        const fishDetails = `
                <strong> ${fish.fishName}</strong><br>
                 ${fish.Info}
                `;
        showTooltip(fishDetails);
      });
    });
  });
});

// DOM Elementer
const getCrab = document.getElementById("crab");
const getNemoFish = document.getElementById("nemo");
const getPufferFish = document.getElementById("pufferfish");
const getShark = document.getElementById("shark");
const getStingRay = document.getElementById("stingray");
const getTurtle = document.getElementById("turtle");

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
