import API_KEY from './api-key';
import BASE_URL from './base-url';

async function fetchPopularFilms(page = 1) {
  try {
    const data = await fetch(`${BASE_URL}?api_key=${API_KEY}&page=${page}`);
    // console.log(data);
    const parcedData = await data.json();

    return parcedData;
  } catch (error) {
    console.dir(error);
  }
}

export default fetchPopularFilms;
