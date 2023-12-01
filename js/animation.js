var tl = gsap.timeline({repeat: -1, yoyo: true});
tl.to(".handle", {rotation: 8, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: -3, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: 2, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: -2, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: 3, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: -8, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});

var t2 = gsap.timeline({repeat: -1, yoyo: true});
t2.to("#erwin", {rotation: -3, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});