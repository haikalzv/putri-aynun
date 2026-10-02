/* ======================================================================
   SITE_CONFIG — Ubah SEMUA konten website di sini. Tidak perlu sentuh
   HTML atau CSS sama sekali. Struktur ini sengaja dipisah dari tampilan
   supaya gampang diedit ulang tahun ke berapapun berikutnya.
   ====================================================================== */
const SITE_CONFIG = {

  name: "Putri Aynun Hikma",
  age: 25,
  eyebrow: "Untuk Ulang Tahun ke-25",
  heroTagline: "Selamat ulang tahun yang ke 25 yaa sayaanggg, semoga setiap babak baru selalu lebih hangat dari sebelumnya ya bby 😉.",

  nav: [
    { id: "beranda", label: "Beranda" },
    { id: "perjalanan", label: "Perjalanan" },
    { id: "alasan", label: "25 Alasan" },
    { id: "galeri", label: "Galeri" },
    { id: "surat", label: "Surat" },
    { id: "harapan", label: "Harapan" },
  ],

  // Ganti angka & label sesuai cerita
  stats: [
    { target: 25, suffix: "", label: "Aynun yang makin bertambah umur makin luar biasa CANTIK" },
    { target: 6, suffix: "+", label: "foto-foto favoritku dari kamu" },
    { target: 100, suffix: "%", label: "cinta kita yang terus bertambah tiap hari" },
  ],

  // Tambah/kurangi item bebas, tampilan menyesuaikan otomatis
  timeline: [
    { date: "Awal cerita", title: "Momen Awkward pertama kali", text: "ingat ga waktu kita gandengan tangan? wkwkwk tangan bby dingin banget disitu hahah." },
    { date: "Titik balik", title: "Akhirnya Jadian", text: "Jujur waktu kita jadian itu bby main oke oke ajaa yaa aku ajak pacaran hahaha." },
    { date: "Momen favorit", title: "Kenangan Paling Indah", text: "That night when we kissed for the first time." },
    { date: "Melewati masa sulit", title: "Saling Menguatkan", text: "Kita beberapa kali pernah hampir putus karena beberapa hal, tapi terima kasih bby tetap mau dengerin povku dan pendapatku dan masih mau nerima aku bahkan sampai sekarang, jujur yang paling aku takutkan itu soal kemarin sih, aku bahkan sudah di posisi ikhlas buat lepasin bby, karena aku juga ngerasa bby layak dapat yang lebih baik dari aku." },
    { date: "Sekarang", title: "Hari Ini, Usia 25", text: "Dan sekarang, di hari ulang tahun bby yang ke 25, aku cuma mau bilang makasih udah mau nerima aku apa adanya bby, makasih udah mau bertahan sama aku." },
  ],

  // Isi 25 alasan — tampilan flip-card otomatis menyesuaikan
  reasons: [
    "Selalu bikin aku ketawa bahkan di hari yang berat.",
    "Sabar banget ngadepin aku yang kadang nyebelin.",
    "Mau nerima aku yang banyak kekurangan ini.",
    "Perhatian bahkan ke hal-hal kecil.",
    "Ngambekan, diemnya kadang bisa 1 tahun hahaha tpi lucu sih.",
    "Pelukan bby selalu jadi tempat paling nyaman buat aku.",
    "Dikala sibuk, bby tetap nyelipin waktu buat ketemu aku.",
    "Tetap jadi diri sendiri di depan siapa pun.",
    "Kadang suka lupa sama hal-hal kecil yg penting, masa lupa pernah makan tahu tektek hmph.",
    "Kuat, walaupun kadang suka gengsi mintol sama aku hahaha.",
    "Aura bby happy, aku sukaaa.",
    "Support mimpi-mimpiku yang aneh itu wkwk.",
    "Kalo marah/Ngambek itu lucuuuu wkwk gemessiinn malahan.",
    "Selalu jadi pendengar yang baik bahkan untuk orang lain.",
    "Selalu ada ketika aku merasa kesepian.",
    "Senyum bby satu hal yang bikin aku pengen ketemu tiap hari.",
    "Bby adalah versi terbaik dari wanita yang pernah aku temui.",
    "Selalu bisa nenangin aku yang lagi emosi akan suatu hal.",
    "Bikin aku merasa bby itu seperti rumah.",
    "Rendah hati dan Tinggi hati hahaha.",
    "Cara bby peduli ke orang lain itu bikin aku belajar tentang kepedulian.",
    "Bby menginspirasi aku tentang banyak hal.",
    "Ga pernah cape buat terus belajar jadi lebih baik.",
    "Your kisses, your hugs, your smile, and everything about you, i just LOVE IT ALL.",
    "Karena kamu, ya kamu bby dengan segala hal di atas, itu sudah cukup buat aku jatuh cinta setiap harinya.",
  ],

  // Ganti nama file sesuai foto, urutan menentukan ukuran
  photos: [
    "bby5.jpg", "bby3.jpg", "bby6.jpg", "bby4.jpg", "bby10.jpg",
    "bby13.jpg", "bby9.jpg", "bby12.jpg", "bby2.jpg", "bby1.jpg",
  ],

  letter: {
    to: "Untuk pacarku yang aku cintai,",
    paragraphs: [
      "Selamat Ulang Tahun Sayaangg, terima kasih yaa selama ini kamu masih mau bertahan sama aku. Aku tau aku mungkin kurang cukup baik untuk kamu, tapi aku bakal terus berusaha ngelakuin yang terbaik buat kamu, always.",
      "Sekali lagi selamat ulang tahun yang ke 25 yaa sayang, semoga apa yang kamu doakan dan impikan akan terkabul semuanya.",
    ],
    signoff: "I LOVE YOU AYNUN 😚",
    from: "— untuk kamu pacarku yang cantik",
  },

  // Doa/harapan
  wishes: [
    { icon: "🌅", text: "Semoga tahun ini dipenuhi ketenangan dan kegembiraan." },
    { icon: "💪", text: "Semoga makin kuat menghadapi apa pun, dan selalu percaya sama kemampuan sendiri." },
    { icon: "🌱", text: "Semoga mimpi-mimpi yang lagi diusahakan pelan-pelan mulai berbuah hasil." },
    { icon: "😽", text: "Semoga makin dikelilingi orang-orang yang beneran sayang dan mendukung kamu." },
    { icon: "✨", text: "Semoga sehat terus, lahir batin, sepanjang tahun ini dan seterusnya." },
    { icon: "🏡", text: "Dan semoga aku selalu jadi salah satu alasan kamu pulang dengan senyum hehehe." },
  ],
};


/* ======================================================================
   MODULE: RENDER mengisi HTML kosong berdasarkan SITE_CONFIG
   ====================================================================== */
function renderContent() {
  document.getElementById("heroEyebrow").textContent = SITE_CONFIG.eyebrow;
  document.getElementById("heroName").textContent = SITE_CONFIG.name;
  document.getElementById("heroTagline").textContent = SITE_CONFIG.heroTagline;

  // Nav
  const navLinks = document.getElementById("navLinks");
  navLinks.innerHTML = SITE_CONFIG.nav
    .map((item, i) => `<a href="#${item.id}" data-target="${item.id}" class="${i === 0 ? "active" : ""}">${item.label}</a>`)
    .join("");

  // Stats
  document.getElementById("statsGrid").innerHTML = SITE_CONFIG.stats
    .map((s, i) => `
      <div class="stat-card">
        <div class="stat-num" data-target="${s.target}" data-suffix="${s.suffix}" id="stat-${i}">0${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>`)
    .join("");

  // Timeline
  const timelineEl = document.getElementById("timelineList");
  const timelineHTML = SITE_CONFIG.timeline
    .map((t, i) => `
      <div class="timeline-item reveal ${i % 2 === 0 ? "left" : "right"}">
        <div class="timeline-dot">${String(i + 1).padStart(2, "0")}</div>
        <div class="timeline-card">
          <span class="timeline-date">${t.date}</span>
          <h3>${t.title}</h3>
          <p>${t.text}</p>
        </div>
      </div>`)
    .join("");
  timelineEl.insertAdjacentHTML("beforeend", timelineHTML);

  // 25 Reasons (flip cards)
  document.getElementById("reasonsGrid").innerHTML = SITE_CONFIG.reasons
    .map((reason, i) => `
      <div class="reason-card">
        <div class="reason-inner">
          <div class="reason-face reason-front">${String(i + 1).padStart(2, "0")}</div>
          <div class="reason-face reason-back">${reason}</div>
        </div>
      </div>`)
    .join("");

  // Gallery (tile shapes cycle through a-f pattern for masonry variety)
  const tileShapes = ["tile-a", "tile-b", "tile-c", "tile-d", "tile-e", "tile-f"];
  document.getElementById("galleryGrid").innerHTML = SITE_CONFIG.photos
    .map((photo, i) => {
      const shape = tileShapes[i % tileShapes.length];
      return `
      <figure class="tile ${shape}" onclick="openLightbox('${photo}')">
        <img src="${photo}" alt="Kenangan ${i + 1}" onerror="this.src='https://placehold.co/600x600/BFE3FA/142B40?text=Foto+${i + 1}'">
      </figure>`;
    })
    .join("");

  // Letter
  const letter = SITE_CONFIG.letter;
  document.getElementById("letterCard").innerHTML = `
    <p class="letter-to">${letter.to}</p>
    ${letter.paragraphs.map(p => `<p class="letter-body">${p}</p>`).join("")}
    <p class="letter-signoff">${letter.signoff}</p>
    <p class="letter-from">${letter.from}</p>`;

  // Wishes
  document.getElementById("wishesGrid").innerHTML = SITE_CONFIG.wishes
    .map(w => `
      <div class="wish-card reveal">
        <span class="wish-icon">${w.icon}</span>
        <p>${w.text}</p>
      </div>`)
    .join("");
}


/* ======================================================================
   MODULE: PRELOADER
   ====================================================================== */
function initPreloader() {
  const fill = document.getElementById("preloaderFill");
  const num = document.getElementById("preloaderNum");
  const preloader = document.getElementById("preloader");
  const circumference = 276.5;
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 18 + 6;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => preloader.classList.add("done"), 300);
    }
    fill.style.strokeDashoffset = circumference - (circumference * progress) / 100;
    num.textContent = Math.round(progress);
  }, 160);
}


/* ======================================================================
   MODULE: NAVBAR — solid on scroll, active link, mobile toggle
   ====================================================================== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("navLinks");
  const toggle = document.getElementById("navToggle");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });

  toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  const sectionEls = SITE_CONFIG.nav.map(n => document.getElementById(n.id)).filter(Boolean);
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.querySelectorAll("a").forEach(a => {
          a.classList.toggle("active", a.dataset.target === entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  sectionEls.forEach(sec => navObserver.observe(sec));
}


/* ======================================================================
   MODULE: SCROLL PROGRESS BAR
   ====================================================================== */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${(scrollTop / height) * 100}%`;
  });
}


/* ======================================================================
   MODULE: SCROLL REVEAL
   ====================================================================== */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
}


/* ======================================================================
   MODULE: ANIMATED COUNTERS (hero age + stats)
   ====================================================================== */
function animateCounter(el, target, suffix = "", duration = 1600) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const ageCounter = document.getElementById("ageCounter");
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(ageCounter, SITE_CONFIG.age);
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  heroObserver.observe(document.getElementById("beranda"));

  const statEls = document.querySelectorAll(".stat-num");
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, Number(el.dataset.target), el.dataset.suffix);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => statObserver.observe(el));
}


/* ======================================================================
   MODULE: HERO PARTICLES (subtle, desktop-friendly, respects reduced motion)
   ====================================================================== */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let particles = [];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const count = prefersReducedMotion ? 0 : 60;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      vy: Math.random() * 0.25 + 0.05,
      alpha: Math.random() * 0.5 + 0.15,
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y -= p.vy;
      if (p.y < 0) p.y = canvas.height;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(228, 192, 120, ${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  if (count > 0) loop();
}


/* ======================================================================
   MODULE: 25 REASONS — tap-to-flip on touch devices
   ====================================================================== */
function initReasonCards() {
  document.querySelectorAll(".reason-card").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
  });
}


/* ======================================================================
   MODULE: ENVELOPE / LETTER REVEAL
   ====================================================================== */
function initEnvelope() {
  const envelope = document.getElementById("envelope");
  const letterCard = document.getElementById("letterCard");
  envelope.addEventListener("click", () => {
    envelope.classList.add("open");
    setTimeout(() => letterCard.classList.add("open"), 350);
  });
}


/* ======================================================================
   MODULE: LIGHTBOX (with prev/next + keyboard)
   ====================================================================== */
let currentPhotoIndex = 0;

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  currentPhotoIndex = SITE_CONFIG.photos.indexOf(src);
  if (currentPhotoIndex === -1) currentPhotoIndex = 0;
  showPhoto();
  lightbox.classList.add("active");
}

function showPhoto() {
  const tileImgs = document.querySelectorAll(".tile img");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = tileImgs[currentPhotoIndex] ? tileImgs[currentPhotoIndex].src : SITE_CONFIG.photos[currentPhotoIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  document.querySelector(".lightbox-next").addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % SITE_CONFIG.photos.length;
    showPhoto();
  });
  document.querySelector(".lightbox-prev").addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + SITE_CONFIG.photos.length) % SITE_CONFIG.photos.length;
    showPhoto();
  });
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") document.querySelector(".lightbox-next").click();
    if (e.key === "ArrowLeft") document.querySelector(".lightbox-prev").click();
  });
}
window.openLightbox = openLightbox;


/* ======================================================================
   MODULE: MUSIK LATAR (opsional — aktif kalau file musiknya tersedia)
   Ganti nama file di tag <audio> dalam index.html dengan musik pilihanmu.
   Kalau filenya belum ada / browser memblokir, tombol tetap aman dipencet,
   cuma musiknya nggak bunyi sampai filenya kamu taruh di folder yang sama.
   ====================================================================== */
function initMusicToggle() {
  const btn = document.getElementById("musicToggle");
  const audio = document.getElementById("bgMusic");
  if (!btn || !audio) return;

  let isPlaying = false;

  btn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play()
        .then(() => {
          isPlaying = true;
          btn.textContent = "🔊";
          btn.classList.add("playing");
        })
        .catch(() => {
          // file musik belum ada, atau browser memblokir autoplay — abaikan dengan tenang
          btn.textContent = "🎵";
        });
    } else {
      audio.pause();
      isPlaying = false;
      btn.textContent = "🎵";
      btn.classList.remove("playing");
    }
  });
}


/* ======================================================================
   MODULE: CONFETTI (tombol kejutan)
   ====================================================================== */
function initConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let pieces = [];
  let animating = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const colors = ["#BFE3FA", "#6FB8E8", "#2E6A99", "#E4C078", "#FFFFFF"];
  const shapes = ["✨", "🎈", "💙", "⭐", "🥞"];

  function spawn() {
    const count = prefersReducedMotion ? 16 : 60;
    for (let i = 0; i < count; i++) {
      pieces.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 100,
        y: canvas.height - 80,
        vx: (Math.random() - 0.5) * 8,
        vy: -(Math.random() * 10 + 6),
        gravity: 0.28,
        size: Math.random() * 14 + 10,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        life: 1,
        useEmoji: Math.random() > 0.5,
        emoji: shapes[Math.floor(Math.random() * shapes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    if (!animating) { animating = true; loop(); }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.life -= 0.012;

      ctx.save();
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      if (p.useEmoji) {
        ctx.font = `${p.size}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(p.emoji, 0, 0);
      } else {
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }
      ctx.restore();
    });

    pieces = pieces.filter(p => p.life > 0 && p.y < canvas.height + 50);
    if (pieces.length > 0) {
      requestAnimationFrame(loop);
    } else {
      animating = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  document.getElementById("fabSurprise").addEventListener("click", spawn);
}


/* ======================================================================
   BOOTSTRAP — jalankan semua modul setelah DOM siap
   ====================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  initPreloader();
  initNavbar();
  initScrollProgress();
  initScrollReveal();
  initCounters();
  initParticles();
  initReasonCards();
  initEnvelope();
  initLightbox();
  initConfetti();
  initMusicToggle();
});
