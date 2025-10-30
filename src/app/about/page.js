"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaPalette, FaPencilAlt, FaPlay } from "react-icons/fa";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const scrollRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentProcess, setCurrentProcess] = useState(0);
  const processRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.dataset.section));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const processes = [
    { step: "01", title: "Ideation", desc: "Conceptualizing the vision" },
    { step: "02", title: "Sketching", desc: "Bringing ideas to paper" },
    { step: "03", title: "Creation", desc: "Digital refinement" },
    { step: "04", title: "Delivery", desc: "Final masterpiece" },
  ];

  useEffect(() => {
    if (visibleSections.has("process")) {
      const interval = setInterval(() => {
        setCurrentProcess((prev) => (prev + 1) % processes.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [visibleSections, processes.length]);

  return (
    <div className="relative bg-[#F5F1E8] overflow-hidden">
      <Header />
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#52794B]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-[15%] w-96 h-96 bg-gradient-to-tl from-[#52794B]/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section
          className="relative text-center mb-24 px-6"
          data-section="hero"
        >
          <div className={`relative inline-block group ${visibleSections.has("hero") ? "animate-fade animate-delay-100" : "opacity-0"}`}>
            <div className="absolute -inset-6 bg-[#52794B]/10 rounded-full blur-2xl group-hover:bg-[#52794B]/20 transition-all duration-700"></div>
            <div className="relative">
              <Image
                src="/remmy3.PNG"
                alt="Remmy Adero - Digital Artist"
                className={`w-56 h-56 rounded-full object-cover border-4 border-[#F5F1E8] shadow-2xl relative z-10 ${visibleSections.has("hero") ? "animate-slide-up animate-delay-200" : ""}`}
                width={224}
                height={224}
              />
              <div className={`absolute top-2 right-2 bg-[#52794B] p-3 rounded-full shadow-lg ${visibleSections.has("hero") ? "animate-bounce animate-delay-300" : ""}`}>
                <FaPalette className="text-[#F5F1E8] text-lg" />
              </div>
              <div className={`absolute bottom-2 left-2 bg-[#3E5E38] p-3 rounded-full shadow-lg ${visibleSections.has("hero") ? "animate-bounce animate-delay-400" : ""}`}>
                <FaPencilAlt className="text-[#F5F1E8] text-lg" />
              </div>
            </div>
          </div>

          <h1 className={`text-6xl md:text-7xl font-bold mt-8 mb-6 text-[#2D3E2A] ${visibleSections.has("hero") ? "animate-fade animate-delay-500" : "opacity-0"}`}>
            Remmy <span className="text-[#52794B]">Adero</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: FaPalette, label: "Digital Artist" },
              { icon: FaPencilAlt, label: "Sketch Artist" },
              { icon: FaPlay, label: "2D Animator" },
            ].map((role, index) => (
              <div
                key={index}
                className={`px-6 py-3 bg-[#52794B] text-[#F5F1E8] rounded-full font-medium shadow-lg hover:bg-[#3E5E38] transition-all duration-300 transform hover:scale-105 ${visibleSections.has("hero") ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  <role.icon className="text-base" />
                  <span>{role.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`flex items-center justify-center gap-3 text-lg text-[#2D3E2A]/70 ${visibleSections.has("hero") ? "animate-fade animate-delay-800" : "opacity-0"}`}>
            <FaMapMarkerAlt className="text-[#52794B]" />
            <span className="font-medium">Kampala, Uganda</span>
          </div>

          <div className={`flex items-center justify-center space-x-4 mt-8 ${visibleSections.has("hero") ? "animate-fade animate-delay-900" : "opacity-0"}`}>
            <div className="w-20 h-px bg-[#52794B]/30"></div>
            <div className="w-2 h-2 bg-[#52794B] rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-[#52794B]/30"></div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-24" data-section="about">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`relative group ${visibleSections.has("about") ? "animate-fade animate-delay-200" : "opacity-0"}`}>
              <div className="absolute -inset-4 bg-[#52794B]/10 rounded-3xl blur-xl group-hover:bg-[#52794B]/20 transition-all duration-700"></div>
              <div className="relative">
                <Image
                  src="/feature4.jpeg"
                  alt="Remmy's Artistic Work"
                  className={`rounded-2xl object-cover w-full h-[500px] shadow-2xl transform group-hover:scale-105 transition-all duration-700 ${visibleSections.has("about") ? "animate-slide-up animate-delay-300" : ""}`}
                  width={600}
                  height={500}
                />
              </div>
            </div>

            <div className={`space-y-8 ${visibleSections.has("about") ? "animate-fade animate-delay-400" : "opacity-0"}`}>
              <h2 className="text-5xl md:text-6xl font-bold text-[#2D3E2A] leading-tight">
                Vision meets <span className="text-[#52794B] italic">Reality</span>
              </h2>
              <div className="space-y-6 text-[#2D3E2A]/80 leading-relaxed text-lg">
                <p className={`${visibleSections.has("about") ? "animate-slide-up animate-delay-500" : ""}`}>
                  A visionary artist who transforms imagination into breathtaking reality through the power of digital and traditional mediums.
                </p>
                <p className={`${visibleSections.has("about") ? "animate-slide-up animate-delay-600" : ""}`}>
                  From detailed sketches to immersive animations, every creation blends technical precision with artistic soul, crafting experiences that resonate deeply with viewers.
                </p>
                <p className={`${visibleSections.has("about") ? "animate-slide-up animate-delay-700" : ""}`}>
                  Fearlessly embracing new challenges and turning bold concepts into unforgettable visual experiences that push creative boundaries.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { skill: "Digital Art", level: "95%" },
                  { skill: "Sketching", level: "90%" },
                  { skill: "Animation", level: "85%" },
                  { skill: "Murals", level: "88%" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-[#52794B]/10 hover:border-[#52794B]/30 transition-all duration-300 ${visibleSections.has("about") ? "animate-slide-up" : "opacity-0"}`}
                    style={{ animationDelay: `${(index + 8) * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[#2D3E2A]">{item.skill}</span>
                      <span className="text-sm text-[#2D3E2A]/60">{item.level}</span>
                    </div>
                    <div className="w-full bg-[#52794B]/10 rounded-full h-2">
                      <div
                        className="bg-[#52794B] h-2 rounded-full transition-all duration-1000 animate-fill"
                        style={{ width: "0%", animation: `fill-${item.level.replace("%", "")} 1.5s ease-out forwards` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-24" data-section="quote">
          <div className={`relative p-12 md:p-16 bg-[#52794B] rounded-3xl shadow-2xl overflow-hidden ${visibleSections.has("quote") ? "animate-fade-scale animate-delay-200" : "opacity-0"}`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F1E8] rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5F1E8] rounded-full blur-3xl animate-pulse"></div>
            </div>
            <blockquote className="text-center relative z-10">
              <p className={`text-2xl md:text-3xl font-light text-[#F5F1E8] leading-relaxed mb-8 italic ${visibleSections.has("quote") ? "animate-slide-up animate-delay-300" : ""}`}>
                Art is not what you see, but what you make others see. Every stroke is a heartbeat, every color an emotion.
              </p>
              <div className={`flex items-center justify-center space-x-4 ${visibleSections.has("quote") ? "animate-slide-up animate-delay-400" : ""}`}>
                <div className="w-16 h-px bg-[#F5F1E8]/30"></div>
                <cite className="text-lg font-medium text-[#F5F1E8]/90 not-italic">Remmy Adero</cite>
                <div className="w-16 h-px bg-[#F5F1E8]/30"></div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-24" data-section="process">
          <div className={`text-center mb-12 ${visibleSections.has("process") ? "animate-fade animate-delay-200" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3E2A] mb-4">
              The Creative <span className="text-[#52794B] italic">Process</span>
            </h2>
            <p className={`text-lg text-[#2D3E2A]/70 max-w-2xl mx-auto ${visibleSections.has("process") ? "animate-slide-up animate-delay-300" : ""}`}>
              From concept to completion, every project follows a journey of discovery and refinement
            </p>
          </div>
          
          <div className="relative flex justify-center" ref={processRef}>
            <div className="perspective-2000 w-full max-w-md">
              <div className="relative h-[280px] overflow-visible">
                {processes.map((item, index) => {
                  const offset = index - currentProcess;
                  const isVisible = offset >= 0;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${visibleSections.has("process") ? "" : "opacity-0"}`}
                      style={{
                        transform: `
                          translateY(${offset * -8}px) 
                          translateZ(${offset * -50}px)
                          rotateX(${isVisible ? offset * 8 : -90}deg)
                          scale(${1 - Math.abs(offset) * 0.05})
                        `,
                        opacity: isVisible ? (offset === 0 ? 1 : 0.4) : 0,
                        zIndex: processes.length - index,
                        transformOrigin: 'center top',
                        pointerEvents: offset === 0 ? 'auto' : 'none',
                      }}
                    >
                      <div className="bg-gradient-to-b from-white via-[#FEFDFB] to-[#F5F1E8] rounded-2xl shadow-2xl p-8 border-t-4 border-[#52794B]/30 h-full">
                        <div className="text-center h-full flex flex-col justify-center">
                          <div className="text-6xl font-bold text-[#52794B]/30 mb-4">{item.step}</div>
                          <h3 className="text-3xl font-bold text-[#2D3E2A] mb-3">{item.title}</h3>
                          <p className="text-lg text-[#2D3E2A]/70">{item.desc}</p>
                        </div>
                        {offset === 0 && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <div className="flex gap-1.5">
                              {processes.map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i === currentProcess ? 'bg-[#52794B] w-6' : 'bg-[#52794B]/30'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24" data-section="timeline">
          <div className={`max-w-7xl mx-auto px-6 text-center mb-16 ${visibleSections.has("timeline") ? "animate-fade animate-delay-200" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3E2A] mb-4">
              Artistic <span className="text-[#52794B] italic">Timeline</span>
            </h2>
            <p className={`text-lg text-[#2D3E2A]/70 max-w-2xl mx-auto ${visibleSections.has("timeline") ? "animate-slide-up animate-delay-300" : ""}`}>
              A visual journey through the milestones of my creative career
            </p>
          </div>
          <div className="relative">
            <div
              className="overflow-x-auto pl-5"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              ref={scrollRef}
            >
              <div
                style={{ width: "2000px", height: "250px" }}
                className={`${visibleSections.has("timeline") ? "animate-slide-in-left animate-delay-400" : "opacity-0"}`}
              >
                <Image
                  src="/timeline.png"
                  alt="Artistic Timeline"
                  className="w-full h-full object-contain"
                  width={4000}
                  height={250}
                  priority
                />
              </div>
            </div>
            <div className={`absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none ${visibleSections.has("timeline") ? "animate-fade animate-delay-500" : "opacity-0"}`}>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg">
                <svg
                  className="w-5 h-5 text-[#52794B] animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-20" data-section="cta">
          <div className={`text-center p-12 bg-[#52794B]/5 rounded-3xl backdrop-blur-sm border border-[#52794B]/10 ${visibleSections.has("cta") ? "animate-slide-up animate-delay-300" : "opacity-0"}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-[#2D3E2A] mb-6">
              Ready to Create Something <span className="text-[#52794B] italic">Amazing?</span>
            </h3>
            <p className="text-lg text-[#2D3E2A]/70 mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life through art that speaks, moves, and inspires.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className={`px-8 py-4 bg-[#52794B] hover:bg-[#3E5E38] text-[#F5F1E8] font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${visibleSections.has("cta") ? "animate-bounce animate-delay-400" : ""}`}>
                View Portfolio
              </button>
              <button className={`px-8 py-4 bg-[#F5F1E8] border-2 border-[#52794B] text-[#52794B] hover:bg-[#52794B]/5 font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${visibleSections.has("cta") ? "animate-bounce animate-delay-500" : ""}`}>
                Get In Touch
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <style jsx global>{`
        [data-nextjs-scroll-focus-boundary] div[style*="scrollbarWidth"]::-webkit-scrollbar {
          display: none;
        }
        .perspective-2000 {
          perspective: 2000px;
          perspective-origin: center top;
        }
        @keyframes fill-95 {
          to {
            width: 95%;
          }
        }
        @keyframes fill-90 {
          to {
            width: 90%;
          }
        }
        @keyframes fill-85 {
          to {
            width: 85%;
          }
        }
        @keyframes fill-88 {
          to {
            width: 88%;
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fill {
          animation-fill-mode: forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-in-right 0.6s ease-out;
        }
        .animate-fade-scale {
          animation: fade-scale 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}