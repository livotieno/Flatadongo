//fetches first movie data
function fetchDataForFirstMovie(){
  fetch("http://localhost:3000/films/1")
  .then(response => response.json())
  .then(FirstMovieData => {
displayFirstMovie(FirstMovieData)
  }

    )}
//fetching all movie data
function fetchDataForAllMovies(){
fetch("http://localhost:3000/films")
.then(response => response.json())
.then(AllMovies => {
  displayAllMovies(AllMovies)
})
}


function displayAllMovies(AllMovies){
  const ul = document.querySelector('#films')
  AllMovies.forEach(movie=> {
    console.log(movie.title);
    const li = document.createElement('li')
    li.innerHTML = `
    <h3>${movie.title}</h3>
    <img src = "${movie.poster}" alt="">
    <p>$</p>
    <em>Available Tickets:${movie.capacity - movie.tickets_sold} </em>
    `
    
    ul.appendChild(li)
    });
}

function displayFirstMovie (FirstMovieData){
  const h4 = document.createElement("h4")
  const body = document.querySelector("body");
}

document.addEventListener("DOMContentLoaded" , () =>{
  fetchDataForFirstMovie ();
  fetchDataForAllMovies ();
});

