import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Header';
import HeroSection from './components/Hero-section';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BuyerReviews, SellerReviews } from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <NavBar />

      <div className="hero-section">
        <HeroSection />
      </div>

      <Projects />

      <div className="review-section">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Buyer Review">
            <BuyerReviews />
          </Tab>
          <Tab eventKey="profile" title="Seller Review">
            <SellerReviews />
          </Tab>
        </Tabs>


      </div>

      <div className="contact-section">
        <Contact />
      </div>

      <Footer />


    </div>
  );
}
export default App; 
