import state from "./state.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js"
import { myTimer, stopInterval } from "./timer.js";
import { alterarValorDaTela } from "./events.js";

export function play() {
  state.interval = setInterval(myTimer, 1000);
  document.documentElement.classList.toggle("running");

  state.isRunning = true;
}

export function pause() {
  stopInterval();

  state.isRunning = false;
  document.documentElement.classList.toggle("running");
}

export function stop() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  state.minutes = 25;
  state.seconds = 0;
  alterarValorDaTela(state.minutes, state.seconds);
  stopInterval();
}

export function plus() {
  const INCREMENT_NUMBER = 5;
  state.minutes = state.minutes + INCREMENT_NUMBER;
  alterarValorDaTela(state.minutes, state.seconds);
}

export function minus() {
  if (state.minutes <= 5) {
    state.minutes = 0;
    alterarValorDaTela(state.minutes, state.seconds);
    return;
  }

  const DECREMENT_NUMBER = 5;
  state.minutes = state.minutes - DECREMENT_NUMBER;
  alterarValorDaTela(state.minutes, state.seconds);
}

export function forest() {
  el.forest.classList.toggle("sound-on");

  if (state.isForest) {
    state.isForest = false;
    sounds.forestAudio.pause();
  } else {
    state.isForest = true;
    sounds.forestAudio.play();
  }
}

export function rain() {
  el.rain.classList.toggle("sound-on");

  if (state.isRain) {
    state.isRain = false;
    sounds.rainAudio.pause();
  } else {
    state.isRain = true;
    sounds.rainAudio.play();
  }
}

export function road() {
  el.road.classList.toggle("sound-on");

  if (state.isRoad) {
    state.isRoad = false;
    sounds.roadAudio.pause();
  } else {
    state.isRoad = true;
    sounds.roadAudio.play();
  }
}

export function fire() {
  el.fire.classList.toggle("sound-on");

  if (state.isFire) {
    state.isFire = false;
    sounds.fireAudio.pause();
  } else {
    state.isFire = true;
    sounds.fireAudio.play();
  }
}

export function slider(){

  el.slider.forEach(input => {
    input.value = 50;
  })

  el.slider[0].addEventListener("change", (e) => {
    sounds.forestAudio.volume = e.target.value / 100
  })

  el.slider[1].addEventListener("change", (e) => {
    sounds.rainAudio.volume = e.target.value / 100
  })

  el.slider[2].addEventListener("change", (e) => {
    sounds.roadAudio.volume = e.target.value / 100
  })

  el.slider[3].addEventListener("change", (e) => {
    sounds.fireAudio.volume = e.target.value / 100
  })
}