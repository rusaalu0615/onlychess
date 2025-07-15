"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const studentNames = [
  { name: "Aarav Singh", img: "/students/aarav.jpg" },
  { name: "Myra Kapoor", img: "/students/myra.jpg" },
  { name: "Ishaan Mehta", img: "/students/ishaan.jpg" },
  { name: "Anaya Sharma", img: "/students/anaya.jpg" },
  { name: "Vivaan Patel", img: "/students/vivaan.jpg" },
  { name: "Riya Das", img: "/students/riya.jpg" },
  { name: "Kabir Nair", img: "/students/kabir.jpg" },
  { name: "Mehul Verma", img: "/students/mehul.jpg" },
];

const parentTestimonials = [
  { name: "Mrs. Mehta", msg: "My child’s focus and confidence have grown tremendously!" },
  { name: "Mr. Sharma", msg: "Best chess academy with caring coaches!" },
  { name: "Mrs. Kapoor", msg: "Classes are fun and structured. We love the progress!" },
  { name: "Mr. Patel", msg: "Excellent for both beginners and advanced kids." },
  { name: "Mrs. Das", msg: "The personal attention is fantastic!" },
  { name: "Mr. Verma", msg: "Best decision we made for our child." },
  { name: "Mrs. Nair", msg: "Great teachers and thoughtful programs!" },
];

export default function ChampionsAndParents() {
  const studentScrollRef = useRef<HTMLDivElement>(null);
  const parentScrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll effect
  useEffect(() => {
    const scroll = (ref: React.RefObject<HTMLDivElement>) => {
      let animationFrameId: number;
      const scrollContainer = ref.current;

      const scrollStep = () => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }
        }
        animationFrameId = requestAnimationFrame(scrollStep);
      };

      animationFrameId = requestAnimationFrame(scrollStep);
      return () => cancelAnimationFrame(animationFrameId);
    };

    const stop1 = scroll(studentScrollRef);
    const stop2 = scroll(parentScrollRef);

    return () => {
      stop1 && stop1();
      stop2 && stop2();
    };
  }, []);

  return (
    <section className="px-6 md:px-20 py-16 space-y-20 bg-gradient-to-b from-[#fff9ec] to-[#fefefe]">
      {/* Champion Students */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          🏆 Our Champion Students
        </h2>
        <div ref={studentScrollRef} className="overflow-hidden relative">
          <div className="flex gap-6 w-max">
            {[...studentNames, ...studentNames].map((student, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 h-72 p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src={student.img}
                    alt={student.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-lg font-semibold text-gray-800">{student.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Happy Parents */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          👨‍👩‍👧‍👦 Our Students’ Happy Parents
        </h2>
        <div ref={parentScrollRef} className="overflow-hidden relative">
          <div className="flex gap-6 w-max p-4">
            {[...parentTestimonials, ...parentTestimonials].map((parent, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 md:w-96 h-40 p-6 bg-orange-50 border border-orange-200 rounded-xl shadow hover:shadow-md hover:scale-105 transition-transform duration-300"
              >
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{parent.msg}"
                </p>
                <p className="text-right font-semibold text-orange-700">– {parent.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
