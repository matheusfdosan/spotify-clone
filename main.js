const now = new Date()
const hour = now.getHours()

const morning = hour > 6 && hour < 12
const afternoon = hour > 12 && hour < 18

const greetings = document.querySelector(".greetings")

if (morning) {
  greetings.innerHTML = "Good morning"
} else if (afternoon) {
  greetings.innerHTML = "Good afternoon"
} else {
  greetings.innerHTML = "Good evening"
}

const allCardsTop = [
  {
    img: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO49hLQA-default.jpg",
    title: "This Is AC/DC",
  },
  {
    img: "https://i.scdn.co/image/ab67706f00000002abaf6c3c6a4b29f8a4565a86",
    title: "Lofi Beats",
  },
  {
    img: "https://i.scdn.co/image/ab67656300005f1ff98403d2282f57df937c5fb5",
    title: "NerdCast",
  },
  {
    img: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0ENBD2-default.jpg",
    title: "This Is Queen",
  },
  {
    img: "https://i.scdn.co/image/ab67706f00000002dcc7a422002b9423dd021e85",
    title: "This Is Alok",
  },
  {
    img: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO00jzcA-default.jpg",
    title: "This Is KISS",
  },
]

allCardsTop.forEach(({ img, title }) => {
  const container = document.querySelector(".top-cards")

  container.innerHTML += `
  <div class="card">
    <img src="${img}">
    <p>${title}</p>
    <div class="play">
      <button aria-expanded="false"><svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" fill="black"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
    </div>
  </div>
`
})
