import { BottomMobileNav, Footer, Header } from "./components/layout";
import {
  AboutSection,
  ExperienceSection,
  FeatureHighlights,
  HeroSection,
  LocationSection,
  MenuSection,
  TeamSection,
  TestimonialsSection,
} from "./components/sections";
import { SplashScreen } from "./components/ui";

function App() {
  return (
    <main className="min-h-screen bg-[#f8f3eb] text-stone-900">
      <SplashScreen />
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <MenuSection />
      <ExperienceSection />
      <TeamSection />
      <AboutSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
      <BottomMobileNav />
    </main>
  );
}

export default App;
