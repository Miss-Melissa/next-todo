import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyABi5VT482W16Wvy6cCR9YmalMvvx_WFXU",
    authDomain: "next-todo-8bad6.firebaseapp.com",
    projectId: "next-todo-8bad6",
    storageBucket: "next-todo-8bad6.appspot.com",
    messagingSenderId: "382645992790",
    appId: "1:382645992790:web:abe9e0493793399a39aaf7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)