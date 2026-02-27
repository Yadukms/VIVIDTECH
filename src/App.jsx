import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TechnologiesSection from './components/TechnologiesSection';
import WhyVividSection from './components/WhyVividSection';
import ResultsSection from './components/ResultsSection';
import SolutionsSection from './components/SolutionsSection';
import BannerSection from './components/BannerSection';
import InnovationSection from './components/InnovationSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechnologiesSection />
        <WhyVividSection />
        <ResultsSection />
        <SolutionsSection />
        <BannerSection />
        <InnovationSection />
        <NewsletterSection />

      </main>
      <Footer />
    </div>
  );
}

export default App
