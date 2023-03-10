import Header from './components/Header/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Location from './components/Location/Location';
import ProductsAndServices from './components/ProductsAndServices/ProductsAndServices';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs/ContactUs';
import WhatsappFloatingButton from './components/WhatsappFloatingButton/WhatsappFloatingButton';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AboutUs />
      <Location />
      <ProductsAndServices />
      <ContactUs />
      <WhatsappFloatingButton />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes> */}
  </BrowserRouter>
  );
}

export default App;
