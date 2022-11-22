/* Good Morning, Afternoon and Evening System */

let now = new Date()
let currentHour = now.getHours()

console.log(currentHour);
function greetings(hour) {
  if (hour >= 6 && hour < 12) {
    return "Bom Dia"
  } else if (hour >= 12 && hour < 18) {
    return "Boa Tarde"
  } 
  
  return "Boa Noite"
}

const greetingsContainer = document.querySelector(".morning-aftenoon-evening")

greetingsContainer.innerHTML = greetings(currentHour)

