"use client"

import { useState } from "react"
import Image from "next/image"
import img1 from "@/public/heroimage.jpg"
import { Trophy, Star, Award } from "lucide-react"

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="relative w-80 h-96 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="relative w-full h-full bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-3xl p-1 shadow-2xl">
            <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute top-8 right-6 w-6 h-6 bg-navy-900 rounded-full opacity-10"></div>
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-yellow-400 rounded-full opacity-30"></div>

              {/* Image container */}
              <div className="flex items-center justify-center h-full p-6 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500  rounded-3xl  shadow-2xl">
                <div className="relative">
                  <Image
                    src={img1}
                    alt="Chess student"
                    width={280}
                    height={320}
                    className="rounded-2xl shadow-lg object-cover"
                  />
                  {/* Floating chess pieces decoration */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-navy-900 text-lg">♞</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-yellow-400 text-lg">♔</span>
                  </div>
                </div>
              </div>

              {/* Click indicator */}
              <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-full">
                Click to flip
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="relative w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-1 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-6 text-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Student Achievements</h3>
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
                    <p className="text-sm text-gray-300">Intermediate Level</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Tournament Wins</p>
                    <p className="text-sm text-gray-300">5+ Local Championships</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-300 italic">"Chess taught me to think before I move"</p>
                <p className="text-xs text-yellow-400 mt-2">- Young Champion</p>
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
  )
}
