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
  #API_KEY = '60bdd84997c9f2a4c6cd2341c547ed98';
  #BASE_URL = 'https://api.themoviedb.org/3';
  #searchResource = '/search/movie';
  #trendingResource = '/trending';

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
      `${this.#BASE_URL}${this.#searchResource}?${searchParams}`
    );
  }

  fetchTrending(media_type, time_window) {
    return axios.get(
      `${this.#BASE_URL}${
        this.#trendingResource
      }/${media_type}/${time_window}?api_key=${this.#API_KEY}`
    );
  }
}
