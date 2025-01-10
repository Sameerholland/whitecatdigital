import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navigations/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';

import PaymentPage from './Payments/PaymentPage';
import FooterPage from './Navigations/Footer';
import PolicyPage from './Components/policy';
import ContactPage from './Components/Subcomponents/ContactPage';
import ContactUs from './Components/ContactUs';
import PaymentStatus from './Payments/PaymentStatus';
import Service from './Components/Service';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/policy' element={<PolicyPage/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/service' element={<Service/>}/>
       
      
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/payment-success' element={<PaymentStatus/>}/>
      </Routes>
      <FooterPage/>



    </Router>
 
  );
}

export default App;
