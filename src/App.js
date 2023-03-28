import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <About/>
      <Work />
      <Footer />
    </div>
  );
}

export default App;
