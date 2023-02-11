// import { watchTrailer } from '../trailer';
import { refs } from './refs';
import Notiflix from 'notiflix';
import { renderModal } from './render_modal';
import { onTrailerBtnClick } from './trailer';
import { all, AxiosHeaders } from 'axios';
import { fetchMovie } from './fetch_movie_details';
import TmdbAPI from './TMDB_API';

const { allCardsSection, modal, overflow, closeBtn, innerModal, body } = refs;

// Наступні два рядки - додавання даних в об'єкти з local storage для коректного відображення кнопок і роботи
let queue = JSON.parse(localStorage.getItem('movieQueue')) || [];
let watched = JSON.parse(localStorage.getItem('movieWatched')) || [];

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

    // Далі в цій функціїї навісила обробників подій.
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
  innerModal.innerHTML = rendered;
}

// Далі і до кінця йдуть два обробники: watched i queue, які самі вирішують, додавати чи видаляти в результаті перевірки
async function handleWatched(e) {
  const modalEl = document.querySelector('.movie-modal__main');
  console.log('modalEl', modalEl.dataset);

  const movie = {
    poster_path: modalEl.dataset.poster,
    title: modalEl.dataset.title,
    genre_ids: modalEl.dataset.genres,
    release_date: modalEl.dataset.date,
    vote_average: modalEl.dataset.votes,
    id: modalEl.dataset.id,
  };

  console.log('movie', movie);

  const isInWatched = watched.some(film => film.id === movie.id);

  console.log('inInWatched', isInWatched);
  console.dir(e.target);

  if (e.target.innerText === 'ADD TO WATCHED') {
    if (!isInWatched) {
      watched.push(movie);
      localStorage.setItem('movieWatched', JSON.stringify(watched));

      e.target.innerText = 'Remove from watched';
      console.log('movie', movie);
      console.log('watched', watched);
      const saved = JSON.parse(localStorage.getItem('movieWatched'));
      console.log('saved', saved);

      // e.target.addEventListener('click', removeFromWatched);
      // e.target.removeEventListener('click', addToWatched);
      Notiflix.Notify.success('Added to watched!');
    }
  } else if (e.target.innerText === 'REMOVE FROM WATCHED') {
    watched = watched.filter(film => film.id !== movie.id);
    localStorage.removeItem('movieWatched', JSON.stringify(watched));
    e.target.innerText = 'Add to watched';
    // e.target.removeEventListener('click', removeFromWatched);
    // e.target.addEventListener('click', addToWatched);
    Notiflix.Notify.success('Removed from watched!');
  }
}

async function handleQueued(e) {
  const modalEl = document.querySelector('.movie-modal__main');
  console.log('modalEl', modalEl.dataset);

  const movie = {
    poster_path: modalEl.dataset.poster,
    title: modalEl.dataset.title,
    genre_ids: modalEl.dataset.genres,
    release_date: modalEl.dataset.date,
    vote_average: modalEl.dataset.votes,
    id: modalEl.dataset.id,
  };

  console.log('movie', movie);
  const isInQueued = queue.some(film => film.id === movie.id);

  console.log(isInQueued);
  console.dir(e.target);

  if (e.target.innerText === 'ADD TO QUEUE') {
    if (!isInQueued) {
      queue.push(movie);
      localStorage.setItem('movieQueue', JSON.stringify(queue));

      e.target.innerText = 'Remove from queue';

      // e.target.addEventListener('click', removeFromWatched);
      // e.target.removeEventListener('click', addToWatched);
      Notiflix.Notify.success('Added to queue!');
    }
  } else if (e.target.innerText === 'REMOVE FROM QUEUE') {
    queue = queue.filter(film => film.id !== movie.id);
    localStorage.removeItem('movieQueue', JSON.stringify(watched));

    e.target.innerText = 'Add to queue';
    // e.target.removeEventListener('click', removeFromWatched);
    // e.target.addEventListener('click', addToWatched);
    Notiflix.Notify.success('Removed from queue!');
  }
}
