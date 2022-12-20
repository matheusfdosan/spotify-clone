export default function createCard(imgPath, title, author) {
  return `<div class="card">
    <img src="${imgPath}">
    <h3 class="card-title">${title}</h3>
    <p class="card-author">${author}</p>
  </div>`
}
