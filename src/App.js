import Header from './components/header';
import {HeroSection}  from './components/hero-section';
import Footer from './components/footer';
import Form from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Header />
      <HeroSection />
      <div style={form_style}>
      <Form />
      </div>
      <Footer />
    </div>
  );
}

const form_style = {
  margin: 'auto',
  width: '50%',
  padding: '10px'
}

export default App;
