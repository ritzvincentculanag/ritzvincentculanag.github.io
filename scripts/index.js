const navMainTrigger = document.querySelector("#nav-main-trigger");
const navMainReturn = document.querySelector("#nav-main-return");
const navMain = document.querySelector("#nav-main");

let isToggled = false;

navMainTrigger.addEventListener("click", triggerNavBar);
navMainReturn.addEventListener("click", triggerNavBar);

function triggerNavBar() {
  isToggled = !isToggled;
  const rightValue = isToggled ? "0px" : "-400px";
  navMain.style.right = rightValue;
}
