// Dot background animation
class Dot {
  x: number;
  y: number;
  size: number;
  opacity: number;
  fadeSpeed: number;
  fadeDirection: 'in' | 'out';
  maxOpacity: number;
  element: HTMLDivElement;

  constructor(container: HTMLElement) {
    // Generate random properties
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 4 + 1; // Size between 1-5px
    this.opacity = 0;
    this.fadeSpeed = Math.random() * 0.01 + 0.003; // Random fade speed
    this.fadeDirection = 'in';
    this.maxOpacity = Math.random() * 0.3 + 0.1; // Max opacity between 0.1-0.4

    // Create the dot element
    this.element = document.createElement('div');
    this.element.className = 'dot';
    this.element.style.position = 'absolute';
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.width = `${this.size}px`;
    this.element.style.height = `${this.size}px`;
    this.element.style.borderRadius = '50%';
    this.element.style.background = '#fff';
    this.element.style.opacity = this.opacity.toString();
    this.element.style.pointerEvents = 'none';

    // Add to container
    container.appendChild(this.element);
  }

  update() {
    // Fade in or out
    if (this.fadeDirection === 'in') {
      this.opacity += this.fadeSpeed;
      if (this.opacity >= this.maxOpacity) {
        this.opacity = this.maxOpacity;
        this.fadeDirection = 'out';
      }
    } else {
      this.opacity -= this.fadeSpeed;
      if (this.opacity <= 0) {
        this.opacity = 0;
        this.fadeDirection = 'in';

        // Reposition the dot when it's fully faded out
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
      }
    }

    // Update the element
    this.element.style.opacity = this.opacity.toString();
  }
}

// Initialize the dots background
function initDots() {
  let container = document.getElementById('dots-background');
  if (!container) {
    // Create the container if it doesn't exist
    container = document.createElement('div');
    container.id = 'dots-background';
    container.style.position = 'fixed';
    container.style.left = '0';
    container.style.top = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '-1';
    container.style.overflow = 'hidden';
    container.style.pointerEvents = 'none';
    container.style.background = 'transparent';
    document.body.appendChild(container);
  }

  const dots: Dot[] = [];
  const dotCount = Math.min(window.innerWidth / 5, 200); // Responsive dot count

  // Create the dots
  for (let i = 0; i < dotCount; i++) {
    dots.push(new Dot(container));
  }

  // Animation loop
  function animate() {
    dots.forEach(dot => dot.update());
    requestAnimationFrame(animate);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    // Clear all dots
    container!.innerHTML = '';
    dots.length = 0;

    // Recreate dots based on new window size
    const newDotCount = Math.min(window.innerWidth / 5, 200);
    for (let i = 0; i < newDotCount; i++) {
      dots.push(new Dot(container!));
    }
  });
}

// Initialize the mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const links = navLinks.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    }
  }
}

// Form handling for contact section
function initContactForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      // Normally you would send this data to a server
      console.log('Form submission:', { name, email, message });

      // Show success message
      form.innerHTML = `
        <div class="form-success">
          <div style="font-size: 2rem; margin-bottom: 15px;">✅</div>
          <h3 style="font-size: 1.2rem; color: white; margin-bottom: 10px;">Thank you for your message!</h3>
          <p style="color: var(--text);">I'll get back to you as soon as possible.</p>
        </div>
      `;

      // Reset form after 5 seconds (in a real application, you might not want to do this)
      setTimeout(() => {
        window.location.href = '#contact';
      }, 5000);
    });
  }
}

// Animate sections on scroll
function initScrollAnimations() {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.classList.add('section-animate');
    observer.observe(section);
  });
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initDots();
  initMobileMenu();
  initContactForm();
  initScrollAnimations();
});
