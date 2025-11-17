AOS.init();
//Top Bar Menu in Mobile responsive
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  const iconOpen = document.getElementById("iconOpen");
  const iconClose = document.getElementById("iconClose");
  const mobileBtn = document.getElementById("mobileBtn");

  const responMobile = function () {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      mobileBtn.setAttribute("aria-expanded", "true");
      iconOpen.classList.add("hidden");
      iconClose.classList.remove("hidden");
      setTimeout(() => {
        AOS.refresh();
      }, 50);
    } else {
      mobileMenu.classList.add("hidden");
      mobileBtn.setAttribute("aria-expanded", "false");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  };

  mobileBtn.addEventListener("click", responMobile);
});
