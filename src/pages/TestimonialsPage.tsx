
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TestimonialsHero from "@/components/TestimonialsHero";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TestimonialsPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show the scroll-to-top button when user scrolls down
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <TestimonialsHero />
        <TestimonialsGrid />
        
        {/* Scroll to top button */}
        {showScrollButton && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-cefat-500 hover:bg-cefat-600 rounded-full p-3 shadow-lg"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </Button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
