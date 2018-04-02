(function(window, document, undefined) {

  const hourHand = document.querySelector('.hand__hour');
  const minuteHand = document.querySelector('.hand__min');
  const secondHand = document.querySelector('.hand__sec');
  
  function setTime() {
    const now = new Date();

    // second hand
    const seconds = now.getSeconds();
    // secondsDegrees = (seconds / 60 * 360)
    const secondsDegrees = (seconds * 6) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // minute hand
    const minutes = now.getMinutes();
    // minutesDegrees = (minutes / 60 * 360) + (seconds / 60 * 6)
    const minutesDegrees = (minutes * 6) + (seconds / 10) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // hour hand
    const hours = now.getHours();
    // hoursDegrees -> hours * 360 / 12 + minutes * 30 / 60
    const hoursDegrees = (hours * 30) + (minutes / 2) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval(function() { setTime() }, 1000);

  setTime();
})(window, document);