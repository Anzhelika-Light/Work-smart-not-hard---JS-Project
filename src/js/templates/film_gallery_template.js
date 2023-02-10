import TmdbAPI from '../TMDB_API';

//converts string with genre names to HTML string with tags
function getGenresHTMLString(str) {
  if (!str || str === '') {
    return `<a class='find-by-genre-js'>Other</a>`;
  }
  // console.log('genres-str: ', str);
  return str
    .split(',')
    .map(el => {
      return `<a class='find-by-genre-js trending-gallery__genre-name'>${el}</a>`;
    })
    .join(', ');
}

function addAdaptiveImgHTMLString(result) {
  return `
	<picture>
		<source srcset="${TmdbAPI.IMG_BASE_URL}/w185${result.poster_path} 185w, ${TmdbAPI.IMG_BASE_URL}/w342${result.poster_path} 342w, ${TmdbAPI.IMG_BASE_URL}/w500${result.poster_path} 500w" media="(max-width: 767px)" sizes="280px">
		<source srcset="${TmdbAPI.IMG_BASE_URL}/w342${result.poster_path} 342w, ${TmdbAPI.IMG_BASE_URL}/w500${result.poster_path} 500w" media="(min-width: 768px)" sizes="336px">
		<source srcset="${TmdbAPI.IMG_BASE_URL}/w500${result.poster_path} 500w, ${TmdbAPI.IMG_BASE_URL}/w780${result.poster_path} 780w" media="(min-width: 1280px)" sizes="395px">

  	<img src="${TmdbAPI.IMG_BASE_URL}/original${result.poster_path}" alt="The poster of ${result.title} film" class="trending-gallery__image" loading="lazy"/>
	</picture>`;
}

export default function makeHMTLString({ results }) {
  // console.log('це прийшло в функцію MAKEHTMLstring', results);
  return results
    .map(result => {
      //checking release date: if none - return 'No info', else return year
      if (!result.release_date || result.release_date === '') {
        result.release_date = 'No info';
      } else {
        result.release_date = result.release_date.slice(0, 4);
      }
      return `
	<li class='trending-gallery__item' data-id="${result.id}">
    ${addAdaptiveImgHTMLString(result)}
    <div class="trending-gallery__wrapper">
    	<h3 class='trending-gallery__title'>${result.title}</h3>
    	<p class='trending-gallery__info'>${getGenresHTMLString(
        TmdbAPI.getGenresString(result.genre_ids)
      )} | <span class='find-by-year-js'>${result.release_date}</span></p>
    </div>
  </li>
	`;
    })
    .join('');
}

export function makeHMTLStringWithGenre({ results }, genre) {
  return results
    .map(result => {
      //checking release date: if none - return 'No info', else return year
      if (!result.release_date || result.release_date === '') {
        result.release_date = 'No info';
      } else {
        result.release_date = result.release_date.slice(0, 4);
      }

      return `
	<li class='trending-gallery__item'  data-id="${result.id}">
    ${addAdaptiveImgHTMLString(result)}
    <div class="trending-gallery__wrapper">
    	<h3 class='trending-gallery__title'>${result.title}</h3>
    	<p class='trending-gallery__info'>${getGenresHTMLString(
        TmdbAPI.getGenresStringWithSearchedGenre(result.genre_ids, genre)
      )} | <span class='find-by-year-js'>${result.release_date.slice(
        0,
        4
      )}</span></p>
    </div>
  </li>
	`;
    })
    .join('');
}

// <img src="${TmdbAPI.IMG_BASE_URL}${
//         result.poster_path
//       }" alt="The poster of ${
//         result.title
//       } film" class="trending-gallery__image" loading="lazy"/>
