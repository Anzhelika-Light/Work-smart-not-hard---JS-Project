import { initializeApp } from "firebase/app"
import {
  getAuth, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, AuthErrorCodes, onAuthStateChanged, signOut
} from 'firebase/auth'
import 'notiflix/dist/notiflix-3.2.6.min.css';
import Notiflix from 'notiflix';

import { getDatabase, ref, set, child, get, push, update } from "firebase/database"

import { spinnerStart, spinnerStop } from './loader';
//data-template-local-storage.js////////////////////////////
//import { userDataWatched, userDataQueue } from "./my-library-watched-queue/data-template-local-storage.js"


export let currentUID = "";

//btn header switch

const svg2 = ` <svg width="35" height="35"  viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-label="кнопка авторизації">
   <path
                d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z M90,49c0,14.3-11.7,26-26,26S38,63.3,38,49   s11.7-26,26-26S90,34.7,90,49z" />
            <path
                d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95s-33.2,6.7-45.3,18.7L24.4,119.4z" />
</svg>`;
const svg1 = ` <svg width="30" height="30"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="кнопка авторизації">
     <path
                d="M6.4 12.8V9.6C6.4 4.298 10.698 0 16 0s9.6 4.298 9.6 9.6v3.2h1.6a3.2 3.2 0 0 1 3.2 3.2v12.8a3.2 3.2 0 0 1-3.2 3.2H4.8a3.2 3.2 0 0 1-3.2-3.2V16c0-1.76 1.44-3.2 3.2-3.2h1.6zm8 10.768V27.2h3.2v-3.632a3.205 3.205 0 0 0 1.6-2.771 3.2 3.2 0 1 0-4.815 2.763l.015.008zM11.2 9.6v3.2h9.6V9.6a4.8 4.8 0 1 0-9.6 0z" />
</svg>`;

const useEl = document.querySelector("[data-switch]");


const watchedBtnEl2 = document.querySelector('.js-library-btn--watched');
const queueBtnEl2 = document.querySelector('.js-library-btn--queue');

console.log(useEl);
//Element
const btnLogOut = document.querySelector(".btn-log-out");
const btnSign = document.querySelector(".btn-sign");
const btnLogin = document.querySelector(".btn-login");
const login = window.document.querySelector(".login");
const password = window.document.querySelector(".password");
const form = document.getElementById("form-login");
const profile = document.getElementById("profile");
const profileName = document.querySelector(".profile__name");
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCCtjOeYUGfFakMk9BInb8D18c_-yBX2Oc",
  authDomain: "filmoteka-e135b.firebaseapp.com",
  databaseURL: "https://filmoteka-e135b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmoteka-e135b",
  storageBucket: "filmoteka-e135b.appspot.com",
  messagingSenderId: "1055697661638",
  appId: "1:1055697661638:web:27ed1ccf73ceb81da0b1c7",
  measurementId: "G-8186NK0FHL"
});

export const auth = getAuth(firebaseApp);

export async function writeUserDataQueue(userId, data) {
  if (userId === "") {
    console.log("userId is missing");
    return;
  }
  const db = getDatabase();
  update(ref(db, 'users/' + userId), { userDataQueue: data });
}

export async function currentFilmList(userId, data) {
  if (userId === "") {
    console.log("userId is missing");
    return;
  }
  const db = getDatabase();
  update(ref(db, 'users/' + userId), { currentFilmList: data });
}


export async function writeUserDataWatch(userId, data) {
  if (userId === "") {
    console.log("userId is missing");
    return;
  }
  const db = getDatabase();
  update(ref(db, 'users/' + userId), { userDataWatch: data });
}

async function writeUserDataFirst(userId, /*queue, watch, */loginData) {
  try {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);
    await set(reference, {
      /* userDataQueue: queue,
       userDataWatch: watch,*/
      userLogin: loginData
    })
  }
  catch (e) {
    console.log(e);
  }

}

export async function readAllUserData(userId) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `users/${userId}`));
    const data = await snapshot.val();
    return data;
  }
  catch (eror) {
    console.log(eror);
  }


}
const loginEmailPassword = async (event) => {
  event.preventDefault();
  const loginEmail = login.value;
  const loginPassword = password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    Notiflix.Notify.success("Enter");
  }
  catch (error) {
    showLoginEror(error);
  }


  /* spinnerStart();                 /////////////
   setTimeout(() => {
     document.location.reload();
   }, 1000);*/
};
function showLoginEror(error) {
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    Notiflix.Notify.failure("Password is a invalid");
  }
  else {
    Notiflix.Notify.failure("Login is invalid");
  }
}
const createAccount = async (event) => {
  event.preventDefault();
  const loginEmail = login.value;
  const loginPassword = password.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    await writeUserDataFirst(userCredential.user.uid, login.value);
    profileName.textContent = login.value;
    Notiflix.Notify.success("Account is created");
  }
  catch (error) {
    if (error.message === "Firebase: Error (auth/invalid-email).") Notiflix.Notify.failure("Login is invalid");
    else if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") Notiflix.Notify.failure("Password should be at least 6 characters");
    else if (login.value !== "" && password.value === "") Notiflix.Notify.failure("Password is invalid");
    else if (login.value === "" && password.value === "") Notiflix.Notify.failure("Password and login are invalid");
    else if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      Notiflix.Notify.failure("This email already exist");
    }
    else {
      Notiflix.Notify.failure(error.message);
      console.log(error.message)
    }

  }
  /* spinnerStart();                  /////////////////
   setTimeout(() => {
     document.location.reload();
   }, 1000);*/
}
btnSign.addEventListener("click", createAccount);
btnLogin.addEventListener("click", loginEmailPassword);

const movieListEl2 = document.querySelector('.movie-list');

onAuthStateChanged(auth, async user => {
  if (user) {
    console.log("___________");
    console.log("u are online");
    console.log(user.uid);
    //console.log(auth.currentUser.uid)
    console.log("___________")

    btnLogOut.classList.remove("hide");//
    form.classList.add("hide");//
    profile.classList.remove("hide");//
    currentUID = user.uid;
    useEl.innerHTML = svg2;
    try {
      const rez = await readAllUserData(currentUID);
      profileName.textContent = rez.userLogin;
    }
    catch {

    }


  }
  else {
    console.log("___________");
    console.log("u are NOT online");
    currentUID = "";
    console.log("-" + currentUID);
    console.log("___________");
    profileName.textContent = "";

    btnLogOut.classList.add("hide");//
    form.classList.remove("hide");//
    profile.classList.add("hide");//
    useEl.innerHTML = svg1;


  }
})
const logout = async () => {
  await signOut(auth);
  currentUID = "";
  login.value = "";
  password.value = "";
  try {
    queueBtnEl2.style.background = 'transparent';
    queueBtnEl2.style.borderColor = '#ffffff';

    watchedBtnEl2.style.background = 'transparent';
    watchedBtnEl2.style.borderColor = '#ffffff';
    movieListEl2.innerHTML = "";
  }
  catch {

  }

  /* spinnerStart();                           ///////////
   setTimeout(() => {
     spinnerStop();
     document.location.reload();
   }, 1500);
 */
}
btnLogOut.addEventListener("click", logout);

/*document.querySelector(".test").addEventListener("click", async () => {
    console.log(await readAllUserData(currentUID));
    await writeUserDataQueue(currentUID, ["dd", 'qq'])
    console.log(await readAllUserData(currentUID));
});*/




/*writeUserDataWatch("LThvuvbfVcfI6QePsML4UusFPrr2", [


    {
        poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
        title: 'Wakanda Foreva',
        genres: ['Action', 'Adventure', 'Science Fiction'],
        release_date: '2022-11-09',
        vote_average: 7.491,
        movie_id: 10992,
    },
]);*/
/*async function readPromise(obj) {
    const rez = await obj;
    console.log(rez.userDataWatch);
}
readPromise(readAllUserData("LThvuvbfVcfI6QePsML4UusFPrr2"));*/
