import emptyPhoto from '../images/empty-photo/empty-poster.jpg';
import { fetchMovie } from './fetch_movie_details';
import getGenres from './trending-search-main/fetch-genres';
export async function renderModal(list, id, watched, queue) {
  const movieDetails = await fetchMovie(id);

  const {
    poster_path,
    original_title,
    title,
    genres,
    vote_average,
    vote_count,
    popularity,
    overview,
    id: film_id,
    homepage: homepageLink,
  } = movieDetails;

  console.log('homepageLink', homepageLink);

  const finalGenres = genres.map(genre => {
    return genre.name;
  });

  // для отримання даних про фільм додаю іх в data-атрибути
  const modalEl = document.querySelector('.movie-modal__main');
  modalEl.setAttribute('data-poster', poster_path);
  modalEl.setAttribute('data-title', title);
  modalEl.setAttribute('data-genres', finalGenres);
  modalEl.setAttribute('data-date', movieDetails.release_date);
  modalEl.setAttribute('data-votes', vote_average);
  modalEl.setAttribute('data-id', id);
  ///////////////////////////////////////////////////////////
  // також скоригувала наступні два рядки коду: отримання інфи, чи є даний фільм в бібліотеці,
  // для того, щоб відобразити правильний текст на кнопці
  const isInQueue = queue.some(film => film.id === id);
  const isInWatched = watched.some(film => film.id === id);

  //////////////////////////////////////////////////////////////
  // const isInQueue = foundInQueue;
  // const isInWatched = foundInWatched;
  const queueBtnMarkup = isInQueue
    ? `<button class="modal__btn-queue interactive-button" data-id=${id}>remove from queue</button>`
    : `<button class="modal__btn-queue interactive-button" data-id=${id}>add to queue</button>`;
  const watchedBtnMarkup = isInWatched
    ? `<button class="modal__btn-watched interactive-button" data-id=${id}>
        remove from Watched
      </button>`
    : `<button class="modal__btn-watched interactive-button" data-id=${id}>
        add to Watched
      </button>`;
  const voteCount =
    vote_count && vote_average
      ? `<li class="movie-modal__item">
          <div class="movie-modal__item-first">Vote/Votes</div>
          <div class="movie-modal__item-votes">
            <span class="movie-modal__item-bg movie-modal__item--accent">${vote_average.toFixed(
              1
            )}</span> /
            <span class="movie-modal__item-bg movie-modal__item--grey">${vote_count}</span>
          </div>
        </li>`
      : '';
  const popularityMarkup = popularity
    ? `<li class="movie-modal__item">
          <div class="movie-modal__item-first">Popularity</div>
          <div>${popularity.toFixed(1)}</div>
        </li>`
    : '';
  const genresMarkup = finalGenres.length
    ? `<li class="movie-modal__item">
          <div class="movie-modal__item-first">Genre</div>
          <div class="movie-modal__genres">${finalGenres.join(', ')}</div>
        </li>`
    : '';
  const originalTitleMarkup = original_title
    ? `<li class="movie-modal__item">
          <div class="movie-modal__item-first">Original Title</div>
          <div class="movie-modal__item-title">${original_title}</div>
        </li>`
    : '';
  const overviewMarkup = overview
    ? `<div class="movie-modal__about-info">
        <p class="movie-modal__about-headline">About</p>
        <p class="movie-modal__about-text">
          ${overview}
        </p>
      </div>`
    : '';
  const homepageBtn = homepageLink
    ? `<a href='${homepageLink}' class="homepage-link-button" target="_blank" ref="link to film' homepage">
        To movie homepage
      </a>`
    : '';
  const photoMarkup = poster_path
    ? `<div class="movie-modal__img">
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" class="movie-modal__img-poster"/>${homepageBtn}
    </div>`
    : `<div class="movie-modal__img">
      <img src="${emptyPhoto}" alt="photo coming soon" />${homepageBtn}
    </div>`;

  // console.log('homepageBtn', homepageBtn);
  //фукнція повертає рядок розмітки, а не масив (ті дані нерелевантні, і я їх прибрала)
  return `${photoMarkup}
    <div class="movie-modal__about">
      <h2 class="movie-modal__headline">${title}</h2>
      <ul class="movie-modal__list">
        ${voteCount}
        ${popularityMarkup}
        ${originalTitleMarkup}
        ${genresMarkup}
      </ul>
      ${overviewMarkup}
          <div class="movie-modal__buttons">
          <div class="movie-modal__add-btns">
          ${watchedBtnMarkup}
          ${queueBtnMarkup}
        </div>
      <button class='movie-modal_btn-watched interactive-button movie-modal__btn-watch-trailer' data-id=${film_id}>watch trailer</button>
    </div>
    </div>
    `;
}
