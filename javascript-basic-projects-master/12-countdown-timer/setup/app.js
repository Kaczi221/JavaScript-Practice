const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


const currentDate = new Date();

const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate()
const currentHour = currentDate.getHours();
const currentMin = currentDate.getMinutes();

const futureDate = new Date(currentYear, currentMonth, currentDay + 10, 16, 25);

const futureYear = futureDate.getFullYear();
const futureMonth = futureDate.getMonth();
const futureDay = futureDate.getDate();
const futureHour = futureDate.getHours();
const FutureMin = futureDate.getMinutes();




giveaway.textContent = `Giveaway ends on ${futureYear}, ${months[futureMonth]}, 0${futureHour}:${FutureMin}`;
function getTime() {


  const currentT = new Date().getTime();
  const futureT = futureDate.getTime();
  const t = futureT - currentT;

  // 1s = 1000ms
  // 1min = 60s
  // 1hour = 60min
  // 1day = 24hours

  let day = 24 * 60 * 60 * 1000;
  let hour = 60 * 60 * 1000;
  let min = 60 * 1000;

  let days = Math.floor(t / day);
  let hours = Math.floor(t%day / hour);
  let minutes = Math.floor(t%hour / min);
  let seconds = Math.floor(t%min / 1000);

  const values = [days, hours, minutes, seconds];
  function format(item){
    if(item < 10){
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  })
  if(t < 0){
    clearInterval(countdown);
    return (deadline.innerHTML = `<h4 class="expired">Giveaway has expired</h4>`);
  }
}
let countdown = setInterval(getTime, 1000);
getTime();