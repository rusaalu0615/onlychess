import { Button } from "@/components/ui/button"
import FlipCard from "./flip-card"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-navy-900/5 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl"></div>

        {/* Chess piece decorations */}
        <div className="absolute top-32 right-1/4 text-6xl text-yellow-400/20 transform rotate-12">♞</div>
        <div className="absolute bottom-32 left-20 text-4xl text-navy-900/10 transform -rotate-12">♔</div>
        <div className="absolute top-1/2 left-10 text-5xl text-yellow-400/15 transform rotate-45">♜</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-navy-900">Empowering Young Minds</span>
                <br />
                <span className="text-navy-900">Through</span>{" "}
                <span className="text-yellow-500 relative">
                  Art of Chess
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400/30 -skew-x-12"></div>
                </span>
              </h1>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Welcome to a place where children don't just learn chess — They learn to{" "}
                  <span className="font-semibold text-navy-900">think</span>.
                </p>
                <p>
                  Whether your child is a curious beginner or an aspiring tournament player, we guide them every step of
                  the way with <span className="font-semibold text-yellow-600">passion</span> and{" "}
                  <span className="font-semibold text-yellow-600">purpose</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-navy-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Your Free Trial
                <span className="ml-2">→</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Stats or features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-900">500+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-900">50+</div>
                <div className="text-sm text-gray-600">Tournaments Won</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-900">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Flip Card */}
          <div className="flex justify-center lg:justify-end">
            <FlipCard />
          </div>
        </div>
      </div>
    </section>
  )
}
