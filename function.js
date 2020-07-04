// gsap.to("img", { x: 400 }); //Default during 0.5s
// gsap.to("img", { x: 400, duration: 3 });
// gsap.to("img", { x: 400, y: 200, scale: 3, duration: 3 });
// gsap.to("img", { x: 400, y: 200, scale: 3, rotation: 360, duration: 3 }); //For all img tag
// gsap.to(".fred", { x: 400, y: 200, scale: 3, rotation: 360, duration: 3 });
// gsap.from(".fred", { x: 400, y: 200, scale: 3, rotation: 360, duration: 3 });
// gsap.fromTo(".fred", { x: 700, y: 400 }, { x: 400, y: 200, duration: 3 });
// gsap.fromTo(
//   ".fred",
//   { x: 700, y: 400, opacity: 0 },
//   { x: 400, y: 200, scale: 2, duration: 3 }
// ); // Show nothing as you add opacity: 0
// gsap.fromTo(
//   ".fred",
//   { x: 700, y: 400, opacity: 0 },
//   { x: 400, y: 200, scale: 2, opacity: 1, duration: 3 }
// );

// gsap.to(".green", { duration: 2, x: 600 });
// gsap.to(".pink", { duration: 2, x: 600, delay: 2 }); // Delay

// gsap.to(".green", { duration: 2, x: 600, repeat: 1 }); // Repeat
// gsap.to(".pink", { duration: 2, x: 600 });

// gsap.to(".green", { duration: 2, x: 600, repeat: 1, yoyo: true }); // yoyo
// gsap.to(".pink", { duration: 2, x: 600 });

gsap.to(".green", { duration: 2, x: 600, repeat: -1, yoyo: true }); // repeat: -1; repeat for ever
gsap.to(".pink", { duration: 2, x: 600 });
