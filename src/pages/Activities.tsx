import React from 'react';
import { motion } from 'framer-motion';
import {
  Presentation as PresentationScreen,
  Factory,
  Users,
  Lightbulb,
  Award,
  Wrench,
  ScrollText, Calendar
} from 'lucide-react';

// Define the structure of an activity
interface Activity {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
  date: string; // Added date property
}

// Limited to four activities for a clean and focused display
const activities: Activity[] = [
  {
    icon: Factory,
    title: 'Industrial Training, Rockwell Automation',
    description:'Gained real-world experience and insights into industry practices and work culture through industrial internship at Rockwell Automation, Noida, UP.',
    image: 'assets/Rockwell internship.png',
    date: "January 1, 2024 to January 30,2024", 
  },
  {
    icon: ScrollText,
    title: 'Paper Publication in ICDAI 2024',
    description:'Technical research paper published in International Conference on Data Analytics and Insights 2024 (Formerly known as ICDAI 2024), organized by Techno International New Town.',
    image: 'assets/icdai.jpg',
    date: "July 25, 2024 to July 27, 2024",
  },
  {
    icon: Users,
    title: 'Future Tech Congress 2024',
    description:'Engage with industry experts and professionals as they share insights on the latest technological trends and career opportunities, organised by IET India.',
    image: 'assets/FTC.jpg',
    date: "September 2, 2024",
  },
  {
    icon: Wrench,
    title: 'IET KARMAVEER EXPO 2024',
    description:'21st National Level Working Model Competition, organized by K K Wagh Institute of Engineering Education & Research jointly with IET (U.K) Nashik Local Network during April 5-6, 2024.',
    image: 'assets/nasik_karamveer.png',
    date: "May 4, 2024 to May 5, 2024",
  },
];

const Activities: React.FC = () => {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animated-gradient-text">
              Our Activities
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Engaging students through diverse technical activities and hands-on learning experiences
            </p>
          </motion.div>
        </div>
      </div>

      {/* Activities List */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
              >
                {/* Enforce 16:9 Aspect Ratio for Activity Image */}
<div className="aspect-w-16 aspect-h-9">
  <img
    src={activity.image}
    alt={activity.title}
    className="w-full h-40 object-cover" // Changed from h-40 to h-full for better responsiveness
  />
</div>

{/* Activity Details */}
<div className="p-4 flex flex-col justify-between h-30">
  <div>
    <div className="flex items-center mb-2">
      <activity.icon className="text-blue-600 w-8 h-8 mr-2" />
      <h3 className="text-lg font-semibold">{activity.title}</h3>
    </div>
    <p className="text-gray-700 text-sm text-justify">{activity.description}</p>
  </div>
  
  {/* Date Section at Bottom with Blue Calendar Icon */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="mt-4 flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300"
  >
    <Calendar className="w-4 h-4 mr-2 " /> {/* Ensures the Calendar icon is blue */}
    <span className="text-sm">{activity.date}</span>
  </motion.div>
</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Award className="w-16 h-16 text-gray-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Activities?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Be part of our vibrant community and participate in exciting technical activities
              that will enhance your skills and boost your career prospects.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get Involved
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Activities;