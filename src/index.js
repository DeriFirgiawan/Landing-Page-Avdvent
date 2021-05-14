// Navigation Menu Mobile
const toggleNavOpen = document.querySelector("#toggleNavOpen");
const toggleNavClosed = document.querySelector("#toggleNavClosed");
const navigationLink = document.querySelector("#navigationLink");
const openNav = () => {
  toggleNavOpen.classList.toggle("hidden");
  toggleNavClosed.classList.toggle("hidden");
  navigationLink.classList.toggle("md:hidden");
  navigationLink.classList.toggle("xs:hidden");
}