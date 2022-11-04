// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAj3ib3VZxospIm2WjX0aUM335cVJuQi5M',
    authDomain: 'fb-bdreact-4f542.firebaseapp.com',
    projectId: 'fb-bdreact-4f542',
    storageBucket: "fb-bdreact-4f542.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
