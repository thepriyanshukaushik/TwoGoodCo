import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Locomotive Scroll CSS
import './App.css'; // Custom styles

// Import Components
import Buy from './Components/Buy';
import Footer from './Components/Footer';
import Head from './Components/Head';
import Information from './Components/Information';
import Nav from './Components/Nav';
import Outer1 from './Components/Outer1';
import Outer2 from './Components/Outer2';
import Product from './Components/Product';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    // Clean up on unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <main data-scroll-container ref={containerRef}>
      <Nav />
      <Head />
      <Buy />
      <Information/>
      <Product />
      <Outer1 />
      <Outer2 />
      <Footer />
    </main>
  );
}

export default App;
