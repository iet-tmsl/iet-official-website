import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Camera, Calendar, MapPin, Search, Filter, Download, X, ChevronLeft, ChevronRight, ZoomIn, Share } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    title: "Technical Workshop 2023",
    category: "Workshops",
    date: "November 15, 2023",
    location: "Main Auditorium",
    description: "A hands-on workshop on emerging technologies and their applications.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
        caption: "Opening ceremony of the workshop"
      },
      {
        url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80",
        caption: "Hands-on session with participants"
      },
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
        caption: "Group discussion and problem-solving"
      }
    ]
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80",
    title: "Industrial Visit",
    category: "Industry Connect",
    date: "October 20, 2023",
    location: "Tech Park",
    description: "Students visiting leading tech companies to gain industry exposure.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80",
        caption: "Company presentation session"
      },
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
        caption: "Facility tour"
      },
      {
        url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80",
        caption: "Interactive Q&A session"
      }
    ]
  },
  // ... (previous gallery items with added photos array)
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const filteredImages = galleryImages
    .filter(img => selectedCategory === 'All' || img.category === selectedCategory)
    .filter(img => 
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setSelectedPhotoIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setSelectedPhotoIndex(0);
    setIsLightboxOpen(false);
  };

  const handlePrevPhoto = () => {
    setSelectedPhotoIndex((prev) => 
      prev === 0 ? selectedEvent.photos.length - 1 : prev - 1
    );
  };

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prev) => 
      prev === selectedEvent.photos.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyPress = (e) => {
    if (selectedEvent) {
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'Escape') handleCloseModal();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedEvent]);

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
            <Camera className="w-16 h-16 mx-auto mb-6 text-violet-300" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animated-gradient-text">
              Archives
            </h1>
            <p className="text-lg text-violet-200 max-w-3xl mx-auto text-center">
              Capturing moments of innovation, learning, and growth at IET TMSL
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Search and Filter Section */}
      {/* <div className="sticky top-16 z-10 bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4"> */}
            {/* Search Bar */}
            {/* <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-full md:w-96"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </motion.div> */}

            {/* Category Filter */}
            {/* <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-violet-600 text-white'
                      : 'bg-violet-100 text-violet-600 hover:bg-violet-200'
                  }`}
                >
                  <span className="flex items-center">
                    <Filter className={`w-4 h-4 mr-2 ${selectedCategory === category ? 'text-white' : 'text-violet-600'}`} />
                    {category}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div> */}

      {/* Gallery Grid */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => handleEventClick(image)}
                className="group relative overflow-hidden rounded-lg shadow-md hover-card cursor-pointer p-2"
              >
                <div className="relative h-48">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-violet-200">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{image.date}</span>
                        </div>
                        <div className="flex items-center text-violet-200">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{image.location}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg flex items-center space-x-2 hover:bg-white/30 transition-colors"
                      >
                        <ZoomIn className="w-4 h-4" />
                        <span>View Gallery</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-0.5 bg-violet-600/90 text-white text-xs rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={handleCloseModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-violet-900">{selectedEvent.title}</h3>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-gray-600 mt-2">{selectedEvent.description}</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="relative">
                <div className="aspect-video bg-black">
                  <img
                    src={selectedEvent.photos[selectedPhotoIndex].url}
                    alt={selectedEvent.photos[selectedPhotoIndex].caption}
                    className="w-full h-full object-contain"
                    onClick={() => setIsLightboxOpen(true)}
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption and Controls */}
              <div className="p-6 border-t border-gray-200">
                <p className="text-gray-700 mb-4">
                  {selectedEvent.photos[selectedPhotoIndex].caption}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {selectedPhotoIndex + 1} of {selectedEvent.photos.length}
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-violet-100 text-violet-600 rounded-lg flex items-center space-x-2 hover:bg-violet-200 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-violet-100 text-violet-600 rounded-lg flex items-center space-x-2 hover:bg-violet-200 transition-colors"
                    >
                      <Share className="w-4 h-4" />
                      <span>Share</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedEvent.photos[selectedPhotoIndex].url}
              alt={selectedEvent.photos[selectedPhotoIndex].caption}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
              className="absolute top-4 right-4 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;