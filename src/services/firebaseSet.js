import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export async function firebaseSet(objectToSend) {
  const firebaseConfig = {
    apiKey: "AIzaSyCTPJNB8d8MhTl30LcMs6eVA9Gd5octO4Q",
    authDomain: "uek-mobile.firebaseapp.com",
    projectId: "uek-mobile",
    storageBucket: "uek-mobile.appspot.com",
    messagingSenderId: "738793447529",
    appId: "1:738793447529:web:12ab788620d7cee6d502f8",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  await addDoc(collection(db, 'reports'), objectToSend);
}
