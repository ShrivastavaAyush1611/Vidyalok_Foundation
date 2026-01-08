"use client";
import { motion } from "framer-motion";
import { Heart, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden"
      id="/"
    >
      {/* High-Performance Optimized Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Underprivileged children smiling at a Vidyalok learning center"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#4F7957]/95 via-[#4F7957]/80 to-white/10" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight font-serif mb-6"
          >
            Together Creating
            <br />
            <span className="text-[#E67E22]">Hope for Every Life</span>
          </motion.h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-xl leading-relaxed">
            Vidyalok Welfare Foundation is a non-profit organization committed
            to uplifting underprivileged communities through education,
            healthcare, women empowerment, and social welfare initiatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button className="w-full sm:w-auto bg-[#E67E22] hover:bg-[#d35400] text-white px-8 py-6 rounded-xl font-bold text-lg shadow-lg group">
              <Heart size={20} className="mr-2 group-hover:scale-125 transition-transform" fill="white" />
              Donate Now
            </Button> */}
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 rounded-xl font-bold text-lg bg-[#e48e43]"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
