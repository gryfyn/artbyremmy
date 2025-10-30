"use client";
import { useState, useEffect } from "react";
import { Menu, X, Home, User, Image, Calendar, Mail } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navigationItems = [
    { name: "Home", href: "/", icon: Home, color: "from-amber-400 to-amber-500" },
    { name: "About", href: "/about", icon: User, color: "from-rose-400 to-rose-500" },
    { name: "Gallery", href: "/gallery", icon: Image, color: "from-emerald-400 to-emerald-500" },
    { name: "Bookings", href: "/bookings", icon: Calendar, color: "from-purple-400 to-purple-500" },
    { name: "Contact", href: "/contacts", icon: Mail, color: "from-orange-400 to-orange-500" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-[#F1E9DC]/95 backdrop-blur-lg py-2 shadow-md border-b border-[#3A4D37]/20"
            : "bg-[#F1E9DC]/90 backdrop-blur-lg py-4"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-to-br from-[#3A4D37]/5 via-[#3A4D37]/8 to-[#3A4D37]/5 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute top-0 right-1/3 w-32 h-32 bg-gradient-to-bl from-[#3A4D37]/8 via-[#3A4D37]/5 to-[#3A4D37]/6 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3A4D37]/30 to-transparent"></div>

        <div className="relative max-w-6xl mx-auto flex justify-between items-center px-6">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden flex items-center space-x-3">
              {/* signature image */}
              <img
                src="/signature.png"
                alt="Signature"
                className={`transition-all duration-500 ${
                  isScrolled ? "h-10 lg:h-12" : "h-14 lg:h-16"
                } object-contain`}
              />

              <div className="relative z-10 flex flex-col items-start">
                <div className="relative">
                  <h1
                    className={`font-serif font-medium tracking-wide transition-all duration-500 bg-gradient-to-r from-[#3A4D37] via-[#3A4D37]/80 to-[#3A4D37] bg-clip-text text-transparent group-hover:from-[#3A4D37] group-hover:via-[#3A4D37]/90 group-hover:to-[#3A4D37] ${
                      isScrolled ? "text-xl" : "text-2xl lg:text-3xl"
                    }`}
                  >
                    Art By Remmy
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#3A4D37] via-[#3A4D37]/80 to-[#3A4D37] transition-all duration-700 rounded-full"></div>
                  </h1>
                </div>

                <div className="relative mt-0.5">
                  <div
                    className={`font-light tracking-[0.2em] text-[#3A4D37]/70 group-hover:text-[#3A4D37] transition-all duration-400 relative ${
                      isScrolled ? "text-[0.65rem] opacity-80" : "text-xs"
                    }`}
                  >
                    VISUAL ARTIST & CREATIVE
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3A4D37]/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="relative group p-3 rounded-lg transition-all duration-400 hover:bg-[#3A4D37]/10"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A4D37]/15 to-[#3A4D37]/15 rounded-lg scale-0 group-hover:scale-105 transition-all duration-400 blur-lg"></div>

            <div className="relative z-10 w-6 h-6 flex items-center justify-center">
              <div
                className={`transition-all duration-400 ${
                  isMobileMenuOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#3A4D37] transition-colors duration-300" />
                ) : (
                  <Menu className="w-5 h-5 text-[#3A4D37] group-hover:text-[#3A4D37]/80 transition-colors duration-300" />
                )}
              </div>
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-[#F1E9DC]/98 backdrop-blur-lg shadow-lg border-b border-[#3A4D37]/20 ${
            isScrolled ? "pt-16" : "pt-20"
          }`}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3A4D37]/15 via-[#3A4D37]/25 to-[#3A4D37]/15 blur-sm"></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-[#3A4D37]/5 via-[#3A4D37]/8 to-[#3A4D37]/5 rounded-full blur-2xl"></div>
          </div>

          <nav className="relative max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-center space-x-6">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative flex items-center justify-center p-2 rounded-lg transition-all duration-400 hover:bg-white/40 hover:shadow-lg hover:shadow-[#3A4D37]/10 border border-transparent hover:border-[#3A4D37]/20"
                    onClick={closeMobileMenu}
                    style={{ animationDelay: `${index * 80}ms` }}
                    title={item.name}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-lg scale-0 group-hover:scale-105 transition-all duration-500 opacity-20`}
                    ></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-lg scale-0 group-hover:scale-110 transition-all duration-700 opacity-10 blur-lg`}
                    ></div>

                    <div className="relative z-10 flex items-center justify-center">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full scale-0 group-hover:scale-125 transition-all duration-600 blur-md opacity-40`}
                        ></div>
                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-[#F1E9DC]/60 group-hover:from-white group-hover:to-white/90 transition-all duration-400 shadow-md group-hover:shadow-lg border border-white/50 group-hover:border-white/80">
                          <IconComponent className="w-6 h-6 text-[#3A4D37] group-hover:text-[#3A4D37]/80 transition-all duration-400 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/30 transition-all duration-400">
                      <div className="absolute inset-0 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 animate-ping"></div>
                    </div>

                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-6 h-0.5 bg-gradient-to-r ${item.color} transition-all duration-500 rounded-full`}
                    ></div>
                  </a>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-[#3A4D37]/30 to-transparent"></div>
                <div className="flex space-x-1">
                  <div className="w-0.5 h-0.5 bg-gradient-to-br from-[#3A4D37] to-[#3A4D37]/60 rounded-full animate-pulse"></div>
                  <div
                    className="w-0.5 h-0.5 bg-gradient-to-br from-[#3A4D37]/60 to-[#3A4D37] rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-0.5 h-0.5 bg-gradient-to-br from-[#3A4D37] to-[#3A4D37]/60 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-[#3A4D37]/30 to-transparent"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#3A4D37]/10 backdrop-blur-sm z-30 transition-all duration-500"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}
