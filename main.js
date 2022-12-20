import "./src/styles/root.css"
import "./src/styles/navbar.css"
import "./src/styles/header.css"
import "./src/styles/main.css"
import "./src/styles/music-player.css"

import greetings from "./src/components/greetings"

import createFigure from "./src/components/figures"
import FiguresInfo from "./src/components/figuresInfo"

import createCard from "./src/components/cards"
import CardsInfo from "./src/components/cardsInfo"

const greetingsContainer = document.querySelector(".morning-aftenoon-evening")
greetingsContainer.append(greetings())

const figureContainer = document.querySelector(".figures-container")

const allFigures =
  createFigure(FiguresInfo.figure1.imgPath, FiguresInfo.figure1.description) +
  createFigure(FiguresInfo.figure2.imgPath, FiguresInfo.figure2.description) +
  createFigure(FiguresInfo.figure3.imgPath, FiguresInfo.figure3.description) +
  createFigure(FiguresInfo.figure4.imgPath, FiguresInfo.figure4.description)

figureContainer.innerHTML = allFigures

const yourMusics = document.querySelector(".musics")

const allMusics = createCard(
  CardsInfo.card9.imgPath,
  CardsInfo.card9.title,
  CardsInfo.card9.author
) + createCard(
  CardsInfo.card10.imgPath,
  CardsInfo.card10.title,
  CardsInfo.card10.author
)

yourMusics.innerHTML = allMusics

const yourArtists = document.querySelector(".artists")

const allArtists = createCard(
  CardsInfo.card2.imgPath,
  CardsInfo.card2.title,
  CardsInfo.card2.author
) + createCard(
  CardsInfo.card6.imgPath,
  CardsInfo.card6.title,
  CardsInfo.card6.author
) + createCard(
  CardsInfo.card7.imgPath,
  CardsInfo.card7.title,
  CardsInfo.card7.author
) + createCard(
  CardsInfo.card8.imgPath,
  CardsInfo.card8.title,
  CardsInfo.card8.author
)

yourArtists.innerHTML = allArtists

const yourMixes = document.querySelector(".mixes")

const allMixes =
  createCard(
    CardsInfo.card3.imgPath,
    CardsInfo.card3.title,
    CardsInfo.card3.author
  ) +
  createCard(
    CardsInfo.card4.imgPath,
    CardsInfo.card4.title,
    CardsInfo.card4.author
  ) +
  createCard(
    CardsInfo.card5.imgPath,
    CardsInfo.card5.title,
    CardsInfo.card5.author
  )

yourMixes.innerHTML = allMixes
