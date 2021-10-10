
//ADD YOUR FIREBASE LINKS HERE


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDnfmp13c-Hb3yW_p_-2rxhOeQFYjD7TRQ",
    authDomain: "practies-activity.firebaseapp.com",
    databaseURL: "https://practies-activity-default-rtdb.firebaseio.com",
    projectId: "practies-activity",
    storageBucket: "practies-activity.appspot.com",
    messagingSenderId: "584902232794",
    appId: "1:584902232794:web:1b49f3ff0c14dc29d5f3e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome"+user_name+"!" 
function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpoes:"addingroomname"
  })
  localStorage.setItem("room_name",room_name)
  window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names)
var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div> <hr>"
document.getElementById("output").innerHTML+=row 
      //End code
      });});}
getData();
function redirectToRoomName(name){
  localStorage.setItem("room_name",name)
  window.location="kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name") 
  localStorage.removeItem("room_name")
  window.location.replace("index.html")
}