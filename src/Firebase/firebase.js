import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZozFs5CEjBo-CRZRvhzSBRooJDeQl65g",
  authDomain: "reacttodoapp-af996.firebaseapp.com",
  projectId: "reacttodoapp-af996",
  storageBucket: "reacttodoapp-af996.appspot.com",
  messagingSenderId: "712735502518",
  appId: "1:712735502518:web:897bb13166e3d9edacb617"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
