"use client";
import { useState, useEffect } from "react";
import { Sparkles, Palette, Heart, Star, ArrowDown, Play, Eye, Brush, Award, Users, Clock } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 600);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      quote: "Art speaks louder than words — and Remmy's work proves it with every stroke.",
      author: "Sarah M.",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      quote: "Remmy captured the essence of my vision far better than I ever imagined.",
      author: "Michael C.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      quote: "The pencil work was breathtaking. Every line felt alive.",
      author: "Emma W.",
      gradient: "from-rose-400 to-pink-500"
    },
  ];

  const portfolioItems = [
    { id: 1, title: "Digital Portrait", category: "Digital Art", image: "/7.jpeg", gradient: "from-emerald-500 to-cyan-500" },
    { id: 2, title: "Pencil Sketch", category: "Traditional", image: "/4.jpeg", gradient: "from-gray-600 to-gray-800" },
    { id: 3, title: "Mural Work", category: "Street Art", image: "/mural-work.PNG", gradient: "from-orange-500 to-red-600" },
    { id: 4, title: "Character Design", category: "Illustration", image: "/character-design.PNG", gradient: "from-purple-500 to-pink-600" },
    { id: 5, title: "Street Art", category: "Urban Art", image: "/streetart.PNG", gradient: "from-yellow-500 to-orange-600" },
    { id: 6, title: "Album Covers", category: "Commercial", image: "/album-cover.PNG", gradient: "from-indigo-500 to-purple-600" },
  ];

  return (
    <div className="relative bg-[#F1E9DC] text-[#3A4D37] overflow-hidden">
      {/* Mouse Follow Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-12 h-12 bg-[#F1E9DC]/30 rounded-full blur-xl transition-all duration-300"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
      />

      {/* Conditional Header */}
      {showHeader && (
        <div className="fixed top-0 left-0 right-0 z-50 animate-fadeIn">
          {/* Your Header component would go here */}
          <Header/>
        </div>
      )}

      <section id="home" className="min-h-[80vh] bg-gradient-to-br from-[#F1E9DC] via-amber-50 to-orange-50 text-[#3A4D37] relative overflow-hidden flex items-center py-16">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-[8%] w-64 h-64 bg-gradient-to-br from-[#3A4D37]/8 to-emerald-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[10%] w-56 h-56 bg-gradient-to-tl from-amber-400/8 to-orange-400/5 rounded-full blur-3xl"></div>
          
          {/* Minimal floating particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                background: '#3A4D37',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Centered Content Layout */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Welcome Badge - Slide from Top */}
            <div className="inline-flex items-center space-x-2 bg-[#3A4D37]/10 backdrop-blur-sm px-5 py-2 rounded-full border border-[#3A4D37]/20 animate-slideInTop">
              <Sparkles className="w-4 h-4 text-[#3A4D37] animate-pulse" />
              <span className="text-[#3A4D37]/80 text-sm font-light tracking-wide">Welcome to Remmy Art Universe</span>
            </div>

            {/* Main Heading - Slide from Left */}
            <div className="space-y-3 animate-slideInLeft">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-[#3A4D37] via-emerald-700 to-[#3A4D37] bg-clip-text text-transparent">
                  REMMY ADERO
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-[#3A4D37]/70">
                Visual Artist & Creative Director
              </p>
            </div>

            {/* Description - Fade In */}
            <p className="text-lg text-[#3A4D37]/70 leading-relaxed max-w-2xl mx-auto font-light animate-fadeIn" style={{animationDelay: '0.3s'}}>
              Transforming visions into masterpieces through digital art, traditional sketches, and bold murals. 
              Every piece tells a unique story.
            </p>

            {/* CTA Buttons - Slide from Bottom */}
            <div className="flex flex-wrap justify-center gap-4 pt-4 animate-slideInBottom" style={{animationDelay: '0.4s'}}>
              <button className="group relative px-6 py-3 bg-gradient-to-r from-[#3A4D37] to-emerald-700 hover:from-emerald-800 hover:to-[#3A4D37] text-[#F1E9DC] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <span className="flex items-center space-x-2">
                  <Palette className="w-5 h-5" />
                  <span>View Portfolio</span>
                </span>
              </button>

              <button className="group relative px-6 py-3 bg-white/80 border-2 border-[#3A4D37]/30 hover:border-[#3A4D37] text-[#3A4D37] font-semibold rounded-xl hover:bg-white transition-all duration-500 transform hover:scale-105">
                <span className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Get Started</span>
                </span>
              </button>
            </div>

            {/* Stats Grid - Slide from Different Directions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto">
              {[
                { number: "500+", label: "Artworks", icon: Brush, animation: "animate-slideInLeft" },
                { number: "200+", label: "Clients", icon: Users, animation: "animate-slideInBottom" },
                { number: "50+", label: "Murals", icon: Sparkles, animation: "animate-slideInBottom" },
                { number: "5+", label: "Years", icon: Award, animation: "animate-slideInRight" }
              ].map((stat, index) => (
                <div key={index} className={`${stat.animation} text-center group`} style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#3A4D37]/10 to-emerald-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#3A4D37]/10 group-hover:border-[#3A4D37]/30 transition-all duration-500">
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#3A4D37] group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold text-[#3A4D37] mb-1">{stat.number}</div>
                      <div className="text-xs text-[#3A4D37]/60 uppercase tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Highlights - Slide from Right */}
            <div className="grid md:grid-cols-3 gap-4 pt-8 animate-slideInRight" style={{animationDelay: '0.8s'}}>
              {[
                { icon: Palette, title: "Digital Art", desc: "Modern portraits & illustrations", gradient: "from-emerald-500 to-teal-600" },
                { icon: Brush, title: "Traditional", desc: "Pencil & charcoal sketches", gradient: "from-[#3A4D37] to-emerald-700" },
                { icon: Sparkles, title: "Murals", desc: "Large-scale wall paintings", gradient: "from-orange-500 to-amber-600" }
              ].map((item, index) => (
                <div key={index} className="group relative bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-[#3A4D37]/10 hover:border-[#3A4D37]/30 transition-all duration-500 hover:shadow-lg">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-all duration-500`}></div>
                  <div className="relative">
                    <item.icon className="w-8 h-8 mx-auto mb-3 text-[#3A4D37] group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base font-bold text-[#3A4D37] mb-1">{item.title}</h3>
                    <p className="text-xs text-[#3A4D37]/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator - Bounce Animation */}
            <div className="flex flex-col items-center space-y-2 text-[#3A4D37]/50 pt-6 animate-bounce">
              <span className="text-xs font-light uppercase tracking-wider">Scroll to explore</span>
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>


      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#F1E9DC] via-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-80 h-80 bg-gradient-to-br from-[#3A4D37]/10 to-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#3A4D37] to-emerald-700 bg-clip-text text-transparent">
                What I Create
              </span>
            </h2>
            <p className="text-xl text-[#3A4D37]/70 max-w-2xl mx-auto font-light">
              Specialized in bringing artistic visions to life across multiple mediums
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brush, title: "Digital Art", desc: "Stunning digital portraits and illustrations", color: "from-emerald-500 to-teal-600" },
              { icon: Palette, title: "Traditional Art", desc: "Beautiful pencil and charcoal sketches", color: "from-gray-600 to-gray-800" },
              { icon: Sparkles, title: "Mural Art", desc: "Large-scale wall paintings and murals", color: "from-orange-500 to-red-600" },
              { icon: Star, title: "Commercial", desc: "Album covers and brand artwork", color: "from-purple-500 to-pink-600" }
            ].map((service, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#3A4D37]/10 hover:border-[#3A4D37]/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                <div className={`absolute -inset-2 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3A4D37] mb-3">{service.title}</h3>
                  <p className="text-[#3A4D37]/70 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-[#3A4D37] to-emerald-900 text-[#F1E9DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <img src="/logo.PNG" alt="Logo" className="w-64 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1E9DC]">
              Portfolio Showcase
            </h2>
            <p className="text-xl text-[#F1E9DC]/70 max-w-2xl mx-auto">
              A curated collection of my recent artistic works
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="group relative bg-[#F1E9DC]/95 rounded-2xl overflow-hidden transform hover:-translate-y-4 transition-all duration-700 shadow-xl hover:shadow-2xl">
                <div className="relative h-80 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A4D37]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="flex items-center space-x-2 bg-[#F1E9DC]/20 backdrop-blur-sm text-[#F1E9DC] px-4 py-2 rounded-full text-sm hover:bg-[#F1E9DC]/30 transition-all duration-300">
                        <Eye className="w-4 h-4" />
                        <span>View Artwork</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#3A4D37] mb-2">{item.title}</h4>
                  <span className={`inline-block bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-semibold text-sm`}>
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#F1E9DC] via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#3A4D37] to-emerald-700 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-[#3A4D37]/10">
            <div className="text-center">
              <div className="text-6xl text-[#3A4D37]/20 mb-4">"</div>
              <p className="text-2xl font-light italic text-[#3A4D37] mb-8 leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className={`px-6 py-2 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} text-white rounded-full font-medium`}>
                  {testimonials[currentTestimonial].author}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#3A4D37] w-8' : 'bg-[#3A4D37]/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3A4D37] via-emerald-800 to-[#2d3d2b] text-[#F1E9DC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-[#F1E9DC]/80 mb-10 font-light">
            Let's collaborate and bring your artistic vision to life
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105">
              <span className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Commission Artwork</span>
              </span>
            </button>

            <button className="px-8 py-4 bg-[#F1E9DC]/10 border-2 border-[#F1E9DC]/30 hover:border-[#F1E9DC]/60 text-[#F1E9DC] font-bold rounded-2xl transition-all duration-500 transform hover:scale-105">
              <span className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>View Gallery</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
      <Footer/>
    </div>
  );
}