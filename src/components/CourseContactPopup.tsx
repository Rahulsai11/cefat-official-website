import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
  // const [phoneNumber, setPhoneNumber] = useState(""); // No longer needed

  useEffect(() => {
    if (propIsVisible !== undefined) {
      setIsVisible(propIsVisible);
    } else {
      // Show popup after 10 seconds if not controlled externally
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);

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
    <div className="fixed bottom-5 right-5 z-50 animate-fade-in">
      <Card className="w-[350px] shadow-lg border-cefat-500 border">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-[#1b83b6]">
              Interested in {courseName}?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Send us a message and we'll get back to you with more information about this course.
            </p>
            {/* 
            <div className="mb-4">
              <Label htmlFor="phone" className="text-sm font-medium">
                Mobile Number
              </Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Enter your mobile number" 
                className="mt-1"
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
            </div>
            */}
            <div className="overflow-hidden">
              <iframe 
                width='100%' 
                height='650px' 
                src='https://in.bigin.online/org60041145322/forms/send-us-a-message'
                title="Contact Form"
                className="border-0"
                scrolling="no"
              ></iframe>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default CourseContactPopup;
