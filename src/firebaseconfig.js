import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyB7zJxDcPv6knSbRL0JDUqEimhYyUCR9f8",
    authDomain: "gsm-test-4720a.firebaseapp.com",
    databaseURL: "https://gsm-test-4720a-default-rtdb.firebaseio.com",
    projectId: "gsm-test-4720a",
    storageBucket: "gsm-test-4720a.appspot.com",
    messagingSenderId: "929028700153",
    appId: "1:929028700153:web:db1e4840c2bd233060ef28",
    measurementId: "G-9R9N19XL17"
  };


  const fireDb=initializeApp(firebaseConfig)
  const db = getFirestore(fireDb);
  export { db }; // Export 'db' here

  export const auth=getAuth()
//   export default fireDb.database().ref();

