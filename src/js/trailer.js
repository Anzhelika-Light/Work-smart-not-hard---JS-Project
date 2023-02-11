import TmdbAPI from './TMDB_API';
import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';
import { spinnerStart, spinnerStop } from './loader';

const tmdbApi = new TmdbAPI();

function fetchMovieTrailers(movieId) {
  try {
    const response = tmdbApi.fetchTrailersByID(movieId);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function onTrailerBtnClick(e) {
  spinnerStart();
  const result = await fetchMovieTrailers(e.target.dataset.id);
  if (!result.data.results.length) {
    Notiflix.Notify('Trailer not found!');
  } else {
    spinnerStop();
    createVideoFrame(result.data.results[0].key);
  }
}

function createVideoFrame(key) {
  const instance = basicLightbox.create(
    `<div class="trailer-modal">
    <iframe
      class="trailer-modal__video"
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/${key}?autoplay=1"
      title="TITLE"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
</div>`,
    {
      onShow: instance => {
        document.addEventListener('keydown', onEscClose);
      },
    },
    {
      onClose: instance => {
        document.removeEventListener('keydown', onEscClose);
      },
    }
  );

  function onEscClose(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
  instance.show();
  modalClBtTrailer(instance);
}

function modalClBtTrailer(instance) {
  const modalBox = document.querySelector('.trailer-modal');
  modalBox.insertAdjacentHTML(
    'afterbegin',
    `<button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"           
        >
      </button>
    `
  );
  const modalCloseBtn = document.querySelector(
    '[data-action="close-lightbox"]'
  );
  modalCloseBtn.addEventListener('click', () => instance.close());
}
