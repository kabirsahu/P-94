
var firebaseConfig = {
      apiKey: "AIzaSyCc0PDh6iO9nmEl9REIxJXDpIpVhMNGIXk",
      authDomain: "porect-kwitter.firebaseapp.com",
      databaseURL: "https://porect-kwitter-default-rtdb.firebaseio.com",
      projectId: "porect-kwitter",
      storageBucket: "porect-kwitter.appspot.com",
      messagingSenderId: "825423008564",
      appId: "1:825423008564:web:7c8bbe8b81c78bfd92cb61",
      measurementId: "G-5Y4Y082DSP"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
