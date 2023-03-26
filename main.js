const now = new Date()
const hour = now.getHours()

const morning = hour > 6 && hour < 12
const afternoon = hour >= 12 && hour < 18

const greetings = document.querySelector(".greetings")

if (morning) {
  greetings.innerHTML = "Good morning"
} else if (afternoon) {
  greetings.innerHTML = "Good afternoon"
} else {
  greetings.innerHTML = "Good evening"
}

const smallerCards = [
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

smallerCards.forEach(({ img, title }) => {
  const container = document.querySelector(".top-cards")

  container.innerHTML += `
  <div class="card">
    <img src="${img}">
    <p>${title}</p>
    <div class="play">
      <button aria-expanded="false"><svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" fill="black"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
    </div>
  </div>`
})

const biggerCards = [
  {
    theme: "rock",
    img: "https://seeded-session-images.scdn.co/v1/img/artist/711MCceyCBcFnzjGY4Q7Un/en",
    title: "AC/DC Radio",
    desc: "By Spotify",
  },
  {
    theme: "rock",
    img: "https://i.scdn.co/image/ab67706f00000002e6c10f6a0e0204b86ebebcff",
    title: "Highway to Yell",
    desc: "Hit the road and scream your heart out!",
  },
  {
    theme: "rock",
    img: "https://i.scdn.co/image/ab67706f000000029205ddd6990d57d56db91b81",
    title: "'80s Hard Rock",
    desc: "Hair goals, spandex and epic guitar solos. We got you.",
  },
  {
    theme: "rock",
    img: "https://i.scdn.co/image/ab67706f0000000231a41b33f89496ea5cbe0a69",
    title: "On Screen Guitar",
    desc: "Rock from movies and tv series.",
  },
]

biggerCards.forEach(({ theme, img, title, desc }) => {
  const moreLikeAcDcContainer = document.querySelector(".cards-container")

  if (theme == "rock") {
    moreLikeAcDcContainer.innerHTML += `
    <div class="bigger-card">
      <div class="card-content">
        <img src="${img}" alt="${title}">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
      <div class="play">
        <button aria-expanded="false"><svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" fill="black"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
      </div>
    </div>
    `
  }
})
