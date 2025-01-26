import React from 'react';
import { motion } from 'framer-motion';
import { Presentation as PresentationScreen, Factory, Users, Lightbulb, Award, Wrench } from 'lucide-react';

const activities = [
  {
    icon: Factory,
    title: "Industrial Internship Opportunity",
    description: "Exposure to the real world experience, to gain insights and knowledge of industries and their work culture.",
    image: "assets/Rockwell internship.png"
  },
  {
    icon: PresentationScreen,
    title: "Student Poster Competition",
    description: "Poster presentation competition where students showcase their innovative ideas and research work in various engineering domains.",
    image: "assets/Poster competition.png"
  },
  {
    icon: Factory,
    title: "Paper Publication",
    description: "Allows students to showcase their research skills, contribute to their field of study, and gain recognition for their work.",
    image: "assets/paper publication.png"
  },
  {
    icon: Factory,
    title: "Industrial Visits",
    description: "Visits to leading industries and manufacturing units to provide students with practical exposure to industrial processes and technologies.",
    image: "assets/CESC industrial visit.png"
  },
  {
    icon: Users,
    title: "Tech Talks",
    description: "Interactive sessions with industry experts and professionals sharing insights about latest technological trends and career opportunities.",
    image: "assets/tech talk.jpg"
  },
  {
    icon: Lightbulb,
    title: "Project Presentation Competition",
    description: "Platform for students to present their innovative projects and receive feedback from industry experts and academicians.",
    image: "assets/Project presentaion competition.png"
  },
  {
    icon: Wrench,
    title: "Hands-on Workshops",
    description: "Practical workshops on emerging technologies like IoT, AI/ML, Cloud Computing, and more to enhance technical skills.",
    image: "assets/AI-ML workshop.jpg"
  }
];

const Activities = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animated-gradient-text">Our Activities</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Engaging students through diverse technical activities and hands-on learning experiences
            </p>
          </motion.div>
        </div>
      </div>

      {/* Activities List */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:ltr' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <activity.icon className="text-gray-600 w-8 h-8" />
                    <h2 className="text-3xl font-bold gradient-text">{activity.title}</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-justify">{activity.description}</p>
                </div>
                <div>
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
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