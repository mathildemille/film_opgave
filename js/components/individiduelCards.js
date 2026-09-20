import { fetchMovies } from "../api/movies.js";

const data = await fetchMovies()

export function indCard() {
  const indCardContainer = document.querySelector(".individuel-container")



  if (!indCardContainer) {
    return
  }

  const search = location.search
  const movieID = new URLSearchParams(search).get("id")

  const movie = data.find((movie) => movie.id == movieID)

    if (!movie) {
        indCardContainer.innerHTML = "<p>Filmen blev ikke fundet</p>"
        return
    }
  
    indCardContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="movie-card">
          <img class="cards-img" src="${movie.image}" alt="${movie.title}">

          <div class="movie-info">
            <h2>${movie.title}</h2>
            <p><strong>Genre</strong><br>${movie.genre}</p>
            <p><strong>Description</strong><br> ${movie.description}</p>
            </div>
        </div>
      `
    )
}
