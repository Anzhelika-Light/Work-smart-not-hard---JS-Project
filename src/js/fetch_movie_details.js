const BASE_URL = 'https://api.themoviedb.org/3/movie/';

export function fetchMovie(movie_id) {
  // console.log('movie_id', movie_id);
  return fetch(
    `${BASE_URL}${movie_id}?api_key=60bdd84997c9f2a4c6cd2341c547ed98`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
}
