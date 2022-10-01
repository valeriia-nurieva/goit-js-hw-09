import '../css/common.css'

const btnStartRef = document.querySelector("[data-start]");
const btnStopRef = document.querySelector("[data-stop]");

btnStopRef.setAttribute("disabled", "true");
btnStartRef.addEventListener("click", onBtnStartClick);
btnStopRef.addEventListener("click", onBtnStopClick);

btnStopRef.classList.add('is-inactive'); //для оформлення

const switcher = {
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
  },
};

function onBtnStartClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  switcher.start();
  btnStartRef.setAttribute("disabled", "true");
  btnStopRef.removeAttribute("disabled");

  //для оформлення
  btnStartRef.classList.add('is-inactive');
  btnStopRef.classList.remove('is-inactive');
}
function onBtnStopClick() {
  switcher.stop();
  btnStopRef.setAttribute("disabled", "true");
  btnStartRef.removeAttribute("disabled");

  //для оформлення
  btnStartRef.classList.remove('is-inactive');
  btnStopRef.classList.add('is-inactive');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
