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
  static genres = {};
  #API_KEY = '60bdd84997c9f2a4c6cd2341c547ed98';
  #searchResource = '/search/movie';
  #trendingResource = '/trending';
  #findByIdResource = '/movie';
  #genreMovieListResource = '/genre/movie/list';
  #findTrailersByIdResource = '/videos';

  constructor(page = 1) {
    this.page = page;
    //creating the genres obj: id: name
    this.#fetchGenreMoviesList().then(response => {
      const genrArr = response.data.genres;
      console.log(genrArr);
      genrArr.forEach(el => {
        TmdbAPI.genres[el.id] = el.name;
      });
      console.log(TmdbAPI.genres);
    });
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

  #fetchGenreMoviesList() {
    return axios.get(
      `${TmdbAPI.BASE_URL}${this.#genreMovieListResource}?api_key=${
        this.#API_KEY
      }`
    );
  }

  getGenresString() {}
  // getGenreList() {
  //   try {
  //     return this.fetchGenreMoviesList();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // getGenreListHTMLStr() {
  //   const genreList = this.getGenreList();
  //   return genreList();
  // }
}
