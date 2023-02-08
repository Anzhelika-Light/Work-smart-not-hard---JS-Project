import * as basicLightbox from 'basiclightbox';

const studentsEl = document.querySelector('.footer__text-link');
console.log(studentsEl);

export const instance = basicLightbox.create(
  `
    <div class="modal">
        <div>
          <h2 class="modal__title">GoIT Students</h2>
          <ul>
            <li>
              <img src="" alt="" />
              <h3>Svitlana Gonchar</h3>
              <p></p>
              <a href=""></a>
            </li>
            <li>
              <img src="" alt="" />
              <div>
                <h3>Anna Kilchytska</h3>
                <p></p>
                <a href=""></a>
              </div>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Artem Krylov</h3>
              <p></p>
              <a href=""></a>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Erika Tatchyn</h3>
              <p></p>
              <a href=""></a>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Maryna Shavlak</h3>
              <p></p>
              <a href=""></a>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Svitlana Piatakovich</h3>
              <p></p>
              <a href=""></a>
            </li>

            <li>
              <img src="" alt="" />
              <h3>Uliana Shymanska</h3>
              <p></p>
              <a href=""></a>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Vadum Kulyk</h3>
              <p></p>
              <a href=""></a>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Victor Korotkov</h3>
              <p></p>
              <a href=""></a>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Anzhelika Antoniuk</h3>
              <p></p>
              <a href=""></a>
            </li>
            <li>
              <img src="" alt="" />
              <h3>Natalia Karpenko</h3>
              <p></p>
              <a href=""></a>
            </li>
          </ul>
        </div>
        <button type="button" class="modal__close-btn">
          <svg class="modal__icon-close" width="14" height="12.75">
            <use href="./images/sprite.svg#heart"></use>
          </svg>
        </button>
    </div>
`,
  {
    onShow: instance => {
      instance.element().querySelector('.modal__close-btn').onclick =
        instance.close;
      document.addEventListener('keydown', onEscapePress);
    },

    onClose: instance => {
      document.removeEventListener('keydown', onEscapePress);
    },
  }
);

function onEscapePress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function openModal(e) {
  e.preventDefault();
  instance.show();
}

studentsEl.addEventListener('click', openModal);
