import API_KEY from './api-key';
import BASE_URL from './base-url';

async function fetchPopularFilms(page = 1) {
  try {
    const data = await fetch(`${BASE_URL}?api_key=${API_KEY}&page=${page}`);
    const parcedData = await data.json();
    // const { results } = parcedData;
    console.log(parcedData);
    return parcedData;
  } catch (error) {
    console.dir(error);
  }
}

export default fetchPopularFilms;
