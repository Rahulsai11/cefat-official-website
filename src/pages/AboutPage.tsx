
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CourseContactPopup from "@/components/CourseContactPopup";

const AboutPage = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle showing contact popup
  const handleShowContactPopup = () => {
    setShowContactPopup(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <About onContactClick={handleShowContactPopup} />
      </main>
      <Footer />
      
      {/* Contact Popup */}
      {showContactPopup && (
        <CourseContactPopup 
          courseName="CEFAT Aviation Training" 
          isVisible={showContactPopup}
          onClose={() => setShowContactPopup(false)}
        />
      )}
    </div>
  );
};

export default AboutPage;
