// import { watchTrailer } from '../trailer';
import { refs } from './refs';
import Notiflix from 'notiflix';
import { renderModal } from './render_modal';
import { onTrailerBtnClick } from './trailer';
import { all, AxiosHeaders } from 'axios';
import { fetchMovie } from './fetch_movie_details';
import TmdbAPI from './TMDB_API';

const { allCardsSection, modal, overflow, closeBtn, innerModal, body } = refs;

let queue = [];
let watched = [];

// const queueJSON = localStorage.getItem('queue');
// const watchedJSON = localStorage.getItem('watched');
// let queue = JSON.parse(queueJSON) || [];
// let watched = JSON.parse(watchedJSON) || [];

allCardsSection.addEventListener('click', showModal);

function updateMoviesList() {
  const allMoviesListFromStorage = localStorage.getItem('currentFilmList');
  const allMoviesList = JSON.parse(allMoviesListFromStorage);
  return allMoviesList;
}

export async function showModal(e) {
  if (e.currentTarget !== e.target) {
    modal.classList.remove('hidden-movie-modal');
    overflow.classList.remove('hidden-movie-modal');

    allCardsSection.removeEventListener('click', showModal);
    document.addEventListener('keydown', closeModalOnEsc);
    closeBtn.addEventListener('click', closeModal);
    overflow.addEventListener('click', closeModalOverflow);

    const id =
      e.target.nodeName === 'LI'
        ? e.target.dataset.id
        : e.target.closest('li').dataset.id;
    await createModal(id);

    const top = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${top}px`;

    const watchedBtn = document.querySelector('.modal__btn-watched');
    const queueBtn = document.querySelector('.modal__btn-queue');
    const watchTrailerBtn = document.querySelector(
      '.movie-modal__btn-watch-trailer'
    );

    watchedBtn.addEventListener('click', handleWatched);
    queueBtn.addEventListener('click', handleQueued);

    watchTrailerBtn.addEventListener('click', onTrailerBtnClick);
  }
}

function closeModalOverflow(e) {
  if (e.currentTarget === e.target) closeModal();
}

function closeModalOnEsc(e) {
  if (e.code === 'Escape') closeModal();
}

function closeModal() {
  modal.classList.add('hidden-movie-modal');
  overflow.classList.add('hidden-movie-modal');

  allCardsSection.addEventListener('click', showModal);

  document.removeEventListener('keydown', closeModal);
  closeBtn.removeEventListener('click', closeModal);
  overflow.removeEventListener('click', closeModalOverflow);

  const top = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(top || '0') * -1);
}

async function createModal(id) {
  const currentList = updateMoviesList();
  const rendered = await renderModal(currentList, id, watched, queue);

  console.log('rendered info', rendered);
  innerModal.innerHTML = rendered[0];
}
async function handleWatched(e) {
  const modalEl = document.querySelector('.movie-modal__main');
  console.log('modalEl', modalEl.dataset);

  const movie = {
    poster_path: modalEl.dataset.poster,
    title: modalEl.dataset.title,
    genre_ids: modalEl.dataset.genre,
    release_date: modalEl.dataset.date,
    vote_average: modalEl.dataset.vote,
    id: modalEl.dataset.id,
  };

  console.log('movie', movie);

  const isInWatched = watched.some(film => film.id === movie.id);

  console.log('inInWatched', isInWatched);
  console.dir(e.target);

  if (e.target.innerText === 'ADD TO WATCHED') {
    if (!isInWatched) {
      watched.push(movie);
      localStorage.setItem('watched', JSON.stringify(watched));

      e.target.innerText = 'remove from watched';
      console.log('movie', movie);
      console.log('watched', watched);
      const saved = JSON.parse(localStorage.getItem('watched'));
      console.log('saved', saved);

      // e.target.addEventListener('click', removeFromWatched);
      // e.target.removeEventListener('click', addToWatched);
      Notiflix.Notify.success('Added to watched!');
    } else {
      watched = watched.filter(film => film[e.target.dataset.id] !== movie.id);
      localStorage.removeItem('watched', JSON.stringify(watched));
      // e.target.removeEventListener('click', removeFromWatched);
      // e.target.addEventListener('click', addToWatched);
      Notiflix.Notify.success('Removed from watched!');
    }
  }
}

async function handleQueued(e) {
  const modalEl = document.querySelector('.movie-modal__main');
  console.log('modalEl', modalEl.dataset);

  const movie = {
    poster_path: modalEl.dataset.poster,
    title: modalEl.dataset.title,
    genre_ids: modalEl.dataset.genre,
    release_date: modalEl.dataset.date,
    vote_average: modalEl.dataset.vote,
    id: modalEl.dataset.id,
  };

  console.log('movie', movie);
  const isInQueued = queue.some(film => film.id === movie.id);

  console.log(isInQueued);
  console.dir(e.target);

  if (e.target.innerText === 'ADD TO QUEUE') {
    if (!isInQueued) {
      queue.push(movie);
      localStorage.setItem('queue', JSON.stringify(queue));

      e.target.innerText = 'remove from queue';

      // e.target.addEventListener('click', removeFromWatched);
      // e.target.removeEventListener('click', addToWatched);
      Notiflix.Notify.success('Added to queue!');
    } else {
      queue = queue.filter(film => film[e.target.dataset.id] !== movie.id);
      localStorage.removeItem('queue', JSON.stringify(watched));
      // e.target.removeEventListener('click', removeFromWatched);
      // e.target.addEventListener('click', addToWatched);
      Notiflix.Notify.success('Removed from queue!');
    }
  }
}
