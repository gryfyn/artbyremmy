"use client";
import { useState } from "react";
import {
  Calendar,
  Palette,
  Mail,
  Phone,
  User,
  DollarSign,
  Star,
  Clock,
  CheckCircle,
  Users,
  Award,
  Heart,
  MessageSquare,
  Sparkles,
  Camera,
  Brush,
  Zap,
  Shield,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";  


export default function Bookings() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    artType: "Digital",
    size: "",
    message: "",
    deadline: ""
  });
  
  const [focusedInput, setFocusedInput] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Booking submitted:", formData);
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Reset after showing success
    setTimeout(() => {
      setFormData({
        name: "", contact: "", email: "", artType: "Digital", 
        size: "", message: "", deadline: ""
      });
      setSelectedSize("");
      setShowSuccess(false);
    }, 3000);
  };

  const digitalPrices = [
    { size: "4x6", price: "20,000", popular: false, description: "Perfect for social media" },
    { size: "A4", price: "50,000", popular: true, description: "Most popular choice" },
    { size: "A3", price: "70,000", popular: false, description: "Great for framing" },
    { size: "A2", price: "100,000", popular: false, description: "Gallery quality" },
    { size: "A1", price: "200,000", popular: false, description: "Premium large format" },
  ];

  const pencilPrices = [
    { size: "4x6", price: "50,000", popular: false, description: "Intimate portrait size" },
    { size: "A4", price: "150,000", popular: true, description: "Classic portrait size" },
    { size: "A3", price: "220,000", popular: false, description: "Detailed artwork" },
    { size: "A2", price: "300,000", popular: false, description: "Museum quality" },
    { size: "A1", price: "450,000", popular: false, description: "Masterpiece size" },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely stunning work! The digital portrait captured every detail perfectly. Worth every penny!",
      artType: "Digital",
      timeAgo: "2 weeks ago",
      avatar: "👩‍💼",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "The pencil artwork exceeded my expectations. Such incredible attention to detail and shading.",
      artType: "Pencil",
      timeAgo: "1 month ago",
      avatar: "👨‍🎨",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      comment: "Professional service and breathtaking results. My family portrait is now our centerpiece!",
      artType: "Digital",
      timeAgo: "3 weeks ago",
      avatar: "👩‍🏫",
      gradient: "from-emerald-400 to-teal-500"
    }
  ];

  const features = [
    {
      icon: <Zap size={20} />,
      title: "Lightning Fast",
      description: "Most artworks completed within 5-7 days",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield size={20} />,
      title: "100% Satisfaction",
      description: "Unlimited revisions until you're happy",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Brush size={20} />,
      title: "Master Artists",
      description: "Professional artists with years of experience",
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      icon: <Award size={20} />,
      title: "Premium Quality",
      description: "High-resolution files and premium materials",
      gradient: "from-blue-400 to-cyan-500"
    },
  ];

  const currentPrices = formData.artType === "Digital" ? digitalPrices : pencilPrices;
  const selectedPrice = currentPrices.find(p => p.size === selectedSize);

  return (
    <div className="min-h-screen flex flex-col bg-[#F1E9DC] relative overflow-hidden">
      <Header />
      {/* Artistic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-br from-[#3A4D37]/8 to-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-16 w-96 h-96 bg-gradient-to-tl from-teal-400/6 to-emerald-600/6 rounded-full blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-r from-lime-400/8 to-green-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-emerald-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-teal-400/50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-lime-400/40 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <main className="flex-1 relative z-10 max-w-7xl mx-auto px-6 py-16 mt-20">
        {/* Hero Section */}
        <section className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3A4D37]/10 to-emerald-500/10 blur-3xl rounded-full transform -translate-y-4"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#3A4D37] via-emerald-600 to-[#3A4D37] bg-clip-text text-transparent">
              Commission Your
              <span className="block text-4xl md:text-5xl mt-2">Dream Artwork</span>
            </h1>
            
            {/* Artistic Divider */}
            <div className="flex items-center justify-center space-x-4 my-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#3A4D37]/40"></div>
              <Palette className="w-8 h-8 text-emerald-600" />
              <div className="w-24 h-px bg-gradient-to-r from-emerald-600 to-teal-600"></div>
              <Sparkles className="w-6 h-6 text-teal-600" />
              <div className="w-24 h-px bg-gradient-to-r from-teal-600 to-emerald-600"></div>
              <Brush className="w-8 h-8 text-emerald-600" />
              <div className="w-16 h-px bg-gradient-to-r from-[#3A4D37]/40 to-transparent"></div>
            </div>
            
            <p className="text-lg text-[#3A4D37]/70 max-w-3xl mx-auto leading-relaxed">
              Transform your vision into a masterpiece. Choose from stunning digital art or traditional pencil portraits, 
              each crafted with meticulous attention to detail and artistic excellence.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Booking Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3A4D37]/5 to-emerald-500/5 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#3A4D37]/20 p-8">
                <div className="flex items-center mb-8">
                  <Calendar className="w-7 h-7 text-emerald-600 mr-3" />
                  <h2 className="text-2xl font-bold text-[#3A4D37]">Book Your Commission</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-[#3A4D37] group-focus-within:text-emerald-600 transition-colors">
                      <User size={16} className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your artistic name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={() => setFocusedInput("name")}
                      onBlur={() => setFocusedInput("")}
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-white/80 text-[#3A4D37] placeholder-[#3A4D37]/50 transition-all duration-300 ${
                        focusedInput === "name"
                          ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-lg"
                          : "border-[#3A4D37]/20"
                      }`}
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-[#3A4D37] group-focus-within:text-emerald-600 transition-colors">
                      <Phone size={16} className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+256 700 000 000"
                      value={formData.contact}
                      onChange={(e) => handleInputChange('contact', e.target.value)}
                      onFocus={() => setFocusedInput("contact")}
                      onBlur={() => setFocusedInput("")}
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-white/80 text-[#3A4D37] placeholder-[#3A4D37]/50 transition-all duration-300 ${
                        focusedInput === "contact"
                          ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-lg"
                          : "border-[#3A4D37]/20"
                      }`}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6 group">
                  <label className="block text-sm font-semibold mb-2 text-[#3A4D37] group-focus-within:text-emerald-600 transition-colors">
                    <Mail size={16} className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#3A4D37]/20 rounded-xl bg-white/80 text-[#3A4D37] placeholder-[#3A4D37]/50 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-[#3A4D37] group-focus-within:text-emerald-600 transition-colors">
                      <Palette size={16} className="inline mr-2" />
                      Art Style *
                    </label>
                    <select
                      value={formData.artType}
                      onChange={(e) => {
                        handleInputChange('artType', e.target.value);
                        setSelectedSize(""); // Reset size when changing art type
                      }}
                      className="w-full px-4 py-3 border-2 border-[#3A4D37]/20 rounded-xl bg-white/80 text-[#3A4D37] focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                      required
                    >
                      <option value="Digital">Digital Art</option>
                      <option value="Pencil">Pencil Portrait</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-[#3A4D37] group-focus-within:text-emerald-600 transition-colors">
                      <Calendar size={16} className="inline mr-2" />
                      Deadline
                    </label>
                    <input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => handleInputChange('deadline', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-[#3A4D37]/20 rounded-xl bg-white/80 text-[#3A4D37] focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="mb-8 group">
                  <label className="block text-sm font-semibold mb-2 text-[#3A4D37] group-focus-within:text-emerald-600 transition-colors">
                    <MessageSquare size={16} className="inline mr-2" />
                    Project Details
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Describe your vision... What story do you want your artwork to tell?"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#3A4D37]/20 rounded-xl bg-white/80 text-[#3A4D37] placeholder-[#3A4D37]/50 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || showSuccess}
                  className="group relative w-full py-4 font-semibold text-white rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-full bg-gradient-to-r from-white/10 to-transparent transition-all duration-700"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating Magic...</span>
                      </>
                    ) : showSuccess ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Booking Confirmed!</span>
                      </>
                    ) : (
                      <>
                        <DollarSign className="w-5 h-5" />
                        <span>Submit Commission</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Section - 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-[#3A4D37] to-emerald-800 rounded-2xl shadow-2xl p-8 text-[#F1E9DC] border border-[#3A4D37]/30">
                <div className="flex items-center mb-8">
                  <DollarSign className="w-7 h-7 text-emerald-400 mr-3" />
                  <h2 className="text-2xl font-bold">Pricing & Sizes</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-3 ${formData.artType === 'Digital' ? 'bg-blue-400' : 'bg-gray-400'}`}></div>
                      {formData.artType} Art Pricing
                    </h3>
                    
                    <div className="space-y-3">
                      {currentPrices.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setSelectedSize(item.size);
                            handleInputChange('size', item.size);
                          }}
                          className={`group cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                            selectedSize === item.size
                              ? "border-emerald-400 bg-emerald-400/10 shadow-lg"
                              : item.popular
                              ? "border-[#F1E9DC]/40 bg-[#F1E9DC]/10 hover:border-emerald-400/50"
                              : "border-[#F1E9DC]/20 bg-[#F1E9DC]/5 hover:border-[#F1E9DC]/40"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <span className="font-semibold text-lg">{item.size}</span>
                              {item.popular && (
                                <span className="ml-2 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold rounded-full text-white">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <span className="font-bold text-xl text-emerald-400">{item.price} UGX</span>
                          </div>
                          <p className="text-sm text-[#F1E9DC]/70">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedPrice && (
                    <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-400/30">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                        Selected Package
                      </h4>
                      <div className="flex justify-between items-center">
                        <span>{selectedPrice.size} {formData.artType} Art</span>
                        <span className="font-bold text-xl text-emerald-400">{selectedPrice.price} UGX</span>
                      </div>
                      <p className="text-sm text-[#F1E9DC]/80 mt-1">{selectedPrice.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#3A4D37] via-emerald-600 to-[#3A4D37] bg-clip-text text-transparent">
              Why Choose Our Art?
            </h2>
            <p className="text-lg text-[#3A4D37]/70 max-w-2xl mx-auto">
              Experience the perfect blend of artistic vision and professional excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-[#3A4D37]/20 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-[#3A4D37] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#3A4D37]/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#3A4D37] via-emerald-600 to-[#3A4D37] bg-clip-text text-transparent">
              Client Masterpieces
            </h2>
            <p className="text-lg text-[#3A4D37]/70 max-w-2xl mx-auto">
              See what our clients say about their commissioned artworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="group relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[#3A4D37]/20 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${review.gradient} text-white text-lg mr-4 shadow-lg`}>
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#3A4D37]">{review.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#3A4D37]/80 italic mb-4 leading-relaxed">
                    {review.comment}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide bg-emerald-100 px-3 py-1 rounded-full">
                      {review.artType} Art
                    </span>
                    <span className="text-xs text-[#3A4D37]/60">{review.timeAgo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}