import { firebaseConfig } from "./firebase-config.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// Initialize Firebase app, authentication, and Firestore.
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Initializes user session handling after DOM content is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, async (user) => {
    let initials = "G";
    if (user) {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        initials = userDoc.data().name
          ? getInitials(userDoc.data().name)
          : initials;
      }
    }
    displayUserInitials(initials);
    setupLogout();
  });
});

/**
 * Generates initials from a user's full name.
 *
 * @param {string} name - The user's full name.
 * @returns {string} The generated initials.
 */
function getInitials(name) {
  const nameParts = name.split(" ");
  const firstInitial = nameParts[0].charAt(0);
  const lastInitial = nameParts.length > 1 ? nameParts[1].charAt(0) : "";
  return firstInitial + lastInitial;
}

/**
 * Displays the user's initials in the DOM element with the ID `user-initials`.
 *
 * @param {string} initials - The user's initials to display.
 */
function displayUserInitials(initials) {
  const checkExist = setInterval(() => {
    const initialsElement = document.getElementById("user-initials");
    if (initialsElement) {
      initialsElement.textContent = initials;
      clearInterval(checkExist);
    }
  }, 100);
}

/**
 * Sets up the logout button functionality, handling user sign-out.
 */
function setupLogout() {
  const logoutButton = document.getElementById("logoutID");
  if (logoutButton) {
    logoutButton.addEventListener("click", (event) => {
      event.preventDefault();
      signOut(auth)
        .then(() => {
          window.location.href = "../index.html";
        })
        .catch((error) => {
          // Handle sign-out error
        });
    });
  }
}

/**
 * Adds event listeners for dropdown management and logout functionality.
 */
document.addEventListener("DOMContentLoaded", function () {
  setupLogout();
  window.onclick = function (event) {
    if (!event.target.matches(".user-initials")) {
      const dropdowns = document.getElementsByClassName("dropdown-menu");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
});
