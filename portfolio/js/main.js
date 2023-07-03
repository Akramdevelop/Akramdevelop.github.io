let services = document.getElementById("services");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");
let mailme = document.getElementById("mailme");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > services.offsetTop - 400) {
    services.style.opacity = 1;
  } else {
    services.style.opacity = 0;
  }
  if (scrollPosition > skills.offsetTop - 400) {
    skills.style.opacity = 1;
  } else {
    skills.style.opacity = 0;
  }
  if (scrollPosition > projects.offsetTop - 400) {
    projects.style.opacity = 1;
  } else {
    projects.style.opacity = 0;
  }
  if (scrollPosition > mailme.offsetTop - 400) {
    mailme.style.opacity = 1;
  } else {
    mailme.style.opacity = 0;
  }
  if (
    document.documentElement.offsetHeight - window.innerHeight <
    mailme.offsetTop - 400
  ) {
    if (
      scrollPosition >
      document.documentElement.offsetHeight - window.innerHeight - 10
    ) {
      mailme.style.opacity = 1;
    } else {
      mailme.style.opacity = 0;
    }
  }
});
function mailMe() {
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  window.open(
    "mailto:bengueddoudjakramdev@gmail.com?subject=" +
      subject +
      "&body=" +
      message
  );
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
