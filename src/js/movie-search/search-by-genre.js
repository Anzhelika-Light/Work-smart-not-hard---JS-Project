import { makeHMTLStringWithGenre } from '../templates/film_gallery_template';
import { refs, tmdbAPI, TmdbAPI, scrollToTop, Notify } from './search-refs';
//find movies by genre
refs.galleryEl.addEventListener('click', findMoviesByGenre);

function findMoviesByGenre(event) {
  //if not find-by-genre-js link - return
  if (![...event.target.classList].includes('find-by-genre-js')) return;
  let genre = event.target.innerText.trim();
  console.dir(event.target);
  if (genre[genre.length - 1] === ',') {
    genre = genre.slice(0, -1);
  }
  console.log('searched genre: ', genre);
  scrollToTop();
  tmdbAPI
    .fetchMoviesByGenre(`${TmdbAPI.genreIDs[genre.toLowerCase()]}`)
    .then(response => {
      const { data } = response;
      //console.log('search-by-genre', data);
      if (data.total_results === 0) {
        Notify.failure('Search result not successful.');
      }
      //inserting images into gallery
      refs.galleryEl.innerHTML = makeHMTLStringWithGenre(data, genre);
    })
    .catch(error => {
      console.error(error);
      Notify.failure('No films with such genre found!');
    });
}
