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
}

const previewRoot = document.querySelector("[data-chapter-preview]");

if (previewRoot) {
  const previewButtons = Array.from(previewRoot.querySelectorAll("[data-preview-target]"));
  const previewPanels = Array.from(previewRoot.querySelectorAll("[data-preview-panel]"));
  const prevButton = previewRoot.querySelector("[data-preview-prev]");
  const nextButton = previewRoot.querySelector("[data-preview-next]");

  if (previewButtons.length && previewPanels.length) {
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
}

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

const audioToggle = document.querySelector("[data-audio-toggle]");
const audioStatus = document.querySelector("[data-audio-status]");

if (audioToggle && audioStatus) {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  let audioContext = null;
  let musicNodes = null;
  let musicIntervalId = null;
  let isMusicOn = false;

  const setAudioUi = (active, message) => {
    isMusicOn = active;
    audioToggle.setAttribute("aria-pressed", String(active));
    audioToggle.textContent = active ? "Disable placeholder music" : "Enable placeholder music";
    audioStatus.textContent = message;
  };

  const clearMusicInterval = () => {
    if (musicIntervalId) {
      window.clearInterval(musicIntervalId);
      musicIntervalId = null;
    }
  };

  const destroyMusic = () => {
    clearMusicInterval();

    if (!musicNodes) {
      return;
    }

    musicNodes.drones.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch (error) {
        // Oscillator may already be stopped.
      }

      oscillator.disconnect();
    });

    musicNodes.droneGains.forEach((gainNode) => gainNode.disconnect());
    musicNodes.filter?.disconnect();
    musicNodes.master?.disconnect();
    musicNodes = null;
  };

  const buildMusic = () => {
    if (!AudioContextCtor) {
      setAudioUi(false, "Placeholder music is not supported in this browser.");
      audioToggle.disabled = true;
      return false;
    }

    if (!audioContext) {
      audioContext = new AudioContextCtor();
    }

    const master = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    master.gain.value = 0;
    filter.type = "lowpass";
    filter.frequency.value = 1800;
    filter.Q.value = 0.4;

    const droneSettings = [
      { type: "triangle", frequency: 110, volume: 0.032 },
      { type: "sine", frequency: 164.81, volume: 0.021 },
      { type: "sine", frequency: 220, volume: 0.014 },
    ];

    const drones = [];
    const droneGains = [];

    droneSettings.forEach((setting) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.type = setting.type;
      oscillator.frequency.value = setting.frequency;
      gainNode.gain.value = setting.volume;

      oscillator.connect(gainNode);
      gainNode.connect(filter);
      oscillator.start();

      drones.push(oscillator);
      droneGains.push(gainNode);
    });

    filter.connect(master);
    master.connect(audioContext.destination);

    musicNodes = {
      drones,
      droneGains,
      master,
      filter,
    };

    return true;
  };

  const playBellTone = (frequency, duration = 0.9) => {
    if (!audioContext || !musicNodes) {
      return;
    }

    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, now);
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(0.1, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscillator.connect(gainNode);
    gainNode.connect(musicNodes.filter);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.05);
  };

  const schedulePlaceholderMusic = () => {
    clearMusicInterval();

    const motif = [220, 261.63, 329.63, 293.66, 392.0, 329.63];
    let step = 0;

    playBellTone(motif[0], 1.1);
    step = 1;

    musicIntervalId = window.setInterval(() => {
      playBellTone(motif[step], step % 3 === 0 ? 1.1 : 0.78);
      step = (step + 1) % motif.length;
    }, 920);
  };

  const startMusic = async () => {
    if (!buildMusic()) {
      return;
    }

    if (audioContext?.state === "suspended") {
      await audioContext.resume();
    }

    if (!musicNodes) {
      return;
    }

    const now = audioContext.currentTime;
    musicNodes.master.gain.cancelScheduledValues(now);
    musicNodes.master.gain.setValueAtTime(musicNodes.master.gain.value, now);
    musicNodes.master.gain.linearRampToValueAtTime(0.17, now + 0.7);
    schedulePlaceholderMusic();
    setAudioUi(true, "Placeholder music is active. Click again to mute it.");
  };

  const stopMusic = async () => {
    if (!audioContext || !musicNodes) {
      setAudioUi(false, "Placeholder music is optional and starts only with interaction.");
      return;
    }

    const now = audioContext.currentTime;
    musicNodes.master.gain.cancelScheduledValues(now);
    musicNodes.master.gain.setValueAtTime(musicNodes.master.gain.value, now);
    musicNodes.master.gain.linearRampToValueAtTime(0.0001, now + 0.55);

    window.setTimeout(() => {
      destroyMusic();
    }, 650);

    setAudioUi(false, "Placeholder music is optional and starts only with interaction.");
  };

  audioToggle.addEventListener("click", async () => {
    try {
      if (isMusicOn) {
        await stopMusic();
      } else {
        await startMusic();
      }
    } catch (error) {
      destroyMusic();
      setAudioUi(false, "Placeholder music could not start in this browser session.");
    }
  });
}
