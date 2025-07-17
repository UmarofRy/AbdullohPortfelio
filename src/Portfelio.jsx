import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfelio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: "Water Tech Website",
      description:
        "A clean and modern plumbing services site with contact form and responsive layout. Built with React and modern CSS techniques.",
      image:
        "https://ryumarov.netlify.app/tech.jpg",
      link: "http://water-techuz.netlify.app",
      tags: ["React", "CSS", "Responsive"],
      category: "Web",
      featured: false,
      spotlight: false,
    },
    {
      id: 2,
      name: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard with analytics, product management, and real-time updates. Features advanced data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      link: "#",
      tags: ["React", "Chart.js", "API", "Dashboard"],
      category: "Web",
      featured: true,
      spotlight: true,
    },
    
    {
      id: 4,
      name: "Creative Portfolio",
      description:
        "Creative portfolio showcasing modern design principles with smooth animations and interactions. Premium user experience.",
      image:
        "https://ryumarov.netlify.app/creative.jpg",
      link: "https://umarof.netlify.app/",
      tags: ["HTML", "CSS", "JavaScript", "Animation"],
      category: "UI/UX",
      featured: false,
      spotlight: false,
    },
    {
      id: 5,
      name: "UMAROF || Telegram Bot",
      description:
        "UMAROF Telegram bot — bu Umarov haqida to'liq ma'lumot olish, bevosita murojaat qilish, shuningdek, web-sayt buyurtma berish yoki shoshilinch so'rov yuborish imkonini beruvchi zamonaviy va qulay platforma.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      link: "#",
      tags: ["React", "Node.js", "Python", "Umarov"],
      category: "Web",
      featured: true,
      spotlight: false,
    },
    {
      id: 6,
      name: "Weather Mobile App",
      description:
        "Real-time weather application with location-based forecasts and interactive maps. Beautiful UI with smooth animations.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
      link: "https://ry-weather.netlify.app/",
      tags: ["Flutter", "API", "Maps", "Mobile"],
      category: "Mobile",
      featured: false,
      spotlight: false,
    },
    {
      id: 7,
      name: "Banking UI Design",
      description:
        "Modern banking interface design with focus on security and user experience. Clean and professional aesthetics.",
      image:
        "https://ryumarov.netlify.app/design.jpg",
      link: "#",
      tags: ["Figma", "UI Design", "Prototyping"],
      category: "UI/UX",
      featured: true,
      spotlight: false,
    },
    
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content:
        "Abdulloh delivered exceptional work on our web platform. His attention to detail and modern design approach exceeded our expectations.",
      avatar:
        "https://i.pinimg.com/736x/aa/71/85/aa71856d045c555929a13daf589984e2.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, StartupXYZ",
      content:
        "Working with Abdulloh was a pleasure. He transformed our ideas into a beautiful, functional mobile app that our users love.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
    
  ];

  const categories = ["All", "Web", "Mobile", "UI/UX"];

  const featuredProjects = projects.filter((project) => project.featured);
  const spotlightProject = projects.find((project) => project.spotlight);

  useEffect(() => {
    document.title = "Portfolio - Abdulloh Umarov";
    filterProjects("All");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category),
      );
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const closeRightSidebar = () => {
    setIsRightSidebarOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length,
    );
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
            <h1 className="profile-name">Abdulloh Umarov</h1>
            <p className="profile-role">Front-end Developer</p>
            <p className="profile-subtitle">UI/UX Designer</p>
          </div>
        </div>

        <div className="sidebar-social">
          <a
            href="https://t.me/umarof_ry"
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
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-dribbble"></i>
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="sidebar-content">
          <div className="info-section">
            <h3 className="section-title">Personal Info</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Residence</span>
                <span className="info-value">Uzbekistan</span>
              </div>
              <div className="info-item">
                <span className="info-label">City</span>
                <span className="info-value">Toshkent</span>
              </div>
              <div className="info-item">
                <span className="info-label">Age</span>
                <span className="info-value">16</span>
              </div>
              
            </div>
          </div>

          <div className="languages-section">
            <h3 className="section-title">Languages</h3>
            <div className="language-grid">
              <div className="language-item">
                <div className="language-circle" data-percentage="100">
                  <svg viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#2a2a35"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#ffd700"
                      strokeWidth="2"
                      strokeDasharray="100, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="percentage">100%</div>
                </div>
                <span>Uzbek</span>
              </div>
              <div className="language-item">
                <div className="language-circle" data-percentage="90">
                  <svg viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#2a2a35"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#ffd700"
                      strokeWidth="2"
                      strokeDasharray="90, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="percentage">90%</div>
                </div>
                <span>English</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="section-title">Programming Skills</h3>
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
              <div className="skill-item">
                <div className="skill-header">
                  <span>UI/UX Design</span>
                  <span>88%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "88%" }}
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
              Download CV
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
        <div className="portfolio-header">
          <h1 className="portfolio-title">My Projects</h1>
          <p className="portfolio-subtitle">
            Here are some of the works I've done recently. Each project
            represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Featured Projects Carousel */}
        {featuredProjects.length > 0 && (
          <section className="featured-section">
            <h2 className="section-heading">Featured Work</h2>
            <div className="carousel-container">
              <div className="carousel-wrapper" ref={sliderRef}>
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {featuredProjects.map((project) => (
                    <div key={project.id} className="carousel-slide">
                      <div className="featured-card">
                        <div className="featured-image">
                          <img src={project.image} alt={project.name} />
                          <div className="featured-overlay">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="featured-btn"
                            >
                              <i className="fas fa-external-link-alt"></i>
                              View Project
                            </a>
                          </div>
                        </div>
                        <div className="featured-content">
                          <h3>{project.name}</h3>
                          <p>{project.description}</p>
                          <div className="featured-tags">
                            {project.tags.map((tag, index) => (
                              <span key={index} className="featured-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="carousel-btn prev" onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="carousel-btn next" onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="carousel-dots">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Spotlight Project */}
        {spotlightProject && (
          <section className="spotlight-section">
            <h2 className="section-heading">Project of the Month</h2>
            <div className="spotlight-card">
              <div className="spotlight-image">
                <img src={spotlightProject.image} alt={spotlightProject.name} />
                <div className="spotlight-badge">
                  <i className="fas fa-star"></i>
                  Featured
                </div>
              </div>
              <div className="spotlight-content">
                <h3>{spotlightProject.name}</h3>
                <p>{spotlightProject.description}</p>
                <div className="spotlight-tags">
                  {spotlightProject.tags.map((tag, index) => (
                    <span key={index} className="spotlight-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={spotlightProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotlight-btn"
                >
                  <i className="fas fa-external-link-alt"></i>
                  View Project
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Category Filters */}
        <section className="filter-section">
          <h2 className="section-heading">All Projects</h2>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                onClick={() => filterProjects(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-view-btn"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2 className="section-heading">What Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>"{testimonial.content}"</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="premium-footer">
          <div className="footer-content">
            <div className="footer-left">
              <p className="footer-text">© 2024 Abdulloh Umarov</p>
              <p className="footer-subtext">Crafted with passion & precision</p>
            </div>
            <div className="footer-right">
              <div className="footer-links">
                <a href="mailto:hello@abdulloh.dev" className="footer-link">
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://t.me/umarof_ry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <i className="fab fa-telegram"></i>
                </a>
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
                Bosh sahifa
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-link active"
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
                className="nav-link"
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
    </div>
  );
}

export default Portfelio;
