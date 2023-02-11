const mybutton = document.getElementById('btnScrollToTop');

window.onscroll = function () {
  scrollFunction();
};

export function scrollFunction() {
  if (document.body.scrollB > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = 'block';
    mybutton.addEventListener('click', topFunction);
  } else {
    mybutton.style.display = 'none';
  }
}

export function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
