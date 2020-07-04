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

// gsap.to(".green", { duration: 2, x: 600, repeat: -1, yoyo: true }); // repeat: -1; repeat for ever
// gsap.to(".pink", { duration: 2, x: 600 });

// gsap.to(".green", { duration: 3, x: 600, ease: "bounce" }); // Ease Bounce
// gsap.to(".pink", { duration: 3, x: 600, ease: "linear" }); // Ease Linear

// gsap.to(".green", { duration: 3, x: 600, ease: "bounce.in" }); // Ease Bounce.in start at begining
// gsap.to(".pink", { duration: 3, x: 600, ease: "linear" }); // Ease Linear

// gsap.to(".green", { duration: 3, x: 600, ease: "bounce.inOut" }); // Ease Bounce.inOut start at begining and end in last
// gsap.to(".pink", { duration: 3, x: 600, ease: "linear" }); // Ease Linear

// gsap.to(".green", { duration: 3, x: 600, ease: "elastic" }); // Ease elastic
// gsap.to(".pink", { duration: 3, x: 600, ease: "linear" }); // Ease Linear

// gsap.to(".green", { duration: 3, x: 600, ease: "back" }); // Ease back
// gsap.to(".pink", { duration: 3, x: 600, ease: "linear" }); // Ease Linear

// gsap.to(".green", { duration: 3, x: 600, ease: "back(6)" }); // Ease back run little fast
// gsap.to(".pink", { duration: 3, x: 600, ease: "linear" }); // Ease Linear

// gsap.to("#freds img", { y: -100, stagger: 0.1 });
// gsap.to("#freds img", {
//   y: -100,
//   stagger: {
//     each: 0.2,
//   },
// }); // each have 0.2s

// gsap.to("#freds img", {
//   y: -100,
//   stagger: {
//     amount: 1,
//   },
// }); // all sharing 1s
// gsap.to("#freds img", {
//   y: -100,
//   stagger: {
//     each: 0.2,
//     from: "end",
//   },
// }); // starting from end
// gsap.to("#freds img", {
//   y: -100,
//   stagger: {
//     each: 0.2,
//     from: "center",
//   },
// }); // starting from center
// gsap.to("#freds img", {
//   y: -100,
//   stagger: {
//     amount: 0.2,
//     from: "edges",
//   },
// }); // starting from center

var tween = gsap.to(".green", {
  duration: 3,
  x: 600,
  ease: "linear",
  paused: true,
});

document.getElementById("play").onclick = () => tween.play(); //Play is the method of tween
document.getElementById("pause").onclick = () => tween.pause(); //Play is the method of tween
document.getElementById("reverse").onclick = () => tween.reverse(); //Play is the method of tween
document.getElementById("restart").onclick = () => tween.restart(); //Play is the method of tween
