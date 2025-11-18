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
import { Source_Sans_3, PT_Serif } from "next/font/google";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className={`relative bg-gradient-to-br from-[#2D3E2A] via-[#3A4D37] to-[#52794B] text-[#F5F1E8] overflow-hidden ${ptSerif.className}`}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-[#F5F1E8]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-gradient-to-tl from-[#F5F1E8]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5F1E8]/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative group">
              <h3 className="text-4xl font-bold tracking-wide">
                <span className="text-[#F5F1E8]/80">Art</span>{" "}
                <span className="text-[#F5F1E8]/80">By</span>{" "}
                <span className="text-[#F5F1E8]">Remmy</span>
                
              </h3>
              <div className="mt-2 h-1 w-24 bg-[#F5F1E8]/30 rounded-full"></div>
            </div>
            
            <p className="text-lg text-[#F5F1E8]/70 max-w-lg leading-relaxed">
              Transforming visions into{" "}
              <span className="text-[#F5F1E8] font-medium">timeless art</span>{" "}
              that speaks to the soul and inspires wonder.
            </p>
            
            {/* Quote Section */}
            <div className="p-6 bg-[#F5F1E8]/5 backdrop-blur-sm rounded-2xl border border-[#F5F1E8]/10">
              <p className="text-[#F5F1E8]/80 italic text-base leading-relaxed">
                Where creativity meets craftsmanship, and every stroke tells a story.
              </p>
              <div className="mt-3 w-16 h-0.5 bg-[#F5F1E8]/30 rounded-full"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-[#F5F1E8] mb-6 text-lg relative pb-2">
                Explore
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F5F1E8]/40 rounded-full"></div>
              </h4>
              
              <ul className="space-y-4">
                {["About", "Gallery", "Bookings", "Contact"].map((item) => (
                  <li key={item} className="group">
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="text-[#F5F1E8]/70 hover:text-[#F5F1E8] transition-all duration-300 text-base inline-block relative"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-px bg-[#F5F1E8]/50 transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#F5F1E8] mb-6 text-lg relative pb-2">
                Legal
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F5F1E8]/40 rounded-full"></div>
              </h4>
              
              <ul className="space-y-4">
                {[
                  { name: "Terms & Conditions", href: "/terms" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Cookie Policy", href: "/cookies" }
                ].map((item) => (
                  <li key={item.name} className="group">
                    <Link 
                      href={item.href}
                      className="text-[#F5F1E8]/70 hover:text-[#F5F1E8] transition-all duration-300 text-base inline-block relative"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-px bg-[#F5F1E8]/50 transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-[#F5F1E8] text-lg mb-6 relative pb-2">
                Connect
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F5F1E8]/40 rounded-full"></div>
              </h4>
              
              {/* Social Icons Grid */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  
                  { icon: FaInstagram, href: "https://www.instagram.com/aderoremmy/" },
                  
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/remmyadero/" },
                  
                  { icon: FaYoutube, href: "https://www.youtube.com/@racartstudios/featured" }
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="group p-4 rounded-xl bg-[#F5F1E8]/5 hover:bg-[#F5F1E8]/10 border border-[#F5F1E8]/10 hover:border-[#F5F1E8]/20 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                  >
                    <Icon 
                      size={20} 
                      className="text-[#F5F1E8]/70 group-hover:text-[#F5F1E8] transition-colors duration-300" 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-6 bg-[#F5F1E8]/5 backdrop-blur-sm rounded-2xl border border-[#F5F1E8]/10">
              <h5 className="text-[#F5F1E8] font-bold text-base mb-3">
                Stay Inspired
              </h5>
              
              <p className="text-[#F5F1E8]/70 text-sm mb-4">
                Join our creative journey and receive exclusive updates.
              </p>
              
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email..." 
                  className="w-full px-4 py-3 bg-[#F5F1E8]/10 border border-[#F5F1E8]/20 rounded-xl text-[#F5F1E8] placeholder-[#F5F1E8]/50 text-sm focus:outline-none focus:border-[#F5F1E8]/40 transition-all duration-300 pr-24"
                />
                <button className="absolute right-2 top-2 px-4 py-1.5 bg-[#F5F1E8]/90 hover:bg-[#F5F1E8] rounded-lg text-[#2D3E2A] text-sm font-medium transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#F5F1E8]/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-[#F5F1E8]/60 text-sm">
              © {new Date().getFullYear()} Remmy Adero. 
              <span className="text-[#F5F1E8]/80"> Crafted with passion</span>
            </p>
            
            <div className="flex items-center gap-8">
              {["Sitemap", "Accessibility", "RSS Feed"].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-[#F5F1E8]/60 hover:text-[#F5F1E8] text-sm transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-px bg-[#F5F1E8]/50 transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F5F1E8]/30 to-transparent"></div>
    </footer>
  );
}