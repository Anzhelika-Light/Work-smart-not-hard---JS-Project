import API_KEY from './api-key';
import BASE_URL from './base-url';

async function fetchPopularFilms() {
  try {
    const data = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
    const parcedData = await data.json();
    const { results } = parcedData;
    return results;
  } catch (error) {
    console.dir(error);
  }
}

export default fetchPopularFilms;
