import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./History.css";
import { useLanguage } from "./LanguageContext.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function History() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  const timelineData = [
    {
      year: "2024",
      title: "Advanced Frontend Development",
      company: "Freelance & Personal Projects",
      description:
        "Mastering modern React patterns, TypeScript, and building full-stack applications with cutting-edge technologies.",
      skills: ["React", "TypeScript", "Next.js", "Node.js", "MongoDB"],
      status: "current",
    },
    {
      year: "2023",
      title: "Frontend Developer Journey",
      company: "Self-Learning & Practice",
      description:
        "Deepened knowledge in React ecosystem, state management, and modern CSS techniques. Built multiple real-world projects.",
      skills: ["React", "Redux", "Sass", "Tailwind CSS", "Git"],
      status: "completed",
    },
    {
      year: "2022",
      title: "Web Development Foundation",
      company: "Online Courses & Bootcamps",
      description:
        "Started web development journey with HTML, CSS, and JavaScript fundamentals. Created first interactive websites.",
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      status: "completed",
    },
    {
      year: "2021",
      title: "Digital Exploration",
      company: "High School & Self Discovery",
      description:
        "Discovered passion for technology and design. Started learning basic computer skills and exploring different programming languages.",
      skills: ["Computer Basics", "Design Thinking", "Problem Solving"],
      status: "completed",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const closeRightSidebar = () => {
    setIsRightSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll(".timeline-item");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      timelineItems.forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemBottom = itemTop + item.offsetHeight;

        if (scrollPosition >= itemTop && scrollPosition <= itemBottom) {
          setActiveTimelineItem(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                alt="Rahmadjon Umarov"
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
            href="https://t.me/rahmadjon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="https://github.com/rahmadjon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://youtube.com/@rahmadjon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://instagram.com/rahmadjon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
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
        <div className="history-page">
          <div className="page-header">
            <div className="header-background">
              <div className="gradient-sphere"></div>
              <div className="floating-elements">
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
              </div>
            </div>
            <div className="header-content">
              <h1 className="page-title">{t("myJourney")}</h1>
              <p className="page-subtitle">{t("journeySubtitle")}</p>
            </div>
          </div>

          <div className="timeline-section">
            <div className="timeline-container">
              <div className="timeline-line"></div>

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item ${activeTimelineItem === index ? "active" : ""} ${item.status}`}
                >
                  <div className="timeline-marker">
                    <div className="marker-outer">
                      <div className="marker-inner">
                        {item.status === "current" && (
                          <i className="fas fa-star"></i>
                        )}
                        {item.status === "completed" && (
                          <i className="fas fa-check"></i>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-card">
                      <div className="card-header">
                        <div className="year-badge">{item.year}</div>
                        <div className="status-badge status-{item.status}">
                          {item.status === "current"
                            ? "In Progress"
                            : "Completed"}
                        </div>
                      </div>

                      <h3 className="timeline-title">{item.title}</h3>
                      <div className="timeline-company">
                        <i className="fas fa-building"></i>
                        {item.company}
                      </div>

                      <p className="timeline-description">{item.description}</p>

                      <div className="skills-container">
                        <h4 className="skills-label">Key Skills:</h4>
                        <div className="skills-tags">
                          {item.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h2 className="section-title">Achievements & Stats</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="stat-number">3+</div>
                <div className="stat-label">Years of Learning</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <div className="stat-number">25+</div>
                <div className="stat-label">Projects Built</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="stat-number">5+</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </div>

          <div className="next-steps-section">
            <div className="next-steps-content">
              <h2 className="section-title">What's Next?</h2>
              <p className="section-description">
                Continuously learning and growing, with focus on advanced React
                patterns, full-stack development, and building products that
                make a difference.
              </p>
              <div className="cta-buttons">
                <Link to="/portfolio" className="btn btn-primary">
                  <i className="fas fa-eye"></i>
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <i className="fas fa-envelope"></i>
                  Let's Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <button className="hamburger-btn" onClick={toggleRightSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

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
                className="nav-link active"
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
