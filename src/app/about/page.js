"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaPalette, FaPencilAlt, FaPlay } from "react-icons/fa";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/20 overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-emerald-400/15 via-cyan-400/10 to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-[15%] w-80 h-80 bg-gradient-to-tl from-pink-400/10 via-orange-400/15 to-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-[5%] w-64 h-72 bg-gradient-to-br from-indigo-400/10 via-purple-400/15 to-pink-400/5 rounded-[50px] rotate-45 blur-2xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1.5 h-1.5 bg-gradient-to-br from-emerald-400/60 to-cyan-400/60 rounded-full animate-ping`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 pt-28">
        <Header />

        {/* Hero Section - Artist Profile */}
        <div className="relative text-center my-20 px-4">
          <div className="relative inline-block group">
            {/* Animated Background Ring */}
            <div className="absolute -inset-8 bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 through-purple-400/15 via-pink-400/20 to-orange-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>
            
            {/* Profile Image with Artistic Border */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-cyan-400 through-purple-400 via-pink-400 to-orange-400 rounded-full blur-lg opacity-30 animate-spin" style={{animationDuration: '8s'}}></div>
              <div className="relative">
                <Image
                  src="/remmy3.PNG"
                  alt="Remmy Adero - Digital Artist"
                  width={240}
                  height={240}
                  className="rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
                />
                {/* Floating Icons */}
                <div className="absolute top-0 right-0 bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 rounded-full shadow-lg animate-bounce">
                  <FaPalette className="text-white text-xl" />
                </div>
                <div className="absolute bottom-0 left-0 bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                  <FaPencilAlt className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Name with Gradient Effect */}
          <h1 className="text-6xl md:text-7xl font-bold mt-8 mb-4">
            <span className="text-emerald-800">
              Remmy
            </span>{" "}
            <span className="text-emerald-800">
              Adero
            </span>
          </h1>

          {/* Artistic Roles */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 mb-8">
            {[
              { icon: FaPalette, label: "Digital Artist", gradient: "from-emerald-500 to-cyan-500" },
              { icon: FaPencilAlt, label: "Sketch Artist", gradient: "from-purple-500 to-pink-500" },
              { icon: FaPlay, label: "2D Animator", gradient: "from-orange-500 to-red-500" }
            ].map((role, index) => (
              <div key={index} className={`group px-6 py-3 bg-gradient-to-r ${role.gradient} rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className="flex items-center gap-2">
                  <role.icon className="text-lg" />
                  <span>{role.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Location with Style */}
          <div className="flex items-center justify-center gap-3 text-lg text-gray-600 mb-8">
            <div className="p-2 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full">
              <FaMapMarkerAlt className="text-emerald-600" />
            </div>
            <span className="font-medium">Kampala, Uganda</span>
          </div>

          {/* Artistic Divider */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-br from-emerald-400 via-cyan-400 to-purple-400 rotate-45"></div>
              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rotate-45 animate-spin opacity-70" style={{animationDuration: '6s'}}></div>
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        {/* About Section - Visual Story */}
        <div className="relative mx-6 md:mx-12 my-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Artistic Image Container */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-purple-400/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative">
                <Image
                  src="/feature4.jpeg"
                  alt="Remmy's Artistic Work"
                  width={600}
                  height={500}
                  className="rounded-3xl object-cover w-full h-[400px] md:h-[500px] shadow-2xl transform group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    <p className="text-lg font-bold">Visual Storytelling</p>
                    <p className="text-sm opacity-90">Every piece tells a story</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content with Artistic Elements */}
            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    Vision
                  </span>{" "}
                  <span className="text-gray-800">meets</span>{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Reality
                  </span>
                </h2>
                <div className="absolute -top-2 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-lg"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl font-light">
                  A <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent font-medium">visionary artist</span> who transforms imagination into breathtaking reality.
                </p>
                
                <p className="text-lg">
                  From detailed sketches to immersive animations, every creation blends 
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium"> technical precision</span> with 
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-medium"> artistic soul</span>.
                </p>

                <p className="text-lg">
                  Fearlessly embracing new challenges, turning bold concepts into 
                  <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent font-medium"> unforgettable experiences</span>.
                </p>
              </div>

              {/* Skills Showcase */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { skill: "Digital Art", level: "95%", color: "from-emerald-500 to-cyan-500" },
                  { skill: "Sketching", level: "90%", color: "from-purple-500 to-pink-500" },
                  { skill: "Animation", level: "85%", color: "from-orange-500 to-red-500" },
                  { skill: "Murals", level: "88%", color: "from-blue-500 to-indigo-500" }
                ].map((item, index) => (
                  <div key={index} className="group p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-emerald-300/50 transition-all duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{item.skill}</span>
                      <span className="text-sm text-gray-600">{item.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse`} style={{width: item.level}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Artistic Quote Section */}
        <div className="relative my-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Background Art */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50/50 through-purple-50/30 via-pink-50/50 to-orange-50/30 rounded-3xl blur-lg"></div>
            
            <div className="relative p-12 md:p-16 bg-white/60 backdrop-blur-lg rounded-3xl border border-emerald-200/50 shadow-2xl">
              {/* Quote Marks */}
              <div className="absolute top-8 left-8 text-6xl font-serif text-emerald-400/30">"</div>
              <div className="absolute bottom-8 right-8 text-6xl font-serif text-purple-400/30 rotate-180">"</div>
              
              <blockquote className="text-center relative z-10">
                <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8 italic">
                  Art is not what you see, but what you 
                  <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent font-medium"> make others see</span>.
                  <br />
                  Every stroke is a heartbeat, every color an 
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium"> emotion</span>.
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-px bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                  <cite className="text-lg font-medium bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent not-italic">
                    Remmy Adero
                  </cite>
                  <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-pink-400"></div>
                </div>
              </blockquote>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-4 w-3 h-3 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-pulse transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse transform -translate-y-1/2" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="relative mx-6 md:mx-12 mb-20">
          <div className="text-center p-12 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-500/10 rounded-3xl backdrop-blur-sm border border-emerald-200/30">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Create Something Amazing?
              </span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life through art that speaks, moves, and inspires.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-emerald-300 text-emerald-700 font-medium rounded-2xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}