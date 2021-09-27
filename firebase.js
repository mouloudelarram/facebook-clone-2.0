import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-Abgwh_UjiPcf_KPXhAzan_N9c1xNBFU",
  authDomain: "el-arram-7fafd.firebaseapp.com",
  projectId: "el-arram-7fafd",
  storageBucket: "el-arram-7fafd.appspot.com",
  messagingSenderId: "578947120549",
  appId: "1:578947120549:web:07a712f7b020cec635bc4c"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db =app.firestore();
const storage = firebase.storage();

export { db, storage};












/*import { initializeApp , getApp, } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage} from 'firebase/storage';
import { Appf } from './firebase'
import * as App from "firebase/app";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Abgwh_UjiPcf_KPXhAzan_N9c1xNBFU",
  authDomain: "el-arram-7fafd.firebaseapp.com",
  projectId: "el-arram-7fafd",
  storageBucket: "el-arram-7fafd.appspot.com",
  messagingSenderId: "578947120549",
  appId: "1:578947120549:web:07a712f7b020cec635bc4c"
};

const app = !App.getApp.length ? App.initializeApp(firebaseConfig) : App.getApp();
const db = getFirestore(app);

const storage = getStorage()

export {db, storage};
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
/*import firebase from './firebase';
import { initializeApp, getApps  } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Abgwh_UjiPcf_KPXhAzan_N9c1xNBFU",
  authDomain: "el-arram-7fafd.firebaseapp.com",
  projectId: "el-arram-7fafd",
  storageBucket: "el-arram-7fafd.appspot.com",
  messagingSenderId: "578947120549",
  appId: "1:578947120549:web:07a712f7b020cec635bc4c"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = app.getFirestore();

const storage = getStorage();

export {db, storage};
*/
/*import firebase from 'firebase/app';
import 'firebase/storage';
//import "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Abgwh_UjiPcf_KPXhAzan_N9c1xNBFU",
  authDomain: "el-arram-7fafd.firebaseapp.com",
  projectId: "el-arram-7fafd",
  storageBucket: "el-arram-7fafd.appspot.com",
  messagingSenderId: "578947120549",
  appId: "1:578947120549:web:07a712f7b020cec635bc4c"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export {db, storage};
*/