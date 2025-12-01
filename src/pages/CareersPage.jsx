import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    degree: '',
    position: 'Web Designer',
    experience: '',
    details: '',
    resume: null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const positions = [
    'Web Designer',
    'Mobile App Developer',
    'Cloud Developer',
    'AIML Engineer/Data Scientist',
    'Cybersecurity Specialist',
    'Digital Marketer',
    'UI/UX Engineer'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear any previous error messages when user starts typing
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: '', message: '' })
    }
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      // TODO: Replace with actual API endpoint
      // const formDataToSend = new FormData()
      // Object.keys(formData).forEach(key => {
      //   formDataToSend.append(key, formData[key])
      // })
      // const response = await fetch('/api/careers', {
      //   method: 'POST',
      //   body: formDataToSend
      // })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Career form submitted:', formData)
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your application! We will review it and get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        degree: '',
        position: 'Web Designer',
        experience: '',
        details: '',
        resume: null
      })
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]')
      if (fileInput) fileInput.value = ''
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#1f4037] to-[#99f2c8] overflow-hidden">

        <div className="section-container relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold rounded-full mb-6">
              Join Our Team
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Career Opportunities
            </h1>

            <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto drop-shadow">
              Join our dynamic team and shape the future of innovation – apply now to kickstart your career with us!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white text-sm font-semibold rounded-full mb-6">
              Application Form
            </div>
            
            <h2 className="text-display font-display text-dark-900 mb-6">
              Apply for a Position
            </h2>
            
            <p className="text-lg text-dark-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </motion.div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#99f2c8] focus:border-transparent transition-all"
                    placeholder="9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#99f2c8] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Degree & Experience */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Degree/Qualification *</label>
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#99f2c8] focus:border-transparent transition-all"
                    placeholder="B.Tech Computer Science"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Years of Experience *</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#99f2c8] focus:border-transparent transition-all"
                    placeholder="3"
                  />
                </div>
              </div>

              {/* Position Selection */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Apply For Which Post? *</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {positions.map((position) => (
                    <label
                      key={position}
                        className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.position === position
                          ? 'border-[#99f2c8] bg-gradient-to-r from-[#1f4037]/10 to-[#99f2c8]/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="position"
                        value={position}
                        checked={formData.position === position}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#1f4037] focus:ring-[#99f2c8]"
                      />
                      <span className="ml-3 text-sm font-medium text-dark-700">{position}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other Details */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Other Details *</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your skills, experience, and why you'd be a great fit..."
                ></textarea>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Upload Your Resume *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary-500 transition-all">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".doc,.docx,.pdf"
                    required
                    className="w-full"
                  />
                  <p className="text-sm text-dark-600 mt-2">Accepted formats: PDF, DOC, DOCX</p>
                </div>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white font-semibold rounded-xl hover:shadow-xl transition-all shadow-lg ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CareersPage
