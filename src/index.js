import {
  paginationSettings,
  setPaginationSettings,
  renderPaginationInterface,
  deletePaginationInterface,
} from './js/pagination/paginationInterface';
import { refs } from './js/refs';
import './js/pagination/setPaginationSettings';
let firstPage = 1;
let lastPage = Math.ceil(100);
// в цю змінну треба записати загальну кількість сторінок,
//які можна відобразити за результатати пошуку
//тобто якщо із бекенду прийшло 1000 фільмів, то
//так як на одній сторінці може відображатись тільки 20 фільмів,
//то у змінну lastPage потрібно записати 50 (1000/20),
//необхідно зробити округлення вверх до найближчого цілого

renderPaginationInterface(firstPage, lastPage);

export function onLoadAnotherPage(e) {
  const clickedBtn = e.target;
  // ТУТ МАЄ БУТИ КОД ДЛЯ ВІДОБРАЖЕНЯ НАСТУПНОЇ СТОРІНКИ
  const indexOfPageToLoad = Number(clickedBtn.dataset.value);
  renderPaginationInterface(indexOfPageToLoad, lastPage);
  console.log('Ви перейшли на сторінку', indexOfPageToLoad);
}
import './scripts/movie_search';