const URL_BASE = 'http://localhost:3000/';

function makeBlink() {
  fetch(URL_BASE + 'blink')
    .then(res => {
      console.log('Blinked');
    })
}

function stopBlink() {
  fetch(URL_BASE + 'stop')
    .then(res => {
      console.log('Stopped');
    })
}