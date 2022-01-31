var firebaseConfig = {
    apiKey: "AIzaSyDv8JTeZ1CaFSwFNwPGIXL7BeACzVT8lVE",
    authDomain: "lets-chat-app-87c1b.firebaseapp.com",
    databaseURL: "https://lets-chat-app-87c1b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-87c1b",
    storageBucket: "lets-chat-app-87c1b.appspot.com",
    messagingSenderId: "770823517694",
    appId: "1:770823517694:web:3310861055946a9c437caf",
    measurementId: "G-KBLG78LH4Y"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var userName=localStorage.getItem("user");
    var room_name=localStorage.getItem("roomnames");
    function send(){
          text_input=document.getElementById("send").value;
          firebase.database().ref(room_name).push({
                name:userName,
                message:text_input,
                like:0
          });
          document.getElementById("send").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+ name1 + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>" + message + "<h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>"+ like+"</span></button><hr>";

row=name_with_tag + message_with_tag +like_button + span_with_tag
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function updatelike(message_id){
console.log("clicked on like button - " + message_id);
button_id=message_id
likes=document.getElementById(button_id).value
updated_likes= Number(likes) + 1;
console.log(updated_likes);


firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
});


function Logout(){
      localStorage.removeItem("user");
      localStorage.removeItem("roomnames");
      window.location="index.html";
}
}