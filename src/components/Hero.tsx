import React, { useState, useEffect } from "react";
import { ArrowRight, Star, Award, Users, Package, Sparkles, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([false, false, false, false]);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Sequential image loading with delay
    const timers = [0, 300, 600, 900].map((delay, index) => {
      return setTimeout(() => {
        setVisibleImages(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, delay);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: 90,
      x: -50
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const floatingBadgeVariants = {
    initial: { y: 0, x: 0 },
    animate: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  // Video Component for Mobile (replaces the paragraph)
  const MobileVideo = () => (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-2xl w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative aspect-video bg-black">
        {!videoError ? (
          <video
            src="/From Klickpin.com- 1128855462873385755-pin-id-1128855462873385755 (1).mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            onError={() => setVideoError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
            <div className="text-center text-white p-4">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm opacity-75">Video unavailable</p>
            </div>
          </div>
        )}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Play/Pause Indicator */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  // Image Gallery for Desktop
  const ImageGallery = () => (
    <div className="grid grid-cols-2 gap-5">
      {/* Left Column */}
      <div className="space-y-5">
        <AnimatePresence mode="wait">
          {visibleImages[0] && (
            <motion.div
              key="img1"
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                <img
                  src="/image.png"
                  alt="Modern living room interior"
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="eager"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {visibleImages[1] && (
            <motion.div
              key="img2"
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                <img
                  src="/image 12.png"
                  alt="Elegant bedroom furniture"
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Column */}
      <div className="space-y-5 pt-8">
        <AnimatePresence mode="wait">
          {visibleImages[2] && (
            <motion.div
              key="img3"
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                <img
                  src="/image 11.png"
                  alt="Designer modular kitchen"
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {visibleImages[3] && (
            <motion.div
              key="img4"
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                <img
                  src="/image 8.png"
                  alt="Stylish home decor"
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full opacity-[0.06]"
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400 rounded-full opacity-[0.06]"
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.header variants={itemVariants}>
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-5 py-2.5 rounded-full mb-6 border border-blue-200 shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">#1 Interior Design in Patna</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
                Premium Interior
                <span className="text-blue-600 block mt-1">Design Products</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 block mt-2 font-medium">
                  in Patna, Bihar
                </span>
              </h1>
            </motion.header>

            {/* Conditional Rendering: Video on Mobile, Text on Desktop */}
            {isMobile ? (
              <MobileVideo />
            ) : (
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Transform your living space with S-Tech Interior's premium
                furniture, modern lighting solutions, and elegant home decor in
                Patna. Expert interior design services, quality products, and
                contemporary designs for homes and offices.
              </motion.p>
            )}

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                aria-label="Explore our furniture and decor products"
              >
                <span className="relative z-10">Explore Products</span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <ArrowRight size={20} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 relative overflow-hidden group"
                aria-label="Get free interior design consultation"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-around sm:justify-start sm:space-x-10 pt-4"
            >
              {[
                { number: "500+", label: "Satisfied Customers", icon: Users, delay: 0 },
                { number: "1000+", label: "Premium Products", icon: Package, delay: 0.1 },
                { number: "10+", label: "Years in Patna", icon: Award, delay: 0.2 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ y: -8 }}
                  className="text-center group cursor-pointer relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <div className="flex items-center justify-center mb-2 relative">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <motion.div
                    className="text-2xl sm:text-3xl font-bold text-gray-900"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative">
            <ImageGallery />

            {/* Decorative Glow Effects */}
            <motion.div
              className="absolute -top-10 -left-10 w-56 h-56 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full opacity-[0.08] blur-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-tl from-orange-400 to-orange-200 rounded-full opacity-[0.08] blur-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            />

            {/* Floating Experience Badge - Desktop Only */}
            {!isMobile && (
              <motion.div
                className="absolute bottom-1/4 -left-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4 hidden lg:block border border-white/50"
                variants={floatingBadgeVariants}
                initial="initial"
                animate="animate"
                custom={1}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-full p-2">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">10+</div>
                    <span className="text-sm text-gray-600">Years Experience</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;