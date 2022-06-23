dayEl = document.querySelector("#currentDay");
currentDay = moment().format('LLLL');
dayEl.textContent = currentDay;