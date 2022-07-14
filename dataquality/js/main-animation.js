const tlFirstAnimation = gsap.timeline();
tlFirstAnimation
.to(".text-01", {duration: 1.5, opacity: 1,})
.to(".text-02", {duration: 1.5, opacity: 1,}, "-=1.5")
.to(".text-01", {duration: 1, y: -70})
.to(".text-02", {duration: 1, y: 70}, "-=1")
.to(".center-line", {duration: 1, width: 650}, "-=1")
.to(".center-line", {duration: 1.5, height: 450, ease: "power4.out"})
.to(".set-01", {duration: 1, opacity: 0, ease: "expo",}, "-=0.5")
// .from(".text-03", {duration: 1, opacity: 0, y: 30})
// .from(".text-04", {duration: 1, opacity: 0, y: 60}, "-=0.8")
.to(".animation-box", {duration: 0.5, opacity: 0, display: "none",}, "+=0")

function skipAnimation() {
    const skipBtn = document.querySelector(".skip-btn");

    skipBtn.addEventListener('click', function(){
        tlFirstAnimation.pause();
        gsap.to(".animation-box", {duration: 0.5, opacity: 0, display: "none"})
    })
}
skipAnimation();
