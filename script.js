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
