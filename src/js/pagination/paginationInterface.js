import ultimatePagination from 'ultimate-pagination';
import { onLoadAnotherPage } from '../../index';
import { refs } from '../refs';

export const paginationSettings = {
  currentPage: 0,
  totalPages: 0,
  boundaryPagesRange: 1,
  siblingPagesRange: 2,
  hideEllipsis: false,
  hidePreviousAndNextPagebtns: false,
  hideFirstAndLastPagebtns: true,
};

export function createPaginationInterface(currentPage, totalPages) {
  paginationSettings.currentPage = currentPage;
  paginationSettings.totalPages = totalPages;

  const pagination = ultimatePagination.getPaginationModel(paginationSettings);

  const btnsMarkup = pagination.map(createBtn).join('');

  return `<ul class="pagination__container">${btnsMarkup}</ul>`;
}

export function deletePaginationInterface() {
  refs.filmsPaginationContainer.remove();
}

function createBtn(btnType) {
  const { type, value, isActive, key } = btnType;
  let modifier;
  switch (type) {
    case 'PREVIOUS_PAGE_LINK':
      modifier = '--prev';
      return isActive
        ? createIconBtnTemplate(modifier, value, 'disabled')
        : createIconBtnTemplate(modifier, value);

    case 'NEXT_PAGE_LINK':
      modifier = '--next';
      return isActive
        ? createIconBtnTemplate(modifier, value, 'disabled')
        : createIconBtnTemplate(modifier, value);

    case 'ELLIPSIS':
      modifier = '--ellipsis';
      return createIconBtnTemplate(modifier, value);

    case 'PAGE':
      modifier = '--active';
      return createDigitBtnTemplate(modifier, value, isActive, 'disabled');
  }
}

export function setMobilePaginationSettings() {
  paginationSettings.boundaryPagesRange = 0;
  paginationSettings.hideEllipsis = true;
}

export function setStandartPaginationSettings() {
  paginationSettings.boundaryPagesRange = 1;
  paginationSettings.hideEllipsis = false;
}

export function renderPaginationInterface(currentPage, totalPages) {
  refs.filmsPaginationContainer.innerHTML = createPaginationInterface(
    currentPage,
    totalPages
  );
  refs.paginationContainer = document.querySelector('.pagination__container');
  refs.paginationContainer.addEventListener('click', onLoadAnotherPage);
}

export function setPaginationSettings(isMobile) {
  if (isMobile) {
    setMobilePaginationSettings();
  } else {
    setStandartPaginationSettings();
  }
}

function createIconBtnTemplate(modifier, value, disabled = '') {
  return ` <li class="pagination__element">
          <button type="button" class="pagination__btn pagination__btn${modifier}" data-value=${value} ${disabled}></button>
        </li>`;
}
function createDigitBtnTemplate(modifier, value, isActive, disabled) {
  return isActive
    ? ` <li class="pagination__element">
          <button type="button" class="pagination__btn pagination__btn${modifier}" data-value=${value} ${disabled}>${value}</button>
        </li>`
    : ` <li class="pagination__element">
       <button type="button" class="pagination__btn" data-value=${value}>${value}</button>
     </li>`;
}
