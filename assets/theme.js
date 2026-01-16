const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
