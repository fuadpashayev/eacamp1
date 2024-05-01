import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBasOJysRXtTbUy-mtc--vkMEUoLZKLKp0",
  authDomain: "eacampm1.firebaseapp.com",
  projectId: "eacampm1",
  storageBucket: "eacampm1.appspot.com",
  messagingSenderId: "66840724038",
  appId: "1:66840724038:web:3f6d03fb3d96e4a240c047",
  databaseURL:
    "https://eacampm1-default-rtdb.europe-west1.firebasedatabase.app",
};

const username = localStorage.getItem("name");

document.getElementById("username").textContent = username;

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const messageRef = ref(database, "messages");

const messagesContainer = document.getElementById("messages");

onValue(messageRef, (snap) => {
  const data = snap.val();
  console.log({ data });

  if (data) {
    const messagesArr = Object.keys(data).map((id) => {
      const message = data[id];
      return `
            <div class="message">
                <div class="message-author">${message.author}</div>
                <div class="message-text">${message.text}</div>
                <div class="message-time">${message.time}</div>
                ${
                  message.author === username
                    ? `
                  <span class="message-delete" id=${id}>&times;</span>
                `
                    : ""
                }
            </div>
        `;
    });
    messagesContainer.innerHTML = messagesArr.join("");
    messagesContainer.scrollTo({
      behavior: "smooth",
      top: messagesContainer.scrollHeight,
    });
  } else {
    messagesContainer.innerHTML = "";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("message-delete")) {
    const deleteMessageRef = ref(database, `messages/${e.target.id}`);
    console.log(`message #${e.target.id} is deleting`);
    remove(deleteMessageRef);
  }
});

const sendMessage = () => {
  const messageBox = document.getElementById("message-box");
  const date = new Date();

  push(messageRef, {
    author: username,
    text: messageBox.value,
    time: `${date.getHours()}:${date.getMinutes()}`,
  });

  messageBox.value = "";
};

document.addEventListener("keydown", ({ key }) => {
  if (key === "Enter") {
    sendMessage();
  }
});

document.getElementById("send-message").addEventListener("click", sendMessage);

push(ref(database, `messageBox/1289/messages/a/b/c/d/df/dfg/dfg/dfg/dfg/df`), {
  text: "Salam",
  time: "12:01",
  author: "Pakize",
});
