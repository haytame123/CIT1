const buttons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {
button.addEventListener("click", () => {
pages.forEach(p => p.classList.remove("active"));
buttons.forEach(b => b.classList.remove("active"));
document.getElementById(button.dataset.page).classList.add("active");
button.classList.add("active");
});
});

const form = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
e.preventDefault();
formMessage.style.color="lime";
formMessage.textContent="Candidature envoyée avec succès.";
form.reset();
});
