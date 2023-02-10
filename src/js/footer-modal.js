import * as basicLightbox from 'basiclightbox';

const studentsEl = document.querySelector('.footer__text-link');

export const studentCards = basicLightbox.create(
  `
<div class="modal">
  <div>
    <h2 class="modal__title">GoIT Students</h2>
    <ul class="team-list">
      <li class="team-list__item">
        <img
          src="./images/team/gonchar.jpg"
          alt="Svitlana Honchar"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Svitlana Honchar</h3>
          <p class="team-list__text">
            <span class="team-list__position">Scrum-master,</span>
            "Add to Watched", "Add to Queue" buttons, Presentation
          </p>
          <a href="https://github.com/SvitlanaHonchar" target="_blank">
            <svg class="team-list__icon" width="25" height="25">
              <use href="./images/sprite.svg#icon-github"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/kilchytska.jpg"
          alt="Anna Kilchytska"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Anna Kilchytska</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">
              Main container, Cards, Rendering of trending movies
            </p>
            <a href="https://github.com/AnnaKilchytska" target="_blank">
              <svg class="team-list__icon" width="25" height="25">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/krylov.jpg"
          alt="Artem Krylov"
          width="200px"
          heigth="200px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Artem Krylov</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">
              Movie Database API, Header, Firebase authorization, Dark and light
              theme
            </p>
            <a href="https://github.com/ArtemKrylov" target="_blank">
              <svg class="team-list__icon" width="25" height="25">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/tatchyn.jpg"
          alt="Erika Tatchyn"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Erika Tatchyn</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">My Library</p>
            <a href="https://github.com/ErikaTatchyn" target="_blank">
              <svg class="team-list__icon" width="16" height="16">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/shavlak.jpg"
          alt="Maryna Shavlak"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Maryna Shavlak</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">
              <span class="team-list__position">Team-Lead,</span> Pagination,
              Sprite
            </p>
            <a href="https://github.com/MarynaShavlak" target="_blank">
              <svg class="team-list__icon" width="25" height="25">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/piatakovich.jpg" alt="Svitlana Piatakovich"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Svitlana Piatakovich</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">Footer, Modal window</p>
            <a href="https://github.com/SvitlanaPia" target="_blank">
              <svg class="team-list__icon" width="25" height="25">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/shymanska.jpg"
          alt="Uliana Shymanska"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Uliana Shymanska</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">Trailer</p>
            <a href="https://github.com/UlianaShyma" target="_blank">
              <svg class="team-list__icon" width="25" height="25">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/kulyk.jpg"
          alt="Vadum Kulyk"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Vadum Kulyk</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">
              "Add to Watched", "Add to Queue" buttons
            </p>
            <a href="https://github.com/vadym-kulyk" target="_blank">
              <svg class="team-list__icon" width="25" height="25">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/korotkov.jpg"
          alt="Victor Korotkov"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Victor Korotkov</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">
              Firebase authorization, User registration with Firebase
            </p>
            <a href="https://github.com/GranatUser" target="_blank">
              <svg class="team-list__icon" width="25" height="25">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/antoniuk.jpg"
          alt="Anzhelika Antoniuk"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Anzhelika Antoniuk</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">Movie modal window</p>
            <a href="https://github.com/Anzhelika-Light" target="_blank">
              <svg class="team-list__icon" width="25" height="25">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="./images/team/karpenko.jpg"
          alt="Natalia Karpenko"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Natalia Karpenko</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">Header, Loader</p>
            <a href="https://github.com/natalia-no-war" target="_blank">
              <svg class="team-list__icon" width="25" height="25">
                <use href="./images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div></li>
    </ul>
  </div>

  <button type="button" class="modal__close-btn">
    <svg class="modal__icon-close" width="30" height="20">
      <use href="./images/sprite.svg#close"></use>
    </svg>
  </button>
</div> `,
  {
    onShow: studentCards => {
      studentCards.element().querySelector('.modal__close-btn').onclick =
        studentCards.close;
      document.addEventListener('keydown', onEscapePress);
    },

    onClose: studentCards => {
      document.removeEventListener('keydown', onEscapePress);
    },
  }
);

function onEscapePress(event) {
  if (event.code === 'Escape') {
    studentCards.close();
  }
}

function openModal(e) {
  e.preventDefault();
  studentCards.show();
}

studentsEl.addEventListener('click', openModal);
