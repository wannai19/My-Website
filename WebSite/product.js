// Burger menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => moveToSlide(index));
    dotsContainer.appendChild(dot);
});
updateDots();

// Slide navigation
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
}

function moveToSlide(index) {
    currentSlide = index;
    updateSlides();
}

function updateSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[currentSlide].classList.add('active-dot');
}

// Event listeners for arrows
document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

// Reset interval when manual navigation
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}


////////////// Timeline /////////////////////

// สังเกตทุก timeline item
const items = document.querySelectorAll('.timeline-item');

let lastScrollTop = 0;

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  items.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < window.innerHeight * 0.75) {
      item.classList.add('show');
    } else if (index !== 0 && scrollTop < lastScrollTop) {
      // ถ้าไม่ใช่อันแรก และกำลังเลื่อนขึ้น
      item.classList.remove('show');
    }
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

////////////// Timeline แก้ /////////////////////

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // ถ้าเลื่อนขึ้น จะไม่ปิดทั้งหมด แต่คงไว้เฉพาะรายการบนสุด
      const index = Array.from(items).indexOf(entry.target);
      if (index !== 0) {
        entry.target.classList.remove('show');
      }
    }
  });
}, {
  threshold: 0.3
});

items.forEach(item => {
  observer.observe(item);
});

////////////// Timeline แก้ /////////////////////



