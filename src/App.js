import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import About from "./components/Home/About";
import Skills from './components/Home/Skills';
import Work from './components/Home/Work';
import Contact from "./components/Home/Contact";

function App() {
  return (
    <div >
    <Navbar/>
    <Home />
    <About />
    <Skills/>
    <Work/>
    <Contact/>
    </div>
  );
}

export default App;
