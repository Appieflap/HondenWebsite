/* Sticky header: schaduw/compact bij scrollen + mobiel menu */
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;

  var toggle = header.querySelector(".nav-toggle");
  var nav = header.querySelector(".main-nav");

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (!toggle || !nav) return;

  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
  }

  toggle.addEventListener("click", function () {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  /* klik op de donkere achtergrond sluit het menu */
  document.addEventListener("click", function (e) {
    if (document.body.classList.contains("nav-open") && !header.contains(e.target)) setOpen(false);
  });

  /* terug naar desktopbreedte: menu-status opruimen */
  window.matchMedia("(min-width: 1081px)").addEventListener("change", function (mq) {
    if (mq.matches) setOpen(false);
  });
})();

/* Scroll-reveal: elementen komen rustig in beeld bij laden en scrollen.
   Na de animatie worden alle hulpklassen weer verwijderd, zodat de
   bestaande styling (hover-transities e.d.) ongemoeid blijft. */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    root.classList.add("reveal-ready");
    return;
  }

  /* [selector, variant] — variant: up (standaard) | left | right | zoom | fade */
  var GROUPS = [
    /* startpagina */
    [".hero-photo", "fade"],
    [".hero-dog", "right"],
    [".hero-content > *"],
    [".badge-blob, .badge-stamp", "zoom"],
    [".features > li"],
    [".script-line"],
    [".offer > .eyebrow, .offer > h2, .offer-sub"],
    [".offer-card"],
    [".about-text > *"],
    [".about-photo", "right"],
    /* subpagina's: hero */
    [".th-left > :not(.th-features), .th-features > li, .ct-left > *"],
    [".th-scene", "zoom"],
    /* subpagina's: inhoud */
    [".tr-title, .price-table, .mail-box, .cursus-item, .bi-item, .gz-col, .kh-cols > *, .ts-note, .av-box"],
    [".training-main .body-text, .training-main .signup-line, .heart-list, .ts-contact, .training-main .gz-sub"],
    [".contact-card", "left"],
    [".hours-panel", "right"],
    /* footer */
    [".footer-pawcircle", "zoom"],
    [".footer-col"]
  ];

  var DURATION = 750; /* ms — gelijk houden met style.css */
  var STAGGER = 90;
  var MAX_STEPS = 7;

  var items = [];
  GROUPS.forEach(function (g) {
    document.querySelectorAll(g[0]).forEach(function (el) {
      if (el.classList.contains("reveal")) return;
      el.classList.add("reveal");
      if (g[1]) el.setAttribute("data-reveal", g[1]);
      items.push(el);
    });
  });
  /* geen dubbele animatie: kind van een al geanimeerd element overslaan */
  items = items.filter(function (el) {
    if (!el.parentElement.closest(".reveal")) return true;
    clear(el);
    return false;
  });

  function clear(el) {
    el.classList.remove("reveal", "is-visible");
    el.removeAttribute("data-reveal");
    el.style.transitionDelay = "";
  }

  function show(el, step) {
    var delay = Math.min(step, MAX_STEPS) * STAGGER;
    el.style.transitionDelay = delay + "ms";
    el.classList.add("is-visible");
    setTimeout(function () { clear(el); }, delay + DURATION + 60);
  }

  var io = new IntersectionObserver(function (entries) {
    var step = 0;
    entries.forEach(function (entry) {
      var el = entry.target;
      if (entry.isIntersecting) {
        io.unobserve(el);
        show(el, step++);
      } else if (entry.boundingClientRect.bottom < 0) {
        /* al voorbij gescrold (bv. anker-link of herstelde scrollpositie) */
        io.unobserve(el);
        clear(el);
      }
    });
  }, { rootMargin: "0px 0px -40px 0px", threshold: 0 });

  items.forEach(function (el) { io.observe(el); });
  root.classList.add("reveal-ready");

  /* onderaan de pagina: alles wat nog verborgen is alsnog tonen */
  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY < root.scrollHeight - 4) return;
    var step = 0;
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      io.unobserve(el);
      show(el, step++);
    });
  }, { passive: true });
})();
