"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  // Replace these with your actual image paths
  const photos = [
    {
      id: 1,
      src: "Photos/2.jpeg",
      alt: "Community Help",
    },
    {
      id: 2,
      src: "Photos/22.jpeg",
      alt: "Blood Donation",
    },
    {
      id: 3,
      src: "Photos/3.jpeg",
      alt: "Free Education",
    },
    {
      id: 4,
      src: "Photos/26.jpeg",
      alt: "Drawing Compitition ",
    },
    {
      id: 5,
      src: "Photos/6.jpeg",
      alt: "Blanket Distribution",
    },
    {
      id: 6,
      src: "Photos/16.jpeg",
      alt: "Holi Celebration",
    },
    {
      id: 7,
      src: "Photos/17.jpeg",
      alt: "Lake Cleaning",
    },
    {
      id: 8,
      src: "Photos/19.jpeg",
      alt: "Plantation",
    },
    {
      id: 9,
      src: "Photos/21.jpeg",
      alt: "Food Distribution",
    },
    {
      id: 10,
      src: "Photos/1.jpeg",
      alt: "Night Life",
    },
    {
      id: 11,
      src: "Photos/0.jpeg",
    },
    {
      id: 12,
      src: "Photos/15.jpeg",
    },
    {
      id: 13,
      src: "Photos/14.jpeg",
    },
    {
      id: 14,
      src: "Photos/13.jpeg",
      alt: "Our Team",
    },
    {
      id: 15,
      src: "Photos/12.jpeg",
    },
    {
      id: 16,
      src: "Photos/4.jpeg",
    },
    {
      id: 17,
      src: "/women.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Gallery Header */}
      <section className="pt-32 pb-12 bg-[#F9FBF9]">
        <div className="container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#4F7957] font-bold uppercase tracking-widest text-sm"
          >
            Visual Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mt-2"
          >
            Our Photo Gallery
          </motion.h1>
          <div className="w-20 h-1 bg-[#E67E22] mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-[24px] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  {photo.alt && (
                    <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.alt}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;
