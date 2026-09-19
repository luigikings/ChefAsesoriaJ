import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Services from './components/Services'
import Method from './components/Method'
import Results from './components/Results'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ForWhom from './components/ForWhom'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Method />
        <Results />
        <About />
        <Testimonials />
        <ForWhom />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
