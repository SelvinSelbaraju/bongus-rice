import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Container className="app-container">
    <Navbar />
    <LandingPage />
    <About />
    <Menu />
    <Reviews />
    <Footer />
    </Container>
  );
}

export default App;
