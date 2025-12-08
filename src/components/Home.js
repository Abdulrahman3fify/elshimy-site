import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Stats from "./Stats";
import About from "./About";
import Services from "./Services";
import Experience from "./Experience";
import Contact from "./Contact";
import BookCall from "./BookCall";
import Footer from "./Footer";

function Home() {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set initial direction based on current language
    const currentLang = i18n.language || "en";
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current || "home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu after clicking
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="App">
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
      />
      <Hero handleNavClick={handleNavClick} />
      <Stats />
      <About />
      <Services />
      <Experience />
      <BookCall />
      <Contact />
      <Footer handleNavClick={handleNavClick} />
    </div>
  );
}

export default Home;

