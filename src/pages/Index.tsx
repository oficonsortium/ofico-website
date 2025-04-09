
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".fade-in-section");
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        if (sectionTop < window.innerHeight * 0.75 && sectionBottom > 0) {
          section.classList.add("is-visible");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <div className="fade-in-section">
        <About />
      </div>
      
      <div className="fade-in-section">
        <Programs />
      </div>
      
      <div className="fade-in-section">
        <Team />
      </div>
      
      <div className="fade-in-section">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
