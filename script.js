gsap.from(".title", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power1.out" });

gsap.from(".project", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "restart none none reverse"
  },
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.3
});