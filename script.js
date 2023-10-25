let score = localStorage.getItem("score") || 0;
document.getElementById("score").innerText = score;

document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    score = 0;
    localStorage.setItem("score", score);
    document.getElementById("score").innerText = score;
  });

document.getElementById("target").addEventListener("click", function () {
  score++;
  document.getElementById("score").innerText = score;
  localStorage.setItem("score", score);

  // Change the position of the target
  const gameAreaWidth = document.getElementById("gameArea").offsetWidth;
  const gameAreaHeight = document.getElementById("gameArea").offsetHeight;
  const targetWidth = this.offsetWidth;
  const targetHeight = this.offsetHeight;

  // Calculate random positions within the boundaries
  const randomX = Math.random() * (gameAreaWidth - targetWidth);
  const randomY = Math.random() * (gameAreaHeight - targetHeight);

  // Apply the random positions to the target
  this.style.left = randomX + "px";
  this.style.top = randomY + "px";
});
