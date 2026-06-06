const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const yearTarget = document.querySelector("#current-year");
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mobileNavQuery = window.matchMedia("(max-width: 760px)");

if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!mobileNavQuery.matches) {
      return;
    }

    const clickTarget = event.target;
    if (
      clickTarget instanceof Node &&
      !siteNav.contains(clickTarget) &&
      !menuToggle.contains(clickTarget)
    ) {
      closeMenu();
    }
  });

  mobileNavQuery.addEventListener("change", () => {
    if (!mobileNavQuery.matches) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (revealItems.length) {
  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealCutoff = window.innerHeight * 0.94;

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
        threshold: 0.08,
        rootMargin: "0px 0px -24px 0px",
      },
    );

    revealItems.forEach((item) => {
      const bounds = item.getBoundingClientRect();
      const isInitiallyVisible = bounds.bottom > 0 && bounds.top < revealCutoff;

      if (isInitiallyVisible) {
        item.classList.add("is-visible");
        return;
      }

      observer.observe(item);
    });
  }
}

const previewRoots = Array.from(document.querySelectorAll("[data-chapter-preview]"));

previewRoots.forEach((previewRoot, rootIndex) => {
  const previewButtons = Array.from(previewRoot.querySelectorAll("[data-preview-target]"));
  const previewPanels = Array.from(previewRoot.querySelectorAll("[data-preview-panel]"));
  const prevButton = previewRoot.querySelector("[data-preview-prev]");
  const nextButton = previewRoot.querySelector("[data-preview-next]");

  if (!previewButtons.length || !previewPanels.length) {
    return;
  }

  let activeIndex = Math.max(
    0,
    previewButtons.findIndex((button) => button.classList.contains("is-active")),
  );

  const panelById = new Map(
    previewPanels
      .filter((panel) => panel.id)
      .map((panel) => [panel.id, panel]),
  );

  const tabList = previewButtons[0]?.closest("[role='tablist'], .preview-nav, .certification-list");
  if (tabList && !tabList.getAttribute("role")) {
    tabList.setAttribute("role", "tablist");
  }

  previewButtons.forEach((button, index) => {
    const targetId = button.dataset.previewTarget;
    const panel = (targetId && panelById.get(targetId)) || previewPanels[index];

    if (!button.id) {
      button.id = `preview-tab-${rootIndex + 1}-${index + 1}`;
    }

    button.setAttribute("role", "tab");

    if (panel?.id) {
      button.setAttribute("aria-controls", panel.id);
      panel.setAttribute("role", panel.getAttribute("role") || "tabpanel");
      panel.setAttribute("aria-labelledby", button.id);
    }
  });

  const setActivePreview = (nextIndex, options = {}) => {
    const { focus = false } = options;
    const safeIndex = (nextIndex + previewPanels.length) % previewPanels.length;
    activeIndex = safeIndex;

    previewButtons.forEach((button, index) => {
      const isActive = index === safeIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    previewPanels.forEach((panel, index) => {
      const isActive = index === safeIndex;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });

    if (focus) {
      previewButtons[safeIndex]?.focus();
    }
  };

  previewButtons.forEach((button, index) => {
    button.addEventListener("click", () => setActivePreview(index));

    button.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          setActivePreview(index + 1, { focus: true });
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          setActivePreview(index - 1, { focus: true });
          break;
        case "Home":
          event.preventDefault();
          setActivePreview(0, { focus: true });
          break;
        case "End":
          event.preventDefault();
          setActivePreview(previewButtons.length - 1, { focus: true });
          break;
        default:
          break;
      }
    });
  });

  if (prevButton) {
    prevButton.addEventListener("click", () => setActivePreview(activeIndex - 1));
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => setActivePreview(activeIndex + 1));
  }

  setActivePreview(activeIndex);
});

const guardedPreview = document.querySelector("[data-guard-preview]");

if (guardedPreview) {
  guardedPreview.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
}

const zoomableShots = Array.from(document.querySelectorAll("[data-zoomable]"));

if (zoomableShots.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "media-lightbox";
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <div class="media-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Expanded project screenshot">
      <div class="media-lightbox-toolbar">
        <span class="media-lightbox-label">Expanded screenshot</span>
        <button class="button button-secondary media-lightbox-close" type="button" aria-label="Close expanded screenshot">Close</button>
      </div>
      <div class="media-lightbox-frame">
        <img alt="">
      </div>
      <p class="media-lightbox-caption"></p>
    </div>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".media-lightbox-caption");
  const lightboxClose = lightbox.querySelector(".media-lightbox-close");
  const lightboxDialog = lightbox.querySelector(".media-lightbox-dialog");
  let lastFocusedImage = null;

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");

    if (lastFocusedImage && document.contains(lastFocusedImage)) {
      lastFocusedImage.focus();
    }
  };

  const openLightbox = (image) => {
    const figure = image.closest("figure");
    const caption = figure?.querySelector("figcaption")?.textContent?.trim() || image.alt || "";

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "";
    lightboxCaption.textContent = caption;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    lastFocusedImage = image;
    lightboxClose?.focus();
  };

  zoomableShots.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${image.alt || "Project screenshot"}. Activate to expand.`);

    image.addEventListener("click", () => openLightbox(image));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (!lightboxDialog?.contains(event.target)) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (!lightbox.hidden && event.key === "Escape") {
      closeLightbox();
    }
  });
}

const audioPlayer = document.querySelector("[data-audio-player]");

if (audioPlayer instanceof HTMLMediaElement) {
  const preferredVolume = 0.42;
  let audiblePlaybackConfirmed = false;
  audioPlayer.autoplay = true;
  audioPlayer.loop = true;
  audioPlayer.preload = "auto";
  audioPlayer.playsInline = true;
  audioPlayer.volume = preferredVolume;

  const autoplayEvents = ["pointerdown", "keydown", "touchstart"];

  const removeAutoplayListeners = () => {
    autoplayEvents.forEach((eventName) => {
      window.removeEventListener(eventName, unlockAudiblePlayback, true);
    });
  };

  const maintainPlayback = async () => {
    if (!audioPlayer.paused) {
      return true;
    }

    try {
      await audioPlayer.play();
      return true;
    } catch (error) {
      return false;
    }
  };

  const confirmAudiblePlayback = () => {
    audiblePlaybackConfirmed = true;
    audioPlayer.muted = false;
    audioPlayer.volume = preferredVolume;
    removeAutoplayListeners();
  };

  const trySilentAutoplay = async () => {
    if (audioPlayer.readyState === 0) {
      audioPlayer.load();
    }

    audioPlayer.muted = true;
    audioPlayer.volume = preferredVolume;

    const didStart = await maintainPlayback();

    if (!didStart || audiblePlaybackConfirmed) {
      return;
    }

    window.setTimeout(() => {
      if (!audiblePlaybackConfirmed) {
        audioPlayer.muted = false;
        audioPlayer.volume = preferredVolume;
      }
    }, 140);
  };

  const tryAudibleAutoplay = async () => {
    audioPlayer.muted = false;
    audioPlayer.volume = preferredVolume;

    const didStart = await maintainPlayback();

    if (didStart && !audioPlayer.paused) {
      confirmAudiblePlayback();
      return;
    }

    await trySilentAutoplay();
  };

  const unlockAudiblePlayback = async () => {
    audioPlayer.muted = false;
    audioPlayer.volume = preferredVolume;

    const didStart = await maintainPlayback();

    if (didStart && !audioPlayer.paused) {
      confirmAudiblePlayback();
    }
  };

  const armAutostartFallback = () => {
    autoplayEvents.forEach((eventName) => {
      window.addEventListener(eventName, unlockAudiblePlayback, true);
    });
  };

  audioPlayer.addEventListener("playing", () => {
    if (!audioPlayer.muted) {
      confirmAudiblePlayback();
    }
  });

  audioPlayer.addEventListener("canplaythrough", () => {
    void tryAudibleAutoplay();
  }, { once: true });

  audioPlayer.addEventListener("loadeddata", () => {
    void tryAudibleAutoplay();
  }, { once: true });

  window.addEventListener("pageshow", () => {
    void tryAudibleAutoplay();
  });

  window.addEventListener("load", () => {
    void tryAudibleAutoplay();
  }, { once: true });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      void tryAudibleAutoplay();
    }
  });

  armAutostartFallback();
  void tryAudibleAutoplay();
}
