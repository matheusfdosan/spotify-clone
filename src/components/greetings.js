/* Good Morning, Afternoon and Evening System */

export default function greetings() {
  const now = new Date()
  const currentHour = now.getHours()
  
  const noon = 12
  const sixInTheMorning = 6
  const sixInTheNight = 18

  const goodMorning = currentHour >= sixInTheMorning && currentHour < noon
  const goodAfternoon = currentHour >= noon && currentHour < sixInTheNight

  if (goodMorning) {
    return "Bom Dia"
  }

  if (goodAfternoon) {
    return "Boa Tarde"
  }

  return "Boa Noite"
}
