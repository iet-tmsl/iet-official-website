import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, ArrowRight, Building, Briefcase } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const developmentTeam = [
    {
      name: "Rishav Das",
      role: "Web Developer",
      linkedin: "",
      github: "",
      expertise: "",
      projects: ""
    },
    {
      name: "Anish Bhowmick",
      role: "Manager and Web Developer",
      linkedin: "",
      github: "",
      expertise: "",
      projects: ""
    },
    {
      name: "Neeladri Hazra",
      role: "Manager and Designer",
      linkedin: "",
      github: "",
      expertise: "",
      projects: ""
    },
    {
      name: "Saikat Sarkar",
      role: "Adviser and Resource person",
      linkedin: "",
      github: "",
      expertise: "",
      projects: ""
    }
  ];

  return (
    <div className="pt-2">
      {/* Hero Section */}
      <motion.div 
        style={{ opacity, scale }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-6 text-violet-300" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animated-gradient-text">
              Get in Touch
            </h1>
            <p className="text-lg text-violet-200 max-w-3xl mx-auto">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold gradient-text mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover-card"
                  >
                    <MapPin className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">
                        Techno Main Salt Lake<br />
                        Salt Lake Sector V<br />
                        Kolkata, West Bengal 700091
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover-card"
                  >
                    <Mail className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href="mailto:iet.tmsl.2013@gmail.com"
                        className="text-violet-600 hover:text-violet-700"
                      >
                        iet.tmsl.2013@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover-card"
                  >
                    <Phone className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 89101 19694</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants} className="mt-12">
                <h3 className="text-xl font-semibold text-violet-900 mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['About', 'Events', 'Team', 'Achievements'].map((link, index) => (
                    <motion.a
                      key={index}
                      href={`/${link.toLowerCase()}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-violet-600 hover:text-violet-700"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>{link}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold gradient-text mb-8">
                Send us a Message
              </motion.h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition-colors flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-20 px-4 md:px-8 bg-violet-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Development Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the talented individuals behind our web presence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentTeam.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover-card"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-violet-900 mb-2">{member.name}</h3>
                    <p className="text-violet-600 mb-4">{member.role}</p>
                    {/* <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-700">
                        <Building className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="text-sm">Expertise: {member.expertise}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Briefcase className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="text-sm">Focus: {member.projects}</span>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.078273289556!2d88.42445437427044!3d22.576175632841206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751a9d9c9e85%3A0x7fe665c781b10383!2sTechno%20Main%20Salt%20Lake!5e0!3m2!1sen!2sus!4v1737841545365!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IET TMSL Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;