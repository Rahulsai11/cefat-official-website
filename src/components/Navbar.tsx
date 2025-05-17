
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Add new effect to scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to the sectionId if element exists
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string, name: string) => {
    if (name === "Contact") {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate("/#contact");
      }
    } else if (name === "Services") {
      if (location.pathname === "/") {
        scrollToSection("services");
      } else {
        navigate("/", { replace: false });
        // Wait a tick for navigation and then scroll
        setTimeout(() => scrollToSection("services"), 200);
      }
    } else if (href.startsWith("/#")) {
      // For other hash links on home page, e.g. "#contact"
      if (location.pathname === "/") {
        const id = href.slice(2);
        scrollToSection(id);
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Courses", href: "/courses" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/#contact" },
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <img 
            src="https://cefat.in/wp-content/uploads/2020/01/cefat-CURVED-C-BLUE.png" 
            alt="CEFAT Logo" 
            className="h-12 object-contain"
          />
          <span className={`font-bold text-2xl transition-colors ${
            scrolled ? "text-[#1b83b6]" : "text-white"
          }`}>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) =>
            link.name === "Contact" ? (
              <Button
                key="Contact"
                className="ml-4 bg-[#1b83b6] hover:bg-[#1b83b6]/80 text-white"
                onClick={() => handleNavClick(link.href, link.name)}
              >
                Contact
              </Button>
            ) : (
              <button
                key={link.name}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-[#1b83b6]/10 ${
                  scrolled 
                    ? "text-gray-800 hover:text-[#1b83b6]" 
                    : "text-gray-700 hover:text-[#1b83b6]"
                }`}
                onClick={() => handleNavClick(link.href, link.name)}
              >
                {link.name.toUpperCase()}
              </button>
            )
          )}
        </div>
        
        <button
          className="md:hidden p-2 rounded-md transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-gray-700"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-gray-700"}`} />
          )}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) =>
              link.name === "Contact" ? (
                <Button
                  key="Contact"
                  className="mt-4 w-full bg-[#1b83b6] hover:bg-[#1b83b6]/80 text-white"
                  onClick={() => handleNavClick(link.href, link.name)}
                >
                  CONTACT
                </Button>
              ) : (
                <button
                  key={link.name}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-[#1b83b6]/5 hover:text-[#1b83b6]"
                  onClick={() => handleNavClick(link.href, link.name)}
                >
                  {link.name.toUpperCase()}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
