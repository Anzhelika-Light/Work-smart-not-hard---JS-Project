import API_KEY from './api-key';

async function getGenres() {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    // отримуємо назви жанрів
    const genresData = await data.json();
    const { genres } = genresData;

    // масив об'єктів з властивістю id i значенням name
    const genreNames = {};
    genres.map(item => {
      genreNames[item.id] = item.name;
    });

    return genreNames;
  } catch (error) {
    console.log(error);
  }
}

export default getGenres;
