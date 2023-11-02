import './App.css';
import { Navbar } from './Components/Navbar';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Github } from './Pages/Github';
import { Home } from './Pages/Home';
import { Projects } from './Pages/Projects';
import { Skills } from './Pages/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;
