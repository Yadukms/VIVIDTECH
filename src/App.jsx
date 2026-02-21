import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TechnologiesSection from './components/TechnologiesSection';
import WhyVividSection from './components/WhyVividSection';
import ResultsSection from './components/ResultsSection';
import JoinOurTeamSection from './components/JoinOurTeamSection';
import ContactSection from './components/ContactSection';
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
        <JoinOurTeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App
