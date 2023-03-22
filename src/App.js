
import './App.css';
import AboutUs from './components/AboutUs';
import Activities from './components/Activities';
import ContactUs from './components/ContactUs';
import Donation from './components/Donation';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';


function App(props) {
  return (
    <div>
      <NavBar home="#home" activities="#activities" donation="#donation" about="#about" contact="#contact"/>
      <Home />
      <AboutUs />
      <Activities />
      <Donation />
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
