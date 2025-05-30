
import React from "react";
import { Link } from "react-router-dom";

// If you add more blogs, update this array and BlogDetailPage content accordingly.
export const blogs = [
  {
    id: "srinagar-hail-damage-may-2025",
    title: "Hail Damage on Srinagar Flight on 21 May 2025",
    date: "May 2025",
    desc: "Analysis of an Airbus A-321 aircraft that suffered hail damage near Pathankot on a flight to Srinagar, examining the weather conditions, flight planning decisions, and safety considerations.",
    keywords: ["aviation safety", "weather deviation", "flight planning", "thunderstorm", "hail damage"],
    image: "/lovable-uploads/b4da9ceb-5a03-4068-b282-0cfe3a3a980f.png",
  },
  {
    id: "cefats-aviation-career",
    title: "Why Choose CEFAT for Your Aviation Training Career?",
    date: "April 2025",
    desc: "Explore the benefits of professional pilot and aviation courses at CEFAT, Bangalore — from industry expert instructors to job-ready programmes.",
    keywords: ["aviation training", "pilot courses", "career in aviation"],
    image: "/lovable-uploads/5aff5b78-e62c-4940-a1cb-40ebfd98a42d.png",
  },
  {
    id: "pilot-cockpit-realities",
    title: "Commercial Pilot Licensing in India: The CEFAT Advantage",
    date: "March 2025",
    desc: "Learn about CPL and ATPL requirements in India, and how CEFAT guides students through every step of becoming a commercial pilot.",
    keywords: ["CPL", "ATPL", "commercial pilot training", "CEFAT"],
    image: "/lovable-uploads/b4da9ceb-5a03-4068-b282-0cfe3a3a980f.png",
  },
  {
    id: "aviation-after-12th",
    title: "How to Start Your Dream Aviation Career After 12th Grade",
    date: "February 2025",
    desc: "Discover step-by-step guidance to join aviation courses at CEFAT after completing 12th grade, plus scholarship and placement tips.",
    keywords: ["aviation after 12th", "aviation scholarship", "pilot placements"],
    image: "/lovable-uploads/65819d33-fd8a-4aec-a5c4-dc1b6dd2cbb1.png",
  },
];

const BlogsPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-block mb-8 px-4 py-2 bg-cefat-500 text-white rounded hover:bg-cefat-600 transition-colors text-sm"
      >
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8 text-center">CEFAT Blogs & Resources</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <Link to={`/blogs/${blog.id}`} className="block hover:opacity-90 transition-all">
              <img src={blog.image} alt={blog.title} className="h-56 w-full object-cover" />
            </Link>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">
                <Link className="hover:underline" to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </h2>
              <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
              <p className="text-gray-700 flex-1">{blog.desc}</p>
              <div className="mt-3 flex gap-2 flex-wrap text-xs text-cefat-500 font-medium">
                {blog.keywords.map((kw) => (
                  <span key={kw} className="bg-cefat-100 px-2 py-1 rounded">{kw}</span>
                ))}
              </div>
              <Link
                to={`/blogs/${blog.id}`}
                className="mt-5 inline-block text-cefat-600 hover:underline text-base font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BlogsPage;