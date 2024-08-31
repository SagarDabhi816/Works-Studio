const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});


function loaderanimation() {
    var tl = gsap.timeline();
    tl.to("#yello1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out",
    });
    tl.from("#yello2",
        {
            top: "100%",
            delay: 0.6,
            duration: 0.7,
            ease: "expo.out",
        },
        "anim"
    );
    tl.to("#loader h1",
        {
            delay: 0.6,
            duration: 0.7,
            color: "black",
        },
        "anim"
    );
    tl.to("#loader", {
        opacity: 0,
    });
    tl.to("#loader", {
        display: "none",
    });
}
loaderanimation();

var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page2");
    var sevg = document.querySelector("#navbar svg path");
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimage = ele.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgimage})`;
        });
    });
    document.querySelector("#page1 i").addEventListener("click", function () {
        scroll.scrollTo(792);
    });
    document.querySelector("#page2 i").addEventListener("click", function () {
        scroll.scrollTo(1610);
    });
    document.querySelector("#footer1 h3").addEventListener("click", () => {
        scroll.scrollTo(0);
    });
    document.querySelector("#footer1 i").addEventListener("click", function () {
        scroll.scrollTo(0);
    });

 