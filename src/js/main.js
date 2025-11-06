import { gsap } from "gsap";
import VanillaTilt from "vanilla-tilt";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//loading page
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".loading-page").remove();

    var timelineIntro = gsap.timeline({
      scrollTrigger: {
        trigger: ".accueil",
        markers: true,
        start: "top top",
        end: "1000%",
        pin: true,
        scrub: true,
      },
    });

    timelineIntro.to(".crevasse", {
      scale: 4.5,
      ease: "power2.out",
      duration: 2,
    });
    timelineIntro.to(".crevasse", {
      display: "none",
      duration: 0,
    });
    timelineIntro.to(".mountain", {
      y: "50%",
      duration: 2,
    });
    timelineIntro.to(".mountain", {
      y: "50%",
      duration: 1,
    });
    timelineIntro.to(".mountain", {
      y: "100%",
      display: "none",
      duration: 1,
    });
    timelineIntro.to(
      ".logo",
      {
        y: "-150%",
        display: "none",
        duration: 1,
      },
      "<"
    );
    timelineIntro.to(".texte-apparition", {
      opacity: 1,
      duration: 2,
    });
    timelineIntro.to(".texte-apparition", {
      opacity: 1,
      duration: 0.5,
    });
    timelineIntro.to(".texte-apparition", {
      opacity: 0,
      duration: 1,
    });
    timelineIntro.to(".texte-apparition", {
      display: "none",
      duration: 0,
    });
    timelineIntro.to(".cover", {
      opacity: 1,
      duration: 1,
    });
    //TILT COVER

    const tiltElements = document.querySelectorAll(".image");

    VanillaTilt.init(tiltElements, {
      reverse: true,
      max: 10,
      speed: 1000,
      glare: true,
      "max-glare": 0.5,
    });
  }, 1000);
});
