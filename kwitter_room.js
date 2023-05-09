
//ADICIONE SEUS LINKS DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCWYbdxG7S2YmVk4U3jI1va2JNMJImJ9qg",
  authDomain: "turma19h-jtij.firebaseapp.com",
  databaseURL: "https://turma19h-jtij-default-rtdb.firebaseio.com",
  projectId: "turma19h-jtij",
  storageBucket: "turma19h-jtij.appspot.com",
  messagingSenderId: "342423986264",
  appId: "1:342423986264:web:46d52e70a1ca80e0bbea2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() 
{  
  firebase.database().ref("/").on('value', function(snapshot) 
  { 
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
    { 
      childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
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

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
