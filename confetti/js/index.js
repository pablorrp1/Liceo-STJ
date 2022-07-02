const confettiCanvas = document.getElementById('confetti-canvas')
const confettiSettings = {
  target: confettiCanvas,
  max: 40,
  size: 5
}
const confetti = new ConfettiGenerator(confettiSettings)
confetti.render()