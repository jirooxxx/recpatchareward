// Import Firebase scripts in your HTML head before this file
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"></script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase config - REPLACE WITH YOUR OWN
const firebaseConfig = {
    apiKey: "AIzaSyAEzZYKQNqQLteWsZmDJKq0sYVhvG6YE9E",
    authDomain: "rewardly-go.firebaseapp.com",
    projectId: "rewardly-go",
    storageBucket: "rewardly-go.appspot.com",
    messagingSenderId: "587297879139",
    appId: "1:587297879139:web:50499dff5b83aa420a3456",
    measurementId: "G-C3V2KQ8TWT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get Telegram User
let telegramUser = null;

window.onload = async () => {
  if (window.Telegram.WebApp) {
    telegramUser = window.Telegram.WebApp.initDataUnsafe.user;

    if (telegramUser) {
      await setupUser(telegramUser);
    } else {
      alert("Telegram login failed. Please open this in Telegram.");
    }
  } else {
    alert("Telegram WebApp not detected. Open via Telegram.");
  }
};

// Create or update user in Firestore
async function setupUser(user) {
  const userRef = doc(db, "users", user.id.toString());
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      name: user.first_name,
      username: user.username || "",
      coins: 0,
      streakDay: 1,
      lastClaimed: null,
      tasks: {
        twitter: false,
        telegram: false,
        discord: false,
        youtube: false
      }
    });
  }
}

export { db, telegramUser };
