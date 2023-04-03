import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export async function firebaseGet() {
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

  const hotels = []

  const hotelSnapshot = await getDocs(collection(db, 'hotels'));
  const ratingSnapshot = await getDocs(collection(db, 'ratings'));
  const reportSnapshot = await getDocs(collection(db, 'reports'))

  hotelSnapshot.forEach(hotel => {
    const hotelObj = hotel.data()
    hotelObj['rating'] = []
    hotelObj['reports'] = []
    hotels.push(hotelObj)
  });

  ratingSnapshot.forEach(rating => {
    const ratingObj = rating.data();
    const hotelName = ratingObj.hotel;

    hotels.forEach(hotel => {
        if(hotel.name === hotelName){
            hotel.rating.push(ratingObj.rating)
        }
    })
  })

  reportSnapshot.forEach(report => {
    const reportObj = report.data();
    const hotelName = reportObj.hotel;

    hotels.forEach(hotel => {
        if(hotel.name === hotelName){
            hotel.reports.push(reportObj.message)
        }
    })
  })
  return hotels
}