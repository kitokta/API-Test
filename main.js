const img = document.querySelector("img");
const button = document.getElementById("fetch");
const toSearch = document.getElementById("gif-search");

window.addEventListener("load", () => {
 getImg("cats");
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  getImg(toSearch.value);
  
});

async function getImg(keyword) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=M1PYUL5WucKjkUlOw4xGLaRAVjcF793Q&s=${keyword}`,
    { mode: "cors" }
  );

  response.json().then(function(response) {
    img.src = response.data.images.original.url;
  })
  
}