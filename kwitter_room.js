

var firebaseConfig = {
  apiKey: "AIzaSyA9qKU6IbIu7_IFOF9_PB-9PPYN8q2Y5Kw",
  authDomain: "letschat-c7f64.firebaseapp.com",
  databaseURL: "https://letschat-c7f64-default-rtdb.firebaseio.com",
  projectId: "letschat-c7f64",
  storageBucket: "letschat-c7f64.appspot.com",
  messagingSenderId: "751323359893",
  appId: "1:751323359893:web:5cc3e333db7b65d33c899c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");


document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}