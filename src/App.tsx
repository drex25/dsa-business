import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientPortal from './components/ClientPortal';
import SubscriptionPlans from './components/SubscriptionPlans';
import AdvancedFeatures from './components/AdvancedFeatures';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showPortal, setShowPortal] = useState(false);

  // Si se muestra el portal, renderizar solo eso
  if (showPortal) {
    return <ClientPortal />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="packages">
          <Packages />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="subscriptions">
          <SubscriptionPlans />
        </section>
        <section id="advanced-features">
          <AdvancedFeatures />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {/* Portal Access Button - Fixed position */}
      <button
        onClick={() => setShowPortal(true)}
        className="fixed bottom-6 right-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 z-50"
      >
        Área Clientes
      </button>
    </div>
  );
}

export default App;