// Handles
var tl = gsap.timeline({repeat: -1, yoyo: true});
tl.to(".handle", {rotation: 8, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: -3, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: 2, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: -2, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: 3, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
tl.to(".handle", {rotation: -8, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});

// Idle Animation for Characters

//Eye blinking
var teye = gsap.timeline({repeat: -1});




// Erwin
var te = gsap.timeline({repeat: -1, yoyo: true});
te.to("#erwin-larm", {rotation: 8, transformOrigin: "top center", ease: "power1.inOut", duration: 1});
te.to("#erwin-larm", {rotation: -2, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
te.to("#erwin-beard", {rotation: 0, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
te.to("#erwin-beard", {rotation: -3, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});

var teeyes = gsap.timeline({repeat: -1});
teeyes.to("#erwin-eyes", {scaleY: 0.1, transformOrigin: "center", duration: 5, delay: 2});
teeyes.to("#erwin-eyes", {scaleY: 1, transformOrigin: "center", duration: 1, delay: 5});

// Trisha
var tt = gsap.timeline({repeat: -1, yoyo: true});
tt.to("#trisha-arms", {rotation: 8, transformOrigin: "top center", ease: "power1.inOut", duration: 1});

var tteyes = gsap.timeline({repeat: -1});
tteyes.to("#trisha-eyes", {scaleY: 0, transformOrigin: "center", duration: 0.1, delay: 5});
tteyes.to("#trisha-eyes", {scaleY: 1, transformOrigin: "center", duration: 0.1});

tteyes.to("#daisy-eyes", {scaleY: 0, transformOrigin: "center", duration: 0.1, delay: 3});
tteyes.to("#daisy-eyes", {scaleY: 1, transformOrigin: "center", duration: 0.1});

//Jorge

var tjr = gsap.timeline({repeat: -1});
tjr.to("#jorge-arm", {rotation: 8, transformOrigin: "top center", ease: "power1.inOut", duration: 2, delay: 2});
tjr.to("#jorge-arm", {rotation: 0, transformOrigin: "top center", ease: "power1.inOut", duration: 2, delay: 2});
tjr.to("#jorge-eyes", {translateX: -3, transformOrigin: "top center", ease: "power1.inOut", duration: 1, delay: 2});
tjr.to("#jorge-eyes", {translateX: 0, transformOrigin: "top center", ease: "power1.inOut", duration: 1, delay: 5});

var tjreyes = gsap.timeline({repeat: -1});
tjreyes.to("#jorge-eyes", {scaleY: 0, transformOrigin: "center", duration: 0.1, delay: 4.5});
tjreyes.to("#jorge-eyes", {scaleY: 1, transformOrigin: "center", duration: 0.1});

//Nora
var tn = gsap.timeline({repeat: -1, yoyo: true});
tn.to("#nora-legs", {rotation: 8, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5, delay: 2});

var tneyes = gsap.timeline({repeat: -1});
tneyes.to("#nora-eyes", {scaleY: 0, transformOrigin: "center", duration: 0.1, delay: 3});
tneyes.to("#nora-eyes", {scaleY: 1, transformOrigin: "center", duration: 0.1});

// Josh
var tjs = gsap.timeline({repeat: -1});
tjs.to("#josh-arm", {rotation: 15, transformOrigin: "center", ease: "power1.inOut", duration: 1});
tjs.to("#josh-head", {rotation: 15, transformOrigin: "center", ease: "power1.inOut", duration: 1, delay: 2});
tjs.to("#josh-arm", {rotation: 0, transformOrigin: "center", ease: "power1.inOut", duration: 1, delay: 3});
tjs.to("#josh-head", {rotation: 0, transformOrigin: "center", ease: "power1.inOut", duration: 0.5, delay: 2});

var tjseyes = gsap.timeline({repeat: -1});
tjseyes.to("#josh-eyes", {scaleY: 0, transformOrigin: "center", duration: 0.1, delay: 3.5});
tjseyes.to("#josh-eyes", {scaleY: 1, transformOrigin: "center", duration: 0.1});

//Ysabel
var ty = gsap.timeline({repeat: -1, yoyo: true});
ty.to("#ysabel-arm", {rotation: 20, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
ty.to("#ysabel-bag", {rotation: 3, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
ty.to("#ysabel-bag", {rotation: 0, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
ty.to("#ysabel-bag", {rotation: 1, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
ty.to("#ysabel-bag", {rotation: 0, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
ty.to("#ysabel-bag", {rotation: 2, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});
ty.to("#ysabel-bag", {rotation: -1, transformOrigin: "top center", ease: "power1.inOut", duration: 0.5});

var tyeyes = gsap.timeline({repeat: -1});
tyeyes.to("#ysabel-eyes", {scaleY: 0, transformOrigin: "center", duration: 0.1, delay: 4.3});
tyeyes.to("#ysabel-eyes", {scaleY: 1, transformOrigin: "center", duration: 0.1});

//Lorrie
var tlor = gsap.timeline({repeat: -1, yoyo: true});
tlor.to("#lorrie-leg", {rotation: -4, transformOrigin: "top center", ease: "power1.inOut", duration: 1});

var tloreyes = gsap.timeline({repeat: -1});
tloreyes.to("#lorrie-eyes", {scaleY: 0, transformOrigin: "center", duration: 0.1, delay: 3.2});
tloreyes.to("#lorrie-eyes", {scaleY: 1, transformOrigin: "center", duration: 0.1});

