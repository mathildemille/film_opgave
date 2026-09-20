export function header() {
  const headerContainer = document.querySelector(".header-container")

  if (!headerContainer) {
    return
  }
  
  headerContainer.insertAdjacentHTML(
    "beforeend",
      `
    <header>
      <div class="logo">
        <a href="html.html"><img src="assets/bingebox_logo.png" alt="Binge box logo"></img></a>
      </div>

      <div class="header-nav"> 
        <nav>
          <a href="allMovies.html">Movies and shows</a>
          <a href="favorites.html">Favorites</a>
        </nav>
      </div>
    </header>
      `
  )
}