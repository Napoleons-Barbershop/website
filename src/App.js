import Header from './components/Header/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Location from './components/Location/Location';
import ProductsAndServices from './components/ProductsAndServices/ProductsAndServices';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs/ContactUs';
import WhatsappFloatingButton from './components/WhatsappFloatingButton/WhatsappFloatingButton';
import { useEffect, useState } from 'react';



const App = () => {
  // const {scrollDirection, currentY} = useScrollDirection();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <BrowserRouter>
      <Header fixed={scrollPosition > 200} />
      <AboutUs />
      <Location />
      <ProductsAndServices />
      <ContactUs />
      <WhatsappFloatingButton />
  </BrowserRouter>
  );
}

export default App;
