import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { useLanguage } from "./LanguageContext.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Blog() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Understanding the power of React Hooks and how they transform functional components in modern React development.",
      content:
        "React Hooks have revolutionized the way we write React components...",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",
      tags: ["React", "JavaScript", "Hooks", "Tutorial"],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Modern CSS Techniques for Better UX",
      excerpt:
        "Exploring CSS Grid, Flexbox, and modern layout techniques for responsive design that enhances user experience.",
      content: "CSS has evolved tremendously over the years...",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "CSS",
      tags: ["CSS", "Design", "UX", "Responsive"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "Building Performant Web Applications",
      excerpt:
        "Tips and strategies for optimizing web application performance, from bundle sizes to runtime optimizations.",
      content: "Performance is crucial for user satisfaction...",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Performance",
      tags: ["Performance", "Optimization", "JavaScript", "Best Practices"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      featured: true,
    },
    {
      id: 4,
      title: "TypeScript Best Practices",
      excerpt:
        "Learn how to write better TypeScript code with practical examples and industry best practices.",
      content: "TypeScript brings static typing to JavaScript...",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "The Future of Web Development",
      excerpt:
        "Exploring emerging trends and technologies that will shape the future of web development.",
      content: "The web development landscape is constantly evolving...",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Trends",
      tags: ["Future", "Trends", "Web Development", "Technology"],
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Mastering Git and GitHub",
      excerpt:
        "Essential Git commands and GitHub workflows every developer should know for effective collaboration.",
      content: "Version control is essential for any developer...",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Tools",
      tags: ["Git", "GitHub", "Version Control", "Collaboration"],
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
      featured: false,
    },
  ];

  const categories = [
    "all",
    "React",
    "CSS",
    "Performance",
    "TypeScript",
    "Trends",
    "Tools",
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

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

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
        <div className="blog-page">
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
              <h1 className="page-title">{t("myBlog")}</h1>
              <p className="page-subtitle">{t("blogSubtitle")}</p>
            </div>
          </div>

          <div className="blog-content">
            <div className="blog-filters">
              <div className="search-container">
                <div className="search-input-wrapper">
                  <i className="fas fa-search"></i>
                  <input
                    type="text"
                    placeholder={t("searchArticles")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>

              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all" ? t("allPosts") : category}
                  </button>
                ))}
              </div>
            </div>

            {featuredPosts.length > 0 &&
              selectedCategory === "all" &&
              !searchQuery && (
                <div className="featured-section">
                  <h2 className="section-title">{t("featuredArticles")}</h2>
                  <div className="featured-grid">
                    {featuredPosts.map((post) => (
                      <article key={post.id} className="featured-post">
                        <div className="post-image">
                          <img src={post.image} alt={post.title} />
                          <div className="post-overlay">
                            <div className="post-category">{post.category}</div>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="post-meta">
                            <span className="post-date">{post.date}</span>
                            <span className="post-read-time">
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="post-title">{post.title}</h3>
                          <p className="post-excerpt">{post.excerpt}</p>
                          <div className="post-tags">
                            {post.tags.map((tag) => (
                              <span key={tag} className="post-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={`#post-${post.id}`}
                            className="read-more-btn"
                          >
                            <span>Read More</span>
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

            <div className="posts-section">
              <h2 className="section-title">
                {selectedCategory === "all"
                  ? t("allArticles")
                  : `${selectedCategory} ${t("allArticles")}`}
                <span className="posts-count">({filteredPosts.length})</span>
              </h2>

              <div className="posts-grid">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="blog-post">
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <div className="post-overlay">
                        <div className="post-category">{post.category}</div>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-date">
                          <i className="fas fa-calendar"></i>
                          {post.date}
                        </span>
                        <span className="post-read-time">
                          <i className="fas fa-clock"></i>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <div className="post-tags">
                        {post.tags.map((tag) => (
                          <span key={tag} className="post-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="post-footer">
                        <a href={`#post-${post.id}`} className="read-more-btn">
                          Read Article
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="no-posts">
                  <div className="no-posts-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3>No articles found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>

            <div className="newsletter-section">
              <div className="newsletter-content">
                <h2>Stay Updated</h2>
                <p>
                  Get the latest articles and tutorials delivered to your inbox
                </p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="email-input"
                  />
                  <button className="subscribe-btn">
                    <i className="fas fa-paper-plane"></i>
                    Subscribe
                  </button>
                </div>
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
                className="nav-link"
                onClick={closeRightSidebar}
              >
                <i className="fas fa-history"></i>
                {t("history")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blog"
                className="nav-link active"
                onClick={closeRightSidebar}
              >
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
