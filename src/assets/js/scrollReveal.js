window.sr = ScrollReveal({ reset: false });
// sr.reveal(".sr1", { delay: 500 });
// sr.reveal(".sr2", { delay: 700 });
// sr.reveal(".sr3", { delay: 900 });
// sr.reveal(".sr4", { delay: 500 });
// sr.reveal(".sr5", { delay: 700 });
// sr.reveal(".sr6", { delay: 900 });

sr.reveal(".who-we-are__contact-number", {
  origin: "bottom",
  opacity: 0,
  delay: 500,
  easing: "ease-out"
});

sr.reveal(".icon-container__icon", {
  delay: 500,
  interval: 200,
  opacity: 0,
  scale: 1,
  easing: "ease-out"
});

sr.reveal(".projects-hero__heading", {
  delay: 3000,
  origin: "bottom",
  distance: "3000"
});
