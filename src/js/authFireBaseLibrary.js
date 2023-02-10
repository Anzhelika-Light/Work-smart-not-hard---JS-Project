


//////////////////////////////////
import { initializeApp } from "firebase/app"
import {
    getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, AuthErrorCodes, onAuthStateChanged, signOut
} from 'firebase/auth'
import 'notiflix/dist/notiflix-3.2.6.min.css';
import Notiflix from 'notiflix';

import { getDatabase, ref, set, child, get, push, update } from "firebase/database"

let currentUID = "";
import { auth } from "./authFireBase.js"
//btn header switch





