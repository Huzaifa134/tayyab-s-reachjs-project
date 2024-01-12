import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Domain from './pages/Domain';
import Hosting from './pages/Hosting';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marketing from './pages/Marketing';
import PageNotFound from './pages/PageNotFound';
import SharedHosting from './pages/SharedHosting';
import BusinessHosting from './pages/BusinessHosting';
// import UnlimitedHosting from './pages/WebDevelopment';
import WebDevelopment from './pages/WebDevelopment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import CreateUser from './pages/CreateUser';
import GetProducts from './pages/GetProducts';
import GetOrders from './pages/GetOrders';
import GetContacts from './pages/GetContacts';
import PleskHosting from './pages/PleskHosting';
import ReHosting from './pages/ReHosting';



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* hosting sub folder section */}
        <Route path="/hosting" element={<Hosting />} />
        <Route path="hosting/shared-hosting" element={<SharedHosting />} />
        <Route path="hosting/business-hosting" element={<BusinessHosting />} />
        {/* <Route path="hosting/unlimited-hosting" element={<UnlimitedHosting />} /> */}
        <Route path="hosting/web-development" element={<WebDevelopment />} />
        <Route path="hosting/Plesk-Hosting" element={<PleskHosting />} />
        <Route path="hosting/Re-Hosting" element={< ReHosting />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/createuserdata" element={<CreateUser />} />
        <Route path="/getproducts" element={<GetProducts />} />
        <Route path="/getcontactsdata" element={<GetContacts />} />
        <Route path="/getordersdata" element={<GetOrders />} />
        <Route path="/domain" element={<Domain />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />

    </Router>
  )
}

export default App
