"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, Users, MapPin, Heart } from "lucide-react";

const stats = [
  { id: 1, icon: GraduationCap, value: 15000, suffix: "+", label: "Children Educated" },
  { id: 2, icon: Users, value: 500, suffix: "+", label: "Volunteers" },
  { id: 3, icon: MapPin, value: 50, suffix: "+", label: "Villages Reached" },
  { id: 4, icon: Heart, value: 5, suffix: "+", label: "Years of Service" },
];

const CountUp = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const ImpactSection = () => {
  return (
    <section id="our-impacts" className="relative overflow-hidden bg-[#3b8749] py-16 md:py-24 px-6 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Our Global Impact</h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90 mb-12 max-w-2xl mx-auto">
          Together, we are making a measurable difference in the lives of thousands.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-12">
          {stats.map((stat) => (
            <article key={stat.id} className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <stat.icon size={28} className="text-[#E67E22]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;