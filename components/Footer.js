"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";
import Link from "next/link";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Programs", href: "#programs" },
    { label: "Get Involved", href: "#involved" },
    { label: "Success Stories", href: "#" },
    { label: "News & Events", href: "#" },
  ];

  const programLinks = [
    { label: "Education for All", href: "#" },
    { label: "Women Empowerment", href: "#" },
    { label: "Healthcare Initiatives", href: "#" },
    { label: "Skill Development", href: "#" },
    { label: "Community Outreach", href: "#" },
  ];

  return (
    <footer className="bg-[#132219] text-white pt-20 pb-10 overflow-hidden" id='contact'>
      <div className="container mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-2 rounded-xl inline-block">
              {/* Replace with your actual logo path */}
              <img src="/logo.jpeg" alt="Vidyalok Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering underprivileged communities through quality education and holistic development programs.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E67E22] transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold font-serif">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#E67E22] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Our Programs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold font-serif">Our Programs</h4>
            <ul className="space-y-4">
              {programLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#E67E22] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold font-serif">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin className="text-[#E67E22] shrink-0" size={22} />
                <span className="text-gray-400 text-sm">
                  CLP ward , katni , Madhya Pradesh<br />India - 483501
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-[#E67E22] shrink-0" size={20} />
                <span className="text-gray-400">+91 8319783509</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-[#E67E22] shrink-0" size={20} />
                <span className="text-gray-400">vidyalokwelfarefoundation@gmail.com</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Vidyalok Welfare Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;