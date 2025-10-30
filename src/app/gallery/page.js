"use client";

import React from "react";
import artworks from "../../../data/artworks";
import ArtCard from "../../../components/ArtCard";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Gallery = () => {
  const sortedArtworks = [...artworks].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const digitalArt = sortedArtworks.filter((art) => art.category === "Digital");
  const pencilArt = sortedArtworks.filter((art) => art.category === "Pencil Work");

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${mm} | ${dd} | ${yyyy}`;
  };

  const renderArtRow = (artList, accentColor = "from-amber-400/20 to-rose-400/20") => (
    <div
      className="flex overflow-x-auto pb-8 gap-8 scroll-smooth md:gap-10 hide-scrollbar"
      style={{
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      }}
    >
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {artList.map((art, index) => (
        <div
          key={index}
          className="flex-shrink-0 text-center md:text-left scroll-snap-align-start group cursor-pointer"
        >
          <div className="relative transform transition-all duration-700 hover:scale-110 hover:-rotate-2 hover:z-10">
            {/* Dynamic glowing background */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${accentColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}></div>
            
            {/* Multi-layered shadow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-[#3A4D37]/30 via-purple-500/20 to-[#5A7A52]/30 rounded-2xl blur opacity-50 group-hover:opacity-80 transition-all duration-500"></div>
            
            {/* Border gradient animation */}
            <div className="relative bg-gradient-to-r from-[#3A4D37] via-teal-500 to-[#5A7A52] p-[2px] rounded-2xl group-hover:animate-spin-slow">
              <div className="bg-white rounded-2xl">
                <ArtCard image={art.image} alt={art.title} date={formatDate(art.date)} />
              </div>
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-150"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const SectionHeader = ({ title, subtitle, quote, author, bgGradient = "from-[#3A4D37]/10 via-purple-500/5 to-[#5A7A52]/10" }) => (
    <div className="relative mb-16 overflow-hidden">
      {/* Animated background waves */}
      <div className={`absolute inset-0 bg-gradient-to-r ${bgGradient} transform -skew-y-1`}>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-transparent animate-pulse"></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-rose-300/20 rounded-full blur-2xl animate-bounce delay-300"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-300/20 to-purple-300/20 rounded-full blur-2xl animate-bounce delay-700"></div>
      
      <div className="relative z-10 text-center py-12">
        <div className="inline-block relative group">
          {/* Title with rainbow reflection */}
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3A4D37] via-teal-600 via-purple-600 to-[#5A7A52] mb-6 tracking-tight filter drop-shadow-sm">
            {title}
          </h2>
          
          {/* Animated underline with multiple colors */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-amber-400 via-rose-400 via-cyan-400 to-purple-400 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A4D37] to-[#5A7A52] rounded-full animate-pulse"></div>
          </div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 text-5xl md:text-7xl font-black text-[#3A4D37] opacity-20 blur-sm group-hover:opacity-40 transition-all duration-500">
            {title}
          </div>
        </div>
        
        {subtitle && (
          <div className="mt-8">
            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 font-bold tracking-wider uppercase">
              {subtitle}
            </p>
          </div>
        )}
        
        {quote && (
          <div className="max-w-4xl mx-auto mt-12 relative">
            {/* Quote background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-amber-50/50 to-rose-50/50 rounded-3xl backdrop-blur-sm border border-gradient-to-r border-[#3A4D37]/20"></div>
            
            {/* Decorative quote marks */}
            <div className="absolute -left-6 -top-4 text-8xl text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-rose-400 font-serif opacity-60"></div>
            <div className="absolute -right-6 -bottom-4 text-8xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-400 font-serif opacity-60 rotate-180"></div>
            
            <div className="relative p-10">
              <p className="text-xl md:text-2xl italic text-[#3A4D37] font-light leading-relaxed">
                {quote}
              </p>
              {author && (
                <div className="mt-6">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#3A4D37] to-teal-500 mx-auto mb-3"></div>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A7A52] to-purple-600 font-semibold text-sm tracking-widest uppercase">
                    {author}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const ComingSoonSection = ({ title, description, icon, gradientFrom, gradientTo, accentColor }) => (
    <div className="relative group h-full">
      {/* Multi-layered background effects */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-3xl transform rotate-3 group-hover:rotate-1 transition-all duration-700 opacity-80`}></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-white/90 via-white/70 to-white/90 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-all duration-700"></div>
      
      {/* Floating particles */}
      <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${accentColor} rounded-full opacity-60 animate-ping`}></div>
      <div className={`absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r ${accentColor} rounded-full opacity-80 animate-ping delay-500`}></div>
      
      <div className="relative bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col justify-center">
        <div className="text-center">
          {/* Animated icon with gradient background */}
          <div className="relative inline-block mb-8">
            <div className={`absolute inset-0 bg-gradient-to-r ${accentColor} rounded-2xl blur-xl opacity-30 animate-pulse`}></div>
            <div className="relative text-7xl p-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          
          {/* Title with gradient text */}
          <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3A4D37] to-[#5A7A52] mb-6 group-hover:from-teal-600 group-hover:to-purple-600 transition-all duration-500">
            {title}
          </h3>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto mb-8">
            {description}
          </p>
          
          {/* Animated button */}
          <div className="relative inline-block">
            <div className={`absolute inset-0 bg-gradient-to-r ${accentColor} rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse`}></div>
            <div className="relative px-8 py-4 bg-gradient-to-r from-[#3A4D37] via-teal-600 to-[#5A7A52] text-white rounded-full text-sm font-bold tracking-wider uppercase shadow-lg group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              Coming Soon
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      
      {/* Hero Section with Dynamic Background */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3A4D37]/10 via-teal-500/5 via-purple-500/5 via-rose-500/5 to-[#5A7A52]/10"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-amber-400/20 to-rose-400/20 animate-pulse blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-gradient-to-l from-cyan-400/20 to-purple-400/20 animate-pulse delay-1000 blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-teal-400/30 to-[#3A4D37]/30 animate-bounce delay-500 blur-lg"></div>
          <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-gradient-to-bl from-purple-400/20 to-rose-400/20 animate-bounce delay-700 blur-lg"></div>
        </div>
        
        {/* Main title */}
        <div className="relative z-10 text-center px-4">
          <div className="relative inline-block">
            {/* Main title with rainbow gradient */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3A4D37] via-teal-500 via-purple-500 via-rose-500 to-[#5A7A52] mb-8 tracking-tight filter drop-shadow-lg">
              Gallery
            </h1>
            
            {/* Glowing shadow effect */}
            <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black text-[#3A4D37] opacity-10 blur-lg">
              Gallery
            </div>
          </div>
          
          {/* Animated divider */}
          <div className="relative w-48 h-2 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-rose-400 via-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A4D37] to-[#5A7A52] rounded-full opacity-80"></div>
          </div>
          
          <p className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-[#5A7A52] to-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            A curated collection of artistic expressions across digital and traditional mediums
          </p>
        </div>
      </div>

      <div className="px-4 py-20 max-w-7xl mx-auto">
        
        {/* Digital Art Section */}
        <SectionHeader
          title="Digital Art"
          bgGradient="from-amber-400/10 via-rose-400/5 to-purple-400/10"
          quote="The digital pieces capture emotion and imagination in ways I never thought possible. Every stroke feels intentional, and the colors breathe life into the canvas. Truly a modern artist with a timeless touch."
          author="A grateful collector"
        />
        <div className="mb-24">
          {renderArtRow(digitalArt, "from-amber-400/30 to-rose-400/30")}
        </div>

        {/* Pencil Work Section */}
        <SectionHeader
          title="Pencil Work"
          bgGradient="from-cyan-400/10 via-teal-400/5 to-[#3A4D37]/10"
          quote="The pencil work is nothing short of breathtaking. The attention to detail, the shading, the raw texture—it's like the soul of the subject is etched right onto the paper. I could stare at these for hours."
          author="A grateful admirer"
        />
        <div className="mb-24">
          {renderArtRow(pencilArt, "from-cyan-400/30 to-teal-400/30")}
        </div>

        {/* Coming Soon Sections */}
        <div className="mb-20">
          <SectionHeader
            title="More to Explore"
            subtitle="Expanding Horizons"
            bgGradient="from-purple-400/10 via-rose-400/5 to-amber-400/10"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ComingSoonSection
              title="YouTube Animations"
              description="Dynamic animated stories and characters brought to life through motion and creativity."
              icon="🎬"
              gradientFrom="from-red-400/20"
              gradientTo="to-rose-400/20"
              accentColor="from-red-400 to-rose-400"
            />
            
            <ComingSoonSection
              title="Murals"
              description="Large-scale artistic expressions that transform spaces and inspire communities."
              icon="🎨"
              gradientFrom="from-cyan-400/20"
              gradientTo="to-teal-400/20"
              accentColor="from-cyan-400 to-teal-400"
            />
            
            <ComingSoonSection
              title="Character Design"
              description="Unique personalities and creatures crafted with distinctive style and imagination."
              icon="👾"
              gradientFrom="from-purple-400/20"
              gradientTo="to-indigo-400/20"
              accentColor="from-purple-400 to-indigo-400"
            />
          </div>
        </div>

        {/* Final Artistic Flourish */}
        <div className="text-center py-20">
          <div className="relative inline-block">
            {/* Multi-layered glowing orb */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-rose-400 via-cyan-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A4D37] to-[#5A7A52] rounded-full blur-xl opacity-50 animate-pulse delay-500"></div>
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-full p-12 shadow-2xl">
              <div className="text-6xl animate-bounce">✨</div>
            </div>
          </div>
          
          <div className="mt-10 max-w-lg mx-auto">
            <p className="text-2xl font-light italic text-transparent bg-clip-text bg-gradient-to-r from-[#3A4D37] via-teal-600 to-[#5A7A52] leading-relaxed">
              Art is not what you see, but what you make others see.
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-purple-400 mx-auto mt-6"></div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};


export default Gallery;