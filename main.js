import "./src/styles/root.css"
import "./src/styles/navbar.css"
import "./src/styles/header.css"
import "./src/styles/main.css"
import "./src/styles/music-player.css"
import "./src/styles/footer.css"

import greetings from "./src/components/greetings"

import createFigure from "./src/components/figures"
import FiguresInfo from "./src/components/figuresInfo"

import createCard from "./src/components/cards"
import CardsInfo from "./src/components/cardsInfo"

const greetingsContainer = document.querySelector(".morning-aftenoon-evening")
greetingsContainer.append(greetings())

const figureContainer = document.querySelector(".figures-container")

createFigure(
  FiguresInfo.figure1.imgPath,
  FiguresInfo.figure1.description,
  figureContainer
)
createFigure(
  FiguresInfo.figure2.imgPath,
  FiguresInfo.figure2.description,
  figureContainer
)
createFigure(
  FiguresInfo.figure3.imgPath,
  FiguresInfo.figure3.description,
  figureContainer
)
createFigure(
  FiguresInfo.figure4.imgPath,
  FiguresInfo.figure4.description,
  figureContainer
)

const yourMusics = document.querySelector(".musics")

createCard(
  CardsInfo.card1.imgPath,
  CardsInfo.card1.title,
  CardsInfo.card1.author,
  yourMusics
)
createCard(
  CardsInfo.card1.imgPath,
  CardsInfo.card1.title,
  CardsInfo.card1.author,
  yourMusics
)
createCard(
  CardsInfo.card1.imgPath,
  CardsInfo.card1.title,
  CardsInfo.card1.author,
  yourMusics
)
createCard(
  CardsInfo.card1.imgPath,
  CardsInfo.card1.title,
  CardsInfo.card1.author,
  yourMusics
)

const yourArtists = document.querySelector(".artists")

createCard(
  CardsInfo.card2.imgPath,
  CardsInfo.card2.title,
  CardsInfo.card2.author,
  yourArtists
)
createCard(
  CardsInfo.card2.imgPath,
  CardsInfo.card2.title,
  CardsInfo.card2.author,
  yourArtists
)
createCard(
  CardsInfo.card2.imgPath,
  CardsInfo.card2.title,
  CardsInfo.card2.author,
  yourArtists
)
createCard(
  CardsInfo.card2.imgPath,
  CardsInfo.card2.title,
  CardsInfo.card2.author,
  yourArtists
)
createCard(
  CardsInfo.card2.imgPath,
  CardsInfo.card2.title,
  CardsInfo.card2.author,
  yourArtists
)
createCard(
  CardsInfo.card2.imgPath,
  CardsInfo.card2.title,
  CardsInfo.card2.author,
  yourArtists
)
createCard(
  CardsInfo.card2.imgPath,
  CardsInfo.card2.title,
  CardsInfo.card2.author,
  yourArtists
)
