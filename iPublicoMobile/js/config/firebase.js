import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBafPtUAXcc_1nsza7SnAzWkBsaDq42tNk",
  authDomain: "sample-207f0.firebaseapp.com",
  databaseURL: "https://sample-207f0.firebaseio.com",
  projectId: "sample-207f0",
  storageBucket: "sample-207f0.appspot.com",
  messagingSenderId: "962338837867"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;