import API_KEY from './api-key';
import BASE_URL from './base-url';

async function getGenres() {
  const data = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
  // отримуємо назви жанрів
  const genresData = await data.json();
  const { genres } = genresData;
  console.log(genres);

  // масив об'єктів з властивістю id i значенням name

  const genreNames = {};

  genres.map(item => {
    genreNames[item.id] = item.name;
  });

  console.log('genreNames', genreNames);

  return genreNames;
}

export default getGenres;
