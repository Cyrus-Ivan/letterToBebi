document.querySelector("#openEnvelope").addEventListener("click", () => {
  document.querySelector(".envelope").classList.add("active");
  document.querySelector(".letter").classList.add("open-letter");
  document.querySelector(".letter").classList.remove("no-anim");
  document.querySelector(".letter").classList.add("openNor");

  const audio = new Audio("audio.mp3");
  audio.volume = 0.1;
  audio.play();
  setTimeout(() => {
    const interval = setInterval(() => {
      audio.volume += 0.01;
      audio.volume = audio.volume.toFixed(2);
      if (audio.volume == 0.9) {
        clearInterval(interval);
      }
    }, 200);
  }, 500);
});
