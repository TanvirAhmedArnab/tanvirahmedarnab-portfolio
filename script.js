const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const yearTarget = document.querySelector("#current-year");
const revealItems = document.querySelectorAll(".reveal");
const viewToggle = document.querySelector("[data-view-toggle]");
const viewStorageKey = "portfolio-view-mode";

const setRecruiterView = (isRecruiterView) => {
  document.body.classList.toggle("recruiter-view", isRecruiterView);

  if (viewToggle) {
    viewToggle.setAttribute("aria-pressed", String(isRecruiterView));
    viewToggle.textContent = isRecruiterView ? "Immersive View" : "Recruiter View";
  }
};

if (viewToggle) {
  let savedMode = null;

  try {
    savedMode = window.localStorage.getItem(viewStorageKey);
  } catch (error) {
    savedMode = null;
  }

  setRecruiterView(savedMode === "recruiter");

  viewToggle.addEventListener("click", () => {
    const nextState = !document.body.classList.contains("recruiter-view");
    setRecruiterView(nextState);

    try {
      window.localStorage.setItem(viewStorageKey, nextState ? "recruiter" : "immersive");
    } catch (error) {
      // Ignore storage failures and keep the toggle working for the current session.
    }
  });
}

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
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (guardedPreview) {
  guardedPreview.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
}

const showcaseRoot = document.querySelector("[data-showcase-root]");

if (showcaseRoot) {
  const canvas = showcaseRoot.querySelector(".showcase-canvas");
  const hitsTarget = document.querySelector("[data-showcase-hits]");
  const pressureTarget = document.querySelector("[data-showcase-pressure]");
  const stateTarget = document.querySelector("[data-showcase-state]");

  if (canvas instanceof HTMLCanvasElement) {
    const context = canvas.getContext("2d");

    if (context) {
      const width = canvas.width;
      const height = canvas.height;
      const keys = new Set();
      let lastInputAt = 0;
      let lastFrame = performance.now();
      let hits = 0;
      let flash = 0;
      const player = {
        x: width * 0.35,
        y: height * 0.55,
        radius: 10,
        speed: prefersReducedMotion ? 115 : 165,
      };

      const drones = Array.from({ length: prefersReducedMotion ? 3 : 5 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 5;

        return {
          x: width * 0.5 + Math.cos(angle) * (110 + index * 12),
          y: height * 0.5 + Math.sin(angle) * (70 + index * 10),
          radius: 10 + (index % 2),
          vx: Math.cos(angle + Math.PI / 2) * (42 + index * 6),
          vy: Math.sin(angle + Math.PI / 2) * (32 + index * 5),
          phase: index * 0.85,
        };
      });

      const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

      const setShowcaseState = (manualActive) => {
        if (hitsTarget) {
          hitsTarget.textContent = String(hits);
        }

        if (stateTarget) {
          stateTarget.textContent = manualActive ? "Manual control" : "Attract mode";
        }
      };

      const setPressure = (nearestDistance) => {
        if (!pressureTarget) {
          return;
        }

        if (nearestDistance < 42) {
          pressureTarget.textContent = "Critical";
        } else if (nearestDistance < 72) {
          pressureTarget.textContent = "Alert";
        } else {
          pressureTarget.textContent = "Calm";
        }
      };

      const resetPlayer = () => {
        player.x = width * 0.35;
        player.y = height * 0.55;
        flash = 0.8;
      };

      const handleKeyDown = (event) => {
        const key = event.key.toLowerCase();

        if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(key)) {
          keys.add(key);
          lastInputAt = performance.now();
          event.preventDefault();
        }
      };

      const handleKeyUp = (event) => {
        keys.delete(event.key.toLowerCase());
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      const drawGrid = (time) => {
        context.save();
        context.strokeStyle = "rgba(103, 215, 255, 0.08)";
        context.lineWidth = 1;

        for (let x = 0; x <= width; x += 26) {
          context.beginPath();
          context.moveTo(x + (time * 0.0035) % 26, 0);
          context.lineTo(x + (time * 0.0035) % 26, height);
          context.stroke();
        }

        for (let y = 0; y <= height; y += 26) {
          context.beginPath();
          context.moveTo(0, y + (time * 0.0018) % 26);
          context.lineTo(width, y + (time * 0.0018) % 26);
          context.stroke();
        }

        context.restore();
      };

      const drawPlayer = () => {
        context.save();
        context.translate(player.x, player.y);
        context.fillStyle = "#f7fbff";
        context.shadowColor = "rgba(103, 215, 255, 0.55)";
        context.shadowBlur = 16;
        context.beginPath();
        context.moveTo(0, -player.radius - 4);
        context.lineTo(player.radius + 6, player.radius + 4);
        context.lineTo(-player.radius - 6, player.radius + 4);
        context.closePath();
        context.fill();

        context.shadowBlur = 0;
        context.lineWidth = 2;
        context.strokeStyle = "rgba(103, 215, 255, 0.65)";
        context.beginPath();
        context.arc(0, 0, player.radius + 10, 0, Math.PI * 2);
        context.stroke();
        context.restore();
      };

      const drawDrone = (drone) => {
        context.save();
        context.fillStyle = "#ff6faf";
        context.strokeStyle = "rgba(255, 178, 95, 0.9)";
        context.lineWidth = 1.5;
        context.shadowColor = "rgba(255, 95, 167, 0.45)";
        context.shadowBlur = 16;
        context.beginPath();
        context.arc(drone.x, drone.y, drone.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.shadowBlur = 0;

        context.strokeStyle = "rgba(255, 95, 167, 0.26)";
        context.beginPath();
        context.arc(drone.x, drone.y, drone.radius + 12, 0, Math.PI * 2);
        context.stroke();
        context.restore();
      };

      const render = (time) => {
        const delta = Math.min((time - lastFrame) / 1000, 0.033);
        lastFrame = time;

        const manualActive = keys.size > 0 || time - lastInputAt < 1400;
        let moveX = 0;
        let moveY = 0;

        if (keys.has("arrowup") || keys.has("w")) {
          moveY -= 1;
        }

        if (keys.has("arrowdown") || keys.has("s")) {
          moveY += 1;
        }

        if (keys.has("arrowleft") || keys.has("a")) {
          moveX -= 1;
        }

        if (keys.has("arrowright") || keys.has("d")) {
          moveX += 1;
        }

        if (manualActive && (moveX !== 0 || moveY !== 0)) {
          const length = Math.hypot(moveX, moveY) || 1;
          player.x += (moveX / length) * player.speed * delta;
          player.y += (moveY / length) * player.speed * delta;
        } else {
          player.x = width * 0.5 + Math.cos(time * 0.00125) * 120;
          player.y = height * 0.55 + Math.sin(time * 0.00175) * 72;
        }

        player.x = clamp(player.x, 20, width - 20);
        player.y = clamp(player.y, 20, height - 20);

        context.clearRect(0, 0, width, height);
        const backdrop = context.createLinearGradient(0, 0, 0, height);
        backdrop.addColorStop(0, "#09111f");
        backdrop.addColorStop(1, "#060911");
        context.fillStyle = backdrop;
        context.fillRect(0, 0, width, height);

        drawGrid(time);

        let nearestDistance = Number.POSITIVE_INFINITY;

        drones.forEach((drone, index) => {
          const sway = prefersReducedMotion ? 0.35 : 0.75;
          drone.x += (drone.vx + Math.cos(time * 0.0011 + drone.phase) * 18 * sway) * delta;
          drone.y += (drone.vy + Math.sin(time * 0.0016 + drone.phase) * 18 * sway) * delta;

          if (drone.x < 12 || drone.x > width - 12) {
            drone.vx *= -1;
          }

          if (drone.y < 12 || drone.y > height - 12) {
            drone.vy *= -1;
          }

          const distance = Math.hypot(drone.x - player.x, drone.y - player.y);
          nearestDistance = Math.min(nearestDistance, distance);

          if (distance < drone.radius + player.radius + 5) {
            hits += 1;
            setShowcaseState(manualActive);
            resetPlayer();
            drone.vx *= -1;
            drone.vy *= -1;
            drone.phase += 0.7 + index * 0.05;
          }

          drawDrone(drone);
        });

        if (flash > 0) {
          context.fillStyle = `rgba(255, 111, 175, ${flash * 0.18})`;
          context.fillRect(0, 0, width, height);
          flash = Math.max(flash - delta * 1.8, 0);
        }

        drawPlayer();
        setShowcaseState(manualActive);
        setPressure(nearestDistance);

        context.save();
        context.fillStyle = "rgba(210, 241, 255, 0.85)";
        context.font = "600 12px 'IBM Plex Mono'";
        context.fillText("DODGE DRILL / READABILITY PASS", 16, 20);
        context.restore();

        window.requestAnimationFrame(render);
      };

      setShowcaseState(false);
      setPressure(999);
      window.requestAnimationFrame(render);
    }
  }
}

const tiltCards = document.querySelectorAll("[data-tilt]");

if (tiltCards.length && !prefersReducedMotion) {
  tiltCards.forEach((card) => {
    const target = card.querySelector(".mission-card") || card;

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateY = offsetX * 9;
      const rotateX = offsetY * -8;

      target.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      target.style.transform = "";
    });
  });
}

const filterButtons = Array.from(document.querySelectorAll("[data-skill-filter]"));
const projectCards = Array.from(document.querySelectorAll("[data-project-card]"));
const skillStatus = document.querySelector("[data-skill-status]");
const skillReset = document.querySelector("[data-skill-reset]");
const skillProofTitle = document.querySelector("[data-skill-proof-title]");
const skillProofCopy = document.querySelector("[data-skill-proof-copy]");

const skillProofMap = {
  all: {
    title: "All proof channels online",
    copy: "Browse all mission nodes or select a skill node to isolate the projects that prove it.",
  },
  csharp: {
    title: "C# is the clearest cross-portfolio signal",
    copy: "The Unity RPG prototype, Game Bug Tracker, and GenericRPG in C# all use C# as the primary implementation and teaching language.",
  },
  unity: {
    title: "Unity proof routes to the flagship mission",
    copy: "Unity currently maps to the RPG prototype, where combat feel, encounter structure, and gameplay readability are the central proof targets.",
  },
  dotnet: {
    title: ".NET proof routes to structured application work",
    copy: "The bug tracker and supporting web work show .NET used for tools, workflow structure, and practical internal production support.",
  },
  tooling: {
    title: "Tooling proof highlights workflow thinking",
    copy: "Game Bug Tracker is the strongest current tooling signal: structured bug triage, practical workflows, and architecture decisions aimed at real production support.",
  },
  "game-logic": {
    title: "Gameplay proof centers on state clarity",
    copy: "Unity RPG and GenericRPG in C# both point to combat flow, interaction rules, and gameplay structure that stay understandable as systems grow.",
  },
  architecture: {
    title: "Architecture connects every major mission",
    copy: "All three flagship missions prove architecture thinking: readable growth in Unity systems, maintainable tooling boundaries, and long-form curriculum structure.",
  },
  "technical-writing": {
    title: "Technical writing proof routes to the book project",
    copy: "GenericRPG in C# is the clearest writing signal, proving long-form communication, curriculum discipline, and system explanation at scale.",
  },
};

if (filterButtons.length && projectCards.length) {
  const applySkillFilter = (filterValue, filterLabel) => {
    let matchCount = 0;

    projectCards.forEach((card) => {
      const tags = (card.getAttribute("data-skill-tags") || "").split(/\s+/).filter(Boolean);
      const isMatch = filterValue === "all" || tags.includes(filterValue);

      card.classList.toggle("is-filtered-out", !isMatch);
      card.classList.toggle("is-filter-match", filterValue !== "all" && isMatch);

      if (isMatch) {
        matchCount += 1;
      }
    });

    filterButtons.forEach((button) => {
      const isActive = button.getAttribute("data-skill-filter") === filterValue;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (skillStatus) {
      skillStatus.textContent = filterValue === "all"
        ? `Showing all ${projectCards.length} mission nodes.`
        : `Showing ${matchCount} mission node${matchCount === 1 ? "" : "s"} tagged ${filterLabel}.`;
    }

    if (skillReset) {
      skillReset.hidden = filterValue === "all";
    }

    const proofDetails = skillProofMap[filterValue] || skillProofMap.all;

    if (skillProofTitle) {
      skillProofTitle.textContent = proofDetails.title;
    }

    if (skillProofCopy) {
      skillProofCopy.textContent = proofDetails.copy;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-skill-filter") || "all";
      const filterLabel = button.textContent?.trim() || "selected skill";
      applySkillFilter(filterValue, filterLabel);
    });
  });

  if (skillReset) {
    skillReset.addEventListener("click", () => {
      applySkillFilter("all", "All proof");
    });
  }

  applySkillFilter("all", "All projects");
}

const dossierButtons = Array.from(document.querySelectorAll("[data-dossier-toggle]"));

if (dossierButtons.length) {
  const closeDossier = (button) => {
    const targetId = button.getAttribute("data-dossier-toggle");
    const panel = targetId ? document.getElementById(targetId) : null;

    if (!panel) {
      return;
    }

    panel.hidden = true;
    panel.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  };

  const openDossier = (button) => {
    const targetId = button.getAttribute("data-dossier-toggle");
    const panel = targetId ? document.getElementById(targetId) : null;

    if (!panel) {
      return;
    }

    dossierButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        closeDossier(otherButton);
      }
    });

    panel.hidden = false;
    panel.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
  };

  dossierButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-dossier-toggle");
      const panel = targetId ? document.getElementById(targetId) : null;

      if (!panel) {
        return;
      }

      if (panel.hidden) {
        openDossier(button);
      } else {
        closeDossier(button);
      }
    });
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
    if (lastFocusedImage) {
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
    lightboxClose.focus();
  };

  zoomableShots.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${image.alt || "Project screenshot"}. Click to expand.`);

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

const musicPageAudio = document.querySelector("[data-music-page-audio]");
const musicPageToggle = document.querySelector("[data-music-page-toggle]");
const musicPageStatus = document.querySelector("[data-music-page-status]");

if (musicPageAudio && musicPageToggle && musicPageStatus) {
  const musicPreferenceKey = "taa-music-page-autoplay";

  musicPageAudio.volume = 0.62;

  const setMusicPageUi = (playing, message) => {
    musicPageToggle.setAttribute("aria-pressed", String(playing));
    musicPageToggle.textContent = playing ? "MUSIC ON" : "MUSIC OFF";
    musicPageStatus.textContent = message;
  };

  const attemptMusicPlay = async (remember = false) => {
    try {
      await musicPageAudio.play();
      if (remember) {
        window.localStorage.setItem(musicPreferenceKey, "on");
      }
      setMusicPageUi(true, "Music is playing. Your preference will be remembered on this browser.");
      return true;
    } catch (error) {
      setMusicPageUi(false, "Autoplay was blocked. Press Enable Music to start playback.");
      return false;
    }
  };

  const pauseMusic = (remember = false) => {
    musicPageAudio.pause();
    if (remember) {
      window.localStorage.setItem(musicPreferenceKey, "off");
    }
    setMusicPageUi(false, "Music is paused.");
  };

  musicPageAudio.addEventListener("play", () => {
    musicPageToggle.setAttribute("aria-pressed", "true");
    musicPageToggle.textContent = "MUSIC ON";
  });

  musicPageAudio.addEventListener("pause", () => {
    if (musicPageAudio.currentTime > 0 && !musicPageAudio.ended) {
      musicPageToggle.setAttribute("aria-pressed", "false");
      musicPageToggle.textContent = "MUSIC OFF";
    }
  });

  musicPageToggle.addEventListener("click", async () => {
    if (musicPageAudio.paused) {
      await attemptMusicPlay(true);
    } else {
      pauseMusic(true);
    }
  });

  window.addEventListener("load", async () => {
    const storedPreference = window.localStorage.getItem(musicPreferenceKey);

    if (storedPreference === "off") {
      setMusicPageUi(false, "Music is paused.");
      return;
    }

    if (storedPreference === "on") {
      await attemptMusicPlay(false);
      return;
    }

    await attemptMusicPlay(false);
  });
}

const musicTabs = Array.from(document.querySelectorAll("[data-music-tab]"));
const musicPanels = Array.from(document.querySelectorAll("[data-music-panel]"));

if (musicTabs.length && musicPanels.length) {
  const activateMusicPanel = (target) => {
    musicTabs.forEach((tab) => {
      const isActive = tab.getAttribute("data-music-tab") === target;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    musicPanels.forEach((panel) => {
      const isActive = panel.getAttribute("data-music-panel") === target;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  musicTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-music-tab");
      if (target) {
        activateMusicPanel(target);
      }
    });
  });

  activateMusicPanel("gear");
}
