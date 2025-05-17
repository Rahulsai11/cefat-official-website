
import React from "react";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-cefat-300">CEFAT</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Center of Excellence for Aviation Training (CEFAT), pioneering aviation education and professional pilot training since 2005.
            </p>
            <div className="flex space-x-5">
              <a 
                href="https://www.facebook.com/digital.niks86/?ref=py_c" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cefat-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/cefat_bangalore?igshid=mlbrgqga3m27" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cefat-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/center-of-excellence-for-aviation-training/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cefat-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-cefat-300 after:-bottom-2">
              Quick Links
            </h3>
            <ul className="space-y-3 mt-5">
              <li>
                <a href="/" className="text-gray-400 hover:text-cefat-300 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cefat-300 rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-cefat-300 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cefat-300 rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-400 hover:text-cefat-300 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cefat-300 rounded-full mr-2"></span>
                  Courses
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-400 hover:text-cefat-300 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cefat-300 rounded-full mr-2"></span>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-gray-400 hover:text-cefat-300 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cefat-300 rounded-full mr-2"></span>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cefat-300 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-cefat-300 rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-cefat-300 after:-bottom-2">
              Contact Info
            </h3>
            <address className="not-italic text-gray-400 space-y-3 mt-5">
              <p className="flex items-start">
                <span className="w-1.5 h-1.5 bg-cefat-300 rounded-full mr-2 mt-2"></span>
                <span>14, KV Jairam Rd, above Appam's Bakery & Sweets<br/>Jakkuru, Bengaluru, Karnataka 560064</span>
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 bg-cefat-300 rounded-full mr-2"></span>
                <span>Phone: +91-7406632888 | +91-9845648881</span>
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 bg-cefat-300 rounded-full mr-2"></span>
                <span>Email: tps.gill@cefat.in</span>
              </p>
            </address>
          </div>
        </div>
        
        {/* Footer bottom */}
        <Separator className="bg-gray-800 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Center of Excellence for Aviation Training. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
