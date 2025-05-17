
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, UserRound } from "lucide-react";

const testimonials = [
  {
    name: "Capt. Dhruv Dhawan",
    text: "My CPL coaching experience with Sir was exceptional. His focused guidance and well-curated material allowed me to efficiently utilize my limited preparation time while working. The high-quality, filtered resources covered the extensive syllabus effectively. In under 20 sessions, I gained confidence to pass the CPL exams. Beyond exam success, his mentorship provides invaluable long-term benefits. I achieved scores of 82 in NAV, 76 in MET, and 82 in Air Reg. Thank you, Sir!",
    position: "",
    initials: "DD"
  },
  {
    name: "Capt. Sarah Fernandes",
    text: "I first met Capt. TPS Gill in 2011 during my time at Indigo. He guided my CPL studies, offering crucial advice on exam preparation, CASS, and the final interview. Capt. Gill's continuous guidance and motivation proved invaluable during the lengthy selection process, helping me persevere through difficult times. Thanks to his support, I am now a First Officer at a great airline.",
    position: "",
    initials: "SF"
  },
  {
    name: "Capt. Ragi Dubey",
    text: "\"HARDER I work LUCKIER I get!\" is what Capt. Gill engraved in me. His contribution is immense; I just had to trust him. Despite getting my license in 2009, I faced years of waiting. Capt. Gill gave me confidence, and I'm now flying since June 2018. He's incredibly knowledgeable and always available, even at odd hours. He motivates and guides not just what to study, but how, making a huge difference. He helped me balance everything. I'm eternally grateful!",
    position: "",
    initials: "RD"
  },
  {
    name: "Capt. Arun Jambunathan",
    text: "I first met Capt. TPS Gill in 2010 for my CPL conversion. He guided me to clear the exams in just 10-15 days. I also cleared all my ATPL subjects on my first attempt with his guidance. Capt. TPS Gill is undoubtedly the best for aviation guidance. Today, I fly as an A320 Captain, a success I owe entirely to him. Thank you, Sir!",
    position: "Captain, A320",
    initials: "AJ"
  },
  {
    name: "Capt. Libon Albert Fernandes",
    text: "I met Capt. TPS Gill through my sister, Sarah, who he guided through airline preparation. I also trained with him for the Airline Crew Assessment Selection and Interview. His guidance was invaluable, and I quickly gained the knowledge needed to pass the selection stages. I'm now a First Officer with a reputed airline. I was also fortunate to have Capt. Gill conduct my release check. Thank you for your guidance and motivation, Sir!",
    position: "First Officer",
    initials: "LF"
  },
  {
    name: "Capt. Ruhi Choudhary",
    text: "This great man is the reason I'm at Indigo today. Four years ago, I met Capt. TPS Gill on his Airbus 320 flight, and he advised me to apply. Despite living in a different city, he guided me tirelessly, even coaching me extensively over the phone. His knowledge is remarkable. He's an amazing teacher and an even better person, with a passion for helping others achieve their goals. Sir, it's an honor to have been guided by you!",
    position: "",
    initials: "RC"
  },
  {
    name: "Capt. Sushant Laxman",
    text: "Captain Gill, I'm blessed to have been your student. In 2010, as a First Officer, I learned your guidance was key to passing the ATPL. Your advice, systematic approach, and vast experience helped me pass on my first attempt. Even with 7000+ hours as an A320 Commander and Check Pilot, your knowledge is unmatched. Your dedication has shaped our successful careers. For aspiring pilots, I say: start your journey with Captain TPS Gill. Thank you!",
    position: "Commander & Check Pilot, A320",
    initials: "SL"
  },
  {
    name: "Capt. Supreet Nandy",
    text: "Mr. TPS Gill is one of the best instructors in aviation. His classes enhance your knowledge and provide practical application. Small batches allow ample doubt clarification, and his study material is perfect for exams. His knowledge from his IAF and civil airline career is astounding. I'm proud to have learned from him. He guided me from CPL conversion to joining Indigo. Thank you, Sir, for helping me get where I am!",
    position: "",
    initials: "SN"
  },
  {
    name: "Capt. Ravi Kakhandki",
    text: "I met Capt. TPS Gill in 2011 for ATPL prep. His dedication and care in teaching the true meaning of aviation was striking. Beyond exam prep, he provided detailed notes, tips, lessons, and life examples, ensuring I passed in one go and became a professional aviator. His dedication, even teaching after early morning flights, was remarkable. His guidance has been invaluable. Through him, all future aviators will gain a firm footing as true professionals.",
    position: "",
    initials: "RK"
  },
  {
    name: "Vinita Shanker",
    text: "Capt. Gill is a special teacher who empathizes, understands, supports, and mentors his students. He awakens our potential, encourages learning, and imparts life lessons through real-life stories that shape our future. His impact is immeasurable. I'm deeply thankful and blessed to have him as my teacher. I strongly recommend CEFAT to all aspiring pilots; no other institute in India can make you a fine, disciplined, and knowledgeable aviator.",
    position: "Student, CEFAT",
    initials: "VS"
  },
  {
    name: "Capt. Vishnu Nair",
    text: "Dear Sir, I fondly recall our first flight in 2011 and our successful ATPL exams, a testament to your dedicated teaching. Your inspiring commitment included long sessions despite your busy schedule. Your dynamic and unique approach was remarkable. Having navigated the challenges of an aviation job, I deeply appreciate your invaluable guidance and constant encouragement throughout my pilot career. I'm truly thankful and wish you great success in your new venture. Your students are fortunate.",
    position: "",
    initials: "VN"
  },
  {
    name: "Capt. Vikram Sinhji Rana",
    text: "I attended Capt TPS Gill's crucial ATPL Ground Training after my CPL, clearing it on the first attempt. His subsequent airline induction session excellently prepared me for technical aspects and interviews. His A320 line and simulator training were also invaluable. His thorough training significantly increases the likelihood of exam success. His guidance has been pivotal in my journey towards working with major airlines.",
    position: "",
    initials: "VR"
  },
  {
    name: "Capt. Aiswariya Velumani",
    text: "After joining Indigo ground staff post-CPL, meeting Capt TPS Gill was a turning point. His expert guidance was key to clearing Indigo and SpiceJet's induction processes. He also clarified doubts during my type rating, emphasizing how to study. His constant motivation and attention have been invaluable. His belief that \"confidence comes from knowledge\" resonates. I'm confident and proud to be his mentee.",
    position: "",
    initials: "AV"
  },
  {
    name: "Capt. Akshita Jain",
    text: "Feeling lost after my initial CPL, I met Capt. TPS Gill. His airline preparation ground training was transformative; I'm now with a major airline! His 'crisp-to-the-point' advice was crucial for clearing ATPL and RTR exams, including written tests and interviews. He has been an inspiring professional, mentor, and guide, significantly impacting my career path since we connected.",
    position: "",
    initials: "AJ"
  },
  {
    name: "Capt. Richelle D'Souza",
    text: "I was fortunate to complete both initial and ATPL training under Captain Gill. His focus on core knowledge and a smart approach to DGCA exams, alongside ample practice, simplified the actual exam. His classes were exceptionally beneficial. His guidance and extensive experience in pilot selection and training were vital to my success with Emirates' rigorous process. Thank you, Captain TPS Gill.",
    position: "",
    initials: "RD"
  },
];

const TestimonialsGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative group overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-cefat-200 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="text-cefat-300 h-8 w-8 mb-6 absolute top-6 right-6 opacity-20 transition-transform duration-300 group-hover:scale-110" />
                
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="h-12 w-12 border-2 border-cefat-100">
                    <AvatarFallback className="bg-cefat-50 text-cefat-700">
                      <UserRound className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    {testimonial.position && (
                      <p className="text-cefat-600 text-sm font-medium">
                        {testimonial.position}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-base relative z-10">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
