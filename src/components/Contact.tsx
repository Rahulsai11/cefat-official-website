import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Map from './Map';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-cefat-500" />,
      title: "Our Location",
      content: "14, KV Jairam Rd, above Appam's Bakery & Sweets, Jakkuru, Bengaluru, Karnataka 560064",
    },
    {
      icon: <Phone className="h-5 w-5 text-cefat-500" />,
      title: "Phone Number",
      content: "+91-7406632888 | +91-9845648881",
    },
    {
      icon: <Mail className="h-5 w-5 text-cefat-500" />,
      title: "Email Address",
      content: "tps.gill@cefat.in",
    },
    {
      icon: <Clock className="h-5 w-5 text-cefat-500" />,
      title: "Office Hours",
      content: "Monday - Friday: 10 AM - 6 PM",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading inline-block">Contact Us</h2>
          <p className="text-lg text-gray-700 mt-6">
            Have questions about our aviation training programs? Reach out to the CEFAT team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Map />
          </div>

          <div>
               <iframe width='610px' height='900px' src='https://in.bigin.online/org60041145322/forms/send-us-a-message'></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
