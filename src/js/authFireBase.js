import { initializeApp } from "firebase/app"
import {
    getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, AuthErrorCodes, onAuthStateChanged, signOut
} from 'firebase/auth'
import 'notiflix/dist/notiflix-3.2.6.min.css';
import Notiflix from 'notiflix';

import { getDatabase, ref, set, child, get, push, update } from "firebase/database"

let currentUID = "";

//btn header switch

const svg1 = ` <svg width="15" height="15"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="кнопка авторизації">
  <path
                d="M14.5 22.4v2.84h3V22.4a2.965 2.965 0 0 0 1.7-2.638v-.002a3.102 3.102 0 0 0-3.098-3.002l-.107.002H16a3.099 3.099 0 0 0-3.2 2.995v.005a2.96 2.96 0 0 0 1.682 2.632l.018.008z" />
            <path
                d="M29.5 10H27C26.688 4.408 22.078-.009 16.435-.009c-.153 0-.305.003-.457.01L16 0a9.732 9.732 0 0 0-.435-.009c-5.642 0-10.253 4.417-10.563 9.981L5.001 10h-2.5a2.5 2.5 0 0 0-2.5 2.5v17a2.5 2.5 0 0 0 2.5 2.5h27a2.5 2.5 0 0 0 2.5-2.5v-17a2.5 2.5 0 0 0-2.5-2.5zM16 2.5a8.1 8.1 0 0 1 8.498 7.473L24.5 10h-17c.316-4.213 3.812-7.511 8.079-7.511.148 0 .296.004.442.012l-.02-.001zm13.5 27h-27v-17h27z" />
</svg>`;
const svg2 = ` <svg width="15" height="15"  viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg" aria-label="кнопка авторизації">
  <path
                d="M27.837.098c-.027.025-.352.27-.725.542-4.805 3.538-7.97 6.26-10.777 9.273-3.315 3.56-6.185 7.733-8.848 12.87l-.242.47-.125-.207c-.07-.115-.317-.535-.55-.933-.79-1.352-1.192-1.892-1.985-2.663-.42-.407-1.348-1.203-1.367-1.172-.002.005-.728 1.093-1.613 2.415C.15 22.873.002 23.1.055 23.111c.427.08.75.192 1.042.363.745.438 1.417 1.14 2.237 2.34.542.795.915 1.41 2.015 3.337 1.135 1.99 1.645 2.843 1.675 2.808.013-.01.162-.352.338-.758 3.465-8.03 6.72-14.148 10.093-18.962 2.55-3.643 5.265-6.827 9.777-11.47.385-.395.688-.718.675-.718s-.043.02-.07.048z" />
</svg>`;

const useEl = document.querySelector("[data-switch]");


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

const auth = getAuth(firebaseApp);

async function writeUserDataQueue(userId, data) {
    const db = getDatabase();
    update(ref(db, 'users/' + userId), { "userDataQueue": data });
}
async function writeUserDataWatch(userId, data) {
    const db = getDatabase();
    update(ref(db, 'users/' + userId), { " userDataWatch": data });
}

async function writeUserDataFirst(userId, queue, watch, loginData) {
    try {
        const db = getDatabase();
        const reference = ref(db, 'users/' + userId);
        await set(reference, {
            userDataQueue: queue,
            userDataWatch: watch,
            userLogin: loginData
        })
    }
    catch (e) {
        console.log(e);
    }

}

async function readAllUserData(userId) {
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
        await writeUserDataFirst(userCredential.user.uid, "", "", login.value);
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
}
btnSign.addEventListener("click", createAccount);
btnLogin.addEventListener("click", loginEmailPassword);


onAuthStateChanged(auth, async user => {
    if (user) {
        console.log("___________");
        console.log("u are online");
        console.log(user.uid);
        console.log("___________")
        onAuthStateChanged = "";
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
}
btnLogOut.addEventListener("click", logout);

/*document.querySelector(".test").addEventListener("click", async () => {
    console.log(await readAllUserData(currentUID));
    await writeUserDataQueue(currentUID, ["dd", 'qq'])
    console.log(await readAllUserData(currentUID));
});*/






//apear modal window
const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
}
//





