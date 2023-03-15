import Header from './components/Header/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LogoSection from './components/LogoSection/LogoSection';
import Location from './components/Location/Location';
import ProductsAndServices from './components/ProductsAndServices/ProductsAndServices';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs/ContactUs';
import WhatsappFloatingButton from './components/WhatsappFloatingButton/WhatsappFloatingButton';
import AboutUs from './components/AboutUs/AboutUs';



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <LogoSection />
      <AboutUs />
      {/* <Location /> */}
      <ProductsAndServices />
      <ContactUs />
      <WhatsappFloatingButton />
  </BrowserRouter>
  );
}

export default App;
