import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import ServiceInfo from "./components/ServiceInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import UserInfoPopup from "./components/UserInfoPopup";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "products", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle popup display with 5 second delay
  useEffect(() => {
    // Check if user has already submitted info
    const userInfoSubmitted = localStorage.getItem("userInfoSubmitted");

    if (!userInfoSubmitted) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <Hero />
      <About />
      <Products />
      <ServiceInfo />
      <Contact />
      <Footer />
      <WhatsAppButton />
      {showPopup && <UserInfoPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default App;
