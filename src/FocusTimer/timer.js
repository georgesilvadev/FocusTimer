import state from "./state.js";
import * as events from "./events.js";
import * as sounds from "./sounds.js"

export function myTimer() {
  if (state.minutes <= 0 && state.seconds <= 0) {
    state.isRunning = false;
    document.documentElement.classList.toggle("running");
    sounds.alarm.play();
    stopInterval();
    return;
  }

  if (state.seconds <= 0) {
    state.seconds = 60;
    state.minutes = state.minutes - 1;
  }

  state.seconds = state.seconds - 1;
  events.alterarValorDaTela(state.minutes, state.seconds);

  document.title = `Focus Timer -  ${String(state.minutes).padStart(2, '0')} : ${String(state.seconds).padStart(2, '0')}`
}

export function stopInterval() {
  clearInterval(state.interval);
}
