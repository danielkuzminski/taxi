//styles
import './App.css';

//components
import Order from './components/Order';
import Landing from './components/Landing';
import Hamburger from './components/Hamburger';
import Benefits from './components/Benefits';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Hamburger />
      <div className='mobile'>
        <Landing />
        <Order />
      </div>
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
