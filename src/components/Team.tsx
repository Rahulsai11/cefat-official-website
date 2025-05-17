
import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Capt. Rajesh Sharma",
      position: "Chief Flight Instructor",
      bio: "Former airline captain with over 15,000 flight hours and 20 years of instructional experience.",
      image: "/lovable-uploads/1158aaa7-be30-4ce2-8a24-99ef7a029f00.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:info@cefat.in",
      },
    },
    {
      name: "Dr. Priya Mehta",
      position: "Director of Training",
      bio: "Aviation expert with Ph.D. in Aerospace Engineering and experience developing training curricula for major airlines.",
      image: "/lovable-uploads/342a460a-ea7d-4ed4-9d9d-19d81daa2fa4.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:info@cefat.in",
      },
    },
    {
      name: "Capt. Vikram Singh",
      position: "Head of Simulator Training",
      bio: "Specialized in advanced simulator training with expertise in emergency procedures and crew resource management.",
      image: "/lovable-uploads/4b285533-6624-4e97-b26e-b52718a3bb47.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:info@cefat.in",
      },
    },
    {
      name: "Aisha Khan",
      position: "Ground School Instructor",
      bio: "Aviation meteorology specialist with experience in air traffic control and flight dispatch operations.",
      image: "/lovable-uploads/4f667a37-356e-4548-be8b-559761a3f59b.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:info@cefat.in",
      },
    },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading inline-block">Our Instructors</h2>
          <p className="text-lg text-gray-700 mt-6">
            Meet our team of experienced aviation professionals dedicated to providing exceptional training and mentorship to the next generation of aviators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md mb-4 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a href={member.social.linkedin} className="text-white hover:text-cefat-300 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href={member.social.twitter} className="text-white hover:text-cefat-300 transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a href={member.social.email} className="text-white hover:text-cefat-300 transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-cefat-500 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
