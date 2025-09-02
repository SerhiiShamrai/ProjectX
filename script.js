"use strict";

const deadTime = "2025-09-04";

function getTimeRemaining(endTime) {
  const t = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / (1000 * 60)) % 60),
    seconds = Math.floor((t / 1000) % 60);

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function addZero(time) {
  if (time < 10) {
    return time = '0' + time;
  } else {
    return time;
  }
}

function setClock(selector, endTime) {
  const timer = document.querySelector(selector);
  const days = timer.querySelector("#days");
  const hours = timer.querySelector("#hours");
  const minutes = timer.querySelector("#minutes");
  const seconds = timer.querySelector("#seconds");
  UpdateTime();

  const interval = setInterval(() => {
    UpdateTime();
  }, 1000);

  function UpdateTime() {
    const clock = getTimeRemaining(endTime);
    days.innerHTML = addZero(clock.days);
    hours.innerHTML = addZero(clock.hours);
    minutes.innerHTML = addZero(clock.minutes);
    seconds.innerHTML = addZero(clock.seconds);
    if (clock.total <= 0) {
      clearInterval(interval);
    }
  }
}

setClock(".time-block", deadTime);

console.log("Hello!");
