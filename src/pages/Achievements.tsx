// src/pages/Achievements.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Medal, Star, Award, ArrowRight, Puzzle, ScrollText } from 'lucide-react';

const achievementsData = [
  {
    title: "Paper Publication in International Conference",
    description: "Published technical research paper at the International Conference on Data Analytics and Insights(ICDAI 2024)",
    icon: ScrollText,
    image: "/assets/images/best_research_paper.jpg",
  },
  {
    title: "Participated in IET KARMAVEER EXPO 2024",
    description: "Got selected from IET Kolkata Local Network and represented them, along with IET TMSL at a national level working model competition",
    icon: Puzzle,
    image: "/assets/images/community_impact.jpg",
  },
  {
    title: "1st Runner-Up in Tech-Intellina 2024",
    description: "Secured 1st Runner-Up position in Tech-Intellina 2024, organized by the IET YPS Kolkata Local Network",
    icon: Award,
    image: "/assets/images/leadership_excellence.jpg",
  },
  {
    title: "Winner in WAVICLE 5.0",
    description: "Students of IET TMSL Student Chapter won the IDEATHON competition at Wavicle 5.0, an Inter College Tech Model Competition",
    icon: Trophy,
    image: "/assets/images/wavicle_5.png",
  },
  {
    title: "8th Position in WAVICLE 5.0",
    description: "Students of IET TMSL Student Chapter secured the 8th Position IDEATHON competition at Wavicle 5.0, an Inter College Tech Model Competition",
    icon: Award,
    image: "/assets/images/best_research_paper.jpg",
  },
  {
    title: "1st Runner-Up in TECH-AI 2024",
    description: "Secured 1st Runner-Up position in the Tech-AI Hackathon on “AI-Based Application Domains”",
    icon: Award,
    image: "/assets/images/community_impact.jpg",
  },
  {
    title: "2nd Runner-Up in Tech-AI 2024",
    description: "Secured 2nd Runner-Up position in the Tech-AI Hackathon on “AI-Based Application Domains”",
    icon: Award,
    image: "/assets/images/leadership_excellence.jpg",
  },
];

const Achievements = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <motion.div 
        style={{ scale }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animated-gradient-text">
              Our Achievements
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Celebrating milestones and successes that drive us forward
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Achievements Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-12"
          >
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover-card flex flex-col items-center w-full sm:w-1/2 lg:w-1/4"
              >
                {/* <div className="w-full aspect-w-4 aspect-h-3 mb-4">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div> */}
                <achievement.icon className="text-blue-700 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2 text-center">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 text-center">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold animated-gradient-text mb-6">
              Join Our Success Story
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be a part of our journey and contribute to future achievements.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a href="/contact" className="btn-secondary inline-flex items-center group">
                Get Involved
                <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;