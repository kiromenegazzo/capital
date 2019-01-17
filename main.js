let date = new Date();
const play = document.querySelector("#capitalfm-audiobar .play");
const player = document.getElementById("capitalfm-audio");
player.volume = 1;
player.src =
  "http://icecast.vgtrk.cdnvideo.ru/capitalfmmp3?v=" +
  date.getTime();
const togglePlay = () => {
  if (play.classList.contains("active")) {
    play.classList.remove("active");
    player.pause();
  } else {
    date = new Date();
    player.src =
      "http://icecast.vgtrk.cdnvideo.ru/capitalfmmp3?v=" +
      date.getTime();
    play.classList.add("active");
    player.play();
  }
};

document.addEventListener("keypress", e => {
  const { keyCode } = e;
  if (keyCode === 32) {
    e.preventDefault();
    togglePlay();
  }
});
