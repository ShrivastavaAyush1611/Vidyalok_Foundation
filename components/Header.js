"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Impacts", href: "#our-impacts" },
  { label: "Our Programs", href: "#programs" },
  { label: "Contact", href: "#contact" },
  { label: "Gallery", href: "/gallery" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2 md:py-3" : "bg-transparent py-4 md:py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Vidyalok Education Foundation Home">
          <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-lg">
            <Image src={logo} alt="Vidyalok Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Primary Desktop Navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={`text-xs xl:text-sm font-bold uppercase tracking-widest transition-colors ${scrolled ? "text-slate-700 hover:text-[#4F7957]" : "text-white hover:text-white/80"}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 rounded-md transition-colors" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-expanded={isOpen} 
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className={scrolled ? "text-black" : "text-white"} size={28} /> : <Menu className={scrolled ? "text-black" : "text-white"} size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-800 text-lg font-semibold py-2 hover:text-[#4F7957] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}