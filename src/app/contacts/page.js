"use client";

import React, { useState } from "react";
import { Star, Camera, MapPin, Phone, Mail, Clock, CheckCircle, Send, Sparkles, Heart, Palette } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Roboto_Slab, Headland_One } from "next/font/google";




const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-slab",
});

const headlandOne = Headland_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-headland-one",
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
    error: "", // Added for error handling
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
      error: "", // Clear error on input change
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormData({ ...formData, error: "" });

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "", projectType: "", error: "" });
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      setFormData({ ...formData, error: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Digital Art Commission",
    "Portrait Illustration",
    "Animation Project",
    "Mural Design",
    "Brand Identity",
    "Art Collaboration",
    "Custom Creation",
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Remmy captured our wedding perfectly! Every moment was beautifully documented with such artistic flair.",
      service: "Wedding Photography",
      image: "👰",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      shadowColor: "shadow-pink-500/25",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Professional headshots that exceeded expectations. The artistic direction was phenomenal!",
      service: "Portrait Session",
      image: "👨‍💼",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      shadowColor: "shadow-blue-500/25",
    },
    {
      name: "Emma Wilson",
      rating: 5,
      comment: "Amazing family photos! The artistic composition made every shot a masterpiece.",
      service: "Family Photography",
      image: "👨‍👩‍👧‍👦",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      shadowColor: "shadow-emerald-500/25",
    },
    {
      name: "David Rodriguez",
      rating: 5,
      comment: "Corporate event photography was flawless. Artistic vision meets professional execution!",
      service: "Event Photography",
      image: "🏢",
      gradient: "from-amber-500 via-orange-500 to-red-600",
      shadowColor: "shadow-amber-500/25",
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/20 relative overflow-hidden ${robotoSlab.className} ${headlandOne.className}`}>
      {/* Complex Artistic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[8%] w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-emerald-400/20 via-cyan-400/15 to-purple-400/10 rounded-[60px] rotate-12 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-[12%] w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-tl from-pink-400/15 via-orange-400/20 to-yellow-400/10 rounded-[80px] -rotate-12 blur-3xl"></div>
        <div className="absolute top-1/2 right-[3%] w-40 sm:w-56 md:w-72 h-48 sm:h-64 md:h-96 bg-gradient-to-br from-indigo-400/15 via-purple-400/20 to-pink-400/10 rounded-[50px] rotate-45 blur-2xl"></div>
        <div className="absolute bottom-20 left-[25%] w-40 sm:w-48 md:w-64 h-32 sm:h-40 md:h-48 bg-gradient-to-r from-violet-400/10 via-fuchsia-400/15 to-rose-400/10 rounded-full blur-3xl"></div>
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,300 C300,200 600,400 900,250 C1050,175 1150,225 1200,200 L1200,0 L0,0 Z"
            fill="url(#contactWave1)"
            className="animate-pulse"
          />
          <path
            d="M0,500 C200,450 400,550 600,480 C800,410 1000,520 1200,450 L1200,0 L0,0 Z"
            fill="url(#contactWave2)"
            className="animate-pulse"
            style={{ animationDelay: '3s' }}
          />
          <defs>
            <linearGradient id="contactWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="contactWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-ping opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                background: `linear-gradient(45deg, ${
                  ['#10B981', '#06B6D4', '#8B5CF6', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 5)]
                }, ${
                  ['#059669', '#0891B2', '#7C3AED', '#DB2777', '#D97706'][Math.floor(Math.random() * 5)]
                })`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <Header />

      <main className="flex-grow relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 mt-16 sm:mt-20">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
          <div className="absolute -inset-10 sm:-inset-16 md:-inset-20 bg-gradient-to-r from-emerald-400/10 via-cyan-400/15 through-purple-400/10 via-pink-400/15 to-orange-400/10 blur-3xl rounded-full"></div>
          <div className="relative z-10">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 ${headlandOne.className}`}>
              <span className="bg-gradient-to-r from-emerald-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent block">
                Let us Create
              </span>
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-6xl block mt-2">
                Something Magical
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 my-8 sm:my-12">
              <div className="flex items-center space-x-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
              </div>
              <div className="relative">
                <div className="w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rotate-45 opacity-80"></div>
                <div className="absolute inset-0 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-cyan-400 via-emerald-400 to-teal-500 rotate-45 animate-spin opacity-60" style={{ animationDuration: '10s' }}></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"></div>
                <div className="w-1 sm:w-2 h-1 sm:h-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full animate-bounce"></div>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to transform your vision into
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent font-medium"> breathtaking digital art</span>?
              Let us collaborate and create something that tells your unique story through
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium"> boundless creativity</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative group">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-emerald-400/20 via-cyan-400/15 through-purple-400/10 via-pink-400/15 to-orange-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-white/60 to-emerald-50/80 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-emerald-200/50 hover:border-emerald-300/70 p-6 sm:p-8 md:p-10 transition-all duration-700">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="relative mr-4">
                    <Send className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-600 relative z-10" />
                    <div className="absolute inset-0 bg-emerald-400/30 blur-lg rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold">
                      <span className={`bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent ${headlandOne.className}`}>
                        Send Me a Message
                      </span>
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Bring your vision to life</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="group relative">
                      <label htmlFor="name" className="block text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          placeholder="Your beautiful name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-2xl opacity-0 focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="group relative">
                      <label htmlFor="email" className="block text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl opacity-0 focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group relative">
                    <label htmlFor="projectType" className="block text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl bg-white/80 text-gray-800 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-500"
                      >
                        <option value="">Choose your creative journey</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-2xl opacity-0 focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  <div className="group relative">
                    <label htmlFor="message" className="block text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-gray-700 group-focus-within:text-emerald-600 transition-colors">
                      Your Vision *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows="5 sm:rows-6"
                        placeholder="Tell me about your project, your dreams, your vision... Let's bring it to life together! ✨"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-500 resize-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-orange-400/10 rounded-2xl opacity-0 focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="group relative w-full py-4 sm:py-5 font-bold text-base sm:text-lg text-white rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-purple-600 disabled:opacity-50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 via-orange-400/20 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute top-0 left-0 w-0 group-hover:w-full h-full bg-gradient-to-r from-white/20 to-transparent transition-all duration-1000"></div>
                    <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 sm:w-6 h-5 sm:h-6 border-2 sm:border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Creating Magic...</span>
                          <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 animate-pulse" />
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                          <span>Message Sent!</span>
                          <Heart className="w-4 sm:w-5 h-4 sm:h-5 animate-bounce" />
                        </>
                      ) : (
                        <>
                          <Send className="w-5 sm:w-6 h-5 sm:h-6" />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </button>
                  {formData.error && (
                    <p className="text-center text-red-600 text-sm sm:text-base mt-4 animate-pulse">
                      {formData.error}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-purple-400/30 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-emerald-900 to-cyan-900 rounded-3xl shadow-2xl p-6 sm:p-8 text-white border border-emerald-400/20 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8 sm:mb-10">
                    <div className="relative mr-4">
                      <Camera className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 relative z-10" />
                      <div className="absolute inset-0 bg-emerald-400/40 blur-lg rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold">
                        <span className={`bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent ${headlandOne.className}`}>
                          Get In Touch
                        </span>
                      </h2>
                      <p className="text-gray-300 text-xs sm:text-sm mt-1">Let us start our creative journey</p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8 sm:mb-10">
                    {[
                      { icon: Mail, label: "Email", value: "aderoremmy2000@gmail.com", color: "text-blue-400", bg: "from-blue-500/20 to-indigo-500/20" },
                      { icon: Phone, label: "WhatsApp", value: "+256 752 944 300", color: "text-green-400", bg: "from-green-500/20 to-emerald-500/20" },
                      { icon: MapPin, label: "Location", value: "Kampala, Uganda", color: "text-red-400", bg: "from-red-500/20 to-pink-500/20" },
                      { icon: Camera, label: "Instagram", value: "@aderoremmy", color: "text-pink-400", bg: "from-pink-500/20 to-purple-500/20" },
                      { icon: Clock, label: "Response", value: "Within 24 hours", color: "text-yellow-400", bg: "from-yellow-500/20 to-orange-500/20" },
                    ].map(({ icon: Icon, label, value, color, bg }, index) => (
                      <div key={label} className="group relative">
                        <div className="flex items-center bg-white/5 hover:bg-white/10 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 transition-all duration-500 border border-white/10 hover:border-emerald-400/40 transform hover:scale-105">
                          <div className="relative mr-4 sm:mr-5">
                            <Icon className={`w-5 sm:w-6 h-5 sm:h-6 ${color} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                            <div className={`absolute inset-0 bg-gradient-to-r ${bg} blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-gray-200 mb-1">{label}</p>
                            <p className="text-gray-300 text-xs sm:text-sm">{value}</p>
                          </div>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="w-1 sm:w-2 h-1 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-cyan-400/5 to-purple-400/5 animate-pulse"></div>
                    <div className="relative z-10">
                      <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 flex items-center">
                        <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400 mr-3" />
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                          Availability
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 gap-4 text-xs sm:text-sm">
                        {[
                          { time: "Mon-Fri: 9AM-6PM", status: "active" },
                          { time: "Saturday: 10AM-4PM", status: "limited" },
                          { time: "Sunday: By appointment", status: "appointment" },
                          { time: "Rush Projects: 24/7", status: "urgent" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-2 sm:p-3 bg-white/5 rounded-xl">
                            <div className="flex items-center">
                              <div
                                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full mr-2 sm:mr-3 ${
                                  item.status === 'active'
                                    ? 'bg-green-400 animate-pulse'
                                    : item.status === 'limited'
                                    ? 'bg-yellow-400 animate-pulse'
                                    : item.status === 'appointment'
                                    ? 'bg-blue-400'
                                    : 'bg-red-400 animate-pulse'
                                }`}
                              ></div>
                              <span className="text-gray-200">{item.time}</span>
                            </div>
                            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Reviews Section */}
        <section className="relative">
          <div className="text-center mb-12 sm:mb-16 relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-purple-400/10 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <h2 className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6c ${headlandOne.className}`}>
                <span className="bg-gradient-to-r from-emerald-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  Client Love
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Stories
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Every collaboration is a journey of creativity and trust. Here is what my clients say about our
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent font-medium"> artistic adventures</span> together.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`group relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-xl border-2 border-gray-200/50 hover:border-emerald-300/50 p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 ${review.shadowColor} hover:shadow-2xl overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl blur-lg"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className={`relative w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${review.gradient} text-white text-lg sm:text-2xl mr-4 sm:mr-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {review.image}
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base sm:text-lg">{review.name}</h4>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-yellow-500 animate-pulse" style={{ animationDelay: `${idx * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">
                    {review.comment}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${review.gradient} bg-clip-text text-transparent px-3 sm:px-4 py-1 sm:py-2 bg-white/50 rounded-full border border-gray-200`}>
                      {review.service}
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-1 sm:w-2 h-1 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div className="w-1 sm:w-2 h-1 sm:h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-1 sm:w-2 h-1 sm:h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 md:mt-20 relative">
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 through-purple-400/15 via-pink-400/20 to-orange-400/15 blur-2xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-emerald-200/50 text-center overflow-hidden">
              <div className="absolute top-6 sm:top-8 left-6 sm:left-8 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="relative z-10">
                <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${headlandOne.className}`}>
                  <span className="bg-gradient-to-r from-emerald-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                    Ready to Create
                  </span>{" "}
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Magic Together?
                  </span>
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 max-w-3xl mx-auto font-light">
                  Join the growing family of satisfied clients and let us bring your
                  <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent font-medium"> wildest creative dreams</span> to life!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                  <button className="group px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <span className="relative z-10 flex items-center space-x-2">
                      <Palette className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span>View My Portfolio</span>
                    </span>
                  </button>
                  <button className="group px-8 sm:px-10 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border-2 sm:border-3 border-emerald-300 hover:border-emerald-400 text-emerald-700 hover:text-emerald-800 font-bold rounded-2xl hover:bg-emerald-50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <span className="relative z-10 flex items-center space-x-2">
                      <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span>Schedule a Call</span>
                    </span>
                  </button>
                </div>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-blue-500" />
                    <span>Quick Response</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-yellow-500" />
                    <span>100% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;