import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Carlos Quezada - Ingeniero de Sistemas | Portfolio Profesional</title>
        <meta name="description" content="Portfolio profesional de Carlos Quezada, Ingeniero de Sistemas especializado en desarrollo de software, aplicaciones web modernas y soluciones tecnológicas innovadoras." />
      </Helmet>
      
      <div className="min-h-screen bg-[#0a0f1a]">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;