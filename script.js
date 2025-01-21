// Comparison Slider
const slider = document.querySelector(".comparison-slider");
const beforeImage = document.querySelector(".before-image");
const afterImage = document.querySelector(".after-image");
const sliderHandle = document.querySelector(".slider-handle");

let isSliding = false;

// Handle mouse events
const handleMouseDown = () => (isSliding = true);
const handleMouseUp = () => (isSliding = false);

const handleMove = (e) => {
  if (!isSliding) return;

  const sliderRect = slider.getBoundingClientRect();
  const x = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
  const position = (x - sliderRect.left) / sliderRect.width;

  // Limit position between 0 and 1
  const clampedPosition = Math.max(0, Math.min(1, position));

  // Update slider position
  afterImage.style.width = `${clampedPosition * 100}%`;
  sliderHandle.style.left = `${clampedPosition * 100}%`;
};

// Add event listeners
slider.addEventListener("mousedown", handleMouseDown);
slider.addEventListener("mouseup", handleMouseUp);
slider.addEventListener("mouseleave", handleMouseUp);
slider.addEventListener("mousemove", handleMove);

// Touch events for mobile
slider.addEventListener("touchstart", handleMouseDown);
slider.addEventListener("touchend", handleMouseUp);
slider.addEventListener("touchcancel", handleMouseUp);
slider.addEventListener("touchmove", handleMove);

// Add ScrollReveal animation
sr.reveal(".comparison h2", {
  delay: 200,
  origin: "top",
});

sr.reveal(".comparison-slider", {
  delay: 300,
  origin: "bottom",
});

sr.reveal(".comparison-details", {
  delay: 400,
  origin: "bottom",
});

// Kalkulator Biaya
function calculateCost() {
  const service = document.getElementById("serviceType").value;
  const scale = document.getElementById("businessScale").value;

  // Logika perhitungan sederhana (bisa disesuaikan)
  let baseCost = 0;

  if (service === "pt") baseCost = 5000000;
  if (service === "cv") baseCost = 3000000;
  if (service === "siup") baseCost = 2000000;
  if (service === "nib") baseCost = 1500000;

  let multiplier = 1;
  if (scale === "small") multiplier = 1.2;
  if (scale === "medium") multiplier = 1.5;
  if (scale === "large") multiplier = 2;

  const finalCost = baseCost * multiplier;

  document.getElementById("estimatedCost").textContent =
    finalCost.toLocaleString("id-ID");
}

// Progress Tracker
function checkProgress() {
  const orderNum = document.getElementById("orderNumber").value;
  // Implementasi logika pengecekan progress
}

// Chatbot
const chatbot = {
  toggle() {
    const chat = document.querySelector(".chatbot");
    chat.style.display = chat.style.display === "none" ? "block" : "none";
  },

  sendQuickReply(topic) {
    // Implementasi logika chatbot
    const messages = document.querySelector(".chat-messages");
    messages.innerHTML += `<div class="user-message">${topic}</div>`;

    // Contoh respons sederhana
    setTimeout(() => {
      messages.innerHTML += `<div class="bot-message">Terima kasih telah bertanya tentang ${topic}. Customer service kami akan segera membantu Anda.</div>`;
    }, 500);
  },
};

// Toggle AI Chat
const aiToggle = document.querySelector(".ai-toggle");
const chatContainer = document.querySelector(".chat-container");

aiToggle.addEventListener("click", () => {
  chatContainer.classList.toggle("active");
});
