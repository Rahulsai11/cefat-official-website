
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaptainIntro from "@/components/CaptainIntro";
import Video from "@/components/Video";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
// import Team from "@/components/Team"; // Removed import
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div id="captain-intro">
          <CaptainIntro />
        </div>
        <div id="video">
          <Video />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        {/* Removed the team section */}
        {/* <div id="team">
          <Team />
        </div> */}
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
