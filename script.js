document.querySelector(".about-btn").addEventListener("click", () => {
  document.querySelector(".about").scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector(".works-btn").addEventListener("click", () => {
  document.querySelector(".works").scrollIntoView({
    behavior: "smooth"
  });
});
