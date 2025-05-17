
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "./BlogsPage";

const BlogDetailPage = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4 text-red-500 font-bold">Blog Not Found</h1>
          <Link className="text-cefat-600 underline" to="/blogs">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Example: Add longer content for each blog using switch/case for demo
  let content = "";
  switch (blog.id) {
    case "cefats-aviation-career":
      content = `
        CEFAT in Bangalore stands out for aspiring pilots and aviation professionals due to its state-of-the-art simulators, advanced curriculum, and unparalleled job-oriented training. Our instructors are seasoned experts holding decades of flying and teaching experience. Whether you're just starting or looking to upskill, CEFAT's comprehensive programs help you build a successful and rewarding aviation career.
        <br/><br/>
        Key Features:
        <ul class="list-disc list-inside mt-2">
        <li>DGCA-approved and industry-recognized courses</li>
        <li>Modern training aircraft and full-flight simulators</li>
        <li>Scholarships and personalized mentoring</li>
        <li>100% placement assistance after course completion</li>
        </ul>
      `;
      break;
    case "pilot-cockpit-realities":
      content = `
        The process to obtain a Commercial Pilot License (CPL) and Airline Transport Pilot License (ATPL) in India is rigorous, but CEFAT provides step-by-step guidance. From classroom theory to hands-on cockpit sessions and exam prep, our faculty supports you throughout.
        <br/><br/>
        Why CEFAT?
        <ul class="list-disc list-inside mt-2">
        <li>Expert DGCA syllabus coverage</li>
        <li>Access to India's leading aviation infrastructure</li>
        <li>Comprehensive ground and flight training</li>
        <li>Evening batches for working professionals</li>
        </ul>
      `;
      break;
    case "aviation-after-12th":
      content = `
        If you've completed your 12th grade, CEFAT can put you on the fast track to becoming a pilot or an aviation manager. Find out about our intake process, essential requirements, ongoing scholarships, and the campus placement success rate for freshers!
        <br/><br/>
        Steps to Start:
        <ul class="list-disc list-inside mt-2">
        <li>Career counseling and aptitude assessment</li>
        <li>DGCA medical exam assistance</li>
        <li>Support throughout admission & visa processes (if needed)</li>
        <li>Mentoring for interviews and job placement</li>
        </ul>
      `;
      break;
    default:
      content = blog.desc;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-2xl mx-auto pt-14 px-4">
        <Link to="/blogs" className="text-cefat-600 text-sm hover:underline">
          ← All Blogs
        </Link>
        <div className="bg-white mt-4 rounded-lg shadow-lg overflow-hidden">
          <img src={blog.image} alt={blog.title} className="h-72 w-full object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
            <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
            <div className="flex gap-2 flex-wrap text-xs mb-4 text-cefat-500">
              {blog.keywords.map((kw) => (
                <span key={kw} className="bg-cefat-100 px-2 py-1 rounded">{kw}</span>
              ))}
            </div>
            <div className="prose prose-cefat max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
