import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Award, Users, BookOpen, Rocket } from 'lucide-react';
import Particles from 'react-tsparticles';

const impactData = [
  { year: '2018', students: 40, activities: 7 },
  { year: '2019', students: 50, activities: 10 },
  { year: '2020', students: 45, activities: 5 },
  { year: '2021', students: 40, activities: 4 },
  { year: '2022', students: 55, activities: 9 },
  { year: '2023', students: 64, activities: 12 },
  { year: '2024', students: 72, activities: 15 },
];

const slideImages = [
  "assets/icdai.jpg",
  "assets/tech ai.png",
  "assets/Project presentaion competition.png",
  "assets/Poster competition.png",
  "assets/Rockwell internship.png",
  "assets/wavicle 5.png",
  "assets/AI-ML workshop.jpg"
];

const features = [
  {
    icon: BookOpen,
    title: "Technical Excellence",
    description: "Access to cutting-edge technical resources and learning materials"
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry professionals and like-minded peers"
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Opportunities to showcase your skills and earn recognition"
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Platform to develop and implement innovative solutions"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <div className="pt-16 bg-gray-100">
      {/* Hero Section with Enhanced Background */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative h-[90vh] overflow-hidden"
      >
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 animate-gradient"></div>
        
        {/* Particle Effects */}
        <Particles
          className="absolute inset-0"
          options={{
            particles: {
              number: { value: 50 },
              size: { value: 3 },
              move: { enable: true, speed: 1 },
              opacity: { value: 0.5 },
            },
            interactivity: {
              events: { onhover: { enable: true, mode: "repulse" } },
            },
          }}
        />

        {slideImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 to-dark-900/90 dark:from-dark-900/80 dark:to-dark-900/95" />
          </motion.div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-7xl text-light-100 font-bold mb-6 animated-gradient-text"
            >
              Working To Engineer
              <br />A Better World
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-light-200 dark:text-light-300 mb-8 max-w-2xl mx-auto"
            >
              Join us in shaping the future of technology and innovation
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a href="#features" className="btn-primary inline-flex items-center group">
                Explore More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="hover-card p-6"
              >
                <feature.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-dark-400 dark:text-light-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-dark-300 dark:text-light-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter History */}
      <section className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-violet-900 mb-6 gradient-text">
                Our Journey Through Time
              </h2>
              <p className="text-dark-300 dark:text-light-300 leading-relaxed mb-6 text-justify">
              The Institution of Engineering and Technology (IET), formed in 2006 through the merger of the IEE and IIE, is one of the world’s largest engineering institutions with over 150,000 members. The IET promotes knowledge sharing, professional development, and innovation across industries such as energy and healthcare. The IET TMSL Student Chapter was established to foster technical excellence and professional growth among engineering students. It provides opportunities for learning, innovation, and networking, empowering students to connect with industry leaders and contribute to the engineering community.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/about" className="btn-secondary inline-flex items-center group">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
            <motion.div
              // initial={{ scale: 0.8, opacity: 0 }}
              // animate={{ scale: 1, opacity: 1 }}
              // transition={{ type: "spring", stiffness: 100, duration: 1 }}
              // whileHover={{ rotate: 10 }}
              // className="relative"
            >
              {/* <div className="absolute inset-0 bg-primary-600 dark:bg-primary-500 rounded-lg transform rotate-3"></div> */}
              <img
                src="assets/WhatsApp_Image_2025-01-25_at_17.19.55_01ba4461-removebg-preview.png"
                alt="Chapter History"
                // className="relative rounded-lg shadow-xl transform -rotate-3 transition-transform hover:rotate-0"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 ">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-light-100">Our Growing Impact</h2>
            <div className="bg-white/10 dark:bg-dark-400/10 backdrop-blur-sm p-6 rounded-xl shadow-xl">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={impactData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="year" stroke="#fff" />
                  <YAxis yAxisId="left" stroke="#fff" />
                  <YAxis yAxisId="right" orientation="right" stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="students"
                    stroke="#7dd3fc"
                    strokeWidth={3}
                    dot={{ fill: '#7dd3fc', strokeWidth: 2 }}
                    activeDot={{ r: 8 }}
                    name="Student Intake"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="activities"
                    stroke="#f0abfc"
                    strokeWidth={3}
                    dot={{ fill: '#f0abfc', strokeWidth: 2 }}
                    activeDot={{ r: 8 }}
                    name="Activities"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;