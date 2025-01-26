import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, BookOpen, Users, Rocket, ArrowRight, Newspaper, Trophy } from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const achievements = [
    {
      title: "Paper Publication",
      description: "Saikat Sarkar (EIE) and Neeladri Hazra (EIE), authored the paper at the International Conference on Data Analytics and Insights (ICDAI 2024).",
      icon: Newspaper
    },
    {
      title: "Innovation Award",
      description: "Secured 1st Runner-Up position in Tech-Intellina 2024, organized by the IET YPS Kolkata Local Network",
      icon: Trophy
    },
    {
      title: "Community Impact",
      description: "Successfully conducted 50+ technical workshops and events",
      icon: Users
    }
  ];

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
              About IET TMSL
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Empowering future engineers through innovation, learning, and leadership
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* What is IET? */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="text-gray-600 w-12 h-12" />
                <h2 className="text-3xl font-bold gradient-text">What is IET?</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-justify">
                The Institution of Engineering and Technology (IET) is one of the world's largest
                engineering institutions with over 168,000 members worldwide. It is also the most
                multidisciplinary – reflecting the increasingly diverse nature of engineering in the
                21st century.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                The IET is working to engineer a better world by inspiring, informing, and
                influencing our members, engineers, and technicians, and all those who are touched
                by, or touch, the work of engineers.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a 
                    href="https://www.theiet.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center group mt-4"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gray-600 rounded-lg transform rotate-3"></div>
              <img
              src="assets/IET about.png"
              alt="IET Global"
              className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0 w-full h-80 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TMSL Student Chapter */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute inset-0 bg-gray-600 rounded-lg transform -rotate-3"></div>
              <img
                src="assets/tmsl.png"
                alt="TMSL Chapter"
                className="relative rounded-lg shadow-xl transform rotate-3 transition-transform hover:rotate-0 w-full h-80 object-cover"
              />
            </motion.div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-gray-600 w-12 h-12" />
                <h2 className="text-3xl font-bold gradient-text">TMSL Student Chapter</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-justify">
                The IET TMSL Student Chapter is a vibrant community of aspiring engineers and
                  technologists at Techno Main Salt Lake. Our chapter serves as a platform for
                  students to develop their technical skills, leadership abilities, and professional
                  network.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Through various activities, workshops, and events, we provide opportunities for
                  students to engage with industry professionals, work on real-world projects, and
                  stay updated with the latest technological advancements.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a 
                    href="/activities" 
                    className="btn-secondary inline-flex items-center group mt-4"
                  >
                    Our Activities
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Award className="text-white-700 w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold animated-gradient-text">Our Achievements</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover-card"
                >
                  <achievement.icon className="text-gray-700 w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-900">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;