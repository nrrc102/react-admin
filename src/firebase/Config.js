import {FirebaseAuthProvider, FirebaseDataProvider, FirebaseRealTimeSaga} from 'react-admin-firebase';

const config = {
    apiKey: "AIzaSyBZ_mF5QjqVFmUPvrCIHK2aEnGLucbABAw",
    authDomain: "react-redux-ecommerce-9bf1e.firebaseapp.com",
    projectId: "react-redux-ecommerce-9bf1e",
    storageBucket: "react-redux-ecommerce-9bf1e.appspot.com",
    messagingSenderId: "257094583096",
    appId: "1:257094583096:web:db66db61be56bb41b537cd"
}


const dataProvider = FirebaseAuthProvider(config);
const authProvidere = FirebaseAuthProvider(config);
const firebaseRealTime = FirebaseRealTimeSaga(dataProvider);