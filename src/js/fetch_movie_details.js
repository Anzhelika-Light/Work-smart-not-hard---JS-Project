// const BASE_URL = 'https://api.themoviedb.org/3/movie/';

// export function fetchMovie(movie_id) {
//   return fetch(
//     `${BASE_URL}${movie_id}?api_key=60bdd84997c9f2a4c6cd2341c547ed98`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//     // if (err.message === '404') {
//     //   countryList.innerHTML = '';
//     //   Notiflix.Notify.failure('Oops, there is no country with that name');
//     // }
//   });
// }