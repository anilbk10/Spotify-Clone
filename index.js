const play_button = document.getElementById("play-button");
const pause_button = document.getElementById("pause-button");

const music = new Audio("./assets/background_sound(old).mp3");

const playMusic = () => {
  play_button.classList.remove("show");
  play_button.classList.add("hide");
  pause_button.classList.remove("hide");
  pause_button.classList.add("show");
  music.play();
};
const pauseMusic = () => {
  play_button.classList.add("show");
  play_button.classList.remove("hide");
  pause_button.classList.add("hide");
  pause_button.classList.remove("show");
  music.pause();
};

play_button.addEventListener("click", playMusic);
pause_button.addEventListener("click", pauseMusic);
