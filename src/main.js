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
          <img src="/logo.svg" alt="Eliide logo" class="brand-logo" />
        </a>
        <nav class="hidden items-center gap-7 text-sm font-semibold md:flex">
          <a href="#products" class="nav-link">Products</a>
          <a href="#offers" class="nav-link">Offers</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>
        <a href="#dealer" class="btn-yellow hidden text-sm md:inline-flex">Become a Dealer</a>
        <button id="menuToggle" class="menu-btn md:hidden" aria-label="Open mobile menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div id="mobileMenu" class="mobile-menu md:hidden">
        <a href="#products">Products</a>
        <a href="#offers">Offers</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#dealer" class="btn-yellow mt-2 w-full justify-center">Become a Dealer</a>
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
  </div>
`;

const nav = document.querySelector("#navbar");
const mobileMenu = document.querySelector("#mobileMenu");
const menuToggle = document.querySelector("#menuToggle");
const hero = document.querySelector("#hero");
const track = document.querySelector("#heroTrack");
const dotsWrap = document.querySelector("#heroDots");
const nextButton = document.querySelector("#nextSlide");
const prevButton = document.querySelector("#prevSlide");
const slides = [...document.querySelectorAll(".hero-slide")];

let activeSlide = 0;
let autoTimer;

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

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) mobileMenu.classList.remove("open");
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
