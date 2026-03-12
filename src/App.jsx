import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyCellZen from './components/WhyCellZen';
import HowItWorks from './components/HowItWorks';
import QuickQuote from './components/QuickQuote';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyCellZen />
        <HowItWorks />
        <QuickQuote />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
