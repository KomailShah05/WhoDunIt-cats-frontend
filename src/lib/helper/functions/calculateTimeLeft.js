function calculateTimeLeft(startDate) {
  const difference = +new Date(startDate * 1000) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      D: Math.floor(difference / (1000 * 60 * 60 * 24)),
      H: Math.floor((difference / (1000 * 60 * 60)) % 24),
      M: Math.floor((difference / 1000 / 60) % 60),
    };
  }

  return timeLeft;
}

export default calculateTimeLeft;
