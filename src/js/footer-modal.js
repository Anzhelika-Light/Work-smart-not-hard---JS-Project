import * as basicLightbox from 'basiclightbox';

const studentsEl = document.querySelector('.footer__text-link');

const gonchar = new URL('../images/team/gonchar.jpg', import.meta.url);
const kilchytska = new URL('../images/team/kilchytska.jpg', import.meta.url);
const krylov = new URL('../images/team/krylov.jpg', import.meta.url);
const tatchyn = new URL('../images/team/tatchyn.jpg', import.meta.url);
const shavlak = new URL('../images/team/shavlak.jpg', import.meta.url);
const piatakovich = new URL('../images/team/piatakovich.jpg', import.meta.url);
const shymanska = new URL('../images/team/shymanska.jpg', import.meta.url);
const kulyk = new URL('../images/team/kulyk.jpg', import.meta.url);
const korotkov = new URL('../images/team/korotkov.jpg', import.meta.url);
const antoniuk = new URL('../images/team/antoniuk.jpg', import.meta.url);
const karpenko = new URL('../images/team/karpenko.jpg', import.meta.url);

const studentCards = basicLightbox.create(
  `
<div class="modal">
  <div>
    <h2 class="modal__title">GoIT Students</h2>
    <ul class="team-list">
      <li class="team-list__item">
        <img
          src="${gonchar}"
          alt="Svitlana Honchar"
          width="200px"
          heigth="200px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Svitlana Honchar</h3>
          <p class="team-list__text">
            <span class="team-list__position">Scrum-master,</span>
            "Add to Watched", "Add to Queue" buttons, 
          </p>
          <a href="https://github.com/SvitlanaHonchar" target="_blank" class="github"></a>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${kilchytska}"
          alt="Anna Kilchytska"
          width="200px"
          heigth="200px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Anna Kilchytska</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">
              Movie cards style, Rendering of trending movies, "Add to Watched" and "Add to Queue" buttons (local Storage)
            </p>
            <a href="https://github.com/AnnaKilchytska" target="_blank" class="github"></a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${krylov}"
          alt="Artem Krylov"
          width="200px"
          heigth="200px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Artem Krylov</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">
              Movie Database API, Header, Firebase authorization, Dark and light
              theme, Adaptive poster images
            </p>
            <a href="https://github.com/ArtemKrylov" target="_blank"  class="github"></a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${tatchyn}"
          alt="Erika Tatchyn"
          width="200px"
          heigth="200px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Erika Tatchyn</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">"My Library" page, Movie modal window</p>
            <a href="https://github.com/ErikaTatchyn" target="_blank" class="github"></a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${shavlak}"
          alt="Maryna Shavlak"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Maryna Shavlak</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">
              <span class="team-list__position">Team-Lead,</span> Pagination,
              Sprite, Code Review
            </p>
            <a href="https://github.com/MarynaShavlak" target="_blank" class="github"></a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${piatakovich}" 
          alt="Svitlana Piatakovich"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Svitlana Piatakovich</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">Footer, "GoIT Students" modal window</p>
            <a href="https://github.com/SvitlanaPia" target="_blank" class="github"></a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${shymanska}"
          alt="Uliana Shymanska"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Uliana Shymanska</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">Trailer modal window, Scroll to top button</p>
            <a href="https://github.com/UlianaShyma" target="_blank" class="github"></a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${kulyk}"
          alt="Vadum Kulyk"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Vadum Kulyk</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">
               "Add to Watched", "Add to Queue" buttons, Presentation
            </p>
            <a href="https://github.com/vadym-kulyk" target="_blank" class="github"> </a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${korotkov}"
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
            <a href="https://github.com/GranatUser" target="_blank" class="github"></a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${antoniuk}"
          alt="Anzhelika Antoniuk"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Anzhelika Antoniuk</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">Movie modal window</p>
            <a href="https://github.com/Anzhelika-Light" target="_blank" class="github"></a>
          </div>
        </div>
      </li>
      <li class="team-list__item">
        <img
          src="${karpenko}"
          alt="Natalia Karpenko"
          width="200px"
          heigth="254px"
        />
        <div class="team-list__wrapper">
          <h3 class="team-list__title">Natalia Karpenko</h3>
          <div class="team-list__text-wrapper">
            <p class="team-list__text">Header, Loader</p>
            <a href="https://github.com/natalia-no-war" target="_blank" class="github"> </a>
          </div>
        </div></li>
    </ul>
  </div>
  <button type="button" class="modal__close-btn">
  </button>
</div> `,
  {
    onShow: studentCards => {
      studentCards.element().querySelector('.modal__close-btn').onclick =
        studentCards.close;
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onEscapePress);
    },

    onClose: studentCards => {
      document.body.style.overflow = 'auto';
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
