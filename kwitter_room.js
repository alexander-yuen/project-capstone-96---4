
   //Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7sugBE6eJ4uGjo23kPxnzVbSA14On4qg",
    authDomain: "projectkwitter-42516.firebaseapp.com",
    databaseURL: "https://projectkwitter-42516-default-rtdb.firebaseio.com",
    projectId: "projectkwitter-42516",
    storageBucket: "projectkwitter-42516.appspot.com",
    messagingSenderId: "69748068924",
    appId: "1:69748068924:web:675b776fe749515f6f6939"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


localStorage.setItem("user_name",username);

function addRoom(){
    room_name = document.getElementById("room_name").value;
}

firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"})

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_roo,.html";


    function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
    }
    
    function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
    }

    function addRoom(){
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
    
        window.location = "kwitter_room.html";
    }