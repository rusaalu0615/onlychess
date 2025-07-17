"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import FlipCard from "./flip-card";

function SmoothAnimatedCounter({
  targetNumber,
  duration = 2000,
  suffix = "",
  delay = 0,
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let startTime = null;
      const startValue = 0;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easing function (ease-out-cubic)
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.round(
          startValue + (targetNumber - startValue) * easeOutCubic,
        );
        setCount(currentValue);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, targetNumber, duration, delay]);

  return (
    <span
      ref={counterRef}
      className="tabular-nums transition-all duration-100 ease-out"
      style={{
        transform: `scale(${isVisible ? 1 : 0.8})`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {count}
      {suffix}
    </span>
  );
}

function ModernStatsBox({ number, suffix, label, delay, icon }) {
  return (
    <div className="group relative">
      {/* 3D Card Container */}
      <div className="relative transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
        {/* Card Back (for 3D effect) */}
        <div className="absolute inset-0 bg-yellow-400/20 rounded-xl -z-10 translate-y-2 group-hover:translate-y-3 transition-transform duration-500"></div>

        {/* Main Card */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 overflow-hidden">
          {/* Icon with depth */}
          <div className="absolute top-3 right-3 text-2xl text-yellow-600 opacity-90 group-hover:text-yellow-500 group-hover:scale-110 transition-all">
            {icon}
          </div>

          {/* Content */}
          <div className="flex flex-col">
            {/* Animated number with 3D text effect */}
            <div className="flex items-end">
              <span className="text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 [text-shadow:_0_2px_0_rgb(253_230_138_/_40%)]">
                <SmoothAnimatedCounter
                  targetNumber={number}
                  suffix={suffix}
                  delay={delay}
                  duration={2500}
                />
              </span>
            </div>

            {/* Label with subtle 3D underline */}
            <div className="mt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 group-hover:text-gray-700 transition-colors duration-300 relative inline-block">
                {label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [transform:rotateX(45deg)]"></span>
              </span>
            </div>
          </div>

          {/* Hover effect layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>

      {/* Subtle 3D glow */}
      <div className="absolute inset-0 rounded-xl bg-yellow-400/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 translate-y-1"></div>
    </div>
  );
}

function TypewriterText() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Art of Chess";
  const typingSpeed = 150;
  const cursorBlinkSpeed = 500;

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="text-yellow-500 relative inline-block">
      <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
        {displayText}
      </span>
      <span
        className={`inline-block w-0.5 h-12 bg-gradient-to-b from-yellow-400 to-amber-600 ml-1 ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      />
      <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-yellow-400/30 via-amber-400/40 to-yellow-500/30 -skew-x-12 animate-pulse"></div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-navy-900/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        {/* Chess piece decorations with subtle animations */}
        <div className="absolute top-32 right-1/4 text-6xl text-yellow-400/20 transform rotate-12 animate-bounce">
          ♞
        </div>
        <div className="absolute bottom-32 left-20 text-4xl text-navy-900/10 transform -rotate-12 animate-pulse delay-300">
          ♔
        </div>
        <div className="absolute top-1/2 left-10 text-5xl text-yellow-400/15 transform rotate-45 animate-pulse delay-700">
          ♜
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-navy-900">
                <div className="animate-fade-in-up">Empowering Young</div>
                <div className="animate-fade-in-up animation-delay-200">
                  Mind Through
                </div>
                <TypewriterText />
              </h1>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed animate-fade-in-up animation-delay-1000">
                <p>
                  Welcome to a place where children don't just learn chess —
                  They learn to{" "}
                  <span className="font-semibold text-navy-900 bg-gradient-to-r from-navy-800 to-navy-900 bg-clip-text text-transparent">
                    think
                  </span>
                  . Whether your child is a curious beginner or an aspiring
                  tournament player, we guide them every step of the way with{" "}
                  <br />
                  <span className="font-semibold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    passion
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    purpose
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1200">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-navy-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Book Your Free Trial
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 bg-transparent hover:shadow-lg transform hover:scale-105"
              >
                Learn More
              </Button>
            </div>

            {/* Stats with smooth animations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-fade-in-up animation-delay-1400">
              <ModernStatsBox
                number={500}
                suffix="+"
                label="Happy Students"
                delay={1600}
                icon="👨‍🎓"
              />
              <ModernStatsBox
                number={50}
                suffix="+"
                label="Tournaments Won"
                delay={1800}
                icon="🏆"
              />
              <ModernStatsBox
                number={5}
                suffix="+"
                label="Years Experience"
                delay={2000}
                icon="⭐"
              />
            </div>
          </div>

          {/* Right side - Flip Card */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-600">
            <FlipCard />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
          opacity: 0;
        }
        .animation-delay-1400 {
          animation-delay: 1.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
