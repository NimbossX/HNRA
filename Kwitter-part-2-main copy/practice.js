  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDJr-Ih4nCnUnerS5EPaRQ0b3kZjF1AakM",
    authDomain: "class-test-ced3e.firebaseapp.com",
    databaseURL: "https://class-test-ced3e-default-rtdb.firebaseio.com",
    projectId: "class-test-ced3e",
    storageBucket: "class-test-ced3e.appspot.com",
    messagingSenderId: "84531601029",
    appId: "1:84531601029:web:64dee97e7fdb597f7293ec",
    measurementId: "G-QBYVYXPYBZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"addinguser"
});
}