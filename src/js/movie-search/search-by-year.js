import makeHMTLString from '../templates/film_gallery_template';
import { refs, tmdbAPI, scrollToTop, Notify } from './search-refs';
//find movies by year
refs.galleryEl.addEventListener('click', findMoviesByYear);

function findMoviesByYear(event) {
  //if not find-by-genre-js link - return
  if (![...event.target.classList].includes('find-by-year-js')) return;
  scrollToTop();
  let year = Number(event.target.innerText);

  tmdbAPI
    .fetchMoviesByYear(year)
    .then(response => {
      const { data } = response;
      if (data.total_results === 0) {
        Notify.failure('Search result not successful.');
      }
      //inserting images into gallery
      refs.galleryEl.innerHTML = makeHMTLString(data);
      console.log('findByYear', data);
    })
    .catch(error => {
      console.error(error);
      Notify.failure('No films with such year found!');
    });
}
