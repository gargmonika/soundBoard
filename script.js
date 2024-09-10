let keys = document.querySelectorAll("li");
const sound = new Audio("keySounds/key01.mp3");
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    sound.src = `keySounds/key${e.target.dataset.list}.mp3`;
    sound.play();
  });
});
