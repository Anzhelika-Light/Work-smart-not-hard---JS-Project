import { fetchMovie } from './fetch_movie_details';

// const movieInfo = fetchMovie();
// console.log('movie info', movieInfo);

const addToQueueBtn = document.querySelector('.modal__btn-queue');
const addToWatchBtn = document.querySelector('.modal__btn-watched');

// addToWatchBtn.addEventListener('click', addToWatch);

async function addToWatch(e) {
  const filmId = e.target.dataset.id;
  const movie = await fetchMovie(filmId);

  console.log(movie);
}
