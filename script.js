// --- Auto-generated student credentials ---
const studentLogins = [
    { id: "STU001", pin: "57391" },
    { id: "STU002", pin: "19284" },
    { id: "STU003", pin: "83746" },
    { id: "STU004", pin: "62839" },
    { id: "STU005", pin: "40293" },
    { id: "STU006", pin: "93715" },
    { id: "STU007", pin: "10562" },
    { id: "STU008", pin: "48620" },
    { id: "STU009", pin: "23471" },
    { id: "STU010", pin: "78139" },
    { id: "STU011", pin: "30984" },
    { id: "STU012", pin: "69023" },
    { id: "STU013", pin: "51938" },
    { id: "STU014", pin: "83209" },
    { id: "STU015", pin: "14672" }
  ];
  
  // --- Create chat bubble and login form ---
  document.addEventListener("DOMContentLoaded", () => {
    // Bubble
    const bubble = document.createElement("div");
    bubble.id = "chat-bubble";
    bubble.innerHTML = "💬";
    document.body.appendChild(bubble);
  
    // Login box
    const loginBox = document.createElement("div");
    loginBox.id = "login-box";
    loginBox.innerHTML = `
      <input type="text" id="student-id" placeholder="Enter student ID" />
      <input type="password" id="student-pin" placeholder="Enter 5-digit pin" />
      <button onclick="validateStudent()">Login</button>
    `;
    document.body.appendChild(loginBox);
  
    // Styles
    const style = document.createElement("style");
    style.innerHTML = `
      #chat-bubble {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 14px;
        font-size: 22px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 998;
      }
      #login-box {
        display: none;
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        z-index: 999;
      }
      #login-box input {
        display: block;
        margin-bottom: 10px;
        padding: 8px;
        width: 100%;
      }
      #login-box button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px;
        width: 100%;
        border-radius: 6px;
        cursor: pointer;
      }
      #login-box button:hover {
        background-color: #45a049;
      }
    `;
    document.head.appendChild(style);
  
    // Bubble click opens login
    bubble.addEventListener("click", () => {
      loginBox.style.display = "block";
    });
  });
  
  // --- Validation function ---
  function validateStudent() {
    const id = document.getElementById("student-id").value.trim().toUpperCase();
    const pin = document.getElementById("student-pin").value.trim();
  
    const isValid = studentLogins.some(student => student.id === id && student.pin === pin);
  
    if (isValid) {
      document.getElementById("login-box").style.display = "none";
      loadChatbot();
    } else {
      alert("Access Denied! Invalid ID or PIN.");
    }
  }
  
  // --- Load Botsonic after login ---
  function loadChatbot() {
    (function (w, d, s, o, f, js, fjs) {
      w["botsonic_widget"] = o;
      w[o] =
        w[o] ||
        function () {
          (w[o].q = w[o].q || []).push(arguments);
        };
      (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    })(window, document, "script", "Botsonic", "https://widget.botsonic.com/CDN/botsonic.min.js");
  
    Botsonic("init", {
      serviceBaseUrl: "https://api-azure.botsonic.ai",
      token: "0391a713-5499-4329-bcd2-2b72bc482470",
    });
  }
  