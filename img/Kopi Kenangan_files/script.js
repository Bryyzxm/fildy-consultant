const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = (event) => {
  event.preventDefault(); // Mencegah redirect ke bagian atas
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-buttons");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box");
  const searchBtn = document.querySelector("#search");
  const clearBtn = document.querySelector("#clear-search");

  // Ketika search icon di klik
  searchBtn.onclick = (e) => {
    e.preventDefault();
    searchForm.classList.toggle("active");
    searchBox.focus();
  };

  // Klik di luar search form untuk menutup
  document.addEventListener("click", function (e) {
    if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove("active");
    }
  });

  // Tampilkan tombol clear ketika ada text
  searchBox.addEventListener("input", () => {
    clearBtn.classList.toggle("visible", searchBox.value.length > 0);
  });

  // Clear search box ketika tombol clear diklik
  clearBtn.addEventListener("click", () => {
    searchBox.value = "";
    clearBtn.classList.remove("visible");
  });
});

// Chat functionality
const chatForm = document.getElementById("chatForm");
const chatContainer = document.getElementById("chatContainer");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");

// Mengambil pesan dari localStorage saat halaman dimuat
const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
displayMessages(savedMessages);

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const message = messageInput.value;
  const time = new Date().toLocaleString();

  const newMessage = {
    name: name,
    message: message,
    time: time,
  };

  // Menambah pesan baru ke array dan menyimpan ke localStorage
  savedMessages.push(newMessage);
  localStorage.setItem("chatMessages", JSON.stringify(savedMessages));

  // Menampilkan pesan
  displayMessages(savedMessages);

  // Reset form
  messageInput.value = "";
});

function displayMessages(messages) {
  chatContainer.innerHTML = messages
    .map(
      (msg) => `
    <div class="chat-message">
      <div class="name">${msg.name}</div>
      <div class="message">${msg.message}</div>
      <div class="time">${msg.time}</div>
    </div>
  `
    )
    .join("");

  // Auto-scroll ke pesan terbaru
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Toggle Search Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const clearButton = document.querySelector("#clear-search");
const searchButton = document.querySelector("#search-btn");

document.querySelector("#search").onclick = (e) => {
  e.preventDefault(); // Mencegah default action
  searchForm.classList.toggle("active");
  searchBox.focus();
};

// Event listener untuk input
searchBox.addEventListener("input", function () {
  const hasValue = this.value.length > 0;
  clearButton.classList.toggle("visible", hasValue);
  searchButton.classList.toggle("visible", hasValue);
});

// Event listener untuk clear button
clearButton.addEventListener("click", function () {
  searchBox.value = "";
  clearButton.classList.remove("visible");
  searchButton.classList.remove("visible");
  searchBox.focus();
});

// Ketika shopping cart button di klik

document.querySelector("#shopping-cart-button").onclick = (event) => {
  event.preventDefault(); // Mencegah redirect ke bagian atas
  shopCart.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const shopCart = document.querySelector(".shopping-cart");
const cartItem = document.querySelector(".cart-item");
const shopCartButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!shopCartButton.contains(e.target) && !shopCart.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
