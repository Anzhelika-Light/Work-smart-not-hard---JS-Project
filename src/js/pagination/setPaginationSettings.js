import { paginationSettings, setPaginationSettings, renderPaginationInterface } from './paginationInterface';

let screen = window.matchMedia('(max-width: 767px)');
setPaginationSettings(screen.matches);
screen.addEventListener('change', onChange);

function onChange() {
  const { currentPage, totalPages } = paginationSettings;
  setPaginationSettings(screen.matches);
  renderPaginationInterface(currentPage, totalPages);
}
