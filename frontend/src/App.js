import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Connecting Dots Canvas Component
const ConnectingDots = () => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize dots
    const numDots = 25;
    const dots = [];
    
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2
      });
    }
    dotsRef.current = dots;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      dots.forEach(dot => {
        if (!prefersReducedMotion) {
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Bounce off edges
          if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
          if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        }

        // Draw dot
        ctx.fillStyle = 'rgba(6, 149, 147, 0.4)';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.4;
            ctx.strokeStyle = `rgba(6, 149, 147, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="connecting-dots-canvas" />;
};

// Header Component
const Header = () => {
  return (
    <header className="header" data-testid="header">
      <div className="header-content">
        <div className="logo" data-testid="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">ZNS NEXUS</span>
        </div>
        <div className="header-right">
          <span className="coming-soon-badge" data-testid="coming-soon-badge">COMING SOON</span>
          <div className="social-icons" data-testid="social-icons">
            <a href="https://www.instagram.com/zns_nexus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="instagram-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/zns-nexus" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="linkedin-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="hero-section" data-testid="hero-section">
      <ConnectingDots />
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-title" data-testid="hero-title">COMING SOON</h1>
        <p className="hero-tagline" data-testid="hero-tagline">Connecting the dots.</p>
      </div>
    </section>
  );
};

// Work With Us Form Component
const WorkWithUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Web Developer',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with pre-filled information
    const emailAddress = 'ZNS.Nexus.main@pm.me';
    const subject = encodeURIComponent(`ZNS NEXUS Team Application - ${formData.role}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Role Interested In: ${formData.role}\n\n` +
      `Message:\n${formData.message}`
    );

    // Construct mailto link with proper formatting
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    // Use window.location.href to open email client (most reliable method)
    window.location.href = mailtoLink;

    // Show success message
    setShowSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        role: 'Web Developer',
        message: ''
      });
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section className="work-with-us-section" data-testid="work-with-us-section">
      <div className="section-container">
        <h2 className="section-title" data-testid="section-title">Work With Us</h2>
        <p className="section-subtitle" data-testid="section-subtitle">
          Want to join the ZNS NEXUS team? We're looking for talented creators to grow with us.
        </p>

        {showSuccess ? (
          <div className="success-message" data-testid="success-message">
            <div className="success-icon">🎉</div>
            <h3>Email Client Opened!</h3>
            <p>Please complete sending your application through your email app.</p>
          </div>
        ) : (
          <form className="application-form" onSubmit={handleSubmit} data-testid="application-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                data-testid="name-input"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                data-testid="email-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role You're Interested In *</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                data-testid="role-select"
              >
                <option value="Web Developer">Web Developer</option>
                <option value="Video Editor">Video Editor</option>
                <option value="Photographer/Photo Editor">Photographer/Photo Editor</option>
                <option value="General/Other Roles">General/Other Roles</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                data-testid="message-textarea"
                placeholder="Tell us about yourself and why you want to join ZNS NEXUS..."
                rows="6"
              />
            </div>

            <button type="submit" className="submit-button" data-testid="submit-button">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-content">
        <p className="copyright" data-testid="copyright">
          © 2025 ZNS NEXUS. All rights reserved.
        </p>
        <div className="footer-links" data-testid="footer-links">
          <a href="/privacy" data-testid="privacy-link">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/terms" data-testid="terms-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <WorkWithUsForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
