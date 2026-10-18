/* ========================================================================
       ★ EASY CUSTOMISATION BLOCK (EDIT EVERYTHING IN ONE PLACE HERE!) ★
       ======================================================================== */
    const BIRTHDAY_CONFIG = {
      herName: "Constance",
      dateBadge: "Celebrating You Today • ♡",
      heroSubtitle: "A little something to brighten your exam-season days.",

      // 4 Scrapbook Polaroid Memories (Front + Handwritten Back-of-Photo Notes)
      // Put your own photos inside an "assets" folder (e.g. assets/photo1.jpg)
      photos: [
        {
          src: "assets/photo1.jpg",
          alt: "The Very Beginning",
          caption: "The Very Beginning",
          dateTag: "Memory #1",
          note: "Throwback to the Year 7 era HAHAHAHA",
          locationStamp: "Year 7 • Where It All Started",
          backStory:
            "\"Who would've guessed that the two kids from Year 7 would end up here? Best plot twist of my life.\""
        },
        {
          src: "assets/photo2.jpg",
          alt: "The Night I Made You Mine",
          caption: "The Night I Made You Mine",
          dateTag: "Memory #2",
          note: "I won't ever forget that night.. one of my happiest memories.",
          locationStamp: "That Night • Just Us",
          backStory:
            "\"I still replay that night in my head sometimes. Out of every memory I have, this one shines the brightest.\""
        },
        {
          src: "assets/photo3.jpg",
          alt: "Kinda our last hangout",
          caption: "Kinda Our Last Hangout?",
          dateTag: "Memory #3",
          note: "Thank you for always inviting me!! So fun going out with you!",
          locationStamp: "Our Hangout • Good Food & Better Company",
          backStory:
            "\"You always make even the simplest outing feel like an event. Thank you for dragging me along — I'd say yes every single time.\""
        },
        {
          src: "assets/photo4.jpg",
          alt: "My Favourite Person",
          caption: "My Favourite Person",
          dateTag: "Memory #4",
          note: "I hope that I always get to call you mine.",
          locationStamp: "My Favourite Photo of You",
          backStory:
            "\"Every time I look at this photo I'm reminded how lucky I am — and how badly I want to keep being yours.\""
        }
      ],

      // Handwritten-style Letter
      letterGreeting: "My dearest Constance,",
      letterParagraphs: [
        "Happy Birthday, my love. Even in the middle of busy lectures and exam revision, my favourite part of every single day is still talking to you, seeing your smile, and knowing I get to call you mine.",
        "You bring so much gentleness, warmth, and quiet magic into my life. Whether we are dressed up for a proper date or just sharing snacks in comfy clothes, being around you always feels like home.",
        "I made this little blue-and-cream scrapbook page so you have something you can open whenever you want a reminder of how deeply you are loved. I hope this new year of your life brings you every bit of happiness you give to me every day."
      ],
      letterClosingLine: "Forever yours,",
      letterSignature: "Me, hehehe ♡",

      // Birthday Candle Wish Message
      wishPrompt:
        "Close your eyes, make a wish, and tap the glowing flame to blow out your candle.",
      wishGrantedMessage:
        "Wish made! ♡ May every single dream you wished for come true this year.",

      // Hidden Surprise Envelope Voucher
      surpriseBadge: "Whatever You Want Voucher",
      surpriseTitle: "Dinner & Dessert On Me!",
      surpriseMessage:
        "Redeemable anytime for one full birthday celebration date: your favourite food, sweet treats, and zero talk about exams all evening.",
      surpriseFineprint: "Valid forever • No expiration date ♡",

      // Footer Closing
      closingMessage:
        "Thank you for being the brightest, kindest part of my world. Here is to many more birthdays together.",
      closingFootnote: "Made with love • Always & Forever"
    };

    /* ========================================================================
       APPLICATION LOGIC (No need to edit below unless you want to!)
       ======================================================================== */
    document.addEventListener("DOMContentLoaded", () => {
      document.documentElement.classList.add("js-enabled");
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // 1. Apply Personalised Text from BIRTHDAY_CONFIG
      const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el && text) el.textContent = text;
      };

      document.title = `Happy Birthday, ${BIRTHDAY_CONFIG.herName} ♡`;
      setText("her-name-heading", BIRTHDAY_CONFIG.herName);
      setText("hero-date-badge", BIRTHDAY_CONFIG.dateBadge);
      setText("hero-subtitle-text", BIRTHDAY_CONFIG.heroSubtitle);
      setText("letter-greeting", BIRTHDAY_CONFIG.letterGreeting);
      setText("letter-closing-line", BIRTHDAY_CONFIG.letterClosingLine);
      setText("letter-signature", BIRTHDAY_CONFIG.letterSignature);
      setText("wish-status", BIRTHDAY_CONFIG.wishPrompt);
      setText("surprise-badge", BIRTHDAY_CONFIG.surpriseBadge);
      setText("surprise-title", BIRTHDAY_CONFIG.surpriseTitle);
      setText("surprise-message", BIRTHDAY_CONFIG.surpriseMessage);
      setText("surprise-fineprint", BIRTHDAY_CONFIG.surpriseFineprint);
      setText("closing-message", BIRTHDAY_CONFIG.closingMessage);
      setText("closing-footnote", BIRTHDAY_CONFIG.closingFootnote);

      // Populate Letter Paragraphs
      const letterBodyEl = document.getElementById("letter-body");
      const renderLetterStatic = () => {
        if (letterBodyEl && Array.isArray(BIRTHDAY_CONFIG.letterParagraphs)) {
          letterBodyEl.innerHTML = BIRTHDAY_CONFIG.letterParagraphs
            .map((p) => `<p>${p}</p>`)
            .join("");
        }
      };
      renderLetterStatic();

      // 2. Update 3D Flip-to-Read Polaroid Cards from Config
      const polaroidScenes = document.querySelectorAll(".polaroid-scene");
      polaroidScenes.forEach((scene, index) => {
        const item = BIRTHDAY_CONFIG.photos[index];
        if (!item) return;

        const img = scene.querySelector(".polaroid-img");
        const fallbackLabel = scene.querySelector(".fallback-label");
        const fallbackPath = scene.querySelector(".fallback-path");
        const caption = scene.querySelector(".polaroid-caption");
        const dateTag = scene.querySelector(".polaroid-date");
        const note = scene.querySelector(".polaroid-note");
        const backStamp = scene.querySelector(".back-stamp");
        const backHandwritten = scene.querySelector(".back-handwritten");

        if (img) {
          img.src = item.src;
          img.alt = item.alt || item.caption;
        }
        if (fallbackLabel) fallbackLabel.textContent = item.caption;
        if (fallbackPath) fallbackPath.textContent = `Photo: ${item.src}`;
        if (caption) caption.textContent = item.caption;
        if (dateTag) dateTag.textContent = item.dateTag;
        if (note) note.textContent = item.note;
        if (backStamp && item.locationStamp) backStamp.textContent = item.locationStamp;
        if (backHandwritten && item.backStory) backHandwritten.textContent = item.backStory;

        // Flip interaction on Front Card
        const front = scene.querySelector(".polaroid-front");
        const flipBackBtn = scene.querySelector(".flip-back-btn");
        const zoomBtn = scene.querySelector(".zoom-photo-btn");

        const toggleFlip = (state) => {
          scene.classList.toggle("is-flipped", state);
        };

        if (front) {
          front.addEventListener("click", () => toggleFlip(true));
          front.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleFlip(true);
            }
          });
        }

        if (flipBackBtn) {
          flipBackBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFlip(false);
          });
        }

        if (zoomBtn) {
          zoomBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            openLightbox(index, zoomBtn);
          });
        }
      });

      // 3. Gentle Scroll Reveal Observer
      const revealItems = document.querySelectorAll(".reveal-on-scroll");
      if (!prefersReducedMotion && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.14 }
        );
        revealItems.forEach((item) => observer.observe(item));
      } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
      }

      // 4. Fountain-Pen Ink Unfold Effect for Letter
      const replayInkBtn = document.getElementById("replay-ink-btn");
      let inkTimer = null;

      if (replayInkBtn && letterBodyEl) {
        replayInkBtn.addEventListener("click", () => {
          if (prefersReducedMotion) return;
          if (inkTimer) clearInterval(inkTimer);

          letterBodyEl.innerHTML = BIRTHDAY_CONFIG.letterParagraphs.map(() => `<p></p>`).join("");
          const pElements = letterBodyEl.querySelectorAll("p");

          let pIndex = 0;
          let charIndex = 0;

          inkTimer = setInterval(() => {
            const currentText = BIRTHDAY_CONFIG.letterParagraphs[pIndex];
            if (!currentText) {
              clearInterval(inkTimer);
              return;
            }
            pElements[pIndex].textContent = currentText.slice(0, charIndex + 3);
            charIndex += 3;

            if (charIndex >= currentText.length) {
              pElements[pIndex].textContent = currentText;
              pIndex++;
              charIndex = 0;
              if (pIndex >= BIRTHDAY_CONFIG.letterParagraphs.length) {
                clearInterval(inkTimer);
              }
            }
          }, 22);
        });
      }

      // 5. Accessible Photo Lightbox
      const lightbox = document.getElementById("photo-lightbox");
      const lightboxMedia = document.getElementById("lightbox-media");
      const lightboxCaption = document.getElementById("lightbox-caption");
      const lightboxNote = document.getElementById("lightbox-note");
      const lightboxClose = document.getElementById("lightbox-close");
      let lastFocusedEl = null;

      function openLightbox(index, triggerEl) {
        const item = BIRTHDAY_CONFIG.photos[index];
        const scene = polaroidScenes[index];
        if (!item || !lightbox || !scene) return;
        lastFocusedEl = triggerEl;

        const sourceFrame = scene.querySelector(".polaroid-frame");
        if (sourceFrame && lightboxMedia) {
          lightboxMedia.innerHTML = sourceFrame.innerHTML;
        }

        if (lightboxCaption) lightboxCaption.textContent = `${item.caption} (${item.dateTag})`;
        if (lightboxNote) lightboxNote.textContent = item.backStory || item.note;

        lightbox.classList.add("is-active");
        lightbox.setAttribute("aria-hidden", "false");
        lightboxClose.focus();
      }

      const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.classList.remove("is-active");
        lightbox.setAttribute("aria-hidden", "true");
        if (lastFocusedEl) lastFocusedEl.focus();
      };

      if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
      if (lightbox) {
        lightbox.addEventListener("click", (e) => {
          if (e.target === lightbox) closeLightbox();
        });
      }

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox && lightbox.classList.contains("is-active")) {
          closeLightbox();
        }
      });

      // Helper for Floating Hearts / Petals Burst
      const spawnGentleHearts = (containerEl) => {
        if (prefersReducedMotion || !containerEl) return;
        containerEl.innerHTML = "";
        const symbols = ["♡", "♥", "✿", "♡", "♥", "✿"];
        const colours = ["#5B82A6", "#C88A8B", "#3D5A75", "#D99B99", "#5B82A6", "#C88A8B"];

        symbols.forEach((sym, i) => {
          const span = document.createElement("span");
          span.className = "floating-heart";
          span.textContent = sym;
          span.style.left = `${16 + i * 13}%`;
          span.style.color = colours[i % colours.length];
          span.style.animationDelay = `${i * 0.11}s`;
          containerEl.appendChild(span);
        });
      };

      // 6. Interactive Birthday Wish Candle
      const wishCard = document.getElementById("wish-card");
      const blowCandleBtn = document.getElementById("blow-candle-btn");
      const relightCandleBtn = document.getElementById("relight-candle-btn");
      const wishStatus = document.getElementById("wish-status");
      const wishHeartsBurst = document.getElementById("wish-hearts-burst");

      if (blowCandleBtn && wishCard) {
        blowCandleBtn.addEventListener("click", () => {
          if (wishCard.classList.contains("is-blown")) return;
          wishCard.classList.add("is-blown");
          if (wishStatus) wishStatus.textContent = BIRTHDAY_CONFIG.wishGrantedMessage;
          spawnGentleHearts(wishHeartsBurst);
        });
      }

      if (relightCandleBtn && wishCard) {
        relightCandleBtn.addEventListener("click", () => {
          wishCard.classList.remove("is-blown");
          if (wishStatus) wishStatus.textContent = BIRTHDAY_CONFIG.wishPrompt;
        });
      }

      // 7. Surprise Envelope + Claimable Date Voucher
      const surpriseBtn = document.getElementById("surprise-btn");
      const surpriseContent = document.getElementById("surprise-content");
      const promptText = document.getElementById("envelope-prompt-text");
      const heartsBurst = document.getElementById("hearts-burst");
      const claimVoucherBtn = document.getElementById("claim-voucher-btn");

      if (surpriseBtn && surpriseContent) {
        surpriseBtn.addEventListener("click", () => {
          const isOpen = surpriseBtn.getAttribute("aria-expanded") === "true";
          const nextState = !isOpen;

          surpriseBtn.setAttribute("aria-expanded", String(nextState));
          surpriseContent.classList.toggle("is-open", nextState);

          if (promptText) {
            promptText.textContent = nextState
              ? "Your surprise is open ♡ (Tap to fold)"
              : "Tap the wax seal to open";
          }

          if (nextState) {
            spawnGentleHearts(heartsBurst);
          }
        });
      }

      if (claimVoucherBtn) {
        claimVoucherBtn.addEventListener("click", () => {
          const claimed = claimVoucherBtn.classList.toggle("is-claimed");
          claimVoucherBtn.innerHTML = claimed
            ? "<span>✓ Voucher Claimed &amp; Saved ♡</span>"
            : "<span>♡ Claim this date voucher</span>";
          if (claimed) spawnGentleHearts(heartsBurst);
        });
      }

      // 8. Spinning Vinyl Music Toggle (Supports local MP3 OR Built-in Soft Music-Box Chime)
      const musicToggle = document.getElementById("music-toggle");
      const musicLabel = document.getElementById("music-label");
      const audioEl = document.getElementById("bg-music");

      let isPlaying = false;
      let synthInterval = null;
      let audioCtx = null;

      const playMusicBoxMelody = () => {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        if (!audioCtx) audioCtx = new AudioContextClass();
        if (audioCtx.state === "suspended") audioCtx.resume();

        const notes = [
          261.63, 261.63, 293.66, 261.63, 349.23, 329.63,
          261.63, 261.63, 293.66, 261.63, 392.00, 349.23
        ];
        let step = 0;

        const playNote = () => {
          if (!isPlaying || !audioCtx) return;
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(notes[step % notes.length], audioCtx.currentTime);

          gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.055, audioCtx.currentTime + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.78);

          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.82);
          step++;
        };

        playNote();
        synthInterval = setInterval(playNote, 860);
      };

      const stopMusic = () => {
        isPlaying = false;
        if (audioEl) audioEl.pause();
        if (synthInterval) {
          clearInterval(synthInterval);
          synthInterval = null;
        }
        if (musicToggle) musicToggle.setAttribute("aria-pressed", "false");
        if (musicLabel) musicLabel.textContent = "Play melody ♪";
      };

      if (musicToggle) {
        musicToggle.addEventListener("click", () => {
          if (isPlaying) {
            stopMusic();
            return;
          }

          isPlaying = true;
          musicToggle.setAttribute("aria-pressed", "true");
          if (musicLabel) musicLabel.textContent = "Playing ♪";

          if (audioEl) {
            const playPromise = audioEl.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                playMusicBoxMelody();
              });
            }
          } else {
            playMusicBoxMelody();
          }
        });
      }
    });

/* ========================================================================
   APPLICATION LOGIC
   ======================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js-enabled");

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el && text) el.textContent = text;
  };

  document.title = `Happy Birthday, ${BIRTHDAY_CONFIG.herName} ♡`;
  setText("her-name-heading", BIRTHDAY_CONFIG.herName);
  setText("hero-date-badge", BIRTHDAY_CONFIG.dateBadge);
  setText("hero-subtitle-text", BIRTHDAY_CONFIG.heroSubtitle);
  setText("letter-greeting", BIRTHDAY_CONFIG.letterGreeting);
  setText("letter-closing-line", BIRTHDAY_CONFIG.letterClosingLine);
  setText("letter-signature", BIRTHDAY_CONFIG.letterSignature);
  setText("surprise-badge", BIRTHDAY_CONFIG.surpriseBadge);
  setText("surprise-title", BIRTHDAY_CONFIG.surpriseTitle);
  setText("surprise-message", BIRTHDAY_CONFIG.surpriseMessage);
  setText("surprise-fineprint", BIRTHDAY_CONFIG.surpriseFineprint);
  setText("closing-message", BIRTHDAY_CONFIG.closingMessage);
  setText("closing-footnote", BIRTHDAY_CONFIG.closingFootnote);

  const letterBodyEl = document.getElementById("letter-body");
  if (letterBodyEl && Array.isArray(BIRTHDAY_CONFIG.letterParagraphs)) {
    letterBodyEl.innerHTML = BIRTHDAY_CONFIG.letterParagraphs
      .map((p) => `<p>${p}</p>`)
      .join("");
  }

  const polaroidCards = document.querySelectorAll(".polaroid-card");
  polaroidCards.forEach((card, index) => {
    const item = BIRTHDAY_CONFIG.photos[index];
    if (!item) return;

    const img = card.querySelector(".polaroid-img");
    const fallbackLabel = card.querySelector(".fallback-label");
    const fallbackPath = card.querySelector(".fallback-path");
    const caption = card.querySelector(".polaroid-caption");
    const dateTag = card.querySelector(".polaroid-date");
    const note = card.querySelector(".polaroid-note");

    if (img) {
      img.src = item.src;
      img.alt = item.alt || item.caption;
    }
    if (fallbackLabel) fallbackLabel.textContent = item.caption;
    if (fallbackPath) fallbackPath.textContent = `Photo: ${item.src}`;
    if (caption) caption.textContent = item.caption;
    if (dateTag) dateTag.textContent = item.dateTag;
    if (note) note.textContent = item.note;
  });

  // Gentle Scroll Reveal Observer
  const revealItems = document.querySelectorAll(".reveal-on-scroll");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Accessible Photo Lightbox
  const lightbox = document.getElementById("photo-lightbox");
  const lightboxMedia = document.getElementById("lightbox-media");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxNote = document.getElementById("lightbox-note");
  const lightboxClose = document.getElementById("lightbox-close");
  let lastFocusedCard = null;

  const openLightbox = (index, triggerEl) => {
    const item = BIRTHDAY_CONFIG.photos[index];
    if (!item || !lightbox) return;
    lastFocusedCard = triggerEl;

    const sourceFrame = triggerEl.querySelector(".polaroid-frame");
    if (sourceFrame && lightboxMedia) {
      lightboxMedia.innerHTML = sourceFrame.innerHTML;
    }

    if (lightboxCaption) lightboxCaption.textContent = `${item.caption} (${item.dateTag})`;
    if (lightboxNote) lightboxNote.textContent = item.note;

    lightbox.classList.add("is-active");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-active");
    lightbox.setAttribute("aria-hidden", "true");
    if (lastFocusedCard) lastFocusedCard.focus();
  };

  polaroidCards.forEach((card, idx) => {
    card.addEventListener("click", () => openLightbox(idx, card));
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("is-active")) {
      closeLightbox();
    }
  });

  // Surprise Envelope Interaction + Gentle Heart Animation
  const surpriseBtn = document.getElementById("surprise-btn");
  const surpriseContent = document.getElementById("surprise-content");
  const promptText = document.getElementById("envelope-prompt-text");
  const heartsBurst = document.getElementById("hearts-burst");

  const spawnGentleHearts = () => {
    if (prefersReducedMotion || !heartsBurst) return;
    heartsBurst.innerHTML = "";
    const symbols = ["♡", "♥", "✿", "♡", "♥", "♡"];
    const colours = ["#5B82A6", "#C88A88", "#3E5F7E", "#D99B99", "#5B82A6", "#C88A88"];

    symbols.forEach((sym, i) => {
      const span = document.createElement("span");
      span.className = "floating-heart";
      span.textContent = sym;
      span.style.left = `${18 + i * 13}%`;
      span.style.color = colours[i % colours.length];
      span.style.animationDelay = `${i * 0.12}s`;
      heartsBurst.appendChild(span);
    });
  };

  if (surpriseBtn && surpriseContent) {
    surpriseBtn.addEventListener("click", () => {
      const isOpen = surpriseBtn.getAttribute("aria-expanded") === "true";
      const nextState = !isOpen;

      surpriseBtn.setAttribute("aria-expanded", String(nextState));
      surpriseContent.classList.toggle("is-open", nextState);

      if (promptText) {
        promptText.textContent = nextState
          ? "Your surprise is open ♡ (Tap to fold)"
          : "Tap the wax seal to open";
      }

      if (nextState) spawnGentleHearts();
    });
  }

  // Optional Gentle Music Toggle
  const musicToggle = document.getElementById("music-toggle");
  const musicLabel = document.getElementById("music-label");
  const audioEl = document.getElementById("bg-music");

  let isPlaying = false;
  let synthInterval = null;
  let audioCtx = null;

  const playMusicBoxMelody = () => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const notes = [
      261.63, 261.63, 293.66, 261.63, 349.23, 329.63,
      261.63, 261.63, 293.66, 261.63, 392.00, 349.23
    ];
    let step = 0;

    const playNote = () => {
      if (!isPlaying || !audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(notes[step % notes.length], audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.75);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
      step++;
    };

    playNote();
    synthInterval = setInterval(playNote, 850);
  };

  const stopMusic = () => {
    isPlaying = false;
    if (audioEl) audioEl.pause();
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
    if (musicToggle) musicToggle.setAttribute("aria-pressed", "false");
    if (musicLabel) musicLabel.textContent = "Play melody ♪";
  };

  if (musicToggle) {
    musicToggle.addEventListener("click", () => {
      if (isPlaying) {
        stopMusic();
        return;
      }
      isPlaying = true;
      musicToggle.setAttribute("aria-pressed", "true");
      if (musicLabel) musicLabel.textContent = "Pause melody ❚❚";

      if (audioEl) {
        const playPromise = audioEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => playMusicBoxMelody());
        }
      } else {
        playMusicBoxMelody();
      }
    });
  }
});