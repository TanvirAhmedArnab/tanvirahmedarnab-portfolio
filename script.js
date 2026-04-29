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
