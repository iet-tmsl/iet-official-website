import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Star } from 'lucide-react';


const upcomingEvents = [
  {
    title: "Industrial requirements of Machine Learning insights and loT",
    date: "January 27, 2024 to January 31, 2024",
    // time: "10:00 AM - 4:00 PM",
    location: "Techno Main Saltlake",
    // image: "assets/Upcoming events/cropped-Machine Learning insights and loT.jpg",
    description: "Hands-on workshop on IoT and Machine Learning fundamentals.",
    // featured: true
  }
  // {
  //   title: "Tech Innovation Summit",
  //   date: "April 5, 2024",
  //   time: "11:00 AM - 5:00 PM",
  //   location: "Conference Hall, TMSL",
  //   image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80",
  //   description: "Annual technical summit featuring keynote speakers from leading tech companies.",
  //   featured: false
  // }
];

const pastEvents = [
  {
    title: "Industry Expert's Talk",
    date: "May 11, 2024",
    location: "Techno Main SaltLake",
    image: "assets/tech talk.jpg",
    description: "Interactive session with industry experts on emerging technologies."
  },
  {
    title: "Eccentron 6.0",
    date: "April 26, 2024 to April 27, 2024",
    location: "Techno Main Saltlake",
    image: "assets/eccentron 2024.png",
    description: "A technical event organized by IET TMSL and EE department collaboratively."
  },
  {
    title: "WAVICLE 5.0",
    date: "May 4, 2024 to May 5, 2024",
    location: "Techno Main Saltlake",
    image: "assets/wavicle 5.png",
    description: "An event was organized by the Department of EIE & ECS, TMSL, in association with the IET (UK) Kolkata Local Network."
  },
  {
    title: "Tech AI Hackathon",
    date: "June 29, 2024",
    location: "Techno Main Saltlake",
    image: "assets/tech ai.png",
    description: "An event was jointly organized by the Department of Computer Science & Engineering (AIML), Computer Science & Engineering (DS), and IET TMSL on campus student chapter."
  },
  {
    title: "Industrial Automation Training, MSME(CTTC) Kolkata",
    date: "July 8, 2024 to July 25, 2024",
    location: "MSME Tool Room, Kolkata",
    image: "assets/MSME tool room.png",
    description: "Traiining on industry based automatic process specially Hybrid Control or Physical-Logical control system in the automation industries."
  },
  {
    title: "Industrial Visit at Southern Generating Station CESC",
    date: "March 14, 2024",
    location: "Garden Reach, Kolkata",
    image: "assets/Southern Generating Station CESC.png",
    description: "During this one-day industrial visit, we gained invaluable insights into the workings of the industry, learning how they manage and control complex systems."
  },
  {
    title: "Student Poster Presentation Competition",
    date: "January 13, 2024",
    location: "Techno Main Saltlake",
    image: "assets/Poster competition.png",
    description: "Techno Main Salt Lake, with IET (UK) Kolkata, hosted a Student Poster Competition with 41 participants from various departments and institutes, including TMSL, MCKV, HIT, DIT, and GNIT."
  },
  {
    title: "HANDS ON WORKSHOP ON IoT with ML ",
    date: "April 20, 2024 to April 28, 2024",
    location: "Techno Main Saltlake",
    image: "assets/AI-ML workshop.jpg",
    description: "The IET Kolkata Local Network organized an 8-day Machine Learning workshop for 30 EIE and ECE students, covering ML fundamentals, algorithms, and hands-on projects. The event emphasized practical learning and interdisciplinary collaboration."
  },
  {
    title: "EIE Industrial Visit: Industrial Instrumentation",
    date: "November 7, 2024",
    location: "Pubali Garden, Narendrapur",
    image: "assets/pubali garden.jpg",
    description: "Explored the fabrication of thermocouples and RTDs, essential for industrial temperature measurement. Through hands-on exposure, students understood industry practices in temperature control and measurement."
  }
];

const EventCard = ({ event, isUpcoming = false }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover-card ${
        event.featured ? 'ring-2 ring-indigo-500 ring-offset-4' : ''
      }`}
    >
      {event.image && (
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {event.featured && (
            <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full flex items-center text-sm">
              <Star className="w-4 h-4 mr-1" />
              Featured
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 text-justify">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
            <span>{event.date}</span>
          </div>
          {/* {isUpcoming && (
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-2 text-indigo-500" />
              <span>{event.time}</span>
            </div>
          )} */}
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
            <span>{event.location}</span>
          </div>
        </div>
        {/* {isUpcoming && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full btn-primary group"
          >
            Register Now
            <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )} */}
      </div>
    </motion.div>
  );
};




const Events = () => {
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

  return (
    <div className="pt-16">
      {/* Hero Section
      <motion.div 
        style={{ opacity, scale }}
        className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animated-gradient-text">
              Events & Activities
            </h1>
            <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
              Join us for exciting technical events and learning opportunities
            </p>
          </motion.div>
        </div>
      </motion.div> */}

      {/* Upcoming Events */}
      <section className="py-4 px-4 md:px-8 bg-grey-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold gradient-text mb-4">Upcoming Events</h2>
              <p className="text-gray-600 max-w-1xl mx-auto">
                Don't miss out on our upcoming events. Register now to secure your spot!
              </p>
            </div>
            <div className="max-w-7xl mx-auto flex justify-center items-center">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} isUpcoming={true} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 md:px-8 bg-grey-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Past Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take a look at our successfully conducted events and activities
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold animated-gradient-text mb-6">
              Stay Updated
            </h2>
            <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming events and activities
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="btn-secondary group">
                Subscribe Now
                <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;