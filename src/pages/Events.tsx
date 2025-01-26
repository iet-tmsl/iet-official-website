import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Star } from 'lucide-react';

const upcomingEvents = [
  {
    title: "AI/ML Workshop 2024",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium, TMSL",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    description: "Hands-on workshop on Artificial Intelligence and Machine Learning fundamentals.",
    featured: true
  },
  {
    title: "Tech Innovation Summit",
    date: "April 5, 2024",
    time: "11:00 AM - 5:00 PM",
    location: "Conference Hall, TMSL",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80",
    description: "Annual technical summit featuring keynote speakers from leading tech companies.",
    featured: false
  }
];

const pastEvents = [
  {
    title: "Industrial Training cum Internship, Rockwell Automation",
    date: "January 1, 2024 to January 30,2024",
    location: "Noida, Uttar Pradesh",
    image: "assets/rockwell.png",
    description: "Hands on trainning on PLC and SCADA."
  },
  {
    title: "Technical Paper Presentation",
    date: "July 25, 2024 to July 27, 2024",
    location: "Techno International, Newtown",
    image: "assets/icdai.jpg",
    description: "Research paper presentation competition for undergraduate students."
  },
  {
    title: "Industry Expert Talk",
    date: "May 11, 2024",
    location: "Techno Main SaltLake",
    image: "assets/tech talk.jpg",
    description: "Interactive session with industry experts on emerging technologies."
  },
  {
    title: "IET Karamveer EXPO-2024",
    date: "May 4, 2024 to May 5, 2024",
    location: "Nasik, Maharastra",
    image: "assets/nasik_karamveer.png",
    description: "21st National Level Working Model Competition using emerging technologies."
  },
  {
    title: "Eccentron 2024",
    date: "April 26, 2024 to April 27, 2024",
    location: "Techno Main Saltlake",
    image: "assets/eccentron 2024.png",
    description: ""
  },
  {
    title: "WAVICLE 5.0",
    date: "May 4, 2024 to May 5, 2024",
    location: "Techno Main Saltlake",
    image: "assets/wavicle 5.png",
    description: "21st National Level Working Model Competition using emerging technologies."
  },
  {
    title: "Tech-Intellina 2024",
    date: "June 29, 2024",
    location: "Rajabazar Science College",
    image: "assets/tech intellina.png",
    description: "21st National Level Working Model Competition using emerging technologies."
  },
  {
    title: "Tech AI Hackathon",
    date: "June 29, 2024",
    location: "Techno Main Saltlake",
    image: "assets/tech ai.png",
    description: "21st National Level Working Model Competition using emerging technologies."
  },
  {
    title: "Industrial Automation Training",
    date: "July 8, 2024 to July 25, 2024",
    location: "MSME Tool Room, Kolkata",
    image: "assets/nasik_karamveer.png",
    description: "21st National Level Working Model Competition using emerging technologies."
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
      <div className="p-6">
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
            <span>{event.date}</span>
          </div>
          {isUpcoming && (
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-2 text-indigo-500" />
              <span>{event.time}</span>
            </div>
          )}
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
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">Upcoming Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't miss out on our upcoming events. Register now to secure your spot!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} isUpcoming={true} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 md:px-8 bg-indigo-50">
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