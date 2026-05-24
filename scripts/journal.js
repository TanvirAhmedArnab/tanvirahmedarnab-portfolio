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
  const panels = Array.from(document.querySelectorAll("[data-journal-panel]"));

  if (!panels.length) {
    return;
  }

  const entryGroups = panels
    .map((panel) => {
      const triggers = Array.from(panel.querySelectorAll("[data-journal-entry-trigger]"));
      const entries = Array.from(panel.querySelectorAll("[data-journal-entry]"));

      if (!triggers.length || !entries.length) {
        return null;
      }

      const setActiveEntry = (entryId) => {
        const fallbackId = entries[0]?.id || "";
        const nextId = entries.some((entry) => entry.id === entryId) ? entryId : fallbackId;

        triggers.forEach((trigger) => {
          const isActive = trigger.dataset.journalEntryTrigger === nextId;
          trigger.classList.toggle("is-active", isActive);
          trigger.setAttribute("aria-selected", String(isActive));
          trigger.tabIndex = isActive ? 0 : -1;
        });

        entries.forEach((entry) => {
          const isActive = entry.id === nextId;
          entry.classList.toggle("is-active", isActive);
          entry.hidden = !isActive;
        });
      };

      triggers.forEach((trigger, index) => {
        trigger.addEventListener("click", () => {
          const targetId = trigger.dataset.journalEntryTrigger;
          if (!targetId) {
            return;
          }

          setActiveEntry(targetId);

          if (history.replaceState) {
            history.replaceState(null, "", `#${targetId}`);
          } else {
            window.location.hash = targetId;
          }
        });

        trigger.addEventListener("keydown", (event) => {
          let nextIndex = index;

          switch (event.key) {
            case "ArrowDown":
            case "ArrowRight":
              nextIndex = (index + 1) % triggers.length;
              break;
            case "ArrowUp":
            case "ArrowLeft":
              nextIndex = (index - 1 + triggers.length) % triggers.length;
              break;
            case "Home":
              nextIndex = 0;
              break;
            case "End":
              nextIndex = triggers.length - 1;
              break;
            default:
              return;
          }

          event.preventDefault();
          triggers[nextIndex]?.focus();
        });
      });

      return { panel, setActiveEntry, entries };
    })
    .filter(Boolean);

  const syncEntryFromHash = () => {
    const targetId = window.location.hash ? window.location.hash.slice(1) : "";

    entryGroups.forEach((group) => {
      if (!group) {
        return;
      }

      const matchingEntry = group.entries.find((entry) => entry.id === targetId);
      group.setActiveEntry(matchingEntry?.id || group.entries[0]?.id || "");
    });
  };

  syncEntryFromHash();
  window.addEventListener("hashchange", syncEntryFromHash);
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
