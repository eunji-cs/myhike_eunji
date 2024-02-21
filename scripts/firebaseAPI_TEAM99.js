//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDVzDtE-nqEMOYsWK4XG7wwn83OjJlGeuQ",
    authDomain: "comp1800-202410-demo-4b86b.firebaseapp.com",
    projectId: "comp1800-202410-demo-4b86b",
    storageBucket: "comp1800-202410-demo-4b86b.appspot.com",
    messagingSenderId: "652423483042",
    appId: "1:652423483042:web:2b4281503058b5fad751fb"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
