"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronDown, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  // This state tracks the chosen subject from your dropdown
  const [subject, setSubject] = useState("General Inquiry");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Inclusion of 'subject' state here ensures it's sent to your email API
        body: JSON.stringify({ 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: subject 
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setSubject("General Inquiry");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#E9F3ED] text-[#4F7957] rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            Connect With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Contact Us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">Have questions? We'd love to hear from you.</p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 bg-[#3b8749] p-8 md:p-10 rounded-[40px] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/10 rounded-full" />
            <h3 className="text-2xl font-bold font-serif mb-8">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call Us", val: "+91 8319783509" },
                { icon: Mail, label: "Email Us", val: "vidyalokwelfarefoundation@gmail.com" },
                { icon: MapPin, label: "Visit Us", val: "CLP ward, Katni, Madhya Pradesh, India - 483501" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><item.icon size={24} /></div>
                  <div>
                    <p className="text-white/70 text-sm uppercase tracking-widest font-bold">{item.label}</p>
                    <p className="text-lg font-medium">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-slate-50">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    id="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 text-black focus:ring-[#4F7957] transition-all outline-none" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 text-black focus:ring-[#4F7957] transition-all outline-none" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-slate-50 text-slate-700 font-medium cursor-pointer focus-within:ring-2 focus-within:ring-[#4F7957] transition-all"
                >
                  <span>{subject}</span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={20} /></motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                    >
                      {["General Inquiry", "Volunteer Opportunities", "Donations", "Programs"].map((option) => (
                        <div key={option} onClick={() => { setSubject(option); setIsOpen(false); }} className="px-6 py-4 hover:bg-[#E9F3ED] hover:text-[#4F7957] cursor-pointer text-black">
                          {option}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="How can we help?" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-black focus:ring-2 focus:ring-[#4F7957] outline-none resize-none" 
                  required 
                />
              </div>

              <Button 
                type="submit" 
                disabled={status === "loading"}
                className={`w-full py-8 rounded-2xl font-bold text-lg shadow-lg transition-all ${
                  status === "success" ? "bg-green-600 hover:bg-green-700" : "bg-[#E67E22] hover:bg-[#d35400] text-white"
                }`}
              >
                {status === "loading" ? "Sending..." : status === "success" ? <><CheckCircle size={20} className="mr-2"/> Sent Successfully!</> : <><Send size={20} className="mr-2"/> Send Message</>}
              </Button>

              {status === "error" && (
                <p className="text-red-500 text-center font-bold flex items-center justify-center gap-2 mt-4">
                  <AlertCircle size={18} /> Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;