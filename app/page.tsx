import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { GoalsSection } from "@/components/goals-section"
import { OrganizersSection } from "@/components/organizers-section"
import { AcceptedPapersSection } from "@/components/accepted-papers-section"
import { CallForParticipationSection } from "@/components/call-for-participation-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GoalsSection />
        <OrganizersSection />
        <AcceptedPapersSection />
        <CallForParticipationSection />
      </main>
      <Footer />
    </div>
  )
}
