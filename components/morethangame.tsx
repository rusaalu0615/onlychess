// components/MoreThanGame.tsx
"use client";

import Image from "next/image";
import img1 from "@/public/chessimage.jpg";
import { Button } from "@/components/ui/button";

export default function MoreThanGame() {
  return (
    <section
      className="px-6 py-12 md:px-20 bg-[conic-gradient(at_top_left,_#fcb900,_#fff3b0,_#fcb900,_#fff8d0,_#fcb900)]"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            More Than a Game <br />
            <span className="text-orange-600">A Gift for Life</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At <strong>Only Chess Academy</strong>, every move is a step towards smarter thinking,
            stronger focus, and a brighter future.
          </p>
          <p className="text-md text-gray-600 mb-4">
            Enroll now and give your child the chess advantage.
          </p>
          <p className="text-md text-gray-600 mb-6">
            Let your child experience the magic of chess learning with a live, interactive demo session.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Book Free Trial Class
            </Button>
            <Button variant="outline">Book a Free Demo</Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <Image
            src={img1}
            alt="Children playing chess"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
