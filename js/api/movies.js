export async function fetchMovies() {
  try {
    const response = await fetch("../data/data.json")
    const posts = await response.json()
    return posts
  } catch (error) {
    console.error("Error fetching or parsing data:", error)
  }
}