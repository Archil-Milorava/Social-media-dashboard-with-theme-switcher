const darkLight = document.getElementById("toggle");
const modeName = document.querySelector(".mode");

darkLight.addEventListener("click", () => {
  document.body.classList.toggle("light_mode");
  if (document.body.classList.contains("light_mode")) {
    modeName.innerHTML = "Light Mode";
  } else {
    modeName.innerHTML = "Dark Mode";
  }
});
