import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"; // No longer needed
// import { Label } from "@/components/ui/label"; // No longer needed
// import { ContactForm } from "@/components/ContactForm";

interface CourseContactPopupProps {
  courseName: string;
  isVisible?: boolean;
  onClose?: () => void;
}

const CourseContactPopup: React.FC<CourseContactPopupProps> = ({ 
  courseName, 
  isVisible: propIsVisible,
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(!!propIsVisible);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // const [phoneNumber, setPhoneNumber] = useState(""); // No longer needed

  useEffect(() => {
    if (propIsVisible !== undefined) {
      setIsVisible(propIsVisible);
    } else {
      // Show popup after 2 seconds if not controlled externally
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [propIsVisible]);

  // const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => { // No longer needed
  //   // Only allow numbers and limit to a reasonable length
  //   const value = e.target.value.replace(/\D/g, "").slice(0, 15);
  //   setPhoneNumber(value);
  // };
  
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-60 animate-fade-in">
      <div 
        className="relative bg-white rounded-lg shadow-2xl overflow-y-auto overflow-x-hidden"
        style={{ 
          width: 'min(95vw, 500px)',
          maxHeight: '90vh'
        }}
      >
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <h3 className="text-sm font-medium">
            Interested in {courseName}?
          </h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full text-white hover:bg-white/20"
            onClick={handleClose}
          >
            <X className="h-3.5 w-3.5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="iframe-wrapper w-full overflow-hidden">
          <iframe
            ref={iframeRef}
            src="https://in.bigin.online/org60041145322/forms/new"
            title="Contact Form"
            className="w-full h-[600px] max-h-[80vh] border-0 block"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseContactPopup;
