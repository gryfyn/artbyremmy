"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Sparkles, Palette, Heart, ArrowDown, Eye, Instagram, Twitter, Facebook, Linkedin, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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


export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

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

  useEffect(() => {
    const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: 1 + Math.random() * 2,
      height: 1 + Math.random() * 2,
      animationDelay: Math.random() * 5,
      animationDuration: 8 + Math.random() * 12
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

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
          <Header/>
        </div>
      )}

      {/* Hero Section - New Animated Landing */}
<section id="home" className="relative w-full h-screen bg-gradient-to-br from-[#F1E9DC] via-amber-50 to-orange-50 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-16 left-[8%] w-64 h-64 bg-gradient-to-br from-[#3A4D37]/8 to-emerald-400/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-[10%] w-56 h-56 bg-gradient-to-tl from-amber-400/8 to-orange-400/5 rounded-full blur-3xl"></div>
    
    {particles.map((particle) => (
      <div
        key={particle.id}
        className="absolute animate-float opacity-10"
        style={{
          left: `${particle.left}%`,
          top: `${particle.top}%`,
          width: `${particle.width}px`,
          height: `${particle.height}px`,
          background: '#3A4D37',
          borderRadius: '50%',
          animationDelay: `${particle.animationDelay}s`,
          animationDuration: `${particle.animationDuration}s`
        }}
      />
    ))}
  </div>

  {/* Story Images Container - All in one row */}
  <div className="absolute inset-0 flex flex-row gap-0">
    <div className="w-1/4 h-full relative overflow-hidden animate-slideFromTop">
      <Image 
        src="/image1.png" 
        alt="Story Part 1" 
        fill
        className="object-cover hover:scale-105 transition-transform duration-700"
        priority
      />
    </div>

    <div className="w-1/4 h-full relative overflow-hidden animate-slideFromBottom">
      <Image 
        src="/image2.png" 
        alt="Story Part 2" 
        fill
        className="object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>

    <div className="w-1/4 h-full relative overflow-hidden animate-slideFromTop animation-delay-200">
      <Image 
        src="/image3.png" 
        alt="Story Part 3" 
        fill
        className="object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>

    <div className="w-1/4 h-full relative overflow-hidden animate-slideFromBottom animation-delay-200">
      <Image 
        src="/image4.png" 
        alt="Story Part 4" 
        fill
        className="object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
  </div>

  {/* Content Overlay */}
  <div className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-b from-[#3A4D37]/40 via-[#3A4D37]/30 to-[#3A4D37]/40">
    <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-3 sm:space-y-6">
      
      {/* Glass Container for Logo and Title */}
      <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl animate-fadeInUp animation-delay-300">
        <div className="mb-3 sm:mb-4">
          <Image 
            src="/logo2.png" 
            alt="Remmy Art Logo" 
            width={200} 
            height={130}
            className="mx-auto opacity-95 drop-shadow-2xl w-32 sm:w-40 md:w-48"
          />
        </div>
        
        <h1 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#F1E9DC] drop-shadow-2xl tracking-wide ${headlandOne.className}  `}>
          VISUAL & CREATIVE DIRECTOR
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-2 text-[#F1E9DC]/70 pt-3 sm:pt-6 animate-bounce animation-delay-1100">
        <span className={`text-xs font-light uppercase tracking-wider drop-shadow-lg ${robotoSlab.className} `}>Scroll to explore</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </div>
  </div>

  {/* Social Media Links */}
  <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20 flex flex-col space-y-2 sm:space-y-4 animate-fadeInRight">
    <a 
      href="https://www.instagram.com/aderoremmy/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-[#F1E9DC]/90 backdrop-blur-md p-2 sm:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-[#3A4D37]/20"
    >
      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#3A4D37] group-hover:text-pink-600 transition-colors duration-300" />
    </a>
    
    <a 
      href="https://www.youtube.com/@racartstudios/featured" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-[#F1E9DC]/90 backdrop-blur-md p-2 sm:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-[#3A4D37]/20"
    >
      <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-[#3A4D37] group-hover:text-blue-400 transition-colors duration-300" />
    </a>
    
    <a 
      href="https://www.linkedin.com/in/remmyadero/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-[#F1E9DC]/90 backdrop-blur-md p-2 sm:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-[#3A4D37]/20"
    >
      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#3A4D37] group-hover:text-blue-700 transition-colors duration-300" />
    </a>
  </div>
</section>

      {/* Portfolio Grid Section */}
<section id="portfolio" className="py-20 bg-gradient-to-br from-[#F1E9DC] to-[#3A4D37] text-[#F1E9DC]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-[#3A4D37] ${headlandOne.className}`}>
        Featured works
      </h2>
      <p className={`text-lg text-[#3A4D37]/70 max-w-2xl mx-auto ${robotoSlab.className}`}>
        A curated collection of my creative journey, where visual storytelling meets artistic vision
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {portfolioItems.map((item) => (
        <div key={item.id} className="group relative bg-[#F1E9DC]/95 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-700 shadow-xl hover:shadow-2xl">
          <div className="relative overflow-hidden">
            <Image 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700" 
              width={400} 
              height={320}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A4D37]/95 via-[#3A4D37]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 px-6">
                <h4 className="text-2xl font-bold text-[#F1E9DC] text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h4>
                <p className="text-[#F1E9DC]/90 text-sm text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.description}
                </p>
                <span className="inline-block bg-[#F1E9DC]/20 backdrop-blur-sm text-[#F1E9DC] px-4 py-2 rounded-full text-xs font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {item.category}
                </span>
                <button className="flex items-center space-x-2 bg-[#F1E9DC] text-[#3A4D37] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#F1E9DC]/90 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150 shadow-lg">
                  <Eye className="w-4 h-4" />
                  <span>View Artwork</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    

      

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideFromTop {
          from { 
            transform: translateY(-100%);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideFromBottom {
          from { 
            transform: translateY(100%);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from { 
            opacity: 0;
            transform: translateX(50px);
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

        .animate-slideFromTop {
          animation: slideFromTop 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slideFromBottom {
          animation: slideFromBottom 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
          animation-delay: 1.2s;
          opacity: 0;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1100 {
          animation-delay: 1.1s;
        }
      `}</style>

      <Footer/>
    </div>
  );
}