import makeHMTLString from '../templates/film_gallery_template';
import {
  refs,
  tmdbAPI,
  TmdbAPI,
  scrollToTop,
  emptyStingRegEx,
  Notify,
} from './search-refs';

let areOptionsGenerated = false;

refs.searchForm.addEventListener('click', showAdvancedSearch);
refs.searchForm.addEventListener('click', hideAdvancedSearch);
refs.advancedSearchEl.addEventListener('submit', onAdvancedSearchElSubmit);

function showAdvancedSearch(event) {
  // console.dir(event.target);/
  if (!event.target.classList.value.includes('show-advanced-search-js')) return;
  toggleAdvancedSearch();
  if (areOptionsGenerated) return;
  generateSelectOptions(refs.advancedSearchEl);
}

function hideAdvancedSearch(event) {
  if (!event.target.classList.value.includes('hide-advanced-search-js')) return;
  toggleAdvancedSearch();
}

function toggleAdvancedSearch() {
  refs.advancedSearchEl.classList.toggle('visually-hidden');
  refs.showAdvancedSearchEl.parentNode.classList.toggle('visually-hidden');
  refs.hideAdvancedSearchEl.parentNode.classList.toggle('visually-hidden');
}

function generateSelectOptions(form) {
  // console.log(Object.values(TmdbAPI.genres));
  const genreOptionsHtmlStr = Object.values(TmdbAPI.genres)
    .map(
      genre =>
        `<option value="${genre}" class="advanced-search__option">${genre}</option>`
    )
    .join('');
  //forming select genre select HTML
  const selectGenreHtmlStr = `
		<select name="genre" id="" class="advanced-search__genre advanced-search__select">
			<option value="" class="advanced-search__option--main">Choose genre to find</option>
			${genreOptionsHtmlStr}
		</select>`;
  //forming exlude genre select HTML
  const excludeGenreHtmlStr = `
		<select name="excludeGenre" id=""
			class="advanced-search__exlude-genre advanced-search__select">
			<option value="" class="advanced-search__option--main">Choose genre to exlude</option>
			${genreOptionsHtmlStr}
		</select>`;
  //forming sort parameters select HTML
  const sortParamsStr = `
		<select name="sortParams" id="" 		class="advanced-search__sort-buy advanced-search__select">
			<option value="" class="advanced-search__option--main">Choose sorting parameter</option>
			${Object.keys(TmdbAPI.sort_by_types)
        .map(
          typeKey =>
            `<option value="${typeKey}" class="advanced-search__option">${TmdbAPI.sort_by_types[typeKey]}</option>`
        )
        .join('')}
		</select>`;
  form.insertAdjacentHTML(
    'afterbegin',
    selectGenreHtmlStr + excludeGenreHtmlStr + sortParamsStr
  );
  areOptionsGenerated = true;
}

function makeAdvancedSearch(optionsObj) {
  // console.log('search advanced');
  tmdbAPI
    .fetchAdvancedMovieSearch(optionsObj)
    .then(response => {
      // console.log('adv-resp', makeHMTLString(response.data));
      refs.galleryEl.innerHTML = makeHMTLString(response.data);
    })
    .catch(console.error);
}

//callback function for event listener on button submit - when the advanced search form is submitted
function onAdvancedSearchElSubmit(event) {
  event.preventDefault();

  //forming advanced search object
  const optionsObj = {
    with_genres: TmdbAPI.genreIDs[refs.advancedSearchEl.genre.value],
    without_genres: TmdbAPI.genreIDs[refs.advancedSearchEl.excludeGenre.value],
    sort_by: TmdbAPI.sort_by_types[refs.advancedSearchEl.sortParams.value],
    with_watch_monetization_types:
      TmdbAPI.watch_monetization_types[
        refs.advancedSearchEl.monetization.value
      ],
  };

  console.log('searchObj', optionsObj);

  //check if nothing chosen
  if (!isOptionsObjHasValues(optionsObj)) {
    Notify.failure('Choose some parameters!');
    return;
  }

  //checking search year input
  let searchYear = refs.advancedSearchEl.year.value;
  // console.log('searchYear', searchYear);
  if (!checkYear(searchYear)) {
    searchYear = new Date().getFullYear();
  }

  optionsObj.primary_release_year = searchYear;

  //checking if included and excluded genre are not equal
  if (
    optionsObj.with_genres === optionsObj.without_genres &&
    optionsObj.with_genres !== undefined &&
    optionsObj.without_genres !== undefined
  ) {
    Notify.failure("You can't choose and exclude the same genre!");
    return;
  }

  optionsObj.page = 1;

  makeAdvancedSearch(optionsObj);
}

function checkYear(searchYear) {
  if (searchYear === '') return true;
  searchYear = Number.parseInt(searchYear);
  if (
    searchYear &&
    searchYear > 1880 &&
    searchYear <= new Date().getFullYear()
  ) {
    return true;
  }

  Notify.failure('Enter the year correctly!');
  return false;
}

function isOptionsObjHasValues(optionsObj) {
  let result = false;
  //if film year entered - object has values
  if (refs.advancedSearchEl.year.value !== '') return true;
  Object.values(optionsObj).forEach(value => {
    if (value !== undefined && !emptyStingRegEx.test(value)) {
      result = true;
    }
  });
  return result;
}
