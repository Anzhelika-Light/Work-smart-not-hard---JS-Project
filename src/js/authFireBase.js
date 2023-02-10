import { initializeApp } from "firebase/app"
import {
    getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, AuthErrorCodes, onAuthStateChanged, signOut
} from 'firebase/auth'
import 'notiflix/dist/notiflix-3.2.6.min.css';
import Notiflix from 'notiflix';

import { getDatabase, ref, set, child, get, push, update } from "firebase/database"

let currentUID = "";


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