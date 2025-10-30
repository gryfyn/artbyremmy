"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const categories = [
  { name: "Digital", folder: "digital" },
  { name: "Character Design", folder: "characterdesign" },
  { name: "Mural Streetwork", folder: "muralstreetwork" },
  { name: "Pen & Pencil", folder: "penpencil" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch images when category changes
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/getImages?folder=${activeCategory.folder}`, {
          cache: "no-store",
        });

        // If the request failed
        if (!res.ok) {
          const text = await res.text();
          console.error("Bad response from API:", text);
          throw new Error(`Failed to fetch images (${res.status})`);
        }

        const data = await res.json();

        // Defensive: only accept an array
        if (!Array.isArray(data)) {
          console.error("Unexpected API response:", data);
          setError(data?.error || "Unexpected server response");
          setImages([]);
          return;
        }

        setImages(data);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images. Please try again later.");
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [activeCategory]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-center bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-amber-300/20 to-rose-400/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-bl from-cyan-400/20 to-purple-400/20 blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3A4D37] via-teal-500 via-purple-500 to-[#5A7A52] mb-10 tracking-tight">
            Gallery
          </h1>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.folder}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-md ${
                  activeCategory.folder === cat.folder
                    ? "bg-gradient-to-r from-[#3A4D37] via-teal-600 to-[#5A7A52] text-white scale-105"
                    : "bg-white text-[#3A4D37] border border-gray-300 hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {loading ? (
          <div className="text-center py-40 text-gray-500 animate-pulse text-lg">
            Loading {activeCategory.name} art...
          </div>
        ) : error ? (
          <div className="text-center py-40 text-red-500 font-medium">
            {error}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-40 text-gray-400">
            No artworks found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((img) => (
              <div
                key={img.id || img.public_id || img.url}
                className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-square"
              >
                <Image
                  src={img.url}
                  alt={img.title || "Artwork"}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100"
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <p className="text-white text-sm md:text-base font-medium px-3 text-center">
                    {img.title?.replace(/_/g, " ") || "Untitled"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
