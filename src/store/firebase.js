/**
*
* Kazzy Rantsimele kazzytheman345@gmail.com medium.com/@gentkazzy
*
**/

import fb from "firebase"
//const msg = firebase.messaging();

var config = {
  apiKey: "AIzaSyCwJ8rGxa61vZN1n82DuhGpjiLnn3Gtxvo",
  authDomain: "demo2-eeb3c.firebaseapp.com",
  databaseURL: "https://demo2-eeb3c.firebaseio.com",
  projectId: "demo2-eeb3c",
  storageBucket: "demo2-eeb3c.appspot.com",
  messagingSenderId: "237085131932"
  };
var firebase = fb.initializeApp(config);
console.log('fb initialized!!')
export default firebase