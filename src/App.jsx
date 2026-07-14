import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyCellZen from './components/WhyCellZen';
import QuickQuote from './components/QuickQuote';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { Haiku } from './components/motifs';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Haiku>Tranquilidade também se conserta.</Haiku>
        <HowItWorks />
        <WhyCellZen />
        <QuickQuote />
        <Testimonials />
        <Haiku>O cuidado mora nos detalhes.</Haiku>
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
