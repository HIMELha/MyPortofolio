import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import './App.css'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {


  return (
    <div className="max-w-[1200px] mx-auto overflow-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
