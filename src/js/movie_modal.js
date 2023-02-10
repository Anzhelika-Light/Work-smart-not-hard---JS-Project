// import { watchTrailer } from '../trailer';
import { refs } from './refs';
import Notiflix from 'notiflix';
import { renderModal } from './render_modal';
import { onTrailerBtnClick } from './trailer';
import { all, AxiosHeaders } from 'axios';
import { fetchMovie } from './fetch_movie_details';
import TmdbAPI from './TMDB_API';

const { allCardsSection, modal, overflow, closeBtn, innerModal, body } = refs;

// const QUEUE_KEY = 'queue';
// const WATCHED_KEY = 'watched';

const queue = [];
const watched = [];

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

  addListeners();
}

function addListeners() {
  const watchedBtn = document.querySelector('.modal__btn-watched');
  const queueBtn = document.querySelector('.modal__btn-queue');
  const watchTrailerBtn = document.querySelector(
    '.movie-modal__btn-watch-trailer'
  );

  // const movie = {
  //   poster_path: movieInfo.poster_path,
  //   title: movieInfo.title,
  //   genre_ids: movieInfo.genre_ids,
  //   release_date: movieInfo.release_date,
  //   vote_average: movieInfo.vote_average,
  //   id: movieInfo.id,
  // };

  // console.log('movie', movie);

  watchedBtn.addEventListener('click', handleWatched);
  queueBtn.addEventListener('click', handleQueued);

  watchTrailerBtn.addEventListener('click', onTrailerBtnClick);
}

async function handleWatched(e) {
  const movieInfo = await TmdbAPI.fetchFilmByID(e.target.dataset.id);
  console.log('movieinfo', movieInfo);

  const movie = {
    poster_path: movieInfo.poster_path,
    title: movieInfo.title,
    genre_ids: movieInfo.genre_ids,
    release_date: movieInfo.release_date,
    vote_average: movieInfo.vote_average,
    id: movieInfo.id,
  };

  console.log('movie', movie);

  const isInWatched = watched.find(
    film => film[e.target.dataset.id] === movie.id
  );

  console.log(isInWatched);
  console.dir(e.target);

  if (e.target.innerText === 'ADD TO WATCHED') {
    if (!isInWatched) {
      watched.push(movie);
      localStorage.setItem('watched', JSON.stringify(watched));

      e.target.innerText = 'remove from watched';
      console.log(movie);
      console.log(watched);

      // e.target.addEventListener('click', removeFromWatched);
      // e.target.removeEventListener('click', addToWatched);
      Notiflix.Notify.success('Added to watched!');
    } else {
      watched = watched.filter(film => film[e.target.dataset.id] !== movie.id);
      localStorage.setItem('watched', JSON.stringify(watched));
      // e.target.removeEventListener('click', removeFromWatched);
      // e.target.addEventListener('click', addToWatched);
      Notiflix.Notify.success('Removed from watched!');
    }
  }
}

async function handleQueued(e) {
  const movieInfo = await fetchMovie(e.target.dataset.id);

  const movie = {
    poster_path: movieInfo.poster_path,
    title: movieInfo.title,
    genre_ids: movieInfo.genre_ids,
    release_date: movieInfo.release_date,
    vote_average: movieInfo.vote_average,
    id: movieInfo.id,
  };

  console.log('movie', movie);
  const isInQueued = watched.find(
    film => film[e.target.dataset.id] === movie.id
  );

  console.log(isInQueued);
  console.dir(e.target);

  if (e.target.innerText === 'ADD TO QUEUE') {
    if (!isInWatched) {
      queue.push(movie);
      localStorage.setItem('queue', JSON.stringify(queue));

      e.target.innerText = 'remove from queue';

      // e.target.addEventListener('click', removeFromWatched);
      // e.target.removeEventListener('click', addToWatched);
      Notiflix.Notify.success('Added to watched!');
    } else {
      watched = watched.filter(film => film[e.target.dataset.id] !== movie.id);
      localStorage.setItem('watched', JSON.stringify(watched));
      // e.target.removeEventListener('click', removeFromWatched);
      // e.target.addEventListener('click', addToWatched);
      Notiflix.Notify.success('Removed from watched!');
    }
  }
}

// function addToWatched(e) {
//   e.target.innerText = 'remove from watched';
//   const currentList = updateMoviesList();
//   const clickedFilm = currentList[e.target.dataset.id];
//   watched.push(clickedFilm);
//   localStorage.setItem('watched', JSON.stringify(watched));
//   e.target.addEventListener('click', removeFromWatched);
//   e.target.removeEventListener('click', addToWatched);
//   Notiflix.Notify.success('Added to watched!');
// }

// function removeFromWatched(e) {
//   e.target.innerText = 'add to watched';
//   const currentList = updateMoviesList();
//   const clickedFilm = currentList[e.target.dataset.id];
//   watched = watched.filter(film => film.id !== clickedFilm.id);
//   localStorage.setItem('watched', JSON.stringify(watched));
//   e.target.removeEventListener('click', removeFromWatched);
//   e.target.addEventListener('click', addToWatched);
//   Notiflix.Notify.success('Removed from watched!');
// }

// function addToQueue(e) {
//   e.target.innerText = 'remove from queue';
//   // const currentList = updateMoviesList();
//   const clickedFilm = currentList[e.target.dataset.id];
//   queue.push(clickedFilm);
//   localStorage.setItem('queue', JSON.stringify(queue));
//   e.target.addEventListener('click', removeFromQueue);
//   e.target.removeEventListener('click', addToQueue);
//   Notiflix.Notify.success('Added to queue!');
// }

// function removeFromQueue(e) {
//   e.target.innerText = 'add to queue';
//   const currentList = updateMoviesList();
//   const clickedFilm = currentList[e.target.dataset.id];
//   queue = queue.filter(film => film.id !== clickedFilm.id);
//   localStorage.setItem('queue', JSON.stringify(queue));
//   e.target.removeEventListener('click', removeFromQueue);
//   e.target.addEventListener('click', addToQueue);
//   Notiflix.Notify.success('Removed from queue!');
// }
