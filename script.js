let progress = 0;
const progressBar = document.querySelector(".progress");
const loadingContainer = document.getElementById("loading-container");
const mainContent = document.getElementById("main-content");

function updateProgress() {
  if (progress < 100) {
    progress += 3;
    progressBar.style.width = progress + "%";
    setTimeout(updateProgress, 50);
  } else {
    loadingContainer.style.transition = "opacity 1s ease";
    loadingContainer.style.opacity = "0";
    setTimeout(() => {
      loadingContainer.style.display = "none";
      mainContent.style.display = "block";
      mainContent.style.opacity = "1";
    }, 500);
  }
}

updateProgress();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) =>
        link.parentElement.classList.remove("selected")
      );
      this.parentElement.classList.add("selected");
    });
  });

  const toggleThemeButton = document.getElementById("toggle-theme");
  toggleThemeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
  });

  document
    .querySelector('a[href="#contato"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      let targetSection = document.querySelector("#contato");

      window.scrollTo({
        top: targetSection.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    });

  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeIns.forEach((fadeIn) => {
    observer.observe(fadeIn);
  });
});