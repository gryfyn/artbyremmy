"use client";
import { FaMapMarkerAlt, FaPalette, FaPencilAlt, FaPlay } from "react-icons/fa";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function About() {
  return (
    <div className="relative bg-[#F5F1E8] overflow-hidden">
      <Header/>
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#52794B]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-[15%] w-96 h-96 bg-gradient-to-tl from-[#52794B]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        {/* Hero Section - Artist Profile */}
        <div className="relative text-center mb-24 px-6">
          <div className="relative inline-block group">
            {/* Profile Image with Clean Border */}
            <div className="relative">
              <div className="absolute -inset-6 bg-[#52794B]/10 rounded-full blur-2xl group-hover:bg-[#52794B]/20 transition-all duration-700"></div>
              <div className="relative">
                <img
                  src="/remmy3.PNG"
                  alt="Remmy Adero - Digital Artist"
                  className="w-56 h-56 rounded-full object-cover border-4 border-[#F5F1E8] shadow-2xl relative z-10"
                />
                {/* Floating Icons */}
                <div className="absolute top-2 right-2 bg-[#52794B] p-3 rounded-full shadow-lg">
                  <FaPalette className="text-[#F5F1E8] text-lg" />
                </div>
                <div className="absolute bottom-2 left-2 bg-[#3E5E38] p-3 rounded-full shadow-lg">
                  <FaPencilAlt className="text-[#F5F1E8] text-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-7xl font-bold mt-8 mb-6 text-[#2D3E2A]">
            Remmy <span className="text-[#52794B]">Adero</span>
          </h1>

          {/* Artistic Roles */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: FaPalette, label: "Digital Artist" },
              { icon: FaPencilAlt, label: "Sketch Artist" },
              { icon: FaPlay, label: "2D Animator" }
            ].map((role, index) => (
              <div key={index} className="px-6 py-3 bg-[#52794B] text-[#F5F1E8] rounded-full font-medium shadow-lg hover:bg-[#3E5E38] transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-2">
                  <role.icon className="text-base" />
                  <span>{role.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-3 text-lg text-[#2D3E2A]/70">
            <FaMapMarkerAlt className="text-[#52794B]" />
            <span className="font-medium">Kampala, Uganda</span>
          </div>

          {/* Simple Divider */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="w-20 h-px bg-[#52794B]/30"></div>
            <div className="w-2 h-2 bg-[#52794B] rounded-full"></div>
            <div className="w-20 h-px bg-[#52794B]/30"></div>
          </div>
        </div>

        {/* About Section - Two Column Layout */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#52794B]/10 rounded-3xl blur-xl group-hover:bg-[#52794B]/20 transition-all duration-700"></div>
              <div className="relative">
                <img
                  src="/feature4.jpeg"
                  alt="Remmy's Artistic Work"
                  className="rounded-2xl object-cover w-full h-[500px] shadow-2xl transform group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-[#2D3E2A] leading-tight">
                Vision meets{" "}
                <span className="text-[#52794B] italic">Reality</span>
              </h2>

              <div className="space-y-6 text-[#2D3E2A]/80 leading-relaxed text-lg">
                <p>
                  A visionary artist who transforms imagination into breathtaking reality through the power of digital and traditional mediums.
                </p>
                
                <p>
                  From detailed sketches to immersive animations, every creation blends technical precision with artistic soul, crafting experiences that resonate deeply with viewers.
                </p>

                <p>
                  Fearlessly embracing new challenges and turning bold concepts into unforgettable visual experiences that push creative boundaries.
                </p>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { skill: "Digital Art", level: "95%" },
                  { skill: "Sketching", level: "90%" },
                  { skill: "Animation", level: "85%" },
                  { skill: "Murals", level: "88%" }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-[#52794B]/10 hover:border-[#52794B]/30 transition-all duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[#2D3E2A]">{item.skill}</span>
                      <span className="text-sm text-[#2D3E2A]/60">{item.level}</span>
                    </div>
                    <div className="w-full bg-[#52794B]/10 rounded-full h-2">
                      <div className="bg-[#52794B] h-2 rounded-full transition-all duration-1000" style={{width: item.level}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <div className="relative p-12 md:p-16 bg-[#52794B] rounded-3xl shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F1E8] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5F1E8] rounded-full blur-3xl"></div>
            </div>
            
            <blockquote className="text-center relative z-10">
              <p className="text-2xl md:text-3xl font-light text-[#F5F1E8] leading-relaxed mb-8 italic">
                "Art is not what you see, but what you make others see. Every stroke is a heartbeat, every color an emotion."
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-px bg-[#F5F1E8]/30"></div>
                <cite className="text-lg font-medium text-[#F5F1E8]/90 not-italic">
                  Remmy Adero
                </cite>
                <div className="w-16 h-px bg-[#F5F1E8]/30"></div>
              </div>
            </blockquote>
          </div>
        </div>

        {/* Process Section - New Addition */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3E2A] mb-4">
              The Creative <span className="text-[#52794B] italic">Process</span>
            </h2>
            <p className="text-lg text-[#2D3E2A]/70 max-w-2xl mx-auto">
              From concept to completion, every project follows a journey of discovery and refinement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Ideation", desc: "Conceptualizing the vision" },
              { step: "02", title: "Sketching", desc: "Bringing ideas to paper" },
              { step: "03", title: "Creation", desc: "Digital refinement" },
              { step: "04", title: "Delivery", desc: "Final masterpiece" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-[#52794B]/5 rounded-2xl group-hover:bg-[#52794B]/10 transition-all duration-300"></div>
                <div className="relative p-6 text-center">
                  <div className="text-5xl font-bold text-[#52794B]/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-[#2D3E2A] mb-2">{item.title}</h3>
                  <p className="text-[#2D3E2A]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="max-w-4xl mx-auto px-6 mb-20">
          <div className="text-center p-12 bg-[#52794B]/5 rounded-3xl backdrop-blur-sm border border-[#52794B]/10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2D3E2A] mb-6">
              Ready to Create Something <span className="text-[#52794B] italic">Amazing?</span>
            </h3>
            <p className="text-lg text-[#2D3E2A]/70 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life through art that speaks, moves, and inspires.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#52794B] hover:bg-[#3E5E38] text-[#F5F1E8] font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
              <button className="px-8 py-4 bg-[#F5F1E8] border-2 border-[#52794B] text-[#52794B] hover:bg-[#52794B]/5 font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}