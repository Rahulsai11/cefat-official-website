
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "./BlogsPage";

const BlogDetailPage = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-centre justify-centre">
        <div className="text-centre">
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
    case "srinagar-hail-damage-may-2025":
      content = `
        Recently an Airbus A-321 aircraft suffered hail damage near Pathankot on a flight to Srinagar for having flown through a thunderstorm cloud (Cumulonimbus or CB). Let us see the facts of the case. The route was 'W30W' DELHI – SRINAGAR VIA, AMRITSAR- PATHANKOT – MESAR SRINAGAR. The route to be flown was in the proximity of the International border (IB) of Pakistan. An aircraft is not to fly within 15 nautical miles (about 28 kilometers) of the Pakistan border unless an Airway passes within the boundary of the said limitation. Due to the recent conflict with Pakistan, their airspace was closed for Indian aircraft and notices had been issued, hence no concessions could have been expected for a deviation to the left of track.
        <br/><br/>
        <div class="my-6">
          <img src="/lovable-uploads/e27bf63c-2414-4ce3-b093-346d229d432e.png" alt="Flight route map showing Delhi-Srinagar route via Amritsar-Pathankot-Mesar" class="w-full max-w-2xl mx-auto rounded-lg shadow-md"/>
          <p class="text-sm text-gray-600 text-center mt-2 italic">Flight route map showing the Delhi-Srinagar route via Amritsar-Pathankot-Mesar</p>
        </div>
        <br/>
        The flight was in pre monsoon season, with the temperature rising up to 50⁰ c, with convective thunderstorms rising up to 50,000 ft, up draught and down draught ranging between 8,000 to 10,000 ft/ minute in the area were to be expected. Pre- flight weather charts (SIGMET) would have shown Thunderstorm clouds on the route. A meticulous study of the weather information by the crew, prior to the flight, ideally should have led to a precise plan for managing the flight under the weather conditions in the area. The following factors should have been considered under the prevailing circumstances.
        <br/><br/>
        <strong>Key Considerations:</strong>
        <ol class="list-decimal list-inside mt-2 space-y-1">
          <li>Plan for weather deviation and related procedures.</li>
          <li>Carriage of extra fuel to cater for additional track miles to be flown.</li>
          <li>Proximity of the International border of Pakistan with the limitation of not flying closer than 15 nautical miles closer to it.</li>
          <li>Closure of the Pakistan airspace (left of the route).</li>
          <li>Pathankot is about 20 kms from the IB, so a left deviation was not an option due to the proximity to the IB and also due to the closure of the Pak airspace</li>
          <li>Deviation to the right was not even considered by the crew as per the narrative. To the right of the route was the Restricted airspace due to operation of fighters from the IAF airfields. However, since the flight was at 36,000 feet, rarely if any, fighters would have been operating at that level for a routine flight. Since the controlling in the area was by the Northern radar, necessary separation would have been provided to the Airbus from any other aircraft operating in the vicinity by the same radar. Hence, a safe deviations to the right was certainly an option.</li>
        </ol>
        <br/>
        In case of absence of permission for a right deviation, following options could have been exercised much before reaching a mindset of helplessness.
        <ul class="list-disc list-inside mt-2">
          <li>Return to Delhi.</li>
          <li>Diverting to alternate airfields which was clear of WX</li>
          <li>Carriage of extra fuel.</li>
        </ul>
        <br/>
        <strong>Weather Management Procedures:</strong><br/>
        For weather management in flight, as per standard operating procedure on Airbus A-321, the Pilot Flying selects 80 nm (about 150km) range for Airborne Weather Radar (AWR) display screen, for deviation decision making).
        <br/><br/>
        The Pilot Monitoring keeps AWR Range at 160nm (about 300km) for weather assessment and deviation planning from the route.
        <br/><br/>
        With the good use and analysis of AWR, weather deviation can be planned much in advance. The need for pre-flight preparation, knowledge of airspace restrictions and current notices, cannot be over emphasised for any flight.
        <br/><br/>
        One thing is very clear - going through a Thunderstorm, with up draught and down draught ranging between 8,000to 10,000 ft/ min in the cloud is never an option. No pilot should ever feel helpless in flight for lack of an option and feel compelled to fly through a Thunderstorm cloud, since the consequences can be disastrous as was experienced by Air France 447.
        <br/><br/>
        <div class="bg-cefat-50 p-4 rounded-lg border-l-4 border-cefat-500">
          <strong class="text-cefat-700">REMEMBER:</strong><br/>
          <em>"FLYING IS DONE AT HOME" i.e. THOROUGH PRE-FLIGHT PREPARATION IS A MUST FOR THE CONDUCT OF A SAFE FLIGHT.</em>
        </div>
      `;
      break;
    case "cefats-aviation-career":
      content = `
        CEFAT in Bangalore stands out for aspiring pilots and aviation professionals due to its state-of-the-art simulators, advanced curriculum, and unparalleled job-oriented training. Our instructors are seasoned experts holding decades of flying and teaching experience. Whether you're just starting or looking to upskill, CEFAT's comprehensive programmes help you build a successful and rewarding aviation career.
        <br/><br/>
        Key Features:
        <ul class="list-disc list-inside mt-2">
        <li>DGCA-approved and industry-recognised courses</li>
        <li>Modern training aircraft and full-flight simulators</li>
        <li>Scholarships and personalised mentoring</li>
        <li>100% placement assistance after course completion</li>
        </ul>
      `;
      break;
    case "pilot-cockpit-realities":
      content = `
        The process to obtain a Commercial Pilot Licence (CPL) and Airline Transport Pilot Licence (ATPL) in India is rigorous, but CEFAT provides step-by-step guidance. From classroom theory to hands-on cockpit sessions and exam prep, our faculty supports you throughout.
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
        <li>Career counselling and aptitude assessment</li>
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
    <div className="min-h-screen bg-grey-50 pb-16">
      <div className="max-w-4xl mx-auto pt-14 px-4">
        <Link to="/blogs" className="text-cefat-600 text-sm hover:underline">
          ← All Blogs
        </Link>
        <div className="bg-white mt-4 rounded-lg shadow-lg overflow-hidden">
          <img src={blog.image} alt={blog.title} className="h-72 w-full object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-3">{blog.title}</h1>
            <div className="text-sm text-grey-500 mb-2">{blog.date}</div>
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