"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/logo.jpeg";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 md:space-y-8">
            <header>
              <span className="bg-[#E9F3ED] text-[#4F7957] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest">About Vidyalok Foundation</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 font-serif leading-tight">Building Brighter Futures Through Welfare</h2>
            </header>

            <div className="text-slate-600 leading-relaxed text-base md:text-lg space-y-4">
              <p>Vidyalok Welfare Foundation was established with a mission to uplift underserved communities by addressing their most fundamental needs. We work at the grassroots level to create sustainable change through education, healthcare support, women empowerment, and community welfare initiatives.</p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
  "Inclusive education & child welfare",
  "Healthcare & nutrition support",
  "Women empowerment & livelihood programs",
  "Community development & relief initiatives"
]
.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold text-sm md:text-base">
                  <CheckCircle2 className="text-[#4F7957] shrink-0" size={20} /> {item}
                </li>
              ))}
            </ul>

            <Button className="w-full sm:w-auto bg-[#347A50] hover:bg-[#285E3E] text-white px-8 py-6 rounded-xl font-bold shadow-md transition-transform hover:scale-105">
              Learn More About Us
            </Button>
          </motion.div>

          <div className="relative mt-10 lg:mt-0">
            <div className="bg-white p-6 md:p-10 rounded-[30px] md:rounded-[40px] shadow-2xl border border-slate-50 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 bg-slate-50 rounded-2xl p-4">
                <Image src={logo} alt="Vidyalok Welfare Foundation Logo" fill className="object-contain p-4" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 font-serif">Vidyalok Welfare Foundation</h3>
              <p className="text-[#4F7957] font-medium italic mt-2">Nurturing minds, transforming lives</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6">
              <div className="bg-[#E9F3ED] p-5 md:p-6 rounded-[25px] space-y-2">
                <Target className="text-[#4F7957]" size={24} />
                <h4 className="font-bold text-slate-900 text-sm md:text-base">Our Mission</h4>
                <p className="text-xs md:text-sm text-slate-600">Accessible, quality education for every child in need.</p>
              </div>
              <div className="bg-[#FEF4E9] p-5 md:p-6 rounded-[25px] space-y-2">
                <Eye className="text-[#E67E22]" size={24} />
                <h4 className="font-bold text-slate-900 text-sm md:text-base">Our Vision</h4>
                <p className="text-xs md:text-sm text-slate-600">An India with equal opportunities to learn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;