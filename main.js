const img = document.querySelector('img');
const button = document.getElementById('fetch');
const toSearch = document.getElementById('gif-search');

window.addEventListener('load', () => {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=M1PYUL5WucKjkUlOw4xGLaRAVjcF793Q&s=cats', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });
})

button.addEventListener('click', () => {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=M1PYUL5WucKjkUlOw4xGLaRAVjcF793Q&s=${toSearch.value}`, {mode: 'cors'})
  .then(function(response) {
    console.log(response.json);
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });
})
  
