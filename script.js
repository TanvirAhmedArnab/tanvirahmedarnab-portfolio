const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const yearTarget = document.querySelector("#current-year");
const revealItems = document.querySelectorAll(".reveal");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (revealItems.length) {
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min((index % 4) * 70, 210)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

const previewRoot = document.querySelector("[data-chapter-preview]");

if (previewRoot) {
  const previewButtons = Array.from(previewRoot.querySelectorAll("[data-preview-target]"));
  const previewPanels = Array.from(previewRoot.querySelectorAll("[data-preview-panel]"));
  const prevButton = previewRoot.querySelector("[data-preview-prev]");
  const nextButton = previewRoot.querySelector("[data-preview-next]");
  let activeIndex = Math.max(
    0,
    previewButtons.findIndex((button) => button.classList.contains("is-active")),
  );

  const setActivePreview = (nextIndex) => {
    const safeIndex = (nextIndex + previewPanels.length) % previewPanels.length;
    activeIndex = safeIndex;

    previewButtons.forEach((button, index) => {
      const isActive = index === safeIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    previewPanels.forEach((panel, index) => {
      const isActive = index === safeIndex;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  previewButtons.forEach((button, index) => {
    button.addEventListener("click", () => setActivePreview(index));
  });

  if (prevButton) {
    prevButton.addEventListener("click", () => setActivePreview(activeIndex - 1));
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => setActivePreview(activeIndex + 1));
  }

  setActivePreview(activeIndex);
}

const guardedPreview = document.querySelector("[data-guard-preview]");

if (guardedPreview) {
  guardedPreview.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
}
