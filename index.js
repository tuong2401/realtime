// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  //Điền thông tin Firebase config của cá nhân vào đây
   apiKey: "AIzaSyDtloGpHflITVW05x15O-3j3thTNyYzmC8",
  authDomain: "kc326-a8778.firebaseapp.com",
  databaseURL: "https://kc326-a8778-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kc326-a8778",
  storageBucket: "kc326-a8778.appspot.com",
  messagingSenderId: "725698192111",
  appId: "1:725698192111:web:1a86b44e68b14cb0db711a"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
