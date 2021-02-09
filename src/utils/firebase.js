import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDycMUzoSYpiUGlyaKK6gSjLJVwHQHVwPE",
	authDomain: "webspace-a7ab6.firebaseapp.com",
	projectId: "webspace-a7ab6",
	storageBucket: "webspace-a7ab6.appspot.com",
	messagingSenderId: "465751365228",
	appId: "1:465751365228:web:371bb4c2816511b9556a49",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
