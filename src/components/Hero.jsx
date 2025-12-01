import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1))
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radio Inputs for Slider Control */}
      <input 
        type="radio" 
        name="hero-slider" 
        id="slide1" 
        className="hidden" 
        checked={currentSlide === 1}
        onChange={() => setCurrentSlide(1)}
      />
      <input 
        type="radio" 
        name="hero-slider" 
        id="slide2" 
        className="hidden"
        checked={currentSlide === 2}
        onChange={() => setCurrentSlide(2)}
      />
      <input 
        type="radio" 
        name="hero-slider" 
        id="slide3" 
        className="hidden"
        checked={currentSlide === 3}
        onChange={() => setCurrentSlide(3)}
      />

      {/* Slides Container */}
      <div className="slider-container w-full h-full absolute inset-0">
        {/* Slide 1 - Innovate, Automate & Transform */}
        <div className={`frame frame_1 absolute inset-0 transition-opacity duration-700 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1f4037] to-[#99f2c8]">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-24 pb-24 sm:pb-32 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8"
                >
                  <span className="px-1.5 sm:px-2 py-0.5 bg-white text-dark-900 rounded-full text-[10px] sm:text-xs font-bold">New</span>
                  <span className="hidden sm:inline">Innovation Partner</span>
                  <span className="sm:hidden">Innovation</span>
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2 drop-shadow-lg">
                  Innovate, <span className="relative inline-block">
                    <span className="relative z-10">Automate</span>
                    <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 lg:h-4 bg-[#99f2c8]/60 -z-0"></span>
                  </span> & Transform
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow">
                  Your Development Partner in AIML/Gen AI, LLM, Agentic AI, Data Science, NLP, Cloud and Big Data, DevOps, MLOps, and More. Contact Us Today!
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-white text-dark-900 text-base sm:text-lg font-semibold rounded-full hover:bg-gray-100 transition-all shadow-xl cursor-pointer"
                >
                  Contact Now
                  <HiArrowRight className="text-lg sm:text-2xl" />
                </motion.button>

                {/* Stats - Visible Below Button */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-8 sm:mt-10 mb-12 sm:mb-16 text-sm sm:text-base text-white px-4">
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-2xl sm:text-3xl font-bold text-white no-underline">203+</span>
                    <span className="text-white font-medium no-underline">Projects</span>
                  </div>
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-2xl sm:text-3xl font-bold text-white no-underline">90+</span>
                    <span className="text-white font-medium no-underline">Happy Clients</span>
                  </div>
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-2xl sm:text-3xl font-bold text-white no-underline">4+</span>
                    <span className="text-white font-medium no-underline">Years</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 2 - Data & Analytics */}
        <div className={`frame frame_2 absolute inset-0 transition-opacity duration-700 ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-24 pb-24 sm:pb-32 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8"
                >
                  <span className="px-1.5 sm:px-2 py-0.5 bg-white text-dark-900 rounded-full text-[10px] sm:text-xs font-bold">Data</span>
                  <span className="hidden sm:inline">AI Quantalytics</span>
                  <span className="sm:hidden">Analytics</span>
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2 drop-shadow-lg">
                  Transform Data Into <span className="relative inline-block">
                    <span className="relative z-10">Intelligence</span>
                    <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 lg:h-4 bg-blue-400/60 -z-0"></span>
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow">
                  Unlock the power of your data with AI Quantalytics. Advanced analytics, machine learning, and business intelligence solutions that drive real results.
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector('#services')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-white text-dark-900 text-base sm:text-lg font-semibold rounded-full hover:bg-gray-100 transition-all shadow-xl cursor-pointer"
                >
                  Explore Solutions
                  <HiArrowRight className="text-lg sm:text-2xl" />
                </motion.button>

                {/* Data Stats */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-8 sm:mt-10 mb-12 sm:mb-16 text-sm sm:text-base text-white px-4">
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-2xl sm:text-3xl font-bold text-white no-underline">10TB+</span>
                    <span className="text-white font-medium no-underline">Data Processed</span>
                  </div>
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-2xl sm:text-3xl font-bold text-white no-underline">70+</span>
                    <span className="text-white font-medium no-underline">AI Models</span>
                  </div>
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-2xl sm:text-3xl font-bold text-white no-underline">92.7%</span>
                    <span className="text-white font-medium no-underline">Accuracy</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 3 - Internship Opportunities */}
        <div className={`frame frame_3 absolute inset-0 transition-opacity duration-700 ${currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-24 pb-24 sm:pb-32 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8"
                >
                  <span className="px-1.5 sm:px-2 py-0.5 bg-white text-dark-900 rounded-full text-[10px] sm:text-xs font-bold">🚀 Hiring</span>
                  <span className="hidden sm:inline">Internship Opportunities</span>
                  <span className="sm:hidden">Join Us</span>
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2 drop-shadow-lg">
                  Looking for Industrial <span className="relative inline-block">
                    <span className="relative z-10">Internships</span>
                    <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 lg:h-4 bg-yellow-400/60 -z-0"></span>
                  </span>?
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow">
                  Join AI Quantalytics and gain hands-on experience with cutting-edge technologies. Work on real projects, learn from industry experts, and kickstart your career!
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.location.href = '/careers'
                    }}
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-white text-dark-900 text-base sm:text-lg font-semibold rounded-full hover:bg-gray-100 transition-all shadow-xl cursor-pointer"
                  >
                    Apply Now
                    <HiArrowRight className="text-lg sm:text-2xl" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector('#contact')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    className="relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-base font-semibold rounded-full hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <span className="relative inline-block">
                      Learn More
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"></span>
                    </span>
                  </motion.button>
                </div>

                {/* Internship Benefits */}
                <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 mt-4 mb-12 sm:mb-16 text-base sm:text-lg text-white px-4">
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-2xl sm:text-3xl font-bold text-white no-underline">1000+</span>
                    <span className="text-white font-medium no-underline">Problem Statements</span>
                  </div>
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-xl sm:text-2xl font-bold text-white no-underline">✓</span>
                    <span className="text-white font-medium no-underline">Industry Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-xl sm:text-2xl font-bold text-white no-underline">✓</span>
                    <span className="text-white font-medium no-underline">Onsite Internship</span>
                  </div>
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-xl sm:text-2xl font-bold text-white no-underline">✓</span>
                    <span className="text-white font-medium no-underline">Certificate</span>
                  </div>
                  <div className="flex items-center gap-2 no-underline">
                    <span className="text-xl sm:text-2xl font-bold text-white no-underline">✓</span>
                    <span className="text-white font-medium no-underline">Placement Assistance</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Navigation - Modern Progress Bars */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 px-4">
        <button 
          onClick={() => setCurrentSlide(1)}
          className={`h-1 rounded-full cursor-pointer transition-all duration-500 no-underline ${
            currentSlide === 1 ? 'bg-white w-16 sm:w-20' : 'bg-white/40 w-8 sm:w-12 hover:bg-white/60'
          }`}
          aria-label="Go to slide 1"
        />
        <button 
          onClick={() => setCurrentSlide(2)}
          className={`h-1 rounded-full cursor-pointer transition-all duration-500 no-underline ${
            currentSlide === 2 ? 'bg-white w-16 sm:w-20' : 'bg-white/40 w-8 sm:w-12 hover:bg-white/60'
          }`}
          aria-label="Go to slide 2"
        />
        <button 
          onClick={() => setCurrentSlide(3)}
          className={`h-1 rounded-full cursor-pointer transition-all duration-500 no-underline ${
            currentSlide === 3 ? 'bg-white w-16 sm:w-20' : 'bg-white/40 w-8 sm:w-12 hover:bg-white/60'
          }`}
          aria-label="Go to slide 3"
        />
      </div>

      {/* Left/Right Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1)}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1)}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}

export default Hero
