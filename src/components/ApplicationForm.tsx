import React, { useState } from "react";
import { Loader2, X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ApplicationFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  courseId?: string;
  courseName?: string;
}

const ApplicationForm = ({ isOpen, onOpenChange, courseId, courseName }: ApplicationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    courseInterest: courseName || "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, education: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store the application in Supabase
      const { error } = await supabase
        .from('course_applications')
        .insert([
          { 
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            education: formData.education,
            experience: formData.experience,
            course_interest: formData.courseInterest,
            course_id: courseId || null,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);
        
      if (error) throw error;
      
      // Trigger the email notification via Edge Function
      const { error: emailError } = await supabase.functions.invoke('send-notification-email', {
        body: {
          type: 'application',
          formData,
          recipientEmail: 'admissions@cefat.in', // Change to your admissions email
        }
      });
      
      if (emailError) throw emailError;
    
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. Our team will contact you shortly.",
      });
      
      // Close dialog and reset form
      onOpenChange(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        education: "",
        experience: "",
        courseInterest: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-cefat-600">Apply for Admission</DialogTitle>
          <DialogDescription>
            Complete the form below to apply for {courseName || "our aviation program"}.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Your contact number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="education">Highest Education</Label>
            <Select value={formData.education} onValueChange={handleSelectChange}>
              <SelectTrigger id="education">
                <SelectValue placeholder="Select your highest education" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high_school">High School</SelectItem>
                <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                <SelectItem value="masters">Master's Degree</SelectItem>
                <SelectItem value="phd">Ph.D.</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="experience">Relevant Experience (if any)</Label>
            <Input
              id="experience"
              placeholder="Any relevant experience in aviation"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="courseInterest">Course of Interest</Label>
            <Input
              id="courseInterest"
              placeholder="Which course are you interested in?"
              value={formData.courseInterest}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              placeholder="Tell us more about yourself and why you're interested in this program"
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          
          <DialogFooter className="mt-6">
            <Button 
              variant="outline" 
              type="button" 
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-cefat-500 hover:bg-cefat-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
