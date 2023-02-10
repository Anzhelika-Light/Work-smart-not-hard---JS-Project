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
  static watch_monetization_types = {
    BUY: 'buy',
    RENT: 'rent',
    ADS: 'ads',
    FREE: 'free',
    FLATRATE: 'flatrate',
  };
  static sort_by_types = {
    POPULARITY_ASC: 'popularity.asc',
    POPULARITY_DESC: 'popularity.desc',
    PRIMARY_RELEASE_DATE_ASC: 'primary_release_date.asc',
    PRIMARY_RELEASE_DATE_DESC: 'primary_release_date.desc',
    VOTE_AVERAGE_ASC: 'vote_average.asc',
    VOTE_AVERAGE_DESC: 'vote_average.desc',
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

  fetchAdvancedMovieSearch({
    primary_release_year,
    with_genres,
    sort_by = TmdbAPI.sort_by_types.POPULARITY_DESC,
    include_adult = false,
    page = 1,
    with_watch_monetization_types,
    without_genres = null,
  }) {
    const with_watch_monetization_types_str = with_watch_monetization_types
      ? `&with_watch_monetization_types=${with_watch_monetization_types}`
      : '';
    const primary_release_year_str = primary_release_year
      ? `&primary_release_year=${primary_release_year}`
      : '';
    const without_genres_str = without_genres
      ? `&without_genres=${without_genres}`
      : '';
    return axios.get(
      `${TmdbAPI.BASE_URL}${this.#findByMovieResource}?api_key=${
        this.#API_KEY
      }&page=${page}&sort_by=${sort_by}&${primary_release_year_str}&with_genres=${with_genres}&include_adult=${include_adult}${with_watch_monetization_types_str}${without_genres_str}`
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
    //creating the genres obj: id: name
    this.#fetchGenreMoviesList().then(response => {
      const genrArr = response.data.genres;
      // console.log(genrArr);
      genrArr.forEach(el => {
        TmdbAPI.genres[el.id] = el.name.toLowerCase();
        TmdbAPI.genreIDs[el.name.toLowerCase()] = el.id;
      });
      // console.log(TmdbAPI.genres);
      // console.log('genreIDs', TmdbAPI.genreIDs);
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

  static getGenresStringWithSearchedGenre(genre_ids, genre) {
    // console.log(genre_ids, genre);
    const genreID = TmdbAPI.genreIDs[genre.toLowerCase()];
    const genreIndex = genre_ids.indexOf(genreID);
    // console.log(TmdbAPI.genreIDs);
    // console.log(genreID, genreIndex);
    genre_ids.splice(genreIndex, 1);
    // console.log('spliced', genre_ids);

    switch (genre_ids.length) {
      case 1:
        return `${genre}`;
        break;
      case 2:
        return `${genre}, ${TmdbAPI.genres[genre_ids[0]]}`;
        break;
      default:
        return `${genre}, ${TmdbAPI.genres[genre_ids[0]]}, Other`;
        break;
    }
    if (genre_ids.length > 2) {
      return `${TmdbAPI.genres[genre_ids[0]]}, `;
    }
  }
}
