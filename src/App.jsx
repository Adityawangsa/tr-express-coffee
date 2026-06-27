import {
  AboutSection,
  BottomMobileNav,
  ExperienceSection,
  FeatureHighlights,
  Footer,
  Header,
  HeroSection,
  LocationSection,
  MenuSection,
  SplashScreen,
  TeamSection,
  TestimonialsSection,
} from "./components/SiteSections";

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
