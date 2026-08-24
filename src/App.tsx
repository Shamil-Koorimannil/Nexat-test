import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeSection } from './components/MarqueeSection';
import { Methodology } from './components/Methodology';
import { FeatureCards } from './components/FeatureCards';
import { GlobalPresence } from './components/GlobalPresence';
import { Expertise } from './components/Expertise';
import { Footer } from './components/Footer';
import { Maintenance } from './components/Maintenance';

function App() {
  const isMaintenance = false; // Set to true to activate the offline maintenance page

  if (isMaintenance) {
    return <Maintenance />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navbar with thin top bar and sticky header */}
      <Header />

      {/* Main Experience Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Scroll-driven dual-direction image marquee section */}
        <MarqueeSection />

        {/* Methodology Steps Row */}
        <Methodology />

        {/* Why Dubai? Feature Cards */}
        <FeatureCards />

        {/* Our Global Presence Carousel */}
        <GlobalPresence />

        {/* Our Expertise Parallax Section */}
        <Expertise />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
