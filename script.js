function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);

    elem.innerHTML = "";
    elem.appendChild(spanParent);
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();

tl
.from(".child span", {
  x: 100,
  duration: 1.4,
  stagger: .2,
  ease: Power3.easeInOut,
})
.to(".parent .child", {
    y: "-100%",
    duration: 0.7,
    ease: Circ.easeInOut,
})
.to(".loader", {
    height: 0,
    duration: 0.7,
    delay: -0.5,
    ease: Circ.easeInOut,
})
.to(".green", {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -.7,
    ease: Circ.easeInOut,
})
.to(".green", {
    height: "0%",
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut,
});
}

// function animateSvg() {
  document.querySelectorAll("#Visual>g").forEach(function (e) {
    var character = e.childNodes[1].childNodes[1];

    character.style.strokeDasharray = character.getTotalLength() + 'px';
    character.style.strokeDashoffset = character.getTotalLength() + 'px';
  })

  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline" , {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
    delay: 3
  })
// }

revealToSpan();
loaderAnimation();
// animateSvg();
