let projects = [];
let allprojects = document.getElementsByClassName("proj");
let allprojectsarr = Object.keys(allprojects).map((key) => [
  key,
  allprojects[key],
]);
allprojectsarr.forEach((project, i) => {
  project.push(project[1].offsetTop);
});
function showWithScroll() {
  const scrollPosition = window.scrollY;
  allprojectsarr.forEach((project, i) => {
    if (project[2] < window.innerHeight + scrollPosition - 400) {
      project[1].style.opacity = 1;
    } else {
      project[1].style.opacity = 0;
    }
  });
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  showWithScroll();
};
window.addEventListener("scroll", showWithScroll());
window.addEventListener("scroll", () => {
  showWithScroll();
});

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
