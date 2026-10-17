/* ========================================================================
   ★ EASY CUSTOMISATION BLOCK (EDIT EVERYTHING IN ONE PLACE HERE!) ★
   ======================================================================== */
const BIRTHDAY_CONFIG = {
  herName: "Sophie",
  dateBadge: "Celebrating You Today • ♡",
  heroSubtitle: "A little something made just for you.",

  // 4 Scrapbook Polaroid Memories
  photos: [
    {
      src: "assets/photo1.jpg",
      alt: "Coffee date together",
      caption: "Our Coffee Date",
      dateTag: "Memory #1",
      note: "I still remember how much we laughed that afternoon."
    },
    {
      src: "assets/photo2.jpg",
      alt: "Golden hour walk",
      caption: "Golden Hour Walk",
      dateTag: "Memory #2",
      note: "Every walk feels ten times better with your hand in mine."
    },
    {
      src: "assets/photo3.jpg",
      alt: "Late night study break",
      caption: "Study Break Snacks",
      dateTag: "Memory #3",
      note: "Thank you for making even busy exam days feel warm and calm."
    },
    {
      src: "assets/photo4.jpg",
      alt: "My favourite smile",
      caption: "My Favourite Smile",
      dateTag: "Memory #4",
      note: "You wearing blue will forever be my favourite sight."
    }
  ],

  // Handwritten-style Letter
  letterGreeting: "My dearest Sophie,",
  letterParagraphs: [
    "Happy Birthday, my love. Even in the middle of busy lectures and exam revision, my favourite part of every single day is still talking to you, seeing your smile, and knowing I get to call you mine.",
    "You bring so much gentleness, warmth, and quiet magic into my life. Whether we are dressed up for a proper date or just sharing snacks in comfy clothes, being around you always feels like home.",
    "I made this little blue-and-cream scrapbook page so you have something you can open whenever you want a reminder of how deeply you are loved. I hope this new year of your life brings you every bit of happiness you give to me every day."
  ],
  letterClosingLine: "Forever yours,",
  letterSignature: "Your Boyfriend ♡",

  // Hidden Surprise Envelope Message
  surpriseBadge: "Birthday Date Voucher",
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