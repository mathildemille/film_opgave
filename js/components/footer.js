export function footer() {
  const footerContainer = document.querySelector(".footer-container")

  if (!footerContainer){
    return
  }

  footerContainer.insertAdjacentHTML(
    "beforeend",
    `
      <footer>
      <a href="html.html"><img class="logo" src="assets/bingebox_logo.png" alt="Binge box logo"></a>
        <div class="footer-nav">
          <nav>
            <a href="html.html">Home</a>
            <a href="favorites.html">Favorites</a>
          </nav>
        </div>

        <div class="footer-info">
          <a href="">About us</a>
          <a href="">Contact</a>
          <a href="">Privacy Policy</a>
          </div>
          
          <p>© 2026 BingeBox</p>
      </footer>
    `
  )
}