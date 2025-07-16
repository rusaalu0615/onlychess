import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import MoreThanGame from "@/components/morethangame"
import ChampionsAndParents from "@/components/championandparents"
import WhyOnlyChessAcademy from "@/components/whyonlychessacademy"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ChampionsAndParents />
      <MoreThanGame />
      <WhyOnlyChessAcademy />
      <Footer />
    </div>
  )
}
