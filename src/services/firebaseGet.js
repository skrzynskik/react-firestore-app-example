import {initializeApp} from 'firebase/app';
import {getFirestore, getDocs, collection} from 'firebase/firestore';

export async function firebaseGet(documentName) {
    console.log('aaaaaaa');
    const firebaseConfig = {
        apiKey: "AIzaSyCTPJNB8d8MhTl30LcMs6eVA9Gd5octO4Q",
        authDomain: "uek-mobile.firebaseapp.com",
        projectId: "uek-mobile",
        storageBucket: "uek-mobile.appspot.com",
        messagingSenderId: "738793447529",
        appId: "1:738793447529:web:12ab788620d7cee6d502f8"
    }

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const queryRef = collection(db, documentName || 'beverages');

    const querySnapshot = await getDocs(queryRef);

    const documents = [];

    querySnapshot.forEach(doc => {
        documents.push(doc.data());
    })
    return documents
}