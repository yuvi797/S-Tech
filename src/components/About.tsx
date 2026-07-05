import React, { useState, useRef } from "react";
import { Award, Users, Target, Heart, CheckCircle, Shield, Star, Building2, Play, Pause } from "lucide-react";
import { motion, useInView } from "framer-motion";

const About: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We source only the finest materials and products to ensure lasting beauty and durability.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We work closely with you to bring your vision to life.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "We stay ahead of design trends to offer you the most contemporary and stylish solutions.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Interior design is our passion, and it shows in every project we undertake.",
      color: "from-red-500 to-red-600",
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const certifications = [
    { icon: Shield, label: "GST Registered", color: "bg-green-100 text-green-800" },
    { icon: Building2, label: "Licensed Business", color: "bg-blue-100 text-blue-800" },
    { icon: Star, label: "Certified Professionals", color: "bg-purple-100 text-purple-800" },
    { icon: CheckCircle, label: "ISO Certified", color: "bg-yellow-100 text-yellow-800" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full opacity-[0.05]"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full opacity-[0.05]"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-5 py-2 rounded-full mb-4 border border-blue-200 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">About Our Company</span>
            </motion.div>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About S-Tech Interior -{" "}
            <span className="text-blue-600">Leading Interior Designers in Patna</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Founded with a vision to transform living spaces into beautiful,
            functional environments. We are Patna's premier interior design
            company specializing in modern furniture, lighting solutions, and
            home decor.
          </motion.p>
        </motion.div>

        {/* Video & Content Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-100">
              <video
                ref={videoRef}
                src="/From Klickpin.com- 1128855462873385755-pin-id-1128855462873385755 (1).mp4"
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
                onClick={toggleVideo}
              />

              {/* Video Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />

              {/* Video Controls */}
              <motion.button
                onClick={toggleVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isVideoPlaying ? (
                  <Pause className="w-10 h-10 text-white" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" />
                )}
              </motion.button>

              {/* Video Badge */}
              <motion.div
                className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-white text-sm font-medium flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Click to {isVideoPlaying ? "Pause" : "Play"}
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our Certifications & Credentials
            </motion.h3>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.h4
                className="text-2xl font-semibold text-blue-600"
                whileHover={{ scale: 1.02 }}
              >
                Licensed & Certified
              </motion.h4>
              <p className="text-lg text-gray-700 font-medium">
                Registered Interior Design Company
              </p>
              <p className="text-gray-600 leading-relaxed">
                S-Tech Interior is a legally registered and certified interior
                design company, licensed to operate in Patna. Our certifications
                ensure that we meet all industry standards and regulatory
                requirements for professional interior design services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We hold valid business licenses, GST registration, and
                professional certifications that demonstrate our commitment to
                transparency, quality, and compliance with all applicable laws
                and regulations in the interior design industry.
              </p>
            </motion.div>

            {/* Certification Badges */}
            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`${cert.color} px-4 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 shadow-sm`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cert.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center space-x-6 mt-6 pt-6 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">500+ Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon Circle */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>

                <motion.h4
                  className="text-xl font-semibold text-gray-900 mb-3"
                  whileHover={{ scale: 1.02 }}
                >
                  {value.title}
                </motion.h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>

                {/* Animated Underline */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.color}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;