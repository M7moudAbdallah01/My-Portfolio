const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

const backToTopButton = document.getElementById("Backtotop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

        const toggleBtn = document.getElementById("theme-toggle");
        const body = document.body;

        if(localStorage.getItem("theme") === "dark"){
            body.classList.add("dark-mode");
            toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }

        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            if(body.classList.contains("dark-mode")){
                toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
                localStorage.setItem("theme", "dark");
            } else {
                toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
                localStorage.setItem("theme", "light");
            }
        });


const typingElement = document.getElementById("typing");
const words = [ "Mahmoud Abdallah " , "Aspiring Penetration Tester "];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1400);  
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  let speed = isDeleting ? 100 : 150;
  setTimeout(typeEffect, speed);
}

typeEffect();
