export default function createFigure(imgPath, title, pather) {
  const figureContainer = document.createElement("div")
  const figureImage = document.createElement("img")
  const figureParagraph = document.createElement("p")

  figureContainer.className = "figure"
  figureImage.src = imgPath
  figureParagraph.textContent = title

  figureContainer.append(figureImage)
  figureContainer.append(figureParagraph)

  pather.insertAdjacentElement("beforeend", figureContainer)
}
