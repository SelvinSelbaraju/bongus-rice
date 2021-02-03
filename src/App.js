import './App.css';
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar />
    <LandingPage />
    <About />
    <Menu />
    <Reviews />
    <Footer />
    </>
  );
}

export default App;
