import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import BelowHero from './Components/BelowHero/BelowHero';
import Header from './Components/Header/Header';
import HelpSection from './Components/HelpSection/HelpSection';
import PlanetaTheme from './Components/PlanetaTheme/PlanetaTheme';
import AboveFooter from './Components/AboveFooter/AboveFooter';
import Decision from './Components/Decision/Decision';
import Better from './Components/Better/Better';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
  
   <Header/>
    <BelowHero/>
    <HelpSection/>
    <PlanetaTheme/>
    <Decision/>
    <Better/>
    <AboveFooter/>
    <Footer/>
  
    </div>
  );
}

export default App;
