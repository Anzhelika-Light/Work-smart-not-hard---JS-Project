import axios from 'axios';

export default class TmdbAPI {
  static media_type = {
    ALL: 'all',
    MOVIE: 'movie',
    TV: 'tv',
    PERSON: 'person',
  };
  static time_window = {
    DAY: 'day',
    WEEK: 'week',
  };
  static BASE_URL = 'https://api.themoviedb.org/3';
  static IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  static genres = {}; //obj {genre_id: genre_name}
  static genreIDs = {}; //obj {genre_name: genre_id}
  #API_KEY = '60bdd84997c9f2a4c6cd2341c547ed98';
  #searchResource = '/search/movie';
  #trendingResource = '/trending';
  #findByIdResource = '/movie';
  #findByMovieResource = '/discover/movie';
  #genreMovieListResource = '/genre/movie/list';
  #findTrailersByIdResource = '/videos';

  constructor(page = 1) {
    this.page = page;
    this.#createGenresObj();
  }

  fetchFilmsByQuery(query) {
    const searchParams = new URLSearchParams({
      api_key: this.#API_KEY,
      page: this.page,
      query: query,
      include_adult: false,
    });
    return axios.get(
      `${TmdbAPI.BASE_URL}${this.#searchResource}?${searchParams}`
    );
  }

  fetchTrending(media_type, time_window) {
    return axios.get(
      `${TmdbAPI.BASE_URL}${
        this.#trendingResource
      }/${media_type}/${time_window}?api_key=${this.#API_KEY}`
    );
  }

  fetchFilmByID(id) {
    return axios.get(
      `${TmdbAPI.BASE_URL}${this.#findByIdResource}/${id}?api_key=${
        this.#API_KEY
      }`
    );
  }

  fetchTrailersByID(id) {
    return axios.get(
      `${TmdbAPI.BASE_URL}${this.#findByIdResource}/${id}${
        this.#findTrailersByIdResource
      }?api_key=${this.#API_KEY}`
    );
  }

  fetchMoviesByGenre(genre) {
    return axios.get(
      `${TmdbAPI.BASE_URL}${this.#findByMovieResource}?api_key=${
        this.#API_KEY
      }&page=1&sort_by=popularity.desc&with_genres=${genre}`
    );
  }

  fetchMoviesByYear(year) {
    return axios.get(
      `${TmdbAPI.BASE_URL}${this.#findByMovieResource}?api_key=${
        this.#API_KEY
      }&page=1&sort_by=popularity.desc&primary_release_year=${year}`
    );
  }

  #fetchGenreMoviesList() {
    return axios.get(
      `${TmdbAPI.BASE_URL}${this.#genreMovieListResource}?api_key=${
        this.#API_KEY
      }`
    );
  }

  #createGenresObj() {
    //if TmdbAPI.genres already has data - do not fetch again
    if (Object.keys(TmdbAPI.genres).length !== 0) return;
    console.log('after return');
    //creating the genres obj: id: name
    this.#fetchGenreMoviesList().then(response => {
      const genrArr = response.data.genres;
      console.log(genrArr);
      genrArr.forEach(el => {
        TmdbAPI.genres[el.id] = el.name;
        TmdbAPI.genreIDs[el.name] = el.id;
      });
      console.log(TmdbAPI.genres);
      console.log('genreIDs', TmdbAPI.genreIDs);
    });
  }

  static getGenresString(genre_ids) {
    switch (genre_ids.length) {
      case 0:
        return '';
        break;
      case 1:
        return `${TmdbAPI.genres[genre_ids[0]]}`;
        break;
      case 2:
        return `${TmdbAPI.genres[genre_ids[0]]}, ${
          TmdbAPI.genres[genre_ids[1]]
        }`;
        break;
      default:
        return `${TmdbAPI.genres[genre_ids[0]]}, ${
          TmdbAPI.genres[genre_ids[1]]
        }, Other`;
        break;
    }
    if (genre_ids.length > 2) {
      return `${TmdbAPI.genres[genre_ids[0]]}, `;
    }
  }
}
