import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Linkedin, Instagram, Facebook, ArrowRight, Award, BookOpen } from 'lucide-react';

const coreTeam = [
  {
    name: "Saikat Sarkar",
    position: "President",
    image: "assets/Core team/president.jpg",
    linkedin: "https://linkedin.com/in/saikatsarkar", // Updated LinkedIn URL
    instagram: "https://instagram.com/johnsmith",
    facebook: "https://facebook.com/johnsmith",
    achievements: [
      "Published paper at the International Conference on Data Analytics and Insights (ICDAI 2024).",
      "Got selected from IET Kolkata Local Network and repreesented them in IET Karamveer EXPO 2024",
      // "Secured 1st Runner-Up position in the Tech-AI Hackathon"
    ]
  },
  {
    name: "Neeladri Hazra",
    position: "Vice President",
    image: "assets/Core team/vice-president.jpg",
    linkedin: "https://www.linkedin.com/in/neeladrihazra/", // Updated LinkedIn URL
    instagram: "https://instagram.com/sarahjohnson",
    facebook: "https://facebook.com/sarahjohnson",
    achievements: [
      "Published paper at the International Conference on Data Analytics and Insights (ICDAI 2024).",
      // "Secured 1st Runner-Up position in the Tech-AI Hackathon",
      "Presented abstract in 7th Regional Science and Technology Congress 2025 at BCKV, Kalyani"
    ]
  },
  {
    name: "Anish Bhowmick",
    position: "Secretary",
    image: "assets/Core team/secretery.jpg",
    linkedin: "https://linkedin.com/in/anishbhowmick", // Updated LinkedIn URL
    instagram: "https://instagram.com/michaelbrown",
    facebook: "https://facebook.com/michaelbrown",
    achievements: [
      "Got selected from IET Kolkata Local Network and repreesented them in IET Karamveer EXPO 2024",
      // "Secured 1st Runner-Up position in the Tech-AI Hackathon",
      "Presented abstract in 7th Regional Science and Technology Congress 2025 at Presidency University"
 ]
  }
];

const teamMembers = [
  {
    name: "Arka Rakshit",
    position: "Treasurer",
    image: "assets/Team/cropped-Arka Rakshit_Treasurer.jpg",
    linkedin: "https://linkedin.com/in/arkarakshit", // Updated LinkedIn URL
    specialization: "AI/ML",
    projects: "Smart Campus Initiative"
  },
  {
    name: "Arighna Mukherjee",
    position: "Vice Secretery",
    image: "assets/Team/cropped-Arighna Mukherjee_Vice Secretary.jpg",
    linkedin: "https://linkedin.com/in/arighnamukherjee", // Updated LinkedIn URL
    specialization: "Event Management",
    projects: "Tech Fest 2023"
  },
  {
    name: "Sharanya Roy",
    position: "Operational Head",
    image: "assets/Team/cropped-Sharanya Roy_Operational Head.jpg",
    linkedin: "https://linkedin.com/in/sharanyaroy", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  },
  {
    name: "Nikhil Parshuramka",
    position: "Operational Co-head",
    image: "assets/Team/Nikhil.jpg",
    linkedin: "https://linkedin.com/in/nikhilparshuramka", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  },
  {
    name: "Arpita Das",
    position: "Media Head",
    image: "assets/Team/cropped-Arpita Das _Media head.jpg",
    linkedin: "https://linkedin.com/in/arpitadas", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  },
  {
    name: "Shruti Saha",
    position: "Media Co-head",
    image: "assets/Team/cropped-Shruti Saha_media co head.jpg",
    linkedin: "https://linkedin.com/in/shrutisaha", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  },
  {
    name: "Sreejan Dutta",
    position: "Graphics Head",
    image: "assets/Team/cropped-SreejanDutta_Graphics_Head.jpg",
    linkedin: "https://linkedin.com/in/sreejandutta", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  },  
  {
    name: "Puja Gorai",
    position: "Graphics Co-head",
    image: "assets/Team/cropped-Puja_Gorai_Graphics-cohead.jpg",
    linkedin: "https://linkedin.com/in/pujagorai", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  },
  {
    name: "Soumadeep Putatunda",
    position: "PR head",
    image: "assets/Team/cropped-Soumadeep Putatunda_PR HEAD.jpg",
    linkedin: "https://linkedin.com/in/soumadeepputatunda", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  },
  {
    name: "Shreyasi Mandal",
    position: "PR Co-head",
    image: "assets/Team/cropped-Shreyasi Mandal_PR Co-head.jpg",
    linkedin: "https://linkedin.com/in/shreyasimandal", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  },
  {
    name: "Tathagato Das",
    position: "Event Lead",
    image: "assets/Team/cropped-TathagatoDas_EventLead.jpg",
    linkedin: "https://linkedin.com/in/tathagato-das", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  },
  {
    name: "Rishav Das",
    position: "Tech Head",
    image: "assets/Team/cropped-Rishav_Das_Tech_Head.jpg",
    linkedin: "https://linkedin.com/in/rishavdas", // Updated LinkedIn URL
    specialization: "Digital Marketing",
    projects: "Social Media Strategy"
  }
];

const alumni = [
  {
    name: "Pratyay Ghosh",
    batch: "2024",
    position: "Pursuing MS in Mathematical Finance and Financial Technology, Quantitative Finance",
    image: "assets/Team/Pratyay da.jpg",
    linkedin: "https://www.linkedin.com/in/pratyayghosh/", // Updated LinkedIn URL
    achievement: ""
  },
  {
    name: "Swarnali Bose",
    batch: "2024",
    position: "Pursuing MS in Automation Engineering",
    image: "assets/Team/Swarnali di.jpg",
    linkedin: "https://www.linkedin.com/in/swarnalibose/", // Updated LinkedIn URL
    achievement: ""
  },
  {
    name: "Radhika Chatterjee",
    batch: "2019",
    position: "Senior Specialist Technology Development, Infineon Technologies",
    image: "assets/Team/Radhika di.png",
    linkedin: "https://www.linkedin.com/in/radhikachatterjee/", // Updated LinkedIn URL
    achievement: "Research Assistant Nano-Photonics"
  }
];

const Team = () => {
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
            <Users className="w-16 h-16 mx-auto mb-6 text-violet-300" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animated-gradient-text">
              Meet Our Team
            </h1>
            <p className="text-lg text-violet-200 max-w-3xl mx-auto">
              The passionate individuals driving innovation and excellence at IET TMSL
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Core Team */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Core Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the leaders who guide and inspire our chapter
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {coreTeam.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden hover-card"
                >
                  <div className="relative">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-violet-900 mb-2">{member.name}</h3>
                    <p className="text-violet-600 mb-4">{member.position}</p>
                    <div className="space-y-2 mb-6">
                      {member.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <Award className="text-violet-500 w-4 h-4 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                    {/* <div className="flex justify-center space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.linkedin}
                        target={member.linkedin}
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700"
                      >
                        <Instagram className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700"
                      >
                        <Facebook className="w-5 h-5" />
                      </motion.a>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 md:px-8 bg-violet-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Team Members</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The dedicated individuals working behind the scenes
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover-card"
                >
                  <div className="relative h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-violet-900 mb-2">{member.name}</h3>
                    <p className="text-violet-600 mb-4">{member.position}</p>
                    {/* <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-700">
                        <BookOpen className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="text-sm">Specialization: {member.specialization}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Award className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="text-sm">Project: {member.projects}</span>
                      </div>
                    </div> */}
                    {/* <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 hover:text-violet-700"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alumni */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Our Alumni</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Former members who continue to inspire us with their achievements
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {alumni.map((alum, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover-card"
                >
                  <div className="relative h-64">
                    <img
                      src={alum.image}
                      alt={alum.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-violet-900 mb-2">{alum.name}</h3>
                    <p className="text-violet-600 mb-1">Batch of {alum.batch}</p>
                    <p className="text-gray-600 mb-4">{alum.position}</p>
                    {/* <div className="flex items-center text-gray-700 mb-4">
                      <Award className="w-4 h-4 mr-2 text-violet-500" />
                      <span className="text-sm">{alum.achievement}</span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={alum.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 hover:text-violet-700"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-violet-900 to-violet-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold animated-gradient-text mb-6">
              Join Our Team
            </h2>
            <p className="text-violet-200 mb-8 max-w-2xl mx-auto">
              Interested in becoming part of our dynamic team? We're always looking for passionate individuals!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a href="/contact" className="btn-secondary group">
                Get Started
                <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;