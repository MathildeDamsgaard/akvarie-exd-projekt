// Your code here

/*
// ...existing code...
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const dodger = document.getElementById("dodger");
  const movementSound = document.getElementById("movementSound");
  const gameoverSound = document.getElementById("gameoverSound");

  if (!dodger) return;

  function safeParsePx(prop) {
    // hent inline først, ellers computed style; return 0 ved fejl
    const inline = dodger.style[prop];
    const value =
      inline && inline.includes("px")
        ? inline
        : window.getComputedStyle(dodger)[prop];
    return parseInt((value || "0").toString().replace("px", ""), 10) || 0;
  }

  function playMovementSound() {
    if (!movementSound) return;
    try {
      movementSound.currentTime = 0;
      movementSound.play();
    } catch (e) {}
  }
  function playGameOverSound() {
    if (!gameoverSound) return;
    try {
      gameoverSound.play();
    } catch (e) {}
  }

  function moveDodgerLeft() {
    const left = safeParsePx("left");
    if (left > 0) dodger.style.left = `${left - 20}px`;
    else playGameOverSound();
  }
  function moveDodgerRight() {
    const left = safeParsePx("left");
    const parent = dodger.parentElement;
    const max = parent
      ? parent.clientWidth - dodger.offsetWidth
      : window.innerWidth - dodger.offsetWidth;
    if (left < max) dodger.style.left = `${left + 20}px`;
    else playGameOverSound();
  }
  // bruger top (fordi du i CSS bruger top: 50%)
  function moveDodgerUp() {
    const top = safeParsePx("top");
    if (top > 0) dodger.style.top = `${top - 20}px`;
    else playGameOverSound();
  }
  function moveDodgerDown() {
    const top = safeParsePx("top");
    const parent = dodger.parentElement;
    const max = parent
      ? parent.clientHeight - dodger.offsetHeight
      : window.innerHeight - dodger.offsetHeight;
    if (top < max) dodger.style.top = `${top + 20}px`;
    else playGameOverSound();
  }

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        playMovementSound();
        dodger.style.transform = "scaleX(-1)";
        moveDodgerLeft();
        break;
      case "ArrowRight":
        playMovementSound();
        dodger.style.transform = "scaleX(1)";
        moveDodgerRight();
        break;
      case "ArrowUp":
        playMovementSound();
        moveDodgerUp();
        break;
      case "ArrowDown":
        playMovementSound();
        moveDodgerDown();
        break;
    }
  });

  // sørg for startværdier hvis nødvendigt
  if (!dodger.style.left) dodger.style.left = `${safeParsePx("left")}px`;
  if (!dodger.style.top) dodger.style.top = `${safeParsePx("top")}px`;
});
// ...existing code...

*/

/*

"use strict";
const dodger = document.getElementById("dodger");

//Left dodger
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 20);

  if (left > 0) {
    dodger.style.left = `${left - 20}px`;
  } else {
    //Gameover
    playGameOverSound();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

//Right dodger
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 20);

  if (left < 360) {
    dodger.style.left = `${left + 20}px`;
  } else {
    //Gameover
    playGameOverSound();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function moveDodgerUp() {
  const topNumbers = dodger.style.top.replace("px", "");
  const top = parseInt(topNumbers);
  if (top > 0) {
    dodger.style.top = `${top - 20}px`;
  } else {
    //Gameover
    playGameOverSound();
  }
}

function moveDodgerDown() {
  const topNumbers = dodger.style.top.replace("px", "");
  const top = parseInt(topNumbers);
  const parent = dodger.parentElement;
  const max = parent
    ? parent.clientHeight - dodger.offsetHeight
    : window.innerHeight - dodger.offsetHeight;
  if (top < max) dodger.style.top = `${top + 20}px`;
  else playGameOverSound();
}

const movementSound = document.getElementById("movementSound");

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    movementSound.play();
    dodger.style.transform = "scaleX(-1)";
  }
  if (e.key === "ArrowRight") {
    movementSound.play();
    dodger.style.transform = "rotate(0deg)";
  }
  if (e.key === "ArrowUp") {
    movementSound.play();
    dodger.style.transform = "rotate(270deg)";
  }
  if (e.key === "ArrowDown") {
    movementSound.play();
    dodger.style.transform = "rotate(90deg)";
  }
});

function playSoundOnMovement() {
  movementSound.currentTime = 0;
}

// Game over sound
const gameoverSound = document.getElementById("gameoverSound");

function playGameOverSound() {
  gameoverSound.play();
}

*/

/*

// ...existing code...
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const dodger = document.getElementById("dodger");
  const movementSound = document.getElementById("movementSound");
  const gameoverSound = document.getElementById("gameoverSound");
  if (!dodger) return;

  function getPx(prop) {
    const inline = dodger.style[prop];
    const value =
      inline && inline.includes("px")
        ? inline
        : window.getComputedStyle(dodger)[prop] || "0px";
    return parseInt(value.replace("px", ""), 10) || 0;
  }

  function playMovementSound() {
    if (!movementSound) return;
    try {
      movementSound.currentTime = 0;
      movementSound.play().catch(() => {});
    } catch {}
  }

  function playGameOverSound() {
    if (!gameoverSound) return;
    try {
      gameoverSound.currentTime = 0;
      gameoverSound.play().catch(() => {});
    } catch {}
  }

  // sørg for inline startværdier så parseInt altid har noget at læse
  if (!dodger.style.left) dodger.style.left = `${getPx("left")}px`;
  if (!dodger.style.top) dodger.style.top = `${getPx("top")}px`;

  function moveDodgerLeft() {
    const left = getPx("left");
    if (left > 0) dodger.style.left = `${left - 20}px`;
    else playGameOverSound();
  }

  function moveDodgerRight() {
    const left = getPx("left");
    const parent = dodger.parentElement;
    const max = parent
      ? parent.clientWidth - dodger.offsetWidth
      : window.innerWidth - dodger.offsetWidth;
    if (left < max) dodger.style.left = `${left + 20}px`;
    else playGameOverSound();
  }

  function moveDodgerUp() {
    const top = getPx("top");
    if (top > 0) dodger.style.top = `${top - 20}px`;
    else playGameOverSound();
  }

  function moveDodgerDown() {
    const top = getPx("top");
    const parent = dodger.parentElement;
    const max = parent
      ? parent.clientHeight - dodger.offsetHeight
      : window.innerHeight - dodger.offsetHeight;
    if (top < max) dodger.style.top = `${top + 20}px`;
    else playGameOverSound();
  }

  // Én samlet keydown-lytter (ingen duplikater)
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        playMovementSound();
        dodger.style.transform = "scaleX(-1)";
        moveDodgerLeft();
        break;
      case "ArrowRight":
        playMovementSound();
        dodger.style.transform = "scaleX(1)";
        moveDodgerRight();
        break;
      case "ArrowUp":
        playMovementSound();
        dodger.style.transform = "rotate(270deg)";
        moveDodgerUp();
        break;
      case "ArrowDown":
        playMovementSound();
        dodger.style.transform = "rotate(90deg)";
        moveDodgerDown();
        break;
    }
  });
});
// ...existing code...

*/

// Your code here

"use strict";
const dodger = document.getElementById("dodger");

//Left dodger
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  } else {
    //Gameover
    playGameOverSound();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

//Right dodger
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 5}px`;
  } else {
    //Gameover
    playGameOverSound();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers);
  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 5}px`;
  } else {
    //Gameover
    playGameOverSound();
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers);
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 5}px`;
  } else {
    //Gameover
    playGameOverSound();
  }
}

const movementSound = document.getElementById("movementSound");

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    movementSound.play();
    dodger.style.transform = "scaleX(-1)";
  }
  if (e.key === "ArrowRight") {
    movementSound.play();
    dodger.style.transform = "rotate(0deg)";
  }
  if (e.key === "ArrowUp") {
    movementSound.play();
    dodger.style.transform = "rotate(270deg)";
  }
  if (e.key === "ArrowDown") {
    movementSound.play();
    dodger.style.transform = "rotate(90deg)";
  }
});

function playSoundOnMovement() {
  movementSound.currentTime = 0;
}

// Game over sound
const gameoverSound = document.getElementById("gameoverSound");

function playGameOverSound() {
  gameoverSound.play();
}
