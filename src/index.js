import {
  paginationSettings,
  deletePaginationInterface,
} from './js/pagination/paginationInterface';
import './js/pagination/setPaginationSettings';
import renderPopularFilms from './js/trending-search-main/trending-search';
import './js/trending-search-main/trending-search';
import './js/dark-mode';

export async function onLoadAnotherPage(e) {
  try {
    console.log('click');
    deletePaginationInterface();
    const clickedBtn = e.target;
    const indexOfPageToLoad = Number(clickedBtn.dataset.value);
    await renderPopularFilms(indexOfPageToLoad);
  } catch (error) {
    console.log(error);
  }
}
import './js/movie_search';
import { studentCards } from './js/footer-modal';

// import Darkmode from 'darkmode-js';
// //https://darkmodejs.learn.uno

// // const options = {
// //   bottom: '64px', // default: '32px'
// //   right: 'unset', // default: '32px'
// //   left: '32px', // default: 'unset'
// //   time: '0.5s', // default: '0.3s'
// //   mixColor: '#fff', // default: '#fff'
// //   backgroundColor: '#fff', // default: '#fff'
// //   buttonColorDark: '#100f2c', // default: '#100f2c'
// //   buttonColorLight: '#fff', // default: '#fff'
// //   saveInCookies: false, // default: true,
// //   label: '🌓', // default: ''
// //   autoMatchOsTheme: true, // default: true
// // };

// const options = {
//   autoMatchOsTheme: false,
// };
// const darkmode = new Darkmode(options);
// darkmode.showWidget();
