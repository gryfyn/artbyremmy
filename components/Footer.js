"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2A3B28] via-[#3A4D37] to-[#1F2E1C] text-white overflow-hidden">
      {/* Complex Artistic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-[10%] w-72 h-96 bg-gradient-to-br from-emerald-500/25 via-teal-600/20 to-lime-500/15 rounded-[60px] rotate-12 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-gradient-to-tl from-cyan-400/20 via-emerald-500/25 to-indigo-600/15 rounded-[80px] -rotate-12 blur-3xl"></div>
        <div className="absolute top-1/3 right-[5%] w-64 h-72 bg-gradient-to-br from-purple-500/15 via-pink-400/20 to-orange-500/15 rounded-[50px] rotate-45 blur-2xl"></div>
        <div className="absolute bottom-10 left-[20%] w-96 h-48 bg-gradient-to-r from-violet-500/10 via-fuchsia-400/15 to-rose-500/10 rounded-full blur-3xl"></div>
        
        {/* Flowing Wave Patterns */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,200 C300,100 600,300 900,150 C1050,75 1150,125 1200,100 L1200,0 L0,0 Z" 
                fill="url(#waveGradient1)" className="animate-pulse"/>
          <path d="M0,400 C200,350 400,450 600,380 C800,310 1000,420 1200,350 L1200,0 L0,0 Z" 
                fill="url(#waveGradient2)" className="animate-pulse" style={{animationDelay: '2s'}}/>
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-ping opacity-30`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Artistic Border Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 through-cyan-400/30 via-purple-400/40 to-transparent"></div>
      <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 through-orange-400/40 via-emerald-400/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          
          {/* Artistic Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative group">
              {/* Animated Background for Brand Name */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 through-purple-500/15 via-pink-400/20 to-orange-400/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>
              
              <h3 className="text-5xl font-bold relative z-10 tracking-wide">
                <span className="bg-gradient-to-r from-[#F1E9DC] via-emerald-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                  Remmy
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 bg-clip-text text-transparent">
                  Adero
                </span>
              </h3>
              
             
              <div className="mt-2 h-1 w-32 bg-gradient-to-r from-emerald-400 via-cyan-400 through-purple-400 via-pink-400 to-orange-400 rounded-full opacity-70"></div>
            </div>
            
            <p className="text-xl text-[#F1E9DC]/90 max-w-lg leading-relaxed font-light">
              Transforming visions into{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                immersive digital art
              </span>{" "}
              that transcends boundaries and inspires wonder
            </p>
            
            {/* Complex Artistic Divider */}
            <div className="flex items-center space-x-6 py-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                <div className="w-16 h-px bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
              </div>
              <div className="relative">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rotate-45 opacity-80"></div>
                <div className="absolute inset-0 w-6 h-6 bg-gradient-to-br from-cyan-400 via-emerald-400 to-teal-500 rotate-45 animate-spin opacity-60" style={{animationDuration: '8s'}}></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"></div>
                <div className="w-2 h-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full"></div>
              </div>
            </div>

            {/* Artistic Quote or Tagline */}
            <div className="p-6 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-500/10 rounded-2xl border border-emerald-400/20 backdrop-blur-sm">
              <p className="text-[#F1E9DC]/80 italic text-lg font-light leading-relaxed">
                "Where pixels dance with purpose and creativity knows no bounds"
              </p>
              <div className="mt-3 w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="space-y-10">
            <div className="relative">
              <h4 className="font-bold text-[#F1E9DC] mb-8 text-xl relative">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Explore
                </span>
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 rounded-full"></div>
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-pulse"></div>
              </h4>
              
              <ul className="space-y-5">
                {["About", "Services", "Portfolio", "Contact"].map((item, index) => (
                  <li key={item} className="group relative">
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="text-[#F1E9DC]/80 hover:text-[#F1E9DC] transition-all duration-500 text-base tracking-wide relative z-10 block py-2 font-medium"
                    >
                      {item}
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/15 via-cyan-400/10 to-purple-400/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>
                    <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 transition-all duration-700 rounded-full"></div>
                    <div className="absolute -left-2 top-1/2 w-1 h-0 group-hover:h-4 bg-gradient-to-b from-pink-400 to-orange-400 transition-all duration-500 transform -translate-y-1/2 rounded-full"></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <h4 className="font-bold text-[#F1E9DC] mb-8 text-xl relative">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Legal
                </span>
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full"></div>
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full animate-pulse"></div>
              </h4>
              
              <ul className="space-y-5">
                {[
                  { name: "Terms & Conditions", href: "/terms" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Cookie Policy", href: "/cookies" }
                ].map((item, index) => (
                  <li key={item.name} className="group relative">
                    <Link 
                      href={item.href}
                      className="text-[#F1E9DC]/80 hover:text-[#F1E9DC] transition-all duration-500 text-base tracking-wide relative z-10 block py-2 font-medium"
                    >
                      {item.name}
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 via-pink-400/10 to-orange-400/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>
                    <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 transition-all duration-700 rounded-full"></div>
                    <div className="absolute -left-2 top-1/2 w-1 h-0 group-hover:h-4 bg-gradient-to-b from-cyan-400 to-emerald-400 transition-all duration-500 transform -translate-y-1/2 rounded-full"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Artistic Social Media Section */}
          <div className="space-y-8">
            <h4 className="font-bold text-[#F1E9DC] text-xl relative">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Connect
              </span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full"></div>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
            </h4>
            
            {/* Hexagonal Social Grid */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: FaFacebook, colors: "from-blue-500 via-blue-600 to-indigo-600", shadow: "shadow-blue-500/30" },
                  { icon: FaInstagram, colors: "from-pink-500 via-purple-500 to-orange-500", shadow: "shadow-pink-500/30" },
                  { icon: FaTwitter, colors: "from-blue-400 via-cyan-400 to-teal-500", shadow: "shadow-cyan-500/30" },
                  { icon: FaLinkedin, colors: "from-blue-600 via-indigo-600 to-purple-600", shadow: "shadow-blue-600/30" },
                  { icon: FaWhatsapp, colors: "from-green-500 via-emerald-500 to-teal-600", shadow: "shadow-green-500/30" },
                  { icon: FaYoutube, colors: "from-red-500 via-pink-500 to-orange-500", shadow: "shadow-red-500/30" }
                ].map(({ icon: Icon, colors, shadow }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`group relative p-5 rounded-2xl bg-gradient-to-br from-[#F1E9DC]/5 to-emerald-500/10 hover:from-[#F1E9DC]/10 hover:to-emerald-500/20 transition-all duration-500 flex items-center justify-center backdrop-blur-sm border border-[#F1E9DC]/20 hover:border-emerald-400/40 transform hover:scale-110 hover:rotate-3 ${shadow} hover:shadow-lg`}
                  >
                    <Icon 
                      size={24} 
                      className="text-[#F1E9DC]/80 group-hover:text-[#F1E9DC] transition-all duration-500 relative z-10 group-hover:scale-110" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-2xl`}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-lg scale-125"></div>
                    
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-400/50 transition-all duration-500">
                      <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 opacity-0 group-hover:opacity-100 animate-ping"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Newsletter Signup */}
            <div className="relative p-8 bg-gradient-to-br from-[#F1E9DC]/10 via-emerald-500/5 through-cyan-500/5 via-purple-500/5 to-pink-500/10 rounded-3xl border border-gradient-to-r from-emerald-400/30 via-cyan-400/20 to-purple-400/30 backdrop-blur-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-cyan-400/5 to-purple-400/5 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <h5 className="text-[#F1E9DC] font-bold text-lg">
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Stay Inspired
                    </span>
                  </h5>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
                
                <p className="text-[#F1E9DC]/80 text-sm mb-6 font-light">
                  Join our creative journey and receive exclusive insights, behind-the-scenes content, and early access to new projects
                </p>
                
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your creative email..." 
                    className="w-full px-6 py-4 bg-[#F1E9DC]/10 border-2 border-emerald-400/30 rounded-2xl text-[#F1E9DC] placeholder-[#F1E9DC]/60 text-sm focus:outline-none focus:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm pr-32"
                  />
                  <button className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-purple-600 rounded-xl text-white text-sm font-medium transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                    <span className="relative z-10">Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artistic Bottom Section */}
        <div className="mt-20 pt-10 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 through-cyan-400/30 via-purple-400/40 through-pink-400/30 via-orange-400/40 to-transparent"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <p className="text-[#F1E9DC]/70 text-sm font-light">
                © {new Date().getFullYear()} Remmy Adero. 
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium"> Crafted with passion</span>
              </p>
              
              {/* Animated Decorative Elements */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="w-px h-6 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-400 opacity-50"></div>
                
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              {["Sitemap", "Accessibility", "RSS Feed"].map((item, index) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-[#F1E9DC]/70 hover:text-[#F1E9DC] text-sm transition-all duration-500 relative group font-medium"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 transition-all duration-500 rounded-full"></div>
                  <div className="absolute -bottom-2 left-1/2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transform -translate-x-1/2 transition-all duration-500"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Multi-layered Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 through-purple-400 via-pink-400 to-orange-400"></div>
        <div className="h-1 bg-gradient-to-r from-orange-400 via-pink-400 through-purple-400 via-cyan-400 to-emerald-400 opacity-75"></div>
        <div className="h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 opacity-50"></div>
      </div>

      {/* Floating Art Elements */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
          <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
          <div className="absolute inset-4 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
}