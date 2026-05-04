(() => {
  const audio = document.querySelector("[data-music-audio]");
  const toggle = document.querySelector("[data-music-audio-toggle]");

  if (!audio || !toggle) {
    return;
  }

  const storageKey = "taa-music-page-sound";

  const syncToggle = () => {
    const isPlaying = !audio.paused;
    toggle.textContent = isPlaying ? "Sound Off" : "Enable Sound";
    toggle.setAttribute("aria-pressed", String(isPlaying));
  };

  const playAudio = async (persistPreference) => {
    try {
      audio.volume = 0.55;
      await audio.play();

      if (persistPreference) {
        localStorage.setItem(storageKey, "enabled");
      }
    } catch {
      if (persistPreference) {
        localStorage.setItem(storageKey, "blocked");
      }
    } finally {
      syncToggle();
    }
  };

  const pauseAudio = () => {
    audio.pause();
    localStorage.setItem(storageKey, "disabled");
    syncToggle();
  };

  toggle.addEventListener("click", () => {
    if (audio.paused) {
      playAudio(true);
    } else {
      pauseAudio();
    }
  });

  if (localStorage.getItem(storageKey) === "enabled") {
    playAudio(false);
  } else {
    syncToggle();
  }

  audio.addEventListener("play", syncToggle);
  audio.addEventListener("pause", syncToggle);
  syncToggle();
})();

(() => {
  const triggers = Array.from(document.querySelectorAll("[data-music-panel-trigger]"));
  const panels = Array.from(document.querySelectorAll("[data-music-panel]"));
  const stage = document.querySelector("[data-music-slider-stage]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!triggers.length || !panels.length || !stage) {
    return;
  }

  let activeIndex = Math.max(
    0,
    triggers.findIndex((trigger) => trigger.classList.contains("is-active")),
  );
  let intervalId = null;

  const stopRotation = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  };

  const setActivePanel = (index) => {
    activeIndex = index;

    triggers.forEach((trigger, triggerIndex) => {
      const isActive = triggerIndex === index;
      trigger.classList.toggle("is-active", isActive);
      trigger.setAttribute("aria-selected", String(isActive));
      trigger.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel, panelIndex) => {
      const isActive = panelIndex === index;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  const focusTrigger = (index) => {
    const safeIndex = (index + triggers.length) % triggers.length;
    triggers[safeIndex]?.focus();
  };

  const startRotation = () => {
    stopRotation();

    if (prefersReducedMotion || panels.length < 2) {
      return;
    }

    intervalId = window.setInterval(() => {
      const nextIndex = (activeIndex + 1) % panels.length;
      setActivePanel(nextIndex);
    }, 9000);
  };

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      setActivePanel(index);
      startRotation();
    });

    trigger.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          focusTrigger(index + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          focusTrigger(index - 1);
          break;
        case "Home":
          event.preventDefault();
          focusTrigger(0);
          break;
        case "End":
          event.preventDefault();
          focusTrigger(triggers.length - 1);
          break;
        default:
          break;
      }
    });
  });

  stage.addEventListener("mouseenter", stopRotation);
  stage.addEventListener("mouseleave", startRotation);
  stage.addEventListener("focusin", stopRotation);
  stage.addEventListener("focusout", (event) => {
    const relatedTarget = event.relatedTarget;
    if (relatedTarget instanceof Node && stage.contains(relatedTarget)) {
      return;
    }

    startRotation();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopRotation();
    } else {
      startRotation();
    }
  });

  setActivePanel(activeIndex);
  startRotation();
})();

(() => {
  const player = document.querySelector("[data-music-player]");
  const trackButtons = Array.from(document.querySelectorAll("[data-track-embed]"));

  if (!player || !trackButtons.length) {
    return;
  }

  const setActiveTrack = (button) => {
    const embed = button.getAttribute("data-track-embed");
    if (!embed) {
      return;
    }

    player.src = embed;
    trackButtons.forEach((trackButton) => {
      trackButton.classList.toggle("is-active", trackButton === button);
    });
  };

  trackButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTrack(button);
    });
  });
})();

