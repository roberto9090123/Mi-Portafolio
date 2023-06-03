import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";

import SocialLinks from "./components/SocialLinks";
import Portafolio from "./components/Portafolio";
import Skills from "./components/Skills";


function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Portafolio />
      <Skills />

      
      <SocialLinks />
    </div>
  );
}

export default App;
