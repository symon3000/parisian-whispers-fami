
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import InteriorsSection from "@/components/InteriorsSection";
import SuitesSection from "@/components/SuitesSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with reveal class
    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-fami-black text-fami-cream">
      <Navbar />
      <HeroSection />
      <StorySection />
      <InteriorsSection />
      <SuitesSection />
      <Footer />
    </div>
  );
};

export default Index;
