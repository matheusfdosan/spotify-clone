export default function createCard(imgPath, title, author, pather) {
  const card = document.createElement("div")
  const cardImg = document.createElement("img")
  const cardTitle = document.createElement("h3")
  const cardAuthor = document.createElement("p")

  card.className = "card"
  cardImg.src = imgPath
  cardTitle.textContent = title
  cardTitle.classList = "card-title"
  cardAuthor.textContent = author
  cardAuthor.classList = "card-author"

  card.append(cardImg)
  card.append(cardTitle)
  card.append(cardAuthor)

  pather.insertAdjacentElement("beforeend", card)
}
