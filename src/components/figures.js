export default function createFigure(imgPath, title) {
  return `
    <div class="figure">
      <img src="${imgPath}">
      <p>${title}</p>
    </div>
  `
}
