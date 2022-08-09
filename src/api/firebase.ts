import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD6Qp-LC50Je-9kR0sjLtsCSuCRi0oB31A',
  authDomain: 'mynamedown-d28e6.firebaseapp.com',
  projectId: 'mynamedown-d28e6',
  storageBucket: 'mynamedown-d28e6.appspot.com',
  messagingSenderId: '1010781390517',
  appId: '1:1010781390517:web:a55a33822c33465b3c20fc',
  measurementId: 'G-7T817DTZ49',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);
