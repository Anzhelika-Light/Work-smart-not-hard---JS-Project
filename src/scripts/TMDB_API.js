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
  #API_KEY = '60bdd84997c9f2a4c6cd2341c547ed98';
  #searchResource = '/search/movie';
  #trendingResource = '/trending';
  #findByIdResource = '/movie';
  #genreMovieListResource = '/genre/movie/list';

  constructor(page = 1) {
    this.page = page;
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

  fetchFilmsByID(id) {
    return axios.get(
      `${TmdbAPI.BASE_URL}${this.#findByIdResource}/${id}?api_key=${
        this.#API_KEY
      }`
    );
  }

  #fetchGenreMoviesList() {
    const genreList = [];
    if (genreList.length > 0) {
      return genreList;
    }
    return () =>
      axios.get(
        `${TmdbAPI.BASE_URL}${this.#genreMovieListResource}?api_key=${
          this.#API_KEY
        }`
      );
  }

  getGenreList() {
    try {
      return this.#fetchGenreMoviesList();
    } catch (error) {
      console.error(error);
    }
  }

  getGenreListHTMLStr() {
    const genreList = this.getGenreList();
  }
}
