/* ----- Animated Sliding Menu Indicator ----- */

var marker = document.querySelector("#marker");
var item = document.querySelectorAll("nav a");

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});

/* ----- Active Menu Indicator ----- */

// Get the container element
var btnContainer = document.querySelector(".paymentNav");

// Get all link with class="navItem" inside the container
var btns = btnContainer.getElementsByClassName("navItem");

// Loop through the links and add the active class to the current/clicked link
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* ----- Main Accordion ----- */

var acc = document.getElementsByClassName("moreInformation");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    var firstSibling = this.nextElementSibling;
    firstSibling.classList.toggle("activeInfoBox");
    firstSibling.nextElementSibling.classList.toggle("activeInfoBox");

    /* Toggle between hiding and showing the active panel */
    var moreInfoBox = this.nextElementSibling;
    if (moreInfoBox.style.display === "grid") {
      moreInfoBox.style.display = "none";
    } else {
      moreInfoBox.style.display = "grid";
    }
  });
}

/* ----- Mobile Accordion ----- */

var acc = document.getElementsByClassName("moreInformation-mobile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    var firstSibling = this.nextElementSibling;
    firstSibling.classList.toggle("activeInfoBox");
    /* firstSibling.nextElementSibling.classList.toggle("activeInfoBox"); */

    /* Toggle between hiding and showing the active panel */
    var moreInfoBox = this.nextElementSibling;
    if (moreInfoBox.style.display === "grid") {
      moreInfoBox.style.display = "none";
    } else {
      moreInfoBox.style.display = "grid";
    }
  });
}
