const backToTopButton = document.getElementById("Backtotop");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
