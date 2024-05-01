import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="min-h-[100vh] dark:bg-gradient-to-tr dark:from-slate-800 dark:to-gray-900 dark:text-white">
      <Header />
      <ToastContainer position="top-center" autoClose={5000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
