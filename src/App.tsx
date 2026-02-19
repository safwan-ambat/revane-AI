import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AdvancedFeatures } from './components/AdvancedFeatures';
import { Integrations } from './components/Integrations';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <AdvancedFeatures />
        <Integrations />
      </main>
      <Footer />
    </div>
  )
}

export default App
