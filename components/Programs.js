"use client";
import React from 'react';
import { motion } from "framer-motion";
import { BookOpen, Users, HeartPulse, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  { icon: <BookOpen />, title: "Education for All", desc: "Providing quality education through learning centers and scholarships.", img: "/education.jpeg" },
  { icon: <Users />, title: "Women Empowerment", desc: "Skill development to help women become financially self-sufficient.", img: "/women.jpeg" },
  { icon: <HeartPulse />, title: "Healthcare Initiatives", desc: "Organizing health camps and awareness for communities in need.", img: "/health.jpeg" },
];

const Programs = () => {
  return (
    <section id="programs" className="py-16 md:py-24 bg-[#F9FBF9] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="bg-[#E9F3ED] text-[#4F7957] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Our Mission in Action</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 font-serif">Our Programs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <article key={index} className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image src={program.img} alt={`${program.title} by Vidyalok`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 font-serif">{program.title}</h3>
                <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">{program.desc}</p>
                <h4 className="inline-flex items-center gap-2 text-[#4F7957] font-bold hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;