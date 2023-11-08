import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD0bbJ4R6ZBk-Z5Efcpi-iesTNluyR-0Us',
  authDomain: 'couses-7cac1.firebaseapp.com',
  projectId: 'couses-7cac1',
  storageBucket: 'couses-7cac1.appspot.com',
  messagingSenderId: '941565053247',
  appId: '1:941565053247:web:c393a12ee50b1589dfeb8a',
  measurementId: 'G-25QWNV6X2L',
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
