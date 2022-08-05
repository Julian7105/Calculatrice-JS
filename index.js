const ecran = document.querySelector(".ec");
const boutons = document.querySelectorAll(".btn");

function ring() {
  audio = new Audio();
  audio.src = "touche.mp3";
  audio.play();
}

boutons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    ecran.textContent += e.target.id;
    ring();
  });
});

eff.addEventListener("click", () => {
  ecran.textContent = "";
  ring();
});

egale.addEventListener("click", () => {
  ecran.textContent = eval(ecran.textContent).toLocaleString();
  ring();
});
