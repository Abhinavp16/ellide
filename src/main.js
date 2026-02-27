import "./style.css";

const heroSlides = [
  {
    title: "Powering Your Everyday Life",
    subtitle: "Fast Charging | Reliable | Premium Quality",
    image: "/sample/image.png",
    alt: "Fast charger setup for daily use",
  },
  {
    title: "45W & 100W Cable Performance",
    subtitle: "1 Meter | Fast Sync | Smart Protection",
    image: "/sample/2.png",
    alt: "High wattage charging cable performance visual",
  },
  {
    title: "Sound & Power In One Ecosystem",
    subtitle: "TWS Earbuds | Neckbands | Long Battery Backup",
    image: "/sample/3.png",
    alt: "Fast charging adapter and cable",
  },
];

const categoryCards = [
  "Fast Chargers",
  "Data Cables",
  "Power Banks",
  "Soundbuds",
];

const categoriesHub = [
  { icon: "🎧", name: "True Wireless Earbuds" },
  { icon: "🎵", name: "Neckbands" },
  { icon: "⌚", name: "Smart Watches" },
  { icon: "🎧", name: "Wireless Headphones" },
  { icon: "🔊", name: "Wireless Speakers" },
  { icon: "📻", name: "Soundbars" },
  { icon: "📢", name: "Party Speakers" },
  { icon: "🔋", name: "Power Banks" },
  { icon: "📹", name: "Dashcams" },
  { icon: "🎮", name: "Gaming Series" },
  { icon: "🔌", name: "Chargers and Cables" },
  { icon: "🎼", name: "Wired Headphones" },
  { icon: "🎤", name: "Wired Earphones" },
  { icon: "🛡", name: "Superhero Collection" },
  { icon: "⭐", name: "Limited Edition" },
];

const productCards = [
  {
    name: "Eliide 80W Turbo Charger",
    image: "/sample/image.png",
    specs: ["80W", "PD 3.0", "QC 4+"],
    description: "Dual-port ultra fast wall charger with overheat and surge protection.",
  },
  {
    name: "Eliide 45W / 100W Smart Cable",
    image: "/sample/2.png",
    specs: ["45W/100W", "1 Meter", "E-Marker Chip"],
    description:
      "Fast-sync cable lineup inspired by premium retail visuals, tuned for stable power and durable daily use.",
  },
  {
    name: "Eliide 22.5W Max Power Bank",
    image: "/sample/4.png",
    specs: ["20000mAh", "22.5W", "3 Output Ports"],
    description: "Travel-ready power bank with smart charge balancing and battery health safety.",
  },
];

document.querySelector("#app").innerHTML = `
  <div class="site-shell">
    <header id="navbar" class="navbar">
      <div class="mx-auto flex w-[min(1120px,92vw)] items-center justify-between gap-5 py-4">
        <a href="#" class="brand" aria-label="Eliide home">
          <span class="brand-mark-wrap">
            <img src="/logo.svg" alt="Eliide logo mark" class="brand-logo brand-logo-mark" />
          </span>
          <span class="brand-text-wrap">
            <strong class="brand-name">eliide</strong>
            <span class="brand-tagline">Charging The Best Brand</span>
          </span>
        </a>
        <nav class="hidden items-center gap-7 text-sm font-semibold md:flex">
          <button
            id="categoriesToggle"
            type="button"
            class="nav-link nav-link-btn"
            aria-expanded="false"
            aria-controls="categoriesPopup"
          >
            Categories
          </button>
          <a href="#offers" class="nav-link">Offers</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>
        <button type="button" class="login-trigger btn-outline text-sm">
          <svg viewBox="0 0 24 24" class="login-icon" aria-hidden="true">
            <circle cx="12" cy="8" r="3.2"></circle>
            <path d="M5 19c1.6-3 4.2-4.4 7-4.4s5.4 1.4 7 4.4"></path>
          </svg>
          <span>Login</span>
        </button>
      </div>
      <div id="categoriesPopup" class="categories-popup" aria-hidden="true">
        <div class="mx-auto w-[min(1320px,96vw)]">
          <div class="categories-popup-card">
            <div class="categories-popup-grid">
              ${categoriesHub
                .map(
                  (item) => `
                    <article class="category-hub-item">
                      <span class="category-hub-icon">${item.icon}</span>
                      <h3>${item.name}</h3>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section id="hero" class="hero-section">
        <div class="hero-ambient hero-ambient-a"></div>
        <div class="hero-ambient hero-ambient-b"></div>
        <div class="hero-slider-container">
          <div id="heroTrack" class="hero-track">
            ${heroSlides
              .map(
                (slide) => `
                  <article class="hero-slide">
                    <div class="hero-copy reveal">
                      <p class="eyebrow">Premium Mobile Accessories</p>
                      <h1>${slide.title}</h1>
                      <p class="hero-sub">${slide.subtitle}</p>
                      <div class="mt-8 flex flex-wrap gap-3">
                        <a href="#products" class="btn-yellow">Explore Products</a>
                        <a href="#" class="btn-outline">Buy on Amazon</a>
                      </div>
                    </div>
                    <div class="hero-media reveal">
                      <img src="${slide.image}" alt="${slide.alt}" loading="lazy" />
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
        <div class="hero-controls">
          <button id="prevSlide" class="ctrl-btn" aria-label="Previous slide">Prev</button>
          <div id="heroDots" class="dots"></div>
          <button id="nextSlide" class="ctrl-btn" aria-label="Next slide">Next</button>
        </div>
      </section>

      <section id="products" class="section-wrap">
        <div class="section-head reveal">
          <p class="eyebrow">Featured Categories</p>
          <h2>Built for Speed, Durability, and Daily Use</h2>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          ${categoryCards
            .map(
              (category) => `
                <article class="category-card reveal">
                  <h3>${category}</h3>
                  <p>Smart-engineered accessories with reliable high-performance output.</p>
                  <a href="#" class="card-link">View Products -></a>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section id="offers" class="section-wrap">
        <div class="space-y-4">
          <article class="offer-banner reveal">
            <div>
              <p class="eyebrow text-black/70">Special Offer</p>
              <h3>Up to 80W Fast Charging</h3>
              <p>Advanced GaN adapters designed for low heat and consistent high-speed output.</p>
              <a href="#" class="btn-dark mt-5">Shop on Flipkart</a>
            </div>
            <img src="/sample/image.png" alt="Fast charger adapter" loading="lazy"/>
          </article>
          <article class="offer-banner reveal">
            <div>
              <p class="eyebrow text-black/70">New Launch</p>
              <h3>45W / 100W Data Cables with Integrated Chipset</h3>
              <p>1 meter cable variants with E-marker intelligence for fast charging and reliable data transfer.</p>
              <a href="#" class="btn-dark mt-5">Shop on Flipkart</a>
            </div>
            <img src="/sample/2.png" alt="Adapter with charging cable" loading="lazy"/>
          </article>
          <article class="offer-banner reveal">
            <div>
              <p class="eyebrow text-black/70">Trending</p>
              <h3>22.5W Power Banks Now Available</h3>
              <p>Compact high-capacity units with smart load balancing and all-day backup power.</p>
              <a href="#" class="btn-dark mt-5">Shop on Flipkart</a>
            </div>
            <img src="/sample/4.png" alt="Compact adapter charger" loading="lazy"/>
          </article>
        </div>
      </section>

      <section class="section-wrap">
        <div class="section-head reveal">
          <p class="eyebrow">Top Products</p>
          <h2>Best-Selling Accessories</h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          ${productCards
            .map(
              (item) => `
                <article class="product-card reveal">
                  <img src="${item.image}" alt="${item.name}" loading="lazy" />
                  <div class="p-6">
                    <h3>${item.name}</h3>
                    <div class="spec-row">
                      ${item.specs.map((spec) => `<span>${spec}</span>`).join("")}
                    </div>
                    <p>${item.description}</p>
                    <div class="mt-5 flex flex-wrap gap-2">
                      <a href="#" class="btn-outline">Buy on Amazon</a>
                      <a href="#" class="btn-outline">Buy on Flipkart</a>
                      <a href="#dealer" class="btn-yellow">Get Best Price</a>
                    </div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section id="about" class="section-wrap">
        <div class="why-wrap reveal">
          <div class="section-head">
            <p class="eyebrow">Why Choose Us</p>
            <h2>Technology You Can Trust</h2>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="why-card"><strong>Fast Charging Technology</strong><p>Optimized charging profiles for speed and battery health.</p></div>
            <div class="why-card"><strong>Durable Build</strong><p>High-grade materials tested for everyday heavy usage.</p></div>
            <div class="why-card"><strong>Tested & Certified</strong><p>Each batch goes through quality and safety certification cycles.</p></div>
            <div class="why-card"><strong>Warranty Support</strong><p>Reliable customer support and easy replacement assistance.</p></div>
          </div>
        </div>
      </section>

      <section id="dealer" class="dealer-section reveal">
        <div class="mx-auto w-[min(1120px,92vw)]">
          <h2>Get Exclusive Dealer Pricing & Offers</h2>
          <form class="dealer-form">
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <select required>
              <option value="">Business Type</option>
              <option>Retailer</option>
              <option>Distributor</option>
              <option>Wholesaler</option>
            </select>
            <button type="submit" class="btn-dark">Request Catalogue</button>
          </form>
        </div>
      </section>

      <section class="section-wrap">
        <div class="trust-wrap reveal">
          <div class="logo-chip">Amazon</div>
          <div class="logo-chip">Flipkart</div>
          <div class="metric"><strong>10,000+</strong><span>Happy Customers</span></div>
          <div class="metric"><strong>1 Year</strong><span>Warranty Badge</span></div>
          <div class="metric"><strong>Secure</strong><span>Tested & Certified</span></div>
        </div>
      </section>
    </main>

    <footer id="contact" class="footer">
      <div class="mx-auto grid w-[min(1120px,92vw)] gap-8 py-12 md:grid-cols-4">
        <div>
          <a href="#" class="brand footer-brand" aria-label="Eliide home">
            <img src="/logo.svg" alt="Eliide logo" class="brand-logo" />
          </a>
          <p class="mt-3 text-sm text-black/60">Power accessories designed for modern digital lifestyles.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#products">Products</a>
          <a href="#offers">Offers</a>
          <a href="#about">About</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+910000000000">+91 00000 00000</a>
          <a href="mailto:sales@eliide.com">sales@eliide.com</a>
          <p>New Delhi, India</p>
        </div>
        <div>
          <h4>Social</h4>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">LinkedIn</a>
          <a href="#" class="btn-yellow mt-4 inline-flex">Download Catalogue</a>
        </div>
      </div>
    </footer>

    <div id="loginModal" class="login-modal" aria-hidden="true">
      <div class="login-modal-backdrop" data-close-login></div>
      <div class="login-modal-card" role="dialog" aria-modal="true" aria-labelledby="loginTitle">
        <button id="loginClose" class="login-close" type="button" aria-label="Close login form">x</button>
        <div id="loginView" class="auth-view is-active">
          <p class="eyebrow">Account Access</p>
          <h3 id="loginTitle">Login to Your Account</h3>
          <form class="login-modal-form">
            <input type="text" placeholder="Email or Phone Number" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" class="btn-dark w-full">Login</button>
          </form>
          <div class="login-divider"><span>OR</span></div>
          <button type="button" class="social-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.8-5.5 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.4l2.7-2.6C17 3.2 14.8 2.2 12 2.2 6.6 2.2 2.2 6.6 2.2 12S6.6 21.8 12 21.8c6.9 0 9.6-4.8 9.6-7.3 0-.5 0-.8-.1-1.2H12z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
          <button type="button" class="social-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M16.8 12.8c0-2.2 1.8-3.2 1.9-3.3-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8-.8 0-1.9-.8-3.2-.8-1.7 0-3.2 1-4 2.4-1.7 3-.4 7.4 1.2 9.7.8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.8 3-.8s1.8.8 3 .8c1.2 0 2-.9 2.8-2 .9-1.3 1.3-2.6 1.3-2.7 0 0-2-.8-2-3.5zM14.4 6.2c.6-.7 1-1.6.9-2.6-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-.9 2.5 1 0 2-.5 2.6-1.2z"/>
            </svg>
            <span>Continue with Apple</span>
          </button>
          <a href="#" class="forgot-link">Forgot password?</a>
          <p class="signup-copy">Don't have an account? <button id="showSignup" type="button" class="inline-switch">Sign up</button></p>
        </div>

        <div id="signupView" class="auth-view">
          <h3 class="signup-title">Create Account</h3>
          <p class="signup-sub">Join our community and start your journey today.</p>
          <form class="signup-form">
            <label class="signup-label">Full Name</label>
            <div class="field-wrap">
              <span class="field-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="3.2"></circle>
                  <path d="M5 19c1.6-3 4.2-4.4 7-4.4s5.4 1.4 7 4.4"></path>
                </svg>
              </span>
              <input type="text" placeholder="John Doe" required />
            </div>
            <label class="signup-label">Email Address</label>
            <div class="field-wrap">
              <span class="field-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="6.5" width="16" height="11" rx="2"></rect>
                  <path d="M5 8l7 5 7-5"></path>
                </svg>
              </span>
              <input type="email" placeholder="name@company.com" required />
            </div>
            <label class="signup-label">Phone Number</label>
            <div class="field-wrap">
              <span class="field-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7.8 4.5h2.6l.9 2.8-1.4 1.4c.8 1.6 2.1 2.9 3.7 3.7l1.4-1.4 2.8.9v2.6c0 .6-.5 1.1-1.1 1.1C10.2 16.6 7.4 13.8 6.7 7.8c0-.6.5-1.1 1.1-1.1z"></path>
                </svg>
              </span>
              <input type="tel" placeholder="+91 98765 43210" required />
            </div>
            <label class="signup-label">Password</label>
            <div class="field-wrap">
              <span class="field-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="6.3" y="10.2" width="11.4" height="8.3" rx="2"></rect>
                  <path d="M8.8 10.2V8.4a3.2 3.2 0 016.4 0v1.8"></path>
                </svg>
              </span>
              <input type="password" placeholder="........" required />
              <span class="field-icon field-icon-right" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M2.7 12s3.5-5.2 9.3-5.2 9.3 5.2 9.3 5.2-3.5 5.2-9.3 5.2-9.3-5.2-9.3-5.2z"></path>
                  <circle cx="12" cy="12" r="2.5"></circle>
                </svg>
              </span>
            </div>
            <button type="submit" class="signup-btn">Sign Up →</button>
          </form>
          <div class="signup-divider"><span>OR CONTINUE WITH</span></div>
          <div class="signup-social-grid">
            <button type="button" class="social-btn social-compact">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.8-5.5 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.4l2.7-2.6C17 3.2 14.8 2.2 12 2.2 6.6 2.2 2.2 6.6 2.2 12S6.6 21.8 12 21.8c6.9 0 9.6-4.8 9.6-7.3 0-.5 0-.8-.1-1.2H12z"/>
              </svg>
              <span>Google</span>
            </button>
            <button type="button" class="social-btn social-compact">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M16.8 12.8c0-2.2 1.8-3.2 1.9-3.3-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8-.8 0-1.9-.8-3.2-.8-1.7 0-3.2 1-4 2.4-1.7 3-.4 7.4 1.2 9.7.8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.8 3-.8s1.8.8 3 .8c1.2 0 2-.9 2.8-2 .9-1.3 1.3-2.6 1.3-2.7 0 0-2-.8-2-3.5zM14.4 6.2c.6-.7 1-1.6.9-2.6-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-.9 2.5 1 0 2-.5 2.6-1.2z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>
          <p class="signup-copy mt-3">Already have an account? <button id="showLogin" type="button" class="inline-switch">Login</button></p>
        </div>
      </div>
    </div>
  </div>
`;

const nav = document.querySelector("#navbar");
const hero = document.querySelector("#hero");
const track = document.querySelector("#heroTrack");
const dotsWrap = document.querySelector("#heroDots");
const nextButton = document.querySelector("#nextSlide");
const prevButton = document.querySelector("#prevSlide");
const slides = [...document.querySelectorAll(".hero-slide")];
const loginModal = document.querySelector("#loginModal");
const loginClose = document.querySelector("#loginClose");
const loginTriggers = [...document.querySelectorAll(".login-trigger")];
const categoriesToggle = document.querySelector("#categoriesToggle");
const categoriesPopup = document.querySelector("#categoriesPopup");
const loginView = document.querySelector("#loginView");
const signupView = document.querySelector("#signupView");
const showSignup = document.querySelector("#showSignup");
const showLogin = document.querySelector("#showLogin");

let activeSlide = 0;
let autoTimer;

const openLoginModal = () => {
  loginView.classList.add("is-active");
  signupView.classList.remove("is-active");
  loginModal.classList.add("open");
  loginModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeLoginModal = () => {
  loginModal.classList.remove("open");
  loginModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

const closeCategoriesPopup = () => {
  categoriesPopup.classList.remove("open");
  categoriesPopup.setAttribute("aria-hidden", "true");
  categoriesToggle.setAttribute("aria-expanded", "false");
};

const renderDots = () => {
  dotsWrap.innerHTML = slides
    .map(
      (_, index) =>
        `<button class="dot ${index === activeSlide ? "active" : ""}" data-dot="${index}" aria-label="Go to slide ${index + 1}"></button>`,
    )
    .join("");
};

const setSlide = (index) => {
  activeSlide = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${activeSlide * 100}%)`;
  renderDots();
};

const startAutoSlide = () => {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => setSlide(activeSlide + 1), 5000);
};

renderDots();
setSlide(0);
startAutoSlide();

nextButton.addEventListener("click", () => {
  setSlide(activeSlide + 1);
  startAutoSlide();
});

prevButton.addEventListener("click", () => {
  setSlide(activeSlide - 1);
  startAutoSlide();
});

dotsWrap.addEventListener("click", (event) => {
  const target = event.target.closest("[data-dot]");
  if (!target) return;
  setSlide(Number(target.dataset.dot));
  startAutoSlide();
});

loginTriggers.forEach((trigger) => {
  trigger.addEventListener("click", openLoginModal);
});

categoriesToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const opening = !categoriesPopup.classList.contains("open");
  if (opening) {
    categoriesPopup.classList.add("open");
    categoriesPopup.setAttribute("aria-hidden", "false");
    categoriesToggle.setAttribute("aria-expanded", "true");
    return;
  }
  closeCategoriesPopup();
});

loginClose.addEventListener("click", closeLoginModal);

loginModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-login]")) closeLoginModal();
});

categoriesPopup.addEventListener("click", (event) => {
  event.stopPropagation();
});

showSignup.addEventListener("click", () => {
  loginView.classList.remove("is-active");
  signupView.classList.add("is-active");
});

showLogin.addEventListener("click", () => {
  signupView.classList.remove("is-active");
  loginView.classList.add("is-active");
});

window.addEventListener("click", () => {
  if (categoriesPopup.classList.contains("open")) closeCategoriesPopup();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && loginModal.classList.contains("open")) {
    closeLoginModal();
  }
  if (event.key === "Escape" && categoriesPopup.classList.contains("open")) {
    closeCategoriesPopup();
  }
});

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 24);
  hero.style.setProperty("--parallax", `${window.scrollY * 0.18}px`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 55, 320)}ms`;
  observer.observe(item);
});

hero.addEventListener("mouseenter", () => clearInterval(autoTimer));
hero.addEventListener("mouseleave", startAutoSlide);
