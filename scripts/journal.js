(() => {
  const triggers = Array.from(document.querySelectorAll("[data-journal-panel-trigger]"));
  const panels = Array.from(document.querySelectorAll("[data-journal-panel]"));

  if (!triggers.length || !panels.length) {
    return;
  }

  let activeIndex = Math.max(
    0,
    triggers.findIndex((trigger) => trigger.classList.contains("is-active")),
  );

  const getPanelIndexForHash = () => {
    if (!window.location.hash) {
      return -1;
    }

    const hashTarget = document.querySelector(window.location.hash);
    if (!hashTarget) {
      return -1;
    }

    return panels.findIndex((panel) => panel.contains(hashTarget));
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

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      setActivePanel(index);
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

  const hashPanelIndex = getPanelIndexForHash();
  if (hashPanelIndex >= 0) {
    activeIndex = hashPanelIndex;
  }

  setActivePanel(activeIndex);

  window.addEventListener("hashchange", () => {
    const nextIndex = getPanelIndexForHash();
    if (nextIndex >= 0) {
      setActivePanel(nextIndex);
    }
  });
})();

(() => {
  const articleCards = Array.from(document.querySelectorAll("[data-share-title]"));

  if (!articleCards.length) {
    return;
  }

  const clearTimers = new WeakMap();

  const setStatus = (article, message) => {
    const statusTarget = article.querySelector(".journal-share-status");
    if (!statusTarget) {
      return;
    }

    statusTarget.textContent = message;

    const existingTimer = clearTimers.get(statusTarget);
    if (existingTimer) {
      window.clearTimeout(existingTimer);
    }

    const timerId = window.setTimeout(() => {
      statusTarget.textContent = "";
    }, 2600);

    clearTimers.set(statusTarget, timerId);
  };

  const buildArticleUrl = (article) => {
    const canonicalHref = document.querySelector('link[rel="canonical"]')?.href?.trim();
    const canonicalUrl = canonicalHref && /^https?:\/\//i.test(canonicalHref)
      ? canonicalHref
      : `${window.location.origin}${window.location.pathname}`;
    return article.id ? `${canonicalUrl}#${article.id}` : canonicalUrl;
  };

  const copyText = async (value) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }

    const tempField = document.createElement("textarea");
    tempField.value = value;
    tempField.setAttribute("readonly", "");
    tempField.style.position = "absolute";
    tempField.style.left = "-9999px";
    document.body.appendChild(tempField);
    tempField.select();

    const success = document.execCommand("copy");
    document.body.removeChild(tempField);
    return success;
  };

  articleCards.forEach((article) => {
    const shareButton = article.querySelector("[data-share-article]");
    const copyButton = article.querySelector("[data-copy-article]");
    const url = buildArticleUrl(article);
    const title = article.dataset.shareTitle || document.title;
    const text = article.dataset.shareText || "";

    shareButton?.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share({ title, text, url });
          setStatus(article, "Ready to share.");
          return;
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            setStatus(article, "Share cancelled.");
            return;
          }
        }
      }

      try {
        await copyText(url);
        setStatus(article, "Link copied.");
      } catch {
        setStatus(article, "Unable to share right now.");
      }
    });

    copyButton?.addEventListener("click", async () => {
      try {
        await copyText(url);
        setStatus(article, "Link copied.");
      } catch {
        setStatus(article, "Unable to copy link.");
      }
    });
  });
})();
