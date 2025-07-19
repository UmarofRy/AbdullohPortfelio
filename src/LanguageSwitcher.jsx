import { useState } from "react";
import { useLanguage } from "./LanguageContext.jsx";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: "uz",
      name: "O'zbek",
      flag: "🇺🇿",
      nativeName: "O'zbek tili",
    },
    {
      code: "en",
      name: "English",
      flag: "🇺🇸",
      nativeName: "English",
    },
  ];

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <div className="language-current">
          <span className="language-flag">{currentLang.flag}</span>
          <span className="language-code">
            {currentLang.code.toUpperCase()}
          </span>
        </div>
        <i
          className={`fas fa-chevron-down toggle-icon ${isOpen ? "open" : ""}`}
        ></i>
      </button>

      <div className={`language-dropdown ${isOpen ? "open" : ""}`}>
        <div className="dropdown-header">
          <i className="fas fa-globe"></i>
          <span>Choose Language</span>
        </div>

        <div className="language-options">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${currentLanguage === language.code ? "active" : ""}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <div className="option-content">
                <span className="option-flag">{language.flag}</span>
                <div className="option-text">
                  <span className="option-name">{language.name}</span>
                  <span className="option-native">{language.nativeName}</span>
                </div>
              </div>
              {currentLanguage === language.code && (
                <i className="fas fa-check option-check"></i>
              )}
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="language-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
