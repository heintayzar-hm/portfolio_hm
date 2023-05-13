import {  Route, Routes, useLocation } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Layout from './pages/Layout/Layout'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import { useEffect, useRef } from 'react'

function App() {

  const location = useLocation();
  const contentRef = useRef(null);
  useEffect(() => {
    const content = contentRef.current;
    content.classList.add("blur");

    setTimeout(() => {
      content.classList.remove("blur");
    }, 500);
  }, [location]);

  return (
    <div ref={contentRef}>
      <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
