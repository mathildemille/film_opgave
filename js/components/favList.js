let favArray = JSON.parse(localStorage.getItem("FavList")) || []

const favListContainer = document.querySelector(".fav-list-container")

export function favList() {
    if (!favListContainer) {
        return
    }

    favListContainer.innerHTML = ""

    favArray.forEach((p) => {
        favListContainer.insertAdjacentHTML(
            "beforeend",
            `
            <div class="movie-card">
                <img class="cards-img" src="${p.image}" alt="${p.title}">

                <div class="movie-info">
                    <h2>${p.title}</h2>
                    <p><strong>Genre</strong><br>${p.genre}</p>

                    <a href="individuel.html?id=${p.id}"><button>Få mere at vide</button></a>

                    <br>

                    <button class="remove-from-fav" id="${p.id}">♡</button>
                </div>
            </div>
            `
        )
    })

    const removeButtons = document.querySelectorAll(".remove-from-fav")

    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const movieID = Number(button.id)

            favArray = favArray.filter((p) => p.id !== movieID)

            localStorage.setItem("FavList", JSON.stringify(favArray))

            favList()
        })
    })
}