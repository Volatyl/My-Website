const header = document.getElementById("h1a");

header.addEventListener("mouseenter", function () {
  header.style.color = "pink";
});

header.addEventListener("mouseleave", function () {
  header.style.color = "orange";
});
