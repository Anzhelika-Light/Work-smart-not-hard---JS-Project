import API_KEY from './api-key';

async function getImages() {
  const data = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
  );
  const parcedData = await data.json();
  const { images } = parcedData;
  console.log('images', images);

  const imageBaseURL = `${images.secure_base_url}${
    images.profile_sizes[images.profile_sizes.length - 1]
  }`;
  console.log(imageBaseURL);
  return imageBaseURL;
}

export default getImages;
