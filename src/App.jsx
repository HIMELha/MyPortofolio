import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function App() {
  // Initialize toastr options
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-center",
    timeOut: 5000, // 5 seconds
  };

  return (
    <div className="min-h-[100vh] dark:bg-gradient-to-tr dark:from-slate-800 dark:to-gray-900 dark:text-white">
      <Header />
      {/* Routes inside the toastr container */}
      <div id="toast-container" className="mt-4 toast-top-center outline-2 outline-blue-400" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
