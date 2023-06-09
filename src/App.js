import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';

function App() {
  document.title="Chakradhar | React Developer"
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
