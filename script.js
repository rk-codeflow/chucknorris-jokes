const joke = document.getElementById("joke");
const nextBtn = document.getElementById("next-btn");

async function fetchJokes() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log(data);
    joke.innerHTML = data.value;
  } catch (error) {
    console.log(error);
  }
}

nextBtn.addEventListener("click", fetchJokes);
fetchJokes();
