let projInfo1 = false;
let images = document.getElementById("images");
let runned = [false, false, false, false, false];
let allprojects = document.getElementsByClassName("proj-categ");
let allprojectsarr = Object.keys(allprojects).map((key) => [
  key,
  allprojects[key],
]);
allprojectsarr.forEach((project, i) => {
  project.push(project[1].offsetTop);
});

printLetterByLetter(`proj-info-1`, 2, 1);
allprojectsarr[0][1].style.opacity = 1;
history.scrollRestoration = "manual";
function showWithScroll() {
  const scrollPosition = window.scrollY;
  allprojectsarr.forEach((project, i) => {
    if (project[2] < window.innerHeight + scrollPosition - 400) {
      project[1].style.opacity = 1;
      printLetterByLetter(`proj-info-${i + 1}`, 2, i + 1);
    }
  });

  if (scrollPosition >= images.offsetTop - 400) {
    images.style.opacity = 1;
  }
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  showWithScroll();
};
window.addEventListener("scroll", showWithScroll());
window.addEventListener("scroll", () => {
  showWithScroll();
});

function printLetterByLetter(destination, speed, index) {
  var i = 0;
  let message = undefined;

  if (!runned[index - 1]) {
    message = document.getElementById(destination).innerHTML;
    document.getElementById(destination).innerHTML = "";
    var interval = setInterval(function () {
      document.getElementById(destination).innerHTML += message.charAt(i);
      i++;
      if (i > message.length) {
        clearInterval(interval);
      }
    }, speed);
    runned[index - 1] = true;
  }
}

// navbar
let headerContainer = document.getElementById("header-container");
let navbarList = document.getElementById("nav-list");
let sideNavbar = document.getElementById("side-navbar");
let sideNavbarItems = [].slice.call(sideNavbar.children);
sideNavbarItems.push(sideNavbarItems[0].firstElementChild);
for (let index = 0; index < sideNavbarItems[1].children.length; index++) {
  sideNavbarItems.push(sideNavbarItems[1].children[index]);
  sideNavbarItems.push(sideNavbarItems[1].children[index].firstElementChild);
}
window.addEventListener("click", function (e) {
  if (
    e.target == navbarList ||
    e.target == navbarList.firstElementChild ||
    e.target == navbarList.firstElementChild.firstElementChild ||
    sideNavbarItems.includes(e.target) ||
    e.target == sideNavbar
  ) {
    openleftnav();
  } else {
    headerContainer.setAttribute("data-leftnav", "close");
    sideNavbar.setAttribute("data-leftnav", "close");
  }
});
let startX = undefined;
let endX = undefined;
function phoneNav2(e) {
  endX = e.changedTouches[0].screenX;
  if (endX < startX - 100) {
    openleftnav();
  } else {
    headerContainer.setAttribute("data-leftnav", "close");
    sideNavbar.setAttribute("data-leftnav", "close");
  }
}
function phoneNav(e) {
  startX = e.changedTouches[0].screenX;
  addEventListener("touchend", phoneNav2);
}

addEventListener("touchstart", phoneNav);

function openleftnav() {
  headerContainer.setAttribute("data-leftnav", "open");
  sideNavbar.setAttribute("data-leftnav", "open");
}
