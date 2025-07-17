"use client";

import { useState } from "react";
import { Trophy, Star, Award } from "lucide-react";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-[450px] h-[600px] perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Holographic capsule border */}
            <div className="relative w-[400px] h-[550px] rounded-t-full rounded-b-lg">
              {/* Image container with 3D effect */}
              <div className="flex items-center justify-center h-full p-6">
                <div className="relative transition-transform duration-300">
                  {/* Modern stylish border wrapper */}
                  <div className="relative w-80 h-96 p-1 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-t-full rounded-b-lg shadow-2xl translate-y-[-20px] z-10">
                    {/* Inner border with glassmorphism effect */}
                    <div className="relative w-full h-full bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-sm rounded-t-full rounded-b-lg p-0.5">
                      {/* 3D Image container */}
                      <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-lg transform perspective-1000 hover:scale-105 transition-transform duration-300">
                        {/* 3D elevated image */}
                        <div className="relative w-full h-full transform translate-z-4 shadow-inner">
                          <img
                            src="/young-kid-.jpg"
                            alt="Student"
                            className="w-full h-full object-cover transform translate-z-2 shadow-lg"
                          />
                          {/* 3D depth shadow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 transform translate-z-1"></div>
                          {/* Inner 3D border */}
                          <div className="absolute inset-0 border-2 border-white/20 rounded-t-full rounded-b-lg transform translate-z-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating chess pieces decoration with modern styling */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg z-20 border-2 border-white/30">
                    <span className="text-navy-900 text-xl font-bold">♞</span>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-navy-900 to-gray-800 rounded-full flex items-center justify-center shadow-lg z-20 border-2 border-white/30">
                    <span className="text-yellow-400 text-xl font-bold">♔</span>
                  </div>

                  {/* Static holographic shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-full rounded-b-lg z-30 pointer-events-none"></div>

                  {/* Corner accent decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-lg z-30"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/40 rounded-tr-lg z-30"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/40 rounded-bl-lg z-30"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/40 rounded-br-lg z-30"></div>
                </div>
              </div>

              {/* Click indicator */}
              <div className="absolute bottom-6 right-6 text-xs text-gray-600 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                Click to flip
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-[400px] h-[550px] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 shadow-2xl rounded-t-full rounded-b-lg">
              <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 p-8 text-white rounded-t-full rounded-b-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                    Student Achievements
                  </h3>
                  <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                    <Trophy className="h-6 w-6 text-yellow-400" />
                    <div>
                      <p className="font-semibold">SFA Championship</p>
                      <p className="text-sm text-gray-300">Gold Medal Winner</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                    <Star className="h-6 w-6 text-yellow-400" />
                    <div>
                      <p className="font-semibold">Rating: 1200+</p>
                      <p className="text-sm text-gray-300">
                        Intermediate Level
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <div>
                      <p className="font-semibold">Tournament Wins</p>
                      <p className="text-sm text-gray-300">
                        5+ Local Championships
                      </p>
                    </div>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                  Click to flip back
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
