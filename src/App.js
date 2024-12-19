import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition duration-300  pt-20 md:pt-24">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <About />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
