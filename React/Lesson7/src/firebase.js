import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  remove,
  onValue,
  off,
} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtjITDCY11yPnqpfWy68vFIWjrKk9yu2M",
  authDomain: "realtime-chat-16552.firebaseapp.com",
  projectId: "realtime-chat-16552",
  storageBucket: "realtime-chat-16552.appspot.com",
  messagingSenderId: "604135164550",
  appId: "1:604135164550:web:f88986d53ede07e6badf07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
export { ref, set, push, get, remove, onValue };
