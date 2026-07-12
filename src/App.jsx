import './App.css';
import Navbar from './comps/navbar';
import Hero from './comps/hero';
import Collections from './comps/collections';
import Archive from './comps/archive';
import Journal from './comps/journal';
import Contact from './comps/contact';
import Footer from './comps/footer';

function App(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Archive />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App