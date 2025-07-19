import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useLanguage } from "./LanguageContext.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

function Home() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const typedElement = useRef(null);

  useEffect(() => {
    // Loading animation
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const options = {
      strings: [
        "Beautiful Websites",
        "Mobile Applications",
        "User Interfaces",
        "Digital Experiences",
        "Interactive Solutions",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    return () => {};
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const closeRightSidebar = () => {
    setIsRightSidebarOpen(false);
  };

  const toggleSubmenu = (menuKey) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  return (
    <div className="portfolio-container">
      {/* Left Sidebar */}
      <aside
        className={`left-sidebar ${isMobileMenuOpen ? "mobile-open" : ""}`}
      >
        <div className="sidebar-header">
          <div className="profile-avatar">
            <div className="avatar-image">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdecec8c993294cb484029a7767d5abd4%2Ffbfcbcca6574464098383a34d28d33b6?format=webp&width=800"
                alt="Abdulloh Umarov"
              />
              <div className="avatar-overlay">
                <i className="fas fa-expand"></i>
              </div>
            </div>
            <div className="status-indicator">
              <div className="online-dot"></div>
            </div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{t("name")}</h1>
            <p className="profile-role">{t("role")}</p>
            <p className="profile-subtitle">{t("subtitle")}</p>
          </div>
        </div>

        <div className="sidebar-social">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://behance.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-snapchat"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram  "></i>
          </a>
        </div>

        <div className="sidebar-content">
          <div className="info-section">
            <h3 className="section-title">{t("personalInfo")}</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">{t("residence")}</span>
                <span className="info-value">{t("uzbekistan")}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t("city")}</span>
                <span className="info-value">{t("tashkent")}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t("age")}</span>
                <span className="info-value">19</span>
              </div>
            </div>
          </div>

          <div className="languages-section">
            <h3 className="section-title">{t("languages")}</h3>
            <div className="language-grid">
              <div className="language-item">
                <div className="language-circle" data-percentage="100">
                  <svg viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#2a2a35"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#ffd700"
                      strokeWidth="2"
                      strokeDasharray="100, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="percentage">100%</div>
                </div>
                <span>{t("uzbek")}</span>
              </div>
              <div className="language-item">
                <div className="language-circle" data-percentage="90">
                  <svg viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#2a2a35"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#ffd700"
                      strokeWidth="2"
                      strokeDasharray="90, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="percentage">90%</div>
                </div>
                <span>{t("english")}</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="section-title">{t("programmingSkills")}</h3>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-header">
                  <span>HTML/CSS</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>React</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="knowledge-section">
            <h3 className="section-title">Extra Skills</h3>
            <ul className="knowledge-list">
              <li>
                <i className="fas fa-check"></i>Bootstrap, Tailwind CSS
              </li>
              <li>
                <i className="fas fa-check"></i>Sass, Less, Stylus
              </li>
              <li>
                <i className="fas fa-check"></i>Webpack, Vite, Gulp
              </li>
              <li>
                <i className="fas fa-check"></i>Git & GitHub
              </li>
              <li>
                <i className="fas fa-check"></i>Figma, Adobe XD
              </li>
              <li>
                <i className="fas fa-check"></i>Responsive Design
              </li>
            </ul>
          </div>

          <div className="download-section">
            <a href="#" className="download-btn" download>
              <i className="fas fa-download"></i>
              {t("downloadCV")}
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Toggle */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                {t("hello")} <span className="highlight">Abdulloh</span>
              </h1>
              <div className="hero-subtitle">
                <span>{t("iCreate")} </span>
                <span className="typed-wrapper">
                  <span ref={typedElement}></span>
                </span>
              </div>
              <p className="hero-description">{t("heroDescription")}</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  <i className="fas fa-envelope"></i>
                  {t("getInTouch")}
                </a>
                <a href="#portfolio" className="btn btn-secondary">
                  <i className="fas fa-eye"></i>
                  {t("viewPortfolio")}
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image">
                <div className="image-decoration">
                  <div className="floating-element"></div>
                  <div className="floating-element"></div>
                  <div className="floating-element"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="section-header">
            <h2 className="section-title">{t("whatIDo")}</h2>
            <p className="section-subtitle">{t("passionateAbout")}</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>
                Creating modern, responsive websites with clean code and optimal
                performance using latest technologies.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile First Design</h3>
              <p>
                Designing beautiful interfaces that work perfectly on all
                devices, from mobile phones to desktop computers.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Crafting user-centered designs that provide intuitive and
                engaging experiences for your audience.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Performance Optimization</h3>
              <p>
                Optimizing websites for speed, SEO, and performance to ensure
                the best user experience possible.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Maintenance & Support</h3>
              <p>
                Providing ongoing support and maintenance to keep your websites
                running smoothly and up-to-date.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>SEO Optimization</h3>
              <p>
                Implementing SEO best practices to improve your website's
                visibility and ranking in search engines.
              </p>
            </div>
          </div>
        </div>

        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="brand-logo">
                  <div className="logo-symbol">
                    <span>&lt;/&gt;</span>
                  </div>
                  <div className="brand-info">
                    <h3>Abdulloh Umarov</h3>
                    <p>Frontend Developer & UI Designer</p>
                  </div>
                </div>
                <p className="brand-description">
                  Creating modern, responsive web experiences with passion and
                  precision.
                </p>
              </div>

              <div className="footer-connect">
                <h4>Let's Connect</h4>
                <div className="social-links">
                  <a
                    href="https://t.me/umarof_ry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link telegram"
                  >
                    <i className="fab fa-telegram-plane"></i>
                    <span>Telegram</span>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link github"
                  >
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link youtube"
                  >
                    <i className="fab fa-youtube"></i>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              <div className="footer-contact">
                <h4>Get In Touch</h4>
                <div className="contact-details">
                  <a href="mailto:hello@abdulloh.dev" className="contact-link">
                    <i className="fas fa-envelope"></i>
                    hello@abdulloh.dev
                  </a>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    Toshkent, O'zbekiston
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
              <div className="copyright">
                <p>&copy; 2024 Abdulloh Umarov. All rights reserved.</p>
              </div>
              <div className="footer-nav">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <a href="#privacy">Privacy</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Right Sidebar Hamburger */}
      <button className="hamburger-btn" onClick={toggleRightSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

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
                {t("home")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-link"
                onClick={closeRightSidebar}
              >
                <i className="fas fa-briefcase"></i>
                {t("portfolio")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/history"
                className="nav-link"
                onClick={closeRightSidebar}
              >
                <i className="fas fa-history"></i>
                {t("history")}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={closeRightSidebar}>
                <i className="fas fa-blog"></i>
                {t("blog")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={closeRightSidebar}
              >
                <i className="fas fa-envelope"></i>
                {t("contact")}
              </Link>
            </li>

            <li className="nav-divider"></li>

            <li className="nav-item language-switcher-item">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlays */}
      {isRightSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeRightSidebar}></div>
      )}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}
    </div>
  );
}

export default Home;
