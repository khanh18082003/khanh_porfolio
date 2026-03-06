import { useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Hero from "../sections/hero/Hero";
import Skills from "../sections/skills/Skills";
import Work from "../sections/work/Work";
import { useLocation } from "react-router-dom";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Đợi DOM render xong rồi mới scroll
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [hash]);
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
