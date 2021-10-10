const firebaseConfig = {
      apiKey: "AIzaSyD3aJAYE2B6xK9a5oaLhE70JaAR_pnckaA",
      authDomain: "hnra-7d4db.firebaseapp.com",
      projectId: "hnra-7d4db",
      storageBucket: "hnra-7d4db.appspot.com",
      messagingSenderId: "454193296808",
      appId: "1:454193296808:web:e14f65e198c8ba8e54199d",
      measurementId: "G-MNY4G0F7VC"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

    function send1(){
          msg=document.getElementById("message").value
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0 
          })
          document.getElementById("message").value=""
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data)
 name = message_data['name'];
 message = message_data['message'];
 like = message_data['like']

  name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick' > </h4>"
 message_with_tag="<h4 class='message_h4'>"+ message+"</h4>"
 like_button="<button id="+firebase_message_id+" onclick='updatelike(this.id)' class='btn btn-warning'> "
 span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span> </button> <hr> "
 row=name_with_tag+message_with_tag+like_button+span_with_tag;
 document.getElementById("output").innerHTML+=row;
       //End code
      } });  }); }
getData();
function updatelike(message_id){
      console.log(message_id)
      button_id=message_id
      likes=document.getElementById(button_id).value
      updatelikes=Number(likes)+1
      console.log(updatelikes)
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelikes
      })
}
function logout(){
      localStorage.removeItem("user_name") 
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}