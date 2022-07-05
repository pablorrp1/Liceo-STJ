const express = require('express');
const app = express();
const five = require("johnny-five");
const board = new five.Board();

app.set('port', 3000);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
})
app.get('/blink', (req, res) => {
  res.send('Blinking');
  blink();
})
app.get('/stop', (req, res) => {
  res.send('Stopping');
  stop();
})

app.use(express.static('public'));

app.listen(app.get('port'), () => {
  console.log('Server started on port', app.get('port'));
})
board.on("ready", () => {
  console.log("Board ready");
  const led = new five.Led(13);
  blink = () => {
    led.blink(500);
  }
  stop = () => {
    led.stop();
    led.off();
  }
});

console.log("Waiting for board to be ready");