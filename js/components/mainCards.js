import { fetchMovies } from "../api/movies.js"

const data = await fetchMovies()

export function heroCards() {
  const heroCardsContainer = document.querySelector(".hero-cards-container")

  if (!heroCardsContainer) {
  return
}

  const recomendedCards = data.filter((p) =>
    p.id === 1 ||
    p.id === 2 ||
    p.id === 5
  )
  
  recomendedCards.forEach((p) => {
    heroCardsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="movie-card">
        <img class="cards-img" src="${p.image}" alt="${p.title}">
        
        <div class="movie-info">
          <h2>${p.title}</h2>
          <p><strong>Genre</strong><br>${p.genre}</p>
        </div>
      </div>
      `
    )
  })
}