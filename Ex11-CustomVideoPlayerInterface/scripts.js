(function(window, document, undefined) {
  // Elements
  const player = document.querySelector(".player");
  const video = player.querySelector(".player__video");
  const progressBar = player.querySelector(".control__progress");
  const progressFilled = player.querySelector(".control__progress-filled");
  const playPauseButton = player.querySelector(".control__play-pause");
  const skipButtons = player.querySelectorAll("[data-skip]");
  const ranges = player.querySelectorAll(".control__slider");
  const volumeIcon = player.querySelector(".control__volume>.fas");
  const rateValue = player.querySelector(".control__playbackRate>.rate");

  // Functions
  function playPauseMedia() {
    video.paused ? video.play() : video.pause();
  }

  function updateButton() {
    video.paused
      ? playPauseButton.children[0].classList.replace("fa-pause", "fa-play")
      : playPauseButton.children[0].classList.replace("fa-play", "fa-pause");
  }

  function skipVideo(e) {
    video.currentTime += parseFloat(e.target.dataset.skip);
  }

  function handleRangeUpdate(e) {
    video[e.target.name] = e.target.value;
  }

  function handleVolume() {
    volumeIcon.classList.remove(
      "fa-volume-off",
      "fa-volume-down",
      "fa-volume-up"
    );
    if (video.volume > 0.5) {
      volumeIcon.classList.add("fa-volume-up");
    } else if (video.volume > 0) {
      volumeIcon.classList.add("fa-volume-down");
    } else {
      volumeIcon.classList.add("fa-volume-off");
    }
  }

  function handleRateChange() {
    rateValue.textContent = `${parseFloat(video.playbackRate).toFixed(2)}x`;
  }

  function updateProgress(e) {
    let seek = e.offsetX / progressBar.offsetWidth * video.duration;
    video.currentTime = seek;
  }

  function handleProgress() {
    let percent = video.currentTime / video.duration * 100;
    progressFilled.style.flexBasis = `${percent}%`;
  }

  // EventListeners
  video.addEventListener("click", playPauseMedia);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("volumechange", handleVolume);
  video.addEventListener("ratechange", handleRateChange);
  video.addEventListener("timeupdate", handleProgress);

  playPauseButton.addEventListener("click", playPauseMedia);

  progressBar.addEventListener("click", updateProgress);

  skipButtons.forEach(button => button.addEventListener("click", skipVideo));

  ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
})(window, document);
