const five = require("johnny-five");
const board = new five.Board();
board.on("ready", () => {
  console.log("Board ready");
  const led = new five.Led(13);
  led.blink(500);
});

console.log("Waiting for board to be ready");