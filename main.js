const img = document.querySelector("img");
const button = document.getElementById("fetch");
const toSearch = document.getElementById("gif-search");

window.addEventListener("load", () => {
 getImg("cats");
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const spinner = document.getElementById('spinner');
  spinner.style.visibility = 'visible';
  getImg(toSearch.value)
  .then(() => {spinner.style.visibility = 'hidden';})
  
});

async function getImg(keyword) {
  try {
    img.src = '';
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=M1PYUL5WucKjkUlOw4xGLaRAVjcF793Q&s=${keyword}`,
      { mode: "cors" }
    );
      
    
      const imgData = await response.json();
      img.src = imgData.data.images.original.url;
      
        
  }

  catch {
    button.style.visibility = 'hidden';
    button.style.pointerEvents = 'none';
    img.src = '';
    const err = document.createElement('h1');
    err.textContent = 'Não foi possível encontrar uma imagem...';
    err.style.marginTop = '300px';
    err.style.position = 'absolute';
    err.style.color = 'red';
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(err);
    setTimeout(() => {
      body.removeChild(err);
      button.style.visibility = 'visible';
      button.style.pointerEvents = 'all';
    }, 700)

    setTimeout(() => {getImg("cats") = await}, 700);
  }
  
  
}