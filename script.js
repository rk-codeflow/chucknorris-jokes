const joke = document.getElementById("joke");
const nextBtn = document.getElementById("next-btn");
const categorySelect = document.querySelector("select");

const category = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

let url = "https://api.chucknorris.io/jokes/random";

async function fetchJokes() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    joke.innerHTML = data.value;
  } catch (error) {
    console.log(error);
  }
}

function updateUrl(category) {
  url = `https://api.chucknorris.io/jokes/random?category=${category}`;
}

const handleCategoryChange = () => {
  const selectedCategory = categorySelect.value;
  updateUrl(selectedCategory);
  fetchJokes();
  console.log("category changed", category);
};

categorySelect.addEventListener("change", handleCategoryChange);
nextBtn.addEventListener("click", fetchJokes);
fetchJokes();
