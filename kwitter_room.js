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
  var user_name=localStorage.getItem("user");
    document.getElementById('H3').innerHTML="Welcome "+user_name+"!";

    function Go(){
          var Roomnames=document.getElementById("textinput2").value;
          firebase.database().ref("/").child(Roomnames).update({
                Water:"Liquid"
          });
          localStorage.setItem("roomnames",Roomnames);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room_names="+Room_names);
     Row="<div class='room_name' id="+Room_names+" onclick='Ruler(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=Row;
      //End code
      });});}
getData();
function Ruler(name){
      console.log(name);
      localStorage.setItem("roomnames",name);
      window.location="kwitter_page.html";
}

function room(){
      localStorage.removeItem("roomnames");
      localStorage.removeItem("user");
      window.location="index.html";
}