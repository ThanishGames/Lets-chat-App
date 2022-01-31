function addUser(){
    var board=document.getElementById("user_name").value;
    localStorage.setItem("user",board);
    window.location="kwitter_room.html";
}