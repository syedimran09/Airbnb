const toggleBtn = document.getElementById("darkMode");
const toggleLabel = document.getElementById('toggleLabel');
const body = document.body;
const navbar = document.getElementById("navbar");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  navbar.classList.add("dark-mode");
  toggleLabel.textContent = "Light mode";
  toggleBtn.classList.replace("btn-outline-dark", "btn-outline-light");
}

//Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  navbar.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleLabel.textContent = "Light Mode";
    toggleBtn.classList.replace("btn-outline-dark", "btn-outline-light");
    localStorage.setItem("theme", "dark");
  } else {
    toggleLabel.textContent = "Dark Mode";
    toggleBtn.classList.replace("btn-outline-light", "btn-outline-dark");
    localStorage.setItem("theme", "light");
  }
});

//Star rating values

const stars = document.querySelectorAll("#starRating i");
const ratingInput = document.getElementById("rating");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const rating = index + 1;
    ratingInput.value = rating;

    stars.forEach((s, i) => {
      s.className =
        i < rating
          ? "fa-solid fa-star text-warning"
          : "fa-regular fa-star text-secondary";
    });
  });
});
