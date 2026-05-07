(function () {
  const body = document.body;
  const header = document.querySelector(".site-header, .header");
  const menuButton = document.querySelector(".menu-button, .nav-toggle");
  const nav = header ? header.querySelector(".global-nav, .nav") : null;

  if (!menuButton || !nav || !body) {
    return;
  }

  const setNavTop = () => {
    const top = header ? header.offsetHeight : 70;
    document.documentElement.style.setProperty("--mobile-nav-top", `${top}px`);
  };

  const closeMenu = () => {
    body.classList.remove("is-nav-open");
    menuButton.classList.remove("is-active");
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  };

  const openMenu = () => {
    setNavTop();
    body.classList.add("is-nav-open");
    menuButton.classList.add("is-active");
    menuButton.setAttribute("aria-expanded", "true");
    nav.classList.add("open");
  };

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-controls", "mobile-global-nav");
  nav.id = nav.id || "mobile-global-nav";

  menuButton.addEventListener("click", () => {
    if (body.classList.contains("is-nav-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    setNavTop();
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!body.classList.contains("is-nav-open")) {
      return;
    }
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    if (!target.closest(".menu-button, .nav-toggle, .global-nav, .nav")) {
      closeMenu();
    }
  });

  setNavTop();
})();
