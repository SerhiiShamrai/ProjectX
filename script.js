'use strict'

const deadTime = '2025-09-04';

function getTimeRemaining(endTime) {
  const t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function setClock(selector, endTime) {
  const timer = document.querySelector(selector);
  const days = timer.querySelector('#days');
  const hours = timer.querySelector('#hours');
  const minutes = timer.querySelector('#minutes');
  const seconds = timer.querySelector('#seconds');
  
  const interval = setInterval(() => {
    const clock = getTimeRemaining(endTime);
    days.innerHTML = clock.days;
    hours.innerHTML = clock.hours;
    minutes.innerHTML = clock.minutes;
    seconds.innerHTML = clock.seconds;

    if(clock.total <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}

setClock('.time-block', deadTime);



