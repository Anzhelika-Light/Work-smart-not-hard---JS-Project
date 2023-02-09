// ---приклад даних, які приходять з localStorage
export const userDataWatched = [
  {
    poster_path: '/rM6qLVhApXiXYjMuzSFOESUiVaJ.jpg',
    title: 'Cats & Dogs',
    genre_ids: [
      { id: 10751, name: 'Family' },
      { id: 35, name: 'Comedy' },
    ],
    release_date: '2001-07-04',
    vote_average: 5.385,
  },
  {
    poster_path: '/1pDYetDF3r9V7ZB5SeyoPcUkBiB.jpg',
    title: 'Viking Wolf',
    genre_ids: [
      { id: 27, name: 'Horror' },
      { id: 53, name: 'Thriller' },
      { id: 9648, name: 'Mystery' },
    ],
    release_date: '2022-11-18',
    vote_average: 5.6,
  },
  {
    poster_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
    title: 'Wakanda Foreva',
    genre_ids: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' },
    ],
    release_date: '2022-11-09',
    vote_average: 7.491,
  },
];

export const userDataQueue = [
  {
    poster_path: '/leh986WG55FzuexU8PajdOhm5yQ.jpg',
    title: 'Knock at the Cabin',
    genre_ids: [
      { id: 10751, name: 'Family' },
      { id: 35, name: 'Comedy' },
    ],
    release_date: '2023-02-01',
    vote_average: 6.8,
  },
  {
    poster_path: '/dA34DDakXgvbjnyKocOcLJtKz0.jpg',
    title: 'True Spirit',
    genre_ids: [
      { id: 27, name: 'Horror' },
      { id: 53, name: 'Thriller' },
      { id: 9648, name: 'Mystery' },
    ],
    release_date: '2023-01-26',
    vote_average: 6.895,
  },
  {
    poster_path: '/v2GqQcm4Yg54ADrdbEi4Y1FZZhz.jpg',
    title: 'Blood',
    genre_ids: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' },
    ],
    release_date: '2023-01-12',
    vote_average: 6.206,
  },
];

settingItem('movieWatched', userDataWatched);
settingItem('movieQueue', userDataQueue);
// ---/приклад даних, які приходять з localStorage

function settingItem(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}
