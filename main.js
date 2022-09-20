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
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=M1PYUL5WucKjkUlOw4xGLaRAVjcF793Q&s=${keyword}`,
      { mode: "cors" }
    );
      const imgData = await response.json();
      img.src = imgData.data.images.original.url;  
  }

  catch {
    img.src = '';
    const err = document.createElement('h1');
    err.textContent = 'Não foi possível encontrar uma imagem...';
    err.style.marginTop = '300px';
    err.style.position = 'absolute';
    err.style.color = 'red';
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(err);
    setTimeout(() => {body.removeChild(err)}, 1000)
  }
  
  
}