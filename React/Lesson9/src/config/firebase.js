import { initializeApp } from "firebase/app";
import {
  getDatabase,
  get,
  push,
  set,
  ref,
  onValue,
  remove,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChHGpNN6Ykngrax_JCD1_-bHoj0dQSygA",
  authDomain: "test-5ddbf.firebaseapp.com",
  databaseURL: "https://test-5ddbf-default-rtdb.firebaseio.com",
  projectId: "test-5ddbf",
  storageBucket: "test-5ddbf.appspot.com",
  messagingSenderId: "147847820091",
  appId: "1:147847820091:web:9206fe62b0c080af03bd1e",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, get, push, set, ref, onValue, remove };
