document.addEventListener('DOMContentLoaded', function(e) {
  const secondHand = document.querySelector('.sec-hand');
  const minutesHand = document.querySelector('.min-hand');
  const houresHand = document.querySelector('.hour-hand');
  let degrees = 0;

  function setDate() {
    const now = new Date();

    // animate sceonds hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (secondsDegrees > 444 || secondsDegrees < 93) { //prevent hand jump
      secondHand.classList.remove('transition');
    } else if (!secondHand.classList.contains('transition')) {
      secondHand.classList.add('transition');
    }
    secondHand.style.webkitTransform = `rotate(${secondsDegrees}deg)`;

    // animate minutes hand
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    if (minutesDegrees > 444 || minutesDegrees < 93) { //prevent hand jump
      minutesHand.classList.remove('transition');
    } else if (!minutesHand.classList.contains('transition')) {
      minutesHand.classList.add('transition');
    }
    minutesHand.style.webkitTransform = `rotate(${minutesDegrees}deg)`;

    // animate houres hand
    const houres = now.getHours();
    const houresDegrees = ((houres / 12) * 360) + 90;
    if (houresDegrees > 420 || houresDegrees < 120) { // prevent hand jump
      houresHand.classList.remove('transition');
    } else if (!houresHand.classList.contains('transition')) {
      houresHand.classList.add('transition');
    }
    houresHand.style.webkitTransform = `rotate(${houresDegrees}deg)`;
  }
  setInterval(setDate, 1000);
})
