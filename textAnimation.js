gsap.registerPlugin(Observer);

const texts = document.querySelectorAll(".rail h4");

// duplicamos contenido para loop infinito real
const rail = document.querySelector(".rail");
rail.innerHTML += rail.innerHTML;

gsap.to(".rail", {
  xPercent: -50,
  duration: 20,
  repeat: -1,
  ease: "linear"
});
