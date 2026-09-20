import { fetchMovies } from "../api/movies.js"

const data = await fetchMovies()

export function allCards() {
    const allCardsContainer = document.querySelector(".all-cards-container")

    if (!allCardsContainer) {
        return
    }

    data.forEach((p) => {
        allCardsContainer.insertAdjacentHTML(
            "beforeend",
            `
            <div class="movie-card">
                <img class="cards-img" src="${p.image}" alt="${p.title}">

                <div class="movie-info">
                    <h2>${p.title}</h2>
                    <p><strong>Genre</strong><br>${p.genre}</p>

                    <a href="individuel.html?id=${p.id}"><button>Få mere at vide</button></a>

                    <br>

                    <button class="add-to-fav" id="${p.id}">♡</button>
                </div>
            </div>
            `
        )
    })

    const addToFavButtons = document.querySelectorAll(".add-to-fav")

    addToFavButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const movieID = Number(button.id)

            const movieToAdd = data.find((p) => p.id === movieID)

            if (!movieToAdd) {
                console.log("Filmen blev ikke fundet")
                return
            }

            let favArray = JSON.parse(localStorage.getItem("FavList")) || []

            favArray = favArray.filter((p) => p !== null)

            const exist = favArray.find((p) => p.id === movieID)

            if (exist) {
                return
            }

            favArray.push(movieToAdd)

            localStorage.setItem("FavList", JSON.stringify(favArray))

            console.log("Favoritter:", favArray)
        })
    })
}




