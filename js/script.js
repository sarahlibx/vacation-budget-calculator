const tripInfoButton = document.querySelector(".trip-info");
const dailyBudget = document.querySelector(".daily-budget");

const tripInfo = function () {
  const totalBudget = Number(prompt("What is your total budget?"));
  const accomodations = Number(prompt("What are your accomodation costs?"));
  const numDays = Number(prompt("How many days does your trip last?"));

  calculateDailyBudget(totalBudget, accomodations, numDays);
};

const calculateDailyBudget = function (totalBudget, accomodations, numDays) {
  var daily = ((totalBudget - accomodations) / numDays).toFixed(2);

  dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

tripInfoButton.addEventListener("click", tripInfo);
