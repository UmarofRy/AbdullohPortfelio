import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  // Telegram API credentials
  const TELEGRAM_BOT_TOKEN = "7506470353:AAHmj3_-f9C_BwJ3bPzY5E94dihhwnpnsto";
  const TELEGRAM_CHAT_ID = "6092051746";

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Intersection Observer for scroll animations
    const observeElements = () => {
      const elements = document.querySelectorAll(".fade-in-up");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px 0px -50px 0px",
        },
      );

      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    };

    const observerTimeout = setTimeout(observeElements, 200);

    return () => {
      clearTimeout(timer);
      clearTimeout(observerTimeout);
    };
  }, []);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const closeRightSidebar = () => {
    setIsRightSidebarOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatTelegramMessage = (data) => {
    return `✨ <b>Yangi Kontakt Murojaati</b> ✨

👤 <b>Ismi:</b> <i>${data.name}</i>
📩 <b>Email:</b> <i>${data.email}</i>
📝 <b>Xabar:</b> 
<i>${data.message}</i>

━━━━━━━━━━━━━━━
🌐 <i>Yuborilgan: Portfolio Saytidan</i>  
🕰️ <b>Vaqt:</b> <i>${new Date().toLocaleString()}</i>
━━━━━━━━━━━━━━━

📥 <i>Telegram orqali qabul qilindi</i> ✨`
  };

  const sendToTelegram = async (message) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `chat_id=${TELEGRAM_CHAT_ID}&text=${encodedMessage}&parse_mode=HTML`,
      });

      if (response.ok) {
        return true;
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    setIsSubmitting(true);

    const message = formatTelegramMessage(formData);
    const success = await sendToTelegram(message);

    setIsSubmitting(false);

    if (success) {
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShowSuccess(false), 6000);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
    }
  };

  return (
    <div className="contact-page">
      {/* Animated Background */}
      <div className="contact-background">
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="grid-pattern"></div>
      </div>

      {/* Right Sidebar Hamburger */}
      <button className="hamburger-btn" onClick={toggleRightSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="contact-container">
        {/* Hero Section */}
        <div
          className={`contact-hero fade-in-up ${isVisible ? "visible" : ""}`}
        >
          <div className="hero-icon">
            <span className="icon-emoji">🐰</span>
          </div>
          <h1 className="contact-title">
            Let's Create Something
            <span className="gradient-text"> Amazing </span>
            Together
          </h1>
          <p className="contact-subtitle">
            Ready to bring your vision to life? Let's discuss your project and
            create something extraordinary that stands out from the crowd.
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Contact Info Cards */}
          <div
            className={`contact-info fade-in-up ${isVisible ? "visible" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="info-card">
              <div className="card-icon">
                <span>🍓</span>
              </div>
              <h3>Quick Response</h3>
              <p>Usually reply within 24 hours</p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <span>🪐</span>
              </div>
              <h3>Global Reach</h3>
              <p>Working with clients worldwide</p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <span>⚡</span>
              </div>
              <h3>Fast Delivery</h3>
              <p>Quality work delivered on time</p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`contact-form-wrapper fade-in-up ${isVisible ? "visible" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="form-glass-container">
              <div className="form-header">
                <h2 className="form-title">Send a Message</h2>
                <p className="form-subtitle">
                  Tell me about your project and let's get started
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                  disabled={isSubmitting}
                >
                  <span className="btn-content">
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="btn-icon">🚀</span>
                      </>
                    )}
                  </span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div
          className={`contact-alternatives fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="alternatives-title">Other Ways to Reach Me</h3>
          <div className="alternatives-grid">
            <a href="mailto:hello@abdulloh.dev" className="alternative-link">
              <div className="alt-icon">📧</div>
              <span>hello@abdulloh.dev</span>
            </a>
            <a
              href="https://linkedin.com"
              className="alternative-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="alt-icon">💼</div>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              className="alternative-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="alt-icon">💻</div>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`right-sidebar ${isRightSidebarOpen ? "sidebar-open" : ""}`}
      >
        <button className="close-btn" onClick={closeRightSidebar}>
          <i className="fas fa-times"></i>
        </button>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeRightSidebar}>
                <i className="fas fa-home"></i>
                Bosh sahifa
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-link"
                onClick={closeRightSidebar}
              >
                <i className="fas fa-briefcase"></i>
                Portfelio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/history"
                className="nav-link"
                onClick={closeRightSidebar}
              >
                <i className="fas fa-user"></i>
                History
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={closeRightSidebar}>
                <i className="fas fa-blog"></i>
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link active"
                onClick={closeRightSidebar}
              >
                <i className="fas fa-envelope"></i>
                Contact
              </Link>
            </li>

            <li className="nav-divider"></li>

            <li className="nav-item">
              <div className="nav-option">
                <i className="fas fa-sun"></i>
                Light Version
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlays */}
      {isRightSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeRightSidebar}></div>
      )}

      {/* Success Toast */}
      <div className={`toast success ${showSuccess ? "show" : ""}`}>
        <div className="toast-content">
          <span className="toast-icon">✨</span>
          <div className="toast-text">
            <strong>Message sent successfully!</strong>
            <p>Thank you for reaching out. I'll get back to you soon!</p>
          </div>
        </div>
      </div>

      {/* Error Toast */}
      <div className={`toast error ${showError ? "show" : ""}`}>
        <div className="toast-content">
          <span className="toast-icon">⚠️</span>
          <div className="toast-text">
            <strong>Failed to send message</strong>
            <p>Please check your information and try again.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
