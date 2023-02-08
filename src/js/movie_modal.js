import TmdbAPI from '../scripts/TMDB_API';
import renderModal from './render_modal';
const tmdbAPI = new TmdbAPI();

const movieModalEl = document.querySelector('.modal');
const galleryEl = document.querySelector('.trending-gallery__item');

function fetchFilmsByID(id) {
  tmdbAPI.fetchFilmsByID(id).then(console.log);
}

function createMovieDetails(movieInfo) {
  const movieDetails = movieInfo.map(el => {
    return `
    <div>
      <img>
    <div/>
    <div>
      <h2>Hello<h2/>
      <p><p/>
      <p><p/>
      <p><p/>
      <p><p/>
      <h3><h3/>
      <p><p/>
      <div>
        <button><button/>
        <button><button/>
      <div/>
    <div/>
    `;
  });

  return movieDetails.join('');
}

async function onMovieClick(e) {
  e.preventDefault();
  // TmdbAPI.query = e.target.elements.searchQuery.value.trim();
  TmdbAPI.page = 1;
  console.log(e.target);
  fetchFilmsByID(e.target.dataset.id);
  // if (e.target.nodeName !== '.link')
  //   try {
  //     const data = await TmdbAPI.fetchFilmsByQuery();
  //     console.log(data);

  //     // movieModalEl.innerHTML = createMovieDetails(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
}

galleryEl.addEventListener('click', renderModal);
