import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Mail, Linkedin, BookOpen, Award, Users, ArrowRight, Building, Star } from 'lucide-react';

const chapterAdviser = {
  name: "Mr. Subhajit Bhowmick",
  position: "Chapter Adviser",
  department: "Electronics & Instrumentation Engineering",
  image: "assets/Faculty/subhajit sir.png",
  email: "subhajitsan@yahoo.co.in",
  // linkedin: "https://linkedin.com/in/johndoe",
  bio: "Mr. Subhajit Bhowmick, with over 16 years of extensive experience in academia and industry, has been instrumental in establishing and leading the IET TMSL Student Chapter since its inception. He currently serves as an EC Member of the IET Kolkata Local Network and has previously held prestigious positions as the Young Professionals (YP) Chairman and Secretary, demonstrating his commitment to fostering innovation and leadership within the engineering community.",
  achievements: [
    "Published many research papers in prestigious journals",
    // "Awarded Best Professor of the Year 2023",
    "Led multiple funded projects"
  ],
  specializations: [
    "IoT",
    "Embedded Systems",
    // "Data Science"
  ],
  researchAreas: [
    // "Deep Learning",
    // "Computer Vision",
    // "Natural Language Processing"
  ]
};

const facultyMembers = [
  {
    name: "Mrs. Sanghamitra Manna",
    position: "Assistant Professor",
    department: "Electronics & Instrumentation Engineering",
    image: "assets/Faculty/Sanghamitra Manna.jpg",
    // email: "",
    // linkedin: "",
    // specialization: "",
    // research: "",
    // publications: 25,
    // experience: "12+ years",
    // featured: true
  },
  {
    name: "Mr. Soumyadip Jana",
    position: "Assistant Professor",
    department: "Electrical Engineering",
    image: "assets/Faculty/Soumyadip Jana.jpg",
    // email: "michael.brown@tmsl.edu",
    // linkedin: "https://linkedin.com/in/michaelbrown",
    // specialization: "Machine Learning",
    // research: "AI Applications",
    // publications: 18,
    // experience: "8+ years",
    // featured: false
  },
  {
    name: "Mrs. Bidishna Bhattacharya",
    position: "Head of the Department & Assistant Professor",
    department: "Electrical Engineering",
    image: "assets/Faculty/Bidishna Bhattacharya.JPG",
    // email: "",
    // linkedin: "",
    // specialization: "",
    // research: "",
    // publications: ,
    // experience: "15+ years",
    // featured:
  },
  {
    name: "Mrs. Tuktuki Rakshit Ghosh ",
    position: "Assistant Professor",
    department: "Electronics and Communication Engineering",
    image: "assets/Faculty/tuktuki rakshit ghosh.jpg",
    // email: "",
    // linkedin: "",
    // specialization: "",
    // research: "",
    // publications: ,
    // experience: "15+ years",
    // featured:
  },
  {
    name: "Mrs. Moumita Jana ",
    position: "Assistant Professor",
    department: "Electronics and Communication Engineering",
    image: "assets/blank pic.png",
    // email: "",
    // linkedin: "",
    // specialization: "",
    // research: "",
    // publications: ,
    // experience: "15+ years",
    // featured:
  },
  {
    name: "Dr. Pranati Dutta",
    position: "Assistant Professor",
    department: "Electronics and Instrumentation Engineering",
    image: "assets/blank pic.png",
    // email: "",
    // linkedin: "",
    // specialization: "",
    // research: "",
    // publications: ,
    // experience: "15+ years",
    // featured:
  },
  {
    name: "Mr. Abhjit Dey ",
    position: "Assistant Professor",
    department: "Electronics and Communication Engineering",
    image: "assets/blank pic.png",
    // email: "",
    // linkedin: "",
    // specialization: "",
    // research: "",
    // publications: ,
    // experience: "15+ years",
    // featured:
  },
  {
    name: "Mr. Jayanta Kundu",
    position: "Senior Technical Head",
    department: "Electronics and Communication Engineering",
    image: "assets/blank pic.png",
    // email: "",
    // linkedin: "",
    // specialization: "",
    // research: "",
    // publications: ,
    // experience: "15+ years",
    // featured:
  },
  {
    name: "Mr. Arnab Karmakar",
    position: "Senior Technical Head",
    department: "Electronics and Instrumentation Engineering",
    image: "assets/blank pic.png",
    // email: "",
    // linkedin: "",
    // specialization: "",
    // research: "",
    // publications: ,
    // experience: "15+ years",
    // featured:
  },
];

const Faculty = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const departments = ['All', ...new Set(facultyMembers.map(member => member.department))];

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

  const filteredFaculty = facultyMembers
    .filter(member => selectedDepartment === 'All' || member.department === selectedDepartment)
    .filter(member => 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <motion.div 
        style={{ opacity, scale }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8"
      >
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <GraduationCap className="w-20 h-20 mx-auto mb-4 text-indigo-300" />
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
              <span className="text-indigo-300">Discover Our</span> <span className="text-pink-500">Esteemed Faculty</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-4xl mx-auto">
              Meet the passionate educators and researchers driving innovation and excellence in engineering.
            </p>
            
            {/* Decorative Divider */}
            <div className="mt-8 flex justify-center">
              <span className="inline-block w-24 h-1 bg-indigo-300 rounded-full"></span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Chapter Adviser */}
      <section className="py-20 px-4 md:px-8 bg-grey-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-96 md:h-auto"
              >
                <div className="absolute inset-0 bg-violet-600 rounded-lg transform rotate-3"></div>
                <img
                  src={chapterAdviser.image}
                  alt={chapterAdviser.name}
                  className="relative h-full w-full object-cover rounded-lg transform -rotate-3 transition-transform hover:rotate-0"
                />
              </motion.div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="text-indigo-600 w-8 h-8" />
                  <h2 className="text-3xl font-bold text-indigo-700">{chapterAdviser.name}</h2>
                </div>
                <h3 className="text-xl text-indigo-500 mb-2">{chapterAdviser.position}</h3>
                <p className="text-gray-700 mb-6">{chapterAdviser.department}</p>
                <p className="text-gray-800 mb-8">{chapterAdviser.bio}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-violet-900 mb-2">Specializations</h4>
                    <ul className="space-y-2">
                      {chapterAdviser.specializations.map((spec, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <BookOpen className="text-violet-500 w-4 h-4" />
                          <span className="text-gray-700">{spec}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    {/* <h4 className="font-semibold text-violet-900 mb-2">Research Areas</h4> */}
                    <ul className="space-y-2">
                      {chapterAdviser.researchAreas.map((area, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <Building className="text-violet-500 w-4 h-4" />
                          <span className="text-gray-700">{area}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {chapterAdviser.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Award className="text-violet-500 w-5 h-5" />
                      <span className="text-gray-700">{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${chapterAdviser.email}`}
                    className="btn-primary inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </motion.a>
                  {/* <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={chapterAdviser.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </motion.a> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      {/* <div className="sticky top-16 z-10 bg-white shadow-lg py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4"> */}
            {/* Department Filter */}
            {/* <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {departments.map((department, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDepartment(department)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedDepartment === department
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                  }`}
                >
                  <span className="flex items-center">
                    <Building className={`w-4 h-4 mr-2 ${selectedDepartment === department ? 'text-white' : 'text-indigo-600'}`} />
                    {department}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div> */}

      {/* Faculty Members */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-10">
              {filteredFaculty.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
                    member.featured ? 'ring-2 ring-indigo-500 ring-offset-4' : ''
                  }`}
                >
                  <div className="relative h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-2xl"
                    />
                    {member.featured && (
                      <div className="absolute top-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full flex items-center text-sm">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">{member.name}</h3>
                    <p className="text-indigo-500 mb-1">{member.position}</p>
                    <p className="text-gray-700 mb-4">{member.department}</p>
                    {/* <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-700">
                        <BookOpen className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="text-sm">Specialization: {member.specialization}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Building className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="text-sm">Research: {member.research}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Award className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="text-sm">Publications: {member.publications}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="w-4 h-4 mr-2 text-violet-500" />
                        <span className="text-sm">Experience: {member.experience}</span>
                      </div>
                    </div> */}
                    {/* <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={`mailto:${member.email}`}
                        className="text-violet-600 hover:text-violet-700"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a> */}
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
                    {/* </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-indigo-700 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Connect with Our Faculty
            </h2>
            <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
              Interested in research opportunities or academic guidance? Reach out to our faculty members.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a href="/contact" className="btn-secondary bg-indigo-600 hover:bg-indigo-700 text-white shadow-md rounded-lg px-6 py-3">
                Get in Touch
                <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;