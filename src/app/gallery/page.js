"use client";

import { useState, useEffect, useRef } from "react";
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
  const [visibleRows, setVisibleRows] = useState(new Set());
  const observerRef = useRef(null);

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

  // Set up Intersection Observer for row animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rowIndex = entry.target.getAttribute("data-row");
            setVisibleRows((prev) => new Set([...prev, rowIndex]));
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe row elements
  useEffect(() => {
    const rows = document.querySelectorAll("[data-row]");
    rows.forEach((row) => {
      if (observerRef.current) {
        observerRef.current.observe(row);
      }
    });

    return () => {
      rows.forEach((row) => {
        if (observerRef.current) {
          observerRef.current.unobserve(row);
        }
      });
    };
  }, [images]);

  // Reset visible rows when category changes
  useEffect(() => {
    setVisibleRows(new Set());
  }, [activeCategory]);

  // Group images into rows (4 per row for lg screens)
  const getRowIndex = (index) => Math.floor(index / 4);
  const getItemIndexInRow = (index) => index % 4;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-center bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-teal-300/10 to-purple-300/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-bl from-purple-300/10 to-teal-300/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3A4D37] via-teal-600 to-purple-600 mb-10 tracking-tight">
            Gallery
          </h1>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
            {categories.map((cat) => (
              <button
                key={cat.folder}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory.folder === cat.folder
                    ? "bg-gradient-to-r from-[#3A4D37] to-teal-700 text-white shadow-lg scale-105"
                    : "bg-white text-[#3A4D37] border-2 border-gray-200 hover:border-teal-300 hover:shadow-md"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full px-8 md:px-16 lg:px-18 overflow-hidden">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0">
            {images.map((img, index) => {
              const rowIndex = getRowIndex(index);
              const itemIndex = getItemIndexInRow(index);
              const isVisible = visibleRows.has(String(rowIndex));
              const isOddRow = rowIndex % 2 === 1;
              
              // Alternate animation direction: even rows from right, odd rows from left
              const animationDelay = `${itemIndex * 0.1}s`;
              const translateDirection = isOddRow ? 'translate-x-[-100px]' : 'translate-x-[100px]';

              return (
                <div
                  key={img.id || img.public_id || img.url}
                  data-row={rowIndex}
                  className={`relative group overflow-hidden bg-gray-100 aspect-[3/4] transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${translateDirection}`
                  }`}
                  style={{ transitionDelay: isVisible ? animationDelay : '0s' }}
                >
                  <Image
                    src={img.url}
                    alt={img.title || "Artwork"}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-100"
                    onLoadingComplete={(image) =>
                      image.classList.remove("opacity-0")
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <p className="text-white text-sm md:text-base font-semibold px-4 text-center">
                      {img.title?.replace(/_/g, " ") || "Untitled"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}