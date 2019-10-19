'use strict';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

const changeColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(
      arr => {
        const randomIntegerFromInterval = (min = 0, max = arr.length - 1) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };

        body.style.backgroundColor = arr[randomIntegerFromInterval()];
      },
      1000,
      colors,
    );
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

startButton.addEventListener('click', changeColor.start.bind(changeColor));
stopButton.addEventListener('click', changeColor.stop.bind(changeColor));
