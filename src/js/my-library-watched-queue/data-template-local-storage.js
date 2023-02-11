// ---приклад даних, які приходять з localStorage
export const userDataWatched = [
  // {
  //   poster_path: '',
  //   title: 'Cats & Dogs',
  //   genre_ids: 'Family, Comedy',
  //   release_date: '2001-07-04',
  //   vote_average: '5.385',
  //   id: '10992',
  // },
  // {
  //   poster_path: '/1pDYetDF3r9V7ZB5SeyoPcUkBiB.jpg',
  //   title: 'Viking Wolf',
  //   genre_ids: 'Horror, Thriller, Mystery',
  //   release_date: '2022-11-18',
  //   vote_average: '5.6',
  //   id: '10992',
  // },
  // {
  //   poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
  //   title: 'Wakanda Foreva',
  //   genre_ids: 'Action, Adventure, Science Fiction',
  //   release_date: '2022-11-09',
  //   vote_average: '7.491',
  //   id: '10992',
  // },
];

export const userDataQueue = [
  // {
  //   poster_path: '/leh986WG55FzuexU8PajdOhm5yQ.jpg',
  //   title: 'Knock at the Cabin',
  //   genre_ids: 'Family, Comedy',
  //   release_date: '2023-02-01',
  //   vote_average: '6.8',
  //   id: '10992',
  // },
  // {
  //   poster_path: '/dA34DDakXgvbjnyKocOcLJtKz0.jpg',
  //   title: 'True Spirit',
  //   genre_ids: 'Horror, Thriller, Mystery',
  //   release_date: '2023-01-26',
  //   vote_average: '6.895',
  //   id: '10992',
  // },
  // {
  //   poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
  //   title: 'Blood',
  //   genre_ids: 'Action, Adventure, Science Fiction',
  //   release_date: '2023-01-12',
  //   vote_average: '6.206',
  //   id: '10992',
  // },
];

// settingItem('movieWatched', userDataWatched);
// settingItem('movieQueue', userDataQueue);
// ---/приклад даних, які приходять з localStorage

function settingItem(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}
