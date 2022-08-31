// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAH26PYQISO-FOuzLK28Mdi0ptERJluPus",
      authDomain: "c-93-66e0c.firebaseapp.com",
      projectId: "c-93-66e0c",
      storageBucket: "c-93-66e0c.appspot.com",
      messagingSenderId: "814931267218",
      appId: "1:814931267218:web:32de7177f116837374e04b",
      measurementId: "G-CFE39RLDH7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
