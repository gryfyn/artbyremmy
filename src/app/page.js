"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Sparkles, Palette, Zap, Heart, Star, ArrowDown, Play, Eye } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const [hideFirstSection, setHideFirstSection] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setHideFirstSection(true);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const testimonials = [
    {
      quote: "Art speaks louder than words — and Remmy's work proves it with every stroke.",
      author: "Sarah M.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      quote: "Remmy captured the essence of my vision far better than I ever imagined. His attention to detail is extraordinary.",
      author: "Michael C.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      quote: "The pencil work was breathtaking. Every line felt alive — it looked like it could jump off the page.",
      author: "Emma W.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      quote: "I've never connected emotionally to a digital portrait before, but Remmy made it deeply personal and memorable.",
      author: "David R.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      quote: "From concept to completion, the process was smooth, professional, and the final piece absolutely blew me away.",
      author: "Lisa K.",
      gradient: "from-cyan-500 to-blue-600"
    },
  ];

  const portfolioItems = [
    { 
      id: 1, 
      title: "Digital Portrait", 
      category: "Digital Art", 
      image: "/7.jpeg",
      gradient: "from-emerald-500 to-cyan-500",
      description: "Hyperrealistic digital painting"
    },
    { 
      id: 2, 
      title: "Pencil Sketch", 
      category: "Traditional", 
      image: "/4.jpeg",
      gradient: "from-gray-600 to-gray-800",
      description: "Classic pencil artistry"
    },
    { 
      id: 3, 
      title: "Mural Work", 
      category: "Street Art", 
      image: "/mural-work.PNG",
      gradient: "from-orange-500 to-red-600",
      description: "Large-scale wall art"
    },
    { 
      id: 4, 
      title: "Character Design", 
      category: "Illustration", 
      image: "/character-design.PNG",
      gradient: "from-purple-500 to-pink-600",
      description: "Creative character concepts"
    },
    { 
      id: 5, 
      title: "Street Art", 
      category: "Urban Art", 
      image: "/streetart.PNG",
      gradient: "from-yellow-500 to-orange-600",
      description: "Urban artistic expression"
    },
    { 
      id: 6, 
      title: "Album Covers", 
      category: "Commercial", 
      image: "/album-cover.PNG",
      gradient: "from-indigo-500 to-purple-600",
      description: "Music industry artwork"
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#F1E9DC] via-amber-50 to-orange-50 text-[#3A4D37] overflow-hidden" style={{marginTop: '30px'}}>
      {/* Mouse Follow Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-8 h-8 bg-gradient-to-r from-[#3A4D37]/20 to-emerald-400/30 rounded-full blur-lg transition-all duration-300"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />

      {/* Complex Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-[#3A4D37]/15 via-emerald-400/10 to-teal-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-[15%] w-80 h-80 bg-gradient-to-tl from-[#3A4D37]/10 via-amber-400/15 to-orange-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-[5%] w-72 h-96 bg-gradient-to-br from-emerald-500/8 via-[#3A4D37]/10 to-teal-500/8 rounded-[50px] rotate-45 blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Art Elements */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `linear-gradient(45deg, ${
                  ['#3A4D37', '#10B981', '#059669', '#F59E0B', '#D97706'][Math.floor(Math.random() * 5)]
                }, ${
                  ['#2D3748', '#047857', '#065F46', '#B45309', '#92400E'][Math.floor(Math.random() * 5)]
                })`,
                borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      {!hideFirstSection && (
        <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden transition-all duration-1000">
          {/* Background Art */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F1E9DC]/80 via-amber-50/60 to-orange-50/80"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
            {/* Left Content */}
            <div className="flex-1 space-y-6 text-left">
              {/* Floating Icons */}
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-6 h-6 text-[#3A4D37] animate-pulse" />
                <Palette className="w-6 h-6 text-emerald-600 animate-bounce" />
                <Heart className="w-6 h-6 text-orange-500 animate-pulse" style={{animationDelay: '1s'}} />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-[#3A4D37] to-emerald-700 bg-clip-text text-transparent mb-3">
                  Welcome to
                </span>
                <span className="block bg-gradient-to-r from-emerald-600 to-[#3A4D37] bg-clip-text text-transparent">
                  Remmy Art
                </span>
                <span className="block bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent text-3xl md:text-4xl mt-2">
                  Universe
                </span>
              </h1>

              <div className="relative">
                <p className="text-xl md:text-2xl font-light text-[#3A4D37]/80 italic mb-4">
                  Where imagination meets reality
                </p>
                
                {/* Decorative Line */}
                <div className="flex items-center space-x-3 my-6">
                  <div className="w-12 h-px bg-gradient-to-r from-[#3A4D37] to-emerald-600"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-[#3A4D37] to-emerald-600 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
                  <div className="w-20 h-px bg-gradient-to-r from-emerald-600 to-orange-600"></div>
                </div>
              </div>

              <p className="text-lg text-[#3A4D37]/90 leading-relaxed max-w-xl font-light">
                Step into a realm where every stroke tells a story and every piece speaks to the soul. 
                Iam <span className="font-medium text-[#3A4D37]">Remmy Adero</span>, 
                and this is my <span className="font-medium text-emerald-700">canvas of dreams</span>.
              </p>

              {/* Scroll Indicator */}
              <div className="flex flex-col items-start mt-8 space-y-3">
                <div className="flex items-center space-x-2 text-[#3A4D37]/70">
                  <span className="font-light">Explore below</span>
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-[#3A4D37] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                <ArrowDown className="w-6 h-6 text-[#3A4D37] animate-bounce" />
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative group">
              <div className="relative">
                {/* Multiple Glow Effects */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#3A4D37]/20 via-emerald-400/15 to-orange-400/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>
                <div className="absolute -inset-3 bg-gradient-to-br from-emerald-400/15 via-orange-400/20 to-[#3A4D37]/15 rounded-2xl blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/remmy2.PNG"
                    alt="Featured Artwork"
                    className=" w-[300px] h-[400px]"
                    width={300}
                    height={400}
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A4D37]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-[#F1E9DC] mb-2">
                        Urban Dreams
                      </h3>
                      <p className="text-[#F1E9DC]/90 mb-3 text-sm">Latest masterpiece collection</p>
                      <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#3A4D37] to-emerald-900 text-[#F1E9DC] py-20 px-6 relative overflow-hidden">
        {/* Background Art */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[8%] w-96 h-96 bg-gradient-to-br from-emerald-400/15 via-teal-400/10 to-[#F1E9DC]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-[12%] w-80 h-80 bg-gradient-to-tl from-orange-400/10 via-amber-400/15 to-[#F1E9DC]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-400/10 via-[#F1E9DC]/10 to-orange-400/10 blur-3xl rounded-full"></div>
            
            <div className="relative z-10">
              

              <div className="relative mb-6">
                <Image
                  src="/logo.PNG"
                  alt="Remmy Art Studios Logo"
                  className="mx-auto transform hover:scale-110 transition-all duration-500"
                  width={300}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-[#F1E9DC]/20 to-orange-400/20 blur-2xl opacity-0 hover:opacity-100 transition-all duration-700 rounded-full"></div>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-Stone-50">
                  Remmy Art
                </span>{" "}
                <span className="text-Stone-50">
                  Studios
                </span>
              </h2>

              <p className="text-xl text-[#F1E9DC]/80 font-light italic max-w-2xl mx-auto">
                A curated collection of my artistic journey through creativity and imagination
              </p>

              {/* Artistic Divider */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-400"></div>
          
                <div className="w-16 h-px bg-gradient-to-r from-orange-400 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-[#F1E9DC]/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-700 border border-[#F1E9DC]/30 hover:border-emerald-300/50"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400/10 via-[#3A4D37]/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl blur-lg"></div>

                <div className="relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-80 transform group-hover:scale-110 transition-all duration-700"
                      width={600}
                      height={500}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3A4D37]/90 via-[#3A4D37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <button className="flex items-center space-x-2 bg-[#F1E9DC]/20 backdrop-blur-sm text-[#F1E9DC] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#F1E9DC]/30 transition-all duration-300 transform hover:scale-105">
                          <Play className="w-4 h-4" />
                          <span>View Artwork</span>
                        </button>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#F1E9DC]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  </div>

                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-[#3A4D37] group-hover:text-emerald-700 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-[#3A4D37] rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>

                    <p className="text-[#3A4D37]/70 mb-3 font-light text-sm">{item.description}</p>

                    <div className="flex items-center justify-between">
                      <span className={`inline-block bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-bold text-xs uppercase tracking-wider px-3 py-1.5 bg-[#3A4D37]/10 rounded-full border border-[#3A4D37]/20 group-hover:border-emerald-300 transition-all duration-300`}>
                        {item.category}
                      </span>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                        <Eye className="w-4 h-4 text-[#3A4D37]/70 group-hover:text-emerald-600 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Testimonials */}
          <div className="relative mb-16">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/15 via-[#F1E9DC]/10 to-orange-400/15 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-[#F1E9DC]/90 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-[#F1E9DC]/30 p-10 md:p-12 overflow-hidden">
              {/* Background Decorations */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-[#3A4D37]/10 to-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>

              <div className="relative z-10 text-center">
                

                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#3A4D37] to-emerald-700 bg-clip-text text-transparent">
                    Client Love Stories
                  </span>
                </h3>

                <Carousel
                  autoPlay
                  interval={4000}
                  infiniteLoop
                  showArrows={false}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={true}
                  stopOnHover={true}
                  swipeable={true}
                  className="testimonial-carousel"
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-6 py-8">
                      <div className="max-w-3xl mx-auto">
                        <div className="text-5xl text-[#3A4D37]/20 mb-4"></div>
                        <p className="text-xl md:text-2xl font-light italic text-[#3A4D37] leading-relaxed mb-6">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-12 h-px bg-gradient-to-r from-[#3A4D37] to-emerald-600"></div>
                          <div className={`px-4 py-1.5 bg-gradient-to-r ${testimonial.gradient} text-white rounded-full font-medium text-sm`}>
                            {testimonial.author}
                          </div>
                          <div className="w-12 h-px bg-gradient-to-r from-emerald-600 to-orange-600"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          {/* Enhanced Call To Action */}
          <div className="relative text-center">
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400/20 via-[#F1E9DC]/20 to-orange-400/20 blur-3xl rounded-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-[#F1E9DC]/95 to-amber-50/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-12 border-2 border-[#F1E9DC]/50 overflow-hidden">
              {/* Background Art */}
              <div className="absolute top-6 left-6 w-20 h-20 bg-gradient-to-br from-[#3A4D37]/10 to-emerald-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

              <div className="relative z-10">

                <h3 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#3A4D37] to-emerald-700 bg-clip-text text-transparent">
                    Ready to bring your vision to life?
                  </span>
                </h3>

                <p className="text-lg text-[#3A4D37]/80 mb-8 max-w-2xl mx-auto font-light">
                  Let us collaborate and create something extraordinary that captures your unique story through the power of art
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-[#3A4D37] to-emerald-700 hover:from-emerald-800 hover:to-[#3A4D37] text-[#F1E9DC] font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F1E9DC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    
                    <span className="relative z-10 flex items-center space-x-2">
                      <Palette className="w-5 h-5" />
                      <span>Start Your Commission</span>
                    </span>
                  </button>

                  <button className="group relative px-8 py-4 bg-[#F1E9DC] border-2 border-[#3A4D37] hover:border-emerald-600 text-[#3A4D37] hover:text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-[#3A4D37]/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <span className="relative z-10 flex items-center space-x-2">
                      <Eye className="w-5 h-5" />
                      <span>Explore Gallery</span>
                    </span>
                  </button>
                </div>

                {/* Features List */}
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#3A4D37]/70">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span>Custom Artwork</span>
                  </div>
                  <div className="w-px h-4 bg-[#3A4D37]/30"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#3A4D37] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span>Professional Quality</span>
                  </div>
                  <div className="w-px h-4 bg-[#3A4D37]/30"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span>Fast Delivery</span>
                  </div>
                  <div className="w-px h-4 bg-[#3A4D37]/30"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <span>100% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-gradient-to-br from-[#F1E9DC] via-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-[10%] w-80 h-80 bg-gradient-to-br from-[#3A4D37]/15 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-[15%] w-72 h-72 bg-gradient-to-br from-orange-400/15 to-amber-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-[#3A4D37] to-emerald-700 bg-clip-text text-transparent">
              Creating Art
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Artworks Created", icon: Palette, gradient: "from-emerald-500 to-teal-600" },
              { number: "200+", label: "Happy Clients", icon: Heart, gradient: "from-orange-500 to-red-600" },
              { number: "50+", label: "Murals Painted", icon: Sparkles, gradient: "from-[#3A4D37] to-emerald-700" },
              { number: "5+", label: "Years Experience", icon: Star, gradient: "from-amber-500 to-orange-600" }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-3 bg-gradient-to-br ${stat.gradient} opacity-15 rounded-2xl blur-lg group-hover:opacity-30 transition-all duration-500`}></div>
                
                <div className="relative bg-[#F1E9DC]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#3A4D37]/20 hover:border-[#3A4D37]/40 transition-all duration-500 transform hover:scale-105">
                  <div className="mb-3">
                    <stat.icon className={`w-10 h-10 mx-auto text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text`} />
                  </div>
                  <div className="text-3xl font-bold text-[#3A4D37] mb-2">{stat.number}</div>
                  <div className="text-[#3A4D37]/70 text-xs uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles for Carousel */}
      <style jsx global>{`
        .testimonial-carousel .carousel-root {
          max-width: 100%;
        }
        
        .testimonial-carousel .carousel .control-dots {
          bottom: -40px;
        }
        
        .testimonial-carousel .carousel .control-dots .dot {
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          background: linear-gradient(45deg, #3A4D37, #10B981) !important;
          box-shadow: none !important;
          margin: 0 6px !important;
          opacity: 0.4 !important;
        }
        
        .testimonial-carousel .carousel .control-dots .dot.selected {
          opacity: 1 !important;
          transform: scale(1.2);
          transition: all 0.3s ease;
        }
        
        .carousel .slide {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
}