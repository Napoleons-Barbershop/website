import Header from '../../components/Header/Header';
import LogoSection from '../../components/LogoSection/LogoSection';
import ProductsAndServices from '../../components/ProductsAndServices/ProductsAndServices';

import ContactUs from '../../components/ContactUs/ContactUs';
import WhatsappFloatingButton from '../../components/WhatsappFloatingButton/WhatsappFloatingButton';
import AboutUs from '../../components/AboutUs/AboutUs';
import Charity from '../../components/Charity/Charity';
// import LoginProvider from '../../contexts/loginProvider';
import LoginModal from '../../components/LoginModal/LoginModal';



const Home = () => {
  return (
    <>
      <Header />
      <LoginModal />
      <LogoSection />
      <AboutUs />
      {/* <Location /> */}
      <ProductsAndServices />
      <Charity />
      <ContactUs />
      <WhatsappFloatingButton />
    </>
  );
}

export default Home;
