const text = "FullStack web depelover";
const typingSpeed = 100; // Kecepatan pengetikan (ms per karakter)
const textContainer = document.getElementById("typewriter-text");

function typeText() {
  let charIndex = 0;
  textContainer.innerHTML = ""; // Mengosongkan konten sebelum animasi berulang

  function typeNextChar() {
    if (charIndex < text.length) {
      textContainer.innerHTML += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeNextChar, typingSpeed);
    } else {
      setTimeout(typeText, 2000); // Menunggu 2 detik sebelum memulai kembali
    }
  }

  typeNextChar();
}

typeText();

// hamburger menu

const slide = document.querySelector("div.container-navbar ul");
const hamburger = document.getElementById("menu");
const x = document.getElementById("x");
hamburger.onclick = function () {
  slide.classList.toggle("slide");
  hamburger.classList.toggle("fa-x",);
};

// x.onclick = function () {
//   slide.classList.("");
// };
