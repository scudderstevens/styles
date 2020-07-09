const links = document.querySelectorAll("a.smooth-scroll");

// const returnLinks = document.querySelectorAll(".section a.section-btn_return");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

/* for (const rtrn of returnLinks) {
  rtrn.addEventListener("click", rtrnHandler);
} */

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

/* function rtrnHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
} */